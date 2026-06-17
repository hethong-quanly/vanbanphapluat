// ================================================================
// ai-service.js – Trợ lý AI LEXVIET
// VKSND TP. Cần Thơ – Tích hợp Gemini / OpenAI
// ================================================================

const LexVietAI = (() => {
  const STORAGE_KEY = 'lexviet_ai_config';

  const PROVIDERS = {
    gemini: {
      label: 'Google Gemini',
      models: ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-pro'],
      defaultModel: 'gemini-2.0-flash',
    },
    openai: {
      label: 'OpenAI',
      models: ['gpt-4o-mini', 'gpt-4o', 'gpt-4.1-mini'],
      defaultModel: 'gpt-4o-mini',
    },
  };

  const SYSTEM_PROMPT = `Bạn là Trợ lý ảo AI chuyên nghiệp về nghiệp vụ Kiểm sát thuộc Hệ thống LEXVIET – Viện kiểm sát nhân dân TP. Cần Thơ.

NHIỆM VỤ:
- Hỗ trợ kiểm sát viên tra cứu, phân tích văn bản pháp luật, quy trình nghiệp vụ, án lệ, rút kinh nghiệm.
- Trả lời bằng tiếng Việt, rõ ràng, có cấu trúc, phù hợp môi trường công tác tư pháp.
- Ưu tiên căn cứ vào dữ liệu LEXVIET được cung cấp trong ngữ cảnh; nếu thiếu dữ liệu, nêu rõ và khuyến nghị kiểm tra thêm.

NGUYÊN TẮC:
- Không bịa đặt số hiệu văn bản, điều khoản hoặc án lệ không có trong dữ liệu.
- Phân tích pháp lý phải nêu: cơ sở pháp lý → đánh giá → đề xuất/hướng dẫn (nếu phù hợp).
- Nhắc người dùng đây là hỗ trợ tham khảo, quyết định chính thức thuộc thẩm quyền cơ quan có trách nhiệm.
- Trả lời ngắn gọn khi câu hỏi đơn giản; chi tiết hơn khi phân tích vụ việc phức tạp.`;

  function loadConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultConfig();
      const cfg = JSON.parse(raw);
      return normalizeConfig(cfg);
    } catch {
      return getDefaultConfig();
    }
  }

  function getDefaultConfig() {
    return { provider: 'gemini', apiKey: '', model: 'gemini-2.0-flash' };
  }

  function normalizeConfig(cfg) {
    const provider = PROVIDERS[cfg.provider] ? cfg.provider : 'gemini';
    const models = PROVIDERS[provider].models;
    const model = models.includes(cfg.model) ? cfg.model : PROVIDERS[provider].defaultModel;
    return { provider, apiKey: (cfg.apiKey || '').trim(), model };
  }

  function saveConfig(cfg) {
    const normalized = normalizeConfig(cfg);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  function isConfigured(cfg = loadConfig()) {
    return !!cfg.apiKey;
  }

  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s]/g, ' ');
  }

  function itemToSearchText(item) {
    const parts = [
      item.tenVanBan, item.tieuDe, item.soAnLe, item.soHieu, item.soThongBao,
      item.maQuyTrinh, item.tomTat, item.moTa, item.tomTatVuViec, item.noiDung,
      item.nguyenTacApDung, item.linhVuc, item.loai, item.coQuan,
      ...(item.tags || []),
    ];
    return normalizeText(parts.filter(Boolean).join(' '));
  }

  function summarizeItem(item) {
    if (!item) return '';
    const title = item.tenVanBan || item.tieuDe || item.soAnLe || item.soHieu || '(Không có tiêu đề)';
    const lines = [`• ${title}`];
    if (item.soHieu || item.soAnLe || item.soThongBao || item.maQuyTrinh) {
      lines.push(`  Số hiệu: ${item.soHieu || item.soAnLe || item.soThongBao || item.maQuyTrinh}`);
    }
    if (item.coQuan) lines.push(`  Cơ quan: ${item.coQuan}`);
    if (item.ngayBanHanh) lines.push(`  Ngày ban hành: ${item.ngayBanHanh}`);
    if (item.loai) lines.push(`  Loại: ${item.loai}`);
    if (item.linhVuc) lines.push(`  Lĩnh vực: ${item.linhVuc}`);
    const body = item.tomTat || item.moTa || item.tomTatVuViec || item.noiDung || item.nguyenTacApDung || '';
    if (body) lines.push(`  Tóm tắt: ${body.substring(0, 400)}`);
    return lines.join('\n');
  }

  function searchKnowledge(query, knowledge, limit = 6) {
    if (!knowledge) return [];
    const words = normalizeText(query).split(/\s+/).filter(w => w.length > 2);
    if (!words.length) return [];

    const pools = [
      ...(knowledge.DOCS || []).map(i => ({ ...i, _type: 'Văn bản pháp luật' })),
      ...(knowledge.QUYTRINH || []).map(i => ({ ...i, _type: 'Quy trình nghiệp vụ' })),
      ...(knowledge.RKN || []).map(i => ({ ...i, _type: 'Rút kinh nghiệm' })),
      ...(knowledge.ANLE || []).map(i => ({ ...i, _type: 'Án lệ' })),
      ...(knowledge.CONGVAN || []).map(i => ({ ...i, _type: 'Công văn & Hướng dẫn' })),
    ];

    return pools
      .map(item => {
        const haystack = itemToSearchText(item);
        const score = words.reduce((s, w) => s + (haystack.includes(w) ? 1 : 0), 0);
        return { item, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(x => x.item);
  }

  function buildContextBlock(contextItem, knowledge, userQuery) {
    const sections = [];

    if (contextItem) {
      sections.push('══ VĂN BẢN ĐANG XEM (ưu tiên tham chiếu) ══\n' + summarizeItem(contextItem));
    }

    const related = searchKnowledge(userQuery, knowledge, 5);
    if (related.length) {
      sections.push(
        '══ DỮ LIỆU LEXVIET LIÊN QUAN ══\n' +
        related.map(r => `[${r._type}]\n${summarizeItem(r)}`).join('\n\n')
      );
    }

    return sections.join('\n\n');
  }

  function toApiMessages(chatHistory, contextBlock) {
    const systemContent = contextBlock
      ? SYSTEM_PROMPT + '\n\n' + contextBlock
      : SYSTEM_PROMPT;

    const messages = [{ role: 'system', content: systemContent }];

    chatHistory.forEach(msg => {
      if (msg.role === 'user') messages.push({ role: 'user', content: msg.text });
      if (msg.role === 'ai') messages.push({ role: 'assistant', content: msg.text });
    });

    return messages;
  }

  async function callGemini(cfg, messages) {
    const systemMsg = messages.find(m => m.role === 'system');
    const chatMsgs = messages.filter(m => m.role !== 'system');

    const contents = chatMsgs.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const body = {
      systemInstruction: systemMsg ? { parts: [{ text: systemMsg.content }] } : undefined,
      contents,
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 2048,
      },
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${cfg.model}:generateContent?key=${encodeURIComponent(cfg.apiKey)}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (!res.ok) {
      const err = data?.error?.message || `Gemini API lỗi (${res.status})`;
      throw new Error(err);
    }

    const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
    if (!text) throw new Error('Gemini không trả về nội dung. Vui lòng thử lại.');
    return text.trim();
  }

  async function callOpenAI(cfg, messages) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cfg.apiKey}`,
      },
      body: JSON.stringify({
        model: cfg.model,
        messages: messages.map(m => ({ role: m.role, content: m.content })),
        temperature: 0.4,
        max_tokens: 2048,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      const err = data?.error?.message || `OpenAI API lỗi (${res.status})`;
      throw new Error(err);
    }

    const text = data?.choices?.[0]?.message?.content || '';
    if (!text) throw new Error('OpenAI không trả về nội dung. Vui lòng thử lại.');
    return text.trim();
  }

  async function chat({ userMessage, chatHistory = [], contextItem = null, knowledge = null, config = null }) {
    const cfg = normalizeConfig(config || loadConfig());
    if (!cfg.apiKey) {
      throw new Error('Chưa cấu hình API key. Nhấn ⚙️ để thiết lập Gemini hoặc OpenAI.');
    }

    const contextBlock = buildContextBlock(contextItem, knowledge, userMessage);
    const history = chatHistory.filter(m => m.role === 'user' || m.role === 'ai');
    const apiMessages = toApiMessages(
      [...history, { role: 'user', text: userMessage }],
      contextBlock
    );

    if (cfg.provider === 'openai') return callOpenAI(cfg, apiMessages);
    return callGemini(cfg, apiMessages);
  }

  async function testConnection(config) {
    const cfg = normalizeConfig(config);
    const reply = await chat({
      userMessage: 'Trả lời đúng một câu: "Kết nối AI thành công."',
      chatHistory: [],
      config: cfg,
    });
    return reply;
  }

  return {
    PROVIDERS,
    loadConfig,
    saveConfig,
    isConfigured,
    chat,
    testConnection,
    searchKnowledge,
    summarizeItem,
  };
})();
export default LexVietAI;
