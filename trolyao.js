<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trợ Lý Ảo</title>
  <script src="./vanbanluat.js"></script>
  <script src="./quytrinh.js"></script>
  <script src="./rutkinhngiem.js"></script>
  <script src="./anle.js"></script>
  <script src="./congvan.js"></script>
  <script src="./ai-service.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
    
    body {
      background-color: #0B1120;
      color: #E8E0D0;
      font-family: 'IBM Plex Sans', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    /* Thanh Header */
    .header {
      background: #0D1628;
      border-bottom: 1px solid rgba(201,168,76,0.15);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }

    .header-title {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .ai-icon {
      width: 36px;
      height: 36px;
      background: linear-gradient(135deg, #C9A84C, #A07830);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #0B1120;
    }

    .btn-close {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      color: #8A9BBF;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-family: 'IBM Plex Sans', sans-serif;
      transition: all 0.2s;
    }

    .btn-close:hover {
      background: rgba(201,168,76,0.1);
      color: #C9A84C;
      border-color: rgba(201,168,76,0.3);
    }

    /* Khu vực Chat */
    .chat-container {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      scroll-behavior: smooth;
    }

    .chat-wrapper {
      max-width: 850px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .message {
      display: flex;
      flex-direction: column;
      max-width: 85%;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .msg-user {
      align-self: flex-end;
    }

    .msg-ai {
      align-self: flex-start;
    }

    .msg-sender {
      font-size: 11px;
      color: #8A9BBF;
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .msg-user .msg-sender {
      text-align: right;
      color: #C9A84C;
    }

    .msg-bubble {
      padding: 14px 18px;
      border-radius: 12px;
      line-height: 1.6;
      font-size: 14px;
      white-space: pre-wrap;
    }

    .msg-user .msg-bubble {
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.3);
      color: #E8E0D0;
      border-bottom-right-radius: 4px;
    }

    .msg-ai .msg-bubble {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      color: #C8BFAE;
      border-bottom-left-radius: 4px;
    }

    /* Gợi ý tình huống */
    .suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
    }

    .suggestion-chip {
      background: rgba(201,168,76,0.05);
      border: 1px solid rgba(201,168,76,0.2);
      color: #C9A84C;
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .suggestion-chip:hover {
      background: rgba(201,168,76,0.15);
    }

    /* Khu vực Nhập liệu */
    .input-area {
      background: #0D1628;
      border-top: 1px solid rgba(201,168,76,0.15);
      padding: 20px 24px;
      display: flex;
      justify-content: center;
      flex-shrink: 0;
    }

    .input-box {
      max-width: 850px;
      width: 100%;
      display: flex;
      gap: 12px;
      position: relative;
    }

    .input-field {
      flex: 1;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.15);
      color: #E8E0D0;
      padding: 14px 18px;
      border-radius: 8px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      resize: none;
      height: 24px;
      overflow-y: hidden;
    }

    .input-field:focus {
      border-color: #C9A84C;
      background: rgba(255,255,255,0.08);
    }

    .btn-send {
      background: linear-gradient(135deg, #C9A84C, #A07830);
      border: none;
      color: #0B1120;
      padding: 0 24px;
      border-radius: 8px;
      font-weight: 600;
      font-family: 'IBM Plex Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .btn-send:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .btn-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .typing-indicator {
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #C9A84C;
      border-radius: 50%;
      margin: 0 2px;
      animation: bounce 1.4s infinite ease-in-out both;
    }

    .typing-indicator:nth-child(1) { animation-delay: -0.32s; }
    .typing-indicator:nth-child(2) { animation-delay: -0.16s; }
    
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.3); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(201,168,76,0.5); }
  </style>
</head>
<body>

  <!-- Thanh Header -->
  <header class="header">
    <div class="header-title">
      <div class="ai-icon">🤖</div>
      <div>
        <div style="font-size: 15px; font-weight: 600; color: #E8E0D0;">Trợ Lý Ảo Pháp Lý</div>
        <div style="font-size: 12px; color: #8A9BBF; margin-top: 2px;">Hệ thống LEXVIET - Sẵn sàng phân tích nghiệp vụ</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;">
      <button class="btn-close" onclick="openAISettings()" title="Cấu hình API">⚙️ Cấu hình AI</button>
      <button class="btn-close" onclick="window.close()">✕ Đóng Cửa Sổ</button>
    </div>
  </header>

  <!-- Khu vực hiển thị nội dung Chat -->
  <div class="chat-container" id="chatContainer">
    <div class="chat-wrapper" id="chatWrapper">
      
      <!-- Lời chào mặc định của AI -->
      <div class="message msg-ai">
        <div class="msg-sender">LEXVIET AI ASSISTANT</div>
        <div class="msg-bubble">Xin chào đồng chí! Tôi là Trợ lý ảo AI được thiết kế riêng để hỗ trợ nghiệp vụ Kiểm sát.
        
Tôi có thể giúp đồng chí:
• Phân tích cấu thành tội phạm dựa trên hồ sơ vụ án.
• Tra cứu nhanh các văn bản quy phạm pháp luật, nghị định, thông tư.
• Tổng hợp và tóm tắt án lệ có liên quan.
• Gợi ý hướng đề xuất xử lý vụ việc.

Đồng chí cần hỗ trợ vấn đề gì hôm nay?</div>
        
        <div class="suggestions">
          <button class="suggestion-chip" onclick="fillInput('Phân tích dấu hiệu pháp lý tội Nhận hối lộ theo BLHS 2015')">Phân tích tội Nhận hối lộ</button>
          <button class="suggestion-chip" onclick="fillInput('Tóm tắt những điểm mới của Luật Đất đai 2024')">Điểm mới Luật Đất đai 2024</button>
          <button class="suggestion-chip" onclick="fillInput('Phân biệt tội Cướp tài sản và Cưỡng đoạt tài sản')">Phân biệt Cướp và Cưỡng đoạt TS</button>
        </div>
      </div>

    </div>
  </div>

  <!-- Khu vực nhập liệu -->
  <div class="input-area">
    <div class="input-box">
      <textarea 
        id="userInput" 
        class="input-field" 
        placeholder="Nhập câu hỏi hoặc tình huống pháp lý..." 
        onkeydown="handleKeyPress(event)"
      ></textarea>
      <button id="sendBtn" class="btn-send" onclick="sendMessage()">
        <span>Gửi</span> ↗
      </button>
    </div>
  </div>

  <!-- Script xử lý Logic Chat -->
  <script>
    const chatWrapper = document.getElementById('chatWrapper');
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    const LEXVIET_KNOWLEDGE = {
      DOCS: typeof DB_VAN_BAN_LUAT !== 'undefined' ? DB_VAN_BAN_LUAT : [],
      QUYTRINH: typeof DB_QUY_TRINH !== 'undefined' ? DB_QUY_TRINH : [],
      RKN: typeof DB_RUT_KINH_NGHIEM !== 'undefined' ? DB_RUT_KINH_NGHIEM : [],
      ANLE: [
        ...(typeof DB_AN_LE !== 'undefined' ? DB_AN_LE : []),
        ...(typeof CHM_AN_LE !== 'undefined' ? CHM_AN_LE : []),
      ],
      CONGVAN: typeof DB_CONG_VAN !== 'undefined' ? DB_CONG_VAN : [],
    };

    let chatHistory = [];

    function openAISettings() {
      const cfg = LexVietAI.loadConfig();
      const provider = prompt(
        'Nhà cung cấp AI (gemini / openai):',
        cfg.provider
      );
      if (provider === null) return;
      const apiKey = prompt('Nhập API Key:', cfg.apiKey || '');
      if (apiKey === null) return;
      const saved = LexVietAI.saveConfig({ ...cfg, provider: provider.trim() || 'gemini', apiKey: apiKey.trim() });
      alert('Đã lưu cấu hình: ' + saved.provider + ' / ' + saved.model);
    }

    // Hàm tự động điều chỉnh chiều cao ô nhập liệu
    userInput.addEventListener('input', function() {
      this.style.height = '24px';
      this.style.height = (this.scrollHeight) + 'px';
      if (this.scrollHeight > 150) {
        this.style.overflowY = 'auto';
      } else {
        this.style.overflowY = 'hidden';
      }
    });

    // Điền câu hỏi từ nút gợi ý
    function fillInput(text) {
      userInput.value = text;
      userInput.focus();
    }

    // Nhấn Enter để gửi (Shift+Enter để xuống dòng)
    function handleKeyPress(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }

    // Cuộn xuống dòng tin nhắn mới nhất
    function scrollToBottom() {
      setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 50);
    }

    async function sendMessage() {
      const text = userInput.value.trim();
      if (!text) return;

      if (!LexVietAI.isConfigured()) {
        openAISettings();
        return;
      }

      appendMessage('user', text);
      chatHistory.push({ role: 'user', text });
      userInput.value = '';
      userInput.style.height = '24px';
      sendBtn.disabled = true;

      const typingId = showTypingIndicator();

      try {
        const aiResponse = await LexVietAI.chat({
          userMessage: text,
          chatHistory: chatHistory.filter(m => m.role === 'user' || m.role === 'ai').slice(0, -1),
          knowledge: LEXVIET_KNOWLEDGE,
        });
        removeTypingIndicator(typingId);
        appendMessage('ai', aiResponse);
        chatHistory.push({ role: 'ai', text: aiResponse });
      } catch (err) {
        removeTypingIndicator(typingId);
        appendMessage('ai', '⚠️ ' + (err.message || 'Không thể kết nối AI.'));
      } finally {
        sendBtn.disabled = false;
        userInput.focus();
      }
    }

    // Hàm thêm bong bóng tin nhắn vào khung chat
    function appendMessage(sender, text) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message msg-${sender}`;
      
      const senderName = sender === 'user' ? 'Kiểm sát viên' : 'LEXVIET AI';
      
      msgDiv.innerHTML = `
        <div class="msg-sender">${senderName}</div>
        <div class="msg-bubble">${escapeHTML(text)}</div>
      `;
      
      chatWrapper.appendChild(msgDiv);
      scrollToBottom();
    }

    // Hiển thị 3 dấu chấm AI đang gõ
    function showTypingIndicator() {
      const id = 'typing-' + Date.now();
      const msgDiv = document.createElement('div');
      msgDiv.className = 'message msg-ai';
      msgDiv.id = id;
      msgDiv.innerHTML = `
        <div class="msg-sender">LEXVIET AI đang phân tích</div>
        <div class="msg-bubble">
          <span class="typing-indicator"></span>
          <span class="typing-indicator"></span>
          <span class="typing-indicator"></span>
        </div>
      `;
      chatWrapper.appendChild(msgDiv);
      scrollToBottom();
      return id;
    }

    function removeTypingIndicator(id) {
      const el = document.getElementById(id);
      if (el) el.remove();
    }

    // Bảo mật hiển thị văn bản thuần
    function escapeHTML(str) {
      return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
          }[tag] || tag)
      );
    }
  </script>
</body>
</html>
