import { useMemo } from 'react';
import { LOAI_COLORS, CV_COLORS } from '../config/colors';

export default function ListView({ items, type, onSelect, searchQuery }) {
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(item => {
      const haystack = [
        item.tenVanBan, item.tieuDe, item.soHieu, item.soAnLe,
        item.coQuan, item.tomTat, item.moTa, item.noiDung,
        item.loai, item.linhVuc,
        ...(item.tags || []),
      ].filter(Boolean).join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [items, searchQuery]);

  if (filtered.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🔍</div>
        <div>Không tìm thấy kết quả{searchQuery ? ` cho "${searchQuery}"` : ''}</div>
      </div>
    );
  }

  function getColor(item) {
    if (type === 'vb') return LOAI_COLORS[item.loai] || '#1B6CA8';
    if (type === 'cv') return CV_COLORS[item.loai] || '#1B6CA8';
    if (type === 'al') return '#7B3FA0';
    if (type === 'qt') return '#1E7D45';
    return '#64748B';
  }

  return (
    <div className="doc-list">
      {filtered.map((item, idx) => {
        const title = item.tenVanBan || item.tieuDe || item.soAnLe || item.soHieu || '(Không có tiêu đề)';
        const excerpt = (item.tomTat || item.moTa || item.tomTatVuViec || '').substring(0, 115);
        const metas = [item.coQuan, item.ngayBanHanh, item.nam && `Năm ${item.nam}`, item.linhVuc && typeof item.linhVuc === 'string' && item.linhVuc].filter(Boolean).join(' · ');
        const c = getColor(item);

        return (
          <div
            key={item.id || idx}
            className="doc-card fade-in"
            style={{ animationDelay: `${idx * 0.035}s` }}
            onClick={() => onSelect(item)}
            onKeyDown={e => e.key === 'Enter' && onSelect(item)}
            role="button"
            tabIndex={0}
          >
            <div className="dc-row1">
              <div style={{ flex: 1 }}>
                <div className="dc-title">{title}</div>
                {metas && <div className="dc-meta">{metas}</div>}
              </div>
              <div className="dc-badges">
                {item.loai && (
                  <span className="pill" style={{ background: `${c}1E`, color: c }}>{item.loai}</span>
                )}
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
            </div>
            {excerpt && (
              <div className="dc-excerpt">
                {excerpt}
                {(item.tomTat || item.moTa || '').length > 115 ? '…' : ''}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}