import { useState, useEffect, useRef } from 'react';
import LexVietAI from '../services/ai-service';
import AISettingsModal from './AISettingsModal';
import TypingDots from './TypingDots';

const INIT_MSG = {
  id: 0,
  role: 'ai',
  text: `Xin chào đồng chí! Tôi là Trợ lý ảo AI được thiết kế riêng để hỗ trợ nghiệp vụ Kiểm sát.

Tôi có thể giúp đồng chí:
• Phân tích cấu thành tội phạm từ hồ sơ vụ án
• Tra cứu nhanh văn bản quy phạm pháp luật
• Tổng hợp và tóm tắt án lệ có liên quan
• Gợi ý hướng đề xuất xử lý vụ việc

Đồng chí cần hỗ trợ vấn đề gì hôm nay?`,
};

const CHIPS = [
  { ico: '📄', lbl: 'Mẫu 01 (Tiếp nhận)' },
  { ico: '📋', lbl: 'Mẫu 03 (Thu thập)' },
  { ico: '⚖️', lbl: 'Mẫu 24 (Kiến nghị)' },
  { ico: '🔍', lbl: 'Mẫu 27 (Khởi kiện)' },
];

export default function AIChatPanel({ open, onClose, contextItem, knowledge }) {
  const [messages, setMessages] = useState([INIT_MSG]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiConfig, setAiConfig] = useState(() => LexVietAI.loadConfig());
  const [showSettings, setShowSettings] = useState(false);
  const chatRef = useRef(null);
  const textaRef = useRef(null);
  const prevContextRef = useRef(null);

  const aiReady = LexVietAI.isConfigured(aiConfig);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (!contextItem) return;
    if (contextItem === prevContextRef.current) return;
    prevContextRef.current = contextItem;
  }, [contextItem]);

  function handleInputChange(e) {
    const ta = e.target;
    ta.style.height = '40px';
    ta.style.height = `${Math.min(ta.scrollHeight, 120)}px`;
    setInput(ta.value);
  }

  function resetTextarea() {
    if (textaRef.current) textaRef.current.style.height = '40px';
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    if (!aiReady) {
      setShowSettings(true);
      return;
    }

    const userMsg = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    resetTextarea();
    setLoading(true);

    try {
      const history = messages.filter(m => m.role === 'user' || m.role === 'ai');
      const aiText = await LexVietAI.chat({
        userMessage: text,
        chatHistory: history,
        contextItem,
        knowledge,
        config: aiConfig,
      });
      setMessages(prev => [...prev, { id: Date.now(), role: 'ai', text: aiText }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'ai',
        text: `⚠️ ${err.message || 'Không thể kết nối AI. Vui lòng kiểm tra API key và thử lại.'}`,
        isError: true,
      }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function prefill(text) {
    setInput(text);
    if (textaRef.current) {
      textaRef.current.focus();
      textaRef.current.style.height = '40px';
    }
  }

  const ctxQuestions = contextItem
    ? [
        'Tóm tắt nội dung chính của văn bản này',
        'Văn bản này áp dụng trong trường hợp nào?',
        'Những điểm mới quan trọng cần lưu ý là gì?',
      ]
    : [
        'Phân tích dấu hiệu pháp lý tội Nhận hối lộ theo BLHS 2015',
        'Phân biệt tội Cướp tài sản và Cưỡng đoạt tài sản',
        'Tóm tắt những điểm mới của Luật Đất đai 2024',
      ];

  return (
    <div id="right-panel" className={open ? 'open' : ''}>
      {showSettings && (
        <AISettingsModal
          onClose={() => setShowSettings(false)}
          onSaved={setAiConfig}
        />
      )}

      <div className="ai-hdr">
        <div className="ai-avatar">🤖</div>
        <div>
          <div className="ai-hdr-title">Trợ lý AI Pháp lý</div>
          <div className={`ai-hdr-sub ${aiReady ? '' : 'offline'}`}>
            {aiReady
              ? `● ${LexVietAI.PROVIDERS[aiConfig.provider].label} · ${aiConfig.model}`
              : '● Chưa cấu hình API – nhấn ⚙️'}
          </div>
        </div>
        <div className="ai-hdr-actions">
          <button type="button" className="btn-ai-cfg" title="Cấu hình AI" onClick={() => setShowSettings(true)}>⚙️</button>
          {onClose && (
            <button type="button" className="btn-ai-cfg btn-ai-close" title="Đóng" onClick={onClose}>✕</button>
          )}
        </div>
      </div>

      <div className="ai-chat" ref={chatRef}>
        {messages.map(msg => (
          <div key={msg.id} className={`chat-msg ${msg.role === 'user' ? 'chat-user' : 'chat-ai'} fade-in`}>
            <div className="chat-sender">
              {msg.role === 'user' ? 'Kiểm sát viên' : 'LEXVIET AI'}
            </div>
            <div className={`chat-bubble ${msg.role === 'user' ? 'bubble-user' : 'bubble-ai'}${msg.isError ? ' error' : ''}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {messages.length === 1 && (
          <div className="ctx-chips fade-in">
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>
              💡 {contextItem ? 'Gợi ý về văn bản đang xem:' : 'Câu hỏi gợi ý:'}
            </div>
            {ctxQuestions.map((q, i) => (
              <button key={i} type="button" className="ctx-chip" onClick={() => prefill(q)}>{q}</button>
            ))}
          </div>
        )}

        {loading && (
          <div className="chat-msg chat-ai fade-in">
            <div className="chat-sender">LEXVIET AI đang phân tích</div>
            <div className="chat-bubble bubble-ai"><TypingDots /></div>
          </div>
        )}
      </div>

      <div className="ai-quick-chips">
        {CHIPS.map((c, i) => (
          <button key={i} type="button" className="qchip" onClick={() => prefill(`Yêu cầu ${c.lbl}`)}>
            <span>{c.ico}</span>
            {c.lbl}
          </button>
        ))}
      </div>

      <div className="ai-input-area">
        <textarea
          ref={textaRef}
          className="ai-textarea"
          placeholder="Nhập câu hỏi pháp lý..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
        />
        <button type="button" className="btn-send" onClick={sendMessage} disabled={loading || !input.trim()}>
          ↗
        </button>
      </div>
    </div>
  );
}