import { useState } from 'react';
import LexVietAI from '../services/ai-service';

export default function AISettingsModal({ onClose, onSaved }) {
  const [cfg, setCfg] = useState(() => LexVietAI.loadConfig());
  const [status, setStatus] = useState({ text: '', type: '' });
  const [testing, setTesting] = useState(false);

  const models = LexVietAI.PROVIDERS[cfg.provider]?.models || [];

  function update(field, value) {
    setCfg(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'provider') {
        next.model = LexVietAI.PROVIDERS[value].defaultModel;
      }
      return next;
    });
    setStatus({ text: '', type: '' });
  }

  function handleSave() {
    const saved = LexVietAI.saveConfig(cfg);
    setCfg(saved);
    setStatus({ text: 'Đã lưu cấu hình.', type: 'ok' });
    onSaved(saved);
    setTimeout(onClose, 600);
  }

  async function handleTest() {
    setTesting(true);
    setStatus({ text: 'Đang kiểm tra kết nối...', type: '' });
    try {
      await LexVietAI.testConnection(cfg);
      setStatus({ text: 'Kết nối AI thành công!', type: 'ok' });
    } catch (err) {
      setStatus({ text: err.message || 'Không thể kết nối.', type: 'err' });
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="ai-modal-overlay" onClick={onClose}>
      <div className="ai-modal" onClick={e => e.stopPropagation()}>
        <h3>⚙️ Cấu hình Trợ lý AI</h3>
        <p className="ai-modal-desc">
          API key chỉ lưu trên trình duyệt của đồng chí (localStorage), không gửi lên máy chủ LEXVIET.
          Khuyến nghị dùng <strong>Google Gemini</strong> (miễn phí tại aistudio.google.com).
        </p>

        <div className="ai-form-group">
          <label htmlFor="ai-provider">Nhà cung cấp AI</label>
          <select id="ai-provider" value={cfg.provider} onChange={e => update('provider', e.target.value)}>
            {Object.entries(LexVietAI.PROVIDERS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        <div className="ai-form-group">
          <label htmlFor="ai-key">API Key</label>
          <input
            id="ai-key"
            type="password"
            placeholder={cfg.provider === 'gemini' ? 'AIza...' : 'sk-...'}
            value={cfg.apiKey}
            onChange={e => update('apiKey', e.target.value)}
          />
        </div>

        <div className="ai-form-group">
          <label htmlFor="ai-model">Model</label>
          <select id="ai-model" value={cfg.model} onChange={e => update('model', e.target.value)}>
            {models.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="ai-modal-actions">
          <button type="button" onClick={onClose}>Hủy</button>
          <button type="button" onClick={handleTest} disabled={testing || !cfg.apiKey}>
            {testing ? 'Đang test...' : 'Kiểm tra'}
          </button>
          <button type="button" className="btn-save" onClick={handleSave} disabled={!cfg.apiKey}>
            Lưu
          </button>
        </div>
        {status.text && <div className={`ai-modal-status ${status.type}`}>{status.text}</div>}
      </div>
    </div>
  );
}