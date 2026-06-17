export default function Header({
  theme,
  onToggleTheme,
  onOpenAllGroups,
  onToggleSidebar,
  onToggleAi,
  aiPanelOpen,
}) {
  return (
    <header id="header">
      <div className="hdr-left">
        <button
          type="button"
          className="btn-hdr btn-hdr-icon btn-hdr-mobile-only"
          onClick={onToggleSidebar}
          aria-label="Mở menu"
        >
          ☰
        </button>
        <div className="hdr-logo">
          <img
            src="https://vienkiemsat.cantho.gov.vn/files/images/logo-vks.png"
            alt="Logo VKS"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/45?text=VKS'; }}
          />
        </div>
        <div className="hdr-titles">
          <div className="hdr-title">HỆ THỐNG TRỢ LÝ SỐ NGHIỆP VỤ KIỂM SÁT</div>
          <div className="hdr-sub">Viện kiểm sát nhân dân thành phố Cần Thơ</div>
        </div>
      </div>

      <div className="hdr-right">
        <button type="button" className="btn-hdr btn-hdr-desktop-only" onClick={onOpenAllGroups}>
          ☰ Danh Mục
        </button>
        <button
          type="button"
          className={`btn-hdr btn-hdr-icon btn-hdr-mobile-only ${aiPanelOpen ? 'active' : ''}`}
          onClick={onToggleAi}
          aria-label="Trợ lý AI"
        >
          🤖
        </button>
        <button type="button" className="btn-theme" onClick={onToggleTheme}>
          <span className="btn-theme-full">{theme === 'light' ? '🌙 Nền Tối' : '☀️ Nền Sáng'}</span>
          <span className="btn-theme-short">{theme === 'light' ? '🌙' : '☀️'}</span>
        </button>
      </div>
    </header>
  );
}