import { useMemo } from 'react';
import { LOAI_COLORS, CV_COLORS } from '../config/colors';

export default function DetailView({ item, type, isBookmarked, onBack, onToggleBookmark }) {
  const badgeColor = useMemo(() => {
    if (type === 'vb') return LOAI_COLORS[item.loai] || '#1B6CA8';
    if (type === 'cv') return CV_COLORS[item.loai] || '#1B6CA8';
    if (type === 'al') return '#7B3FA0';
    if (type === 'qt') return '#1E7D45';
    return '#64748B';
  }, [type, item]);

  const title = item.tenVanBan || item.tieuDe || item.soAnLe || item.soHieu || '(Không có tiêu đề)';
  const typeTag = item.loai || (type === 'al' ? 'Án lệ' : type === 'qt' ? 'Quy trình' : type === 'rkn' ? 'Rút kinh nghiệm' : 'Văn bản');

  function handleExportPdf() {
    window.print();
  }

  function renderBody() {
    if (type === 'vb') {
      return (
        <>
          <div className="sec">
            <div className="sec-label">Số hiệu</div>
            <div className="sec-value" style={{ fontWeight: 700 }}>{item.soHieu}</div>
          </div>
          <div className="divider" />
          <div className="sec">
            <div className="sec-label">Cơ quan ban hành</div>
            <div className="sec-value">{item.coQuan}</div>
          </div>
          <div className="sec">
            <div className="sec-label">Ngày ban hành → Ngày có hiệu lực</div>
            <div className="sec-value">{item.ngayBanHanh} → {item.ngayHieuLuc}</div>
          </div>
          <div className="divider" />
          <div className="sec">
            <div className="sec-label">Tóm tắt nội dung</div>
            <div className="sec-value">{item.tomTat || '(Chưa có tóm tắt)'}</div>
          </div>
          {item.tags?.length > 0 && (
            <div className="sec">
              <div className="sec-label">Từ khóa</div>
              <div className="tag-list">{item.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}</div>
            </div>
          )}
        </>
      );
    }

    if (type === 'al') {
      return (
        <>
          <div className="sec">
            <div className="sec-label">Số án lệ</div>
            <div className="sec-value" style={{ fontWeight: 700 }}>{item.soAnLe}</div>
          </div>
          <div className="sec">
            <div className="sec-label">Lĩnh vực — Cơ quan — Ngày ban hành</div>
            <div className="sec-value">{item.linhVuc} · {item.coQuan} · {item.ngayBanHanh}</div>
          </div>
          <div className="divider" />
          <div className="sec">
            <div className="sec-label">Tóm tắt vụ việc</div>
            <div className="sec-value">{item.tomTatVuViec}</div>
          </div>
          <div className="sec">
            <div className="sec-label">Nội dung án lệ</div>
            <div className="sec-value">{item.noiDung}</div>
          </div>
          <div className="sec">
            <div className="sec-label">Nguyên tắc pháp lý được xác lập</div>
            <div className="sec-highlight">{item.nguyenTacApDung}</div>
          </div>
          {item.vanBanLienQuan?.length > 0 && (
            <div className="sec">
              <div className="sec-label">Văn bản liên quan</div>
              <div className="tag-list">{item.vanBanLienQuan.map((v, i) => <span key={i} className="tag">{v}</span>)}</div>
            </div>
          )}
          {item.tags?.length > 0 && (
            <div className="sec">
              <div className="sec-label">Từ khóa</div>
              <div className="tag-list">{item.tags.map((t, i) => <span key={i} className="tag">{t}</span>)}</div>
            </div>
          )}
        </>
      );
    }

    if (type === 'qt') {
      return (
        <>
          <div className="sec">
            <div className="sec-label">Mã quy trình — Loại — Ngày ban hành</div>
            <div className="sec-value">{item.maQuyTrinh} · {item.loai} · {item.ngayBanHanh}</div>
          </div>
          <div className="divider" />
          <div className="sec">
            <div className="sec-label">Mô tả</div>
            <div className="sec-value">{item.moTa}</div>
          </div>
          {item.cacBuoc?.length > 0 && (
            <div className="sec">
              <div className="sec-label">Các bước thực hiện</div>
              <ol style={{ paddingLeft: 20, lineHeight: 1.85 }}>
                {item.cacBuoc.map((b, i) => (
                  <li key={i} style={{ fontSize: 14, color: 'var(--text-primary)', marginBottom: 6 }}>{b}</li>
                ))}
              </ol>
            </div>
          )}
          {item.vanBanCanCu?.length > 0 && (
            <div className="sec">
              <div className="sec-label">Văn bản căn cứ</div>
              <div className="tag-list">{item.vanBanCanCu.map((v, i) => <span key={i} className="tag">{v}</span>)}</div>
            </div>
          )}
        </>
      );
    }

    if (type === 'cv') {
      return (
        <>
          <div className="sec">
            <div className="sec-label">Số hiệu</div>
            <div className="sec-value" style={{ fontWeight: 700 }}>{item.soHieu}</div>
          </div>
          <div className="sec">
            <div className="sec-label">Cơ quan ban hành — Năm — Lĩnh vực</div>
            <div className="sec-value">{item.coQuan} · {item.nam} · {item.linhVuc}</div>
          </div>
          {item.tomTat && (
            <>
              <div className="divider" />
              <div className="sec">
                <div className="sec-label">Tóm tắt nội dung</div>
                <div className="sec-value">{item.tomTat}</div>
              </div>
            </>
          )}
          {item.file && (
            <div className="sec">
              <div className="sec-label">File tài liệu</div>
              <div className="sec-value" style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--accent)' }}>{item.file}</div>
            </div>
          )}
        </>
      );
    }

    return (
      <div className="sec">
        <div className="sec-value">
          {item.moTa || item.tomTat || item.noiDung || item.noiDungViPham || '(Không có nội dung chi tiết)'}
        </div>
      </div>
    );
  }

  return (
    <div className="center-inner fade-in detail-print-root">
      <div className="print-header">
        <div className="print-org">VIỆN KIỂM SÁT NHÂN DÂN THÀNH PHỐ CẦN THƠ</div>
        <div className="print-sys">Hệ thống LEXVIET – Tra cứu nghiệp vụ kiểm sát</div>
      </div>

      <button type="button" className="btn-back no-print" onClick={onBack}>← Quay lại danh sách</button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
        <span className="detail-badge" style={{ background: `${badgeColor}22`, color: badgeColor }}>
          {typeTag}
        </span>
        {item.hieu && (
          <span className={`pill ${item.hieu === 'Còn hiệu lực' ? 'status-on' : 'status-off'}`}>
            {item.hieu}
          </span>
        )}
        {item.trangThai && (
          <span className={`pill ${item.trangThai === 'Đang áp dụng' ? 'status-on' : 'status-off'}`}>
            {item.trangThai}
          </span>
        )}
      </div>

      <h1 className="detail-title">{title}</h1>

      <div className="detail-meta">
        {item.coQuan && <span className="detail-meta-item">🏛️ {item.coQuan}</span>}
        {item.ngayBanHanh && <span className="detail-meta-item">📅 {item.ngayBanHanh}</span>}
        {item.nam && <span className="detail-meta-item">📅 Năm {item.nam}</span>}
        {typeof item.linhVuc === 'string' && <span className="detail-meta-item">📂 {item.linhVuc}</span>}
      </div>

      <div className="detail-body">{renderBody()}</div>

      <div className="detail-actions no-print">
        <button
          type="button"
          className={`btn-act ${isBookmarked ? 'btn-primary' : 'btn-outline'}`}
          onClick={onToggleBookmark}
        >
          {isBookmarked ? '★ Đã lưu' : '☆ Lưu văn bản'}
        </button>
        {item.link && item.link !== '' && (
          <button type="button" className="btn-act btn-primary" onClick={() => window.open(item.link, '_blank')}>
            🔗 Xem toàn văn
          </button>
        )}
        {item.file && item.file !== '' && (
          <button type="button" className="btn-act btn-outline" onClick={() => window.open(`ms-its://Van_ban_phap_luat.chm::/${item.file}`, '_blank')}>
            📖 Mở file CHM
          </button>
        )}
        <button type="button" className="btn-act btn-outline" onClick={handleExportPdf}>
          📄 Xuất PDF / In
        </button>
      </div>

      <div className="print-footer">
        <span>Xuất từ LEXVIET – {new Date().toLocaleDateString('vi-VN')}</span>
      </div>
    </div>
  );
}