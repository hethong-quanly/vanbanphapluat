import { useState } from 'react';
import { MENU } from '../config/menu';

export default function Sidebar({
  open,
  openGroups,
  activeChild,
  searchQuery,
  bookmarks,
  searchHistory,
  onSearchChange,
  onToggleGroup,
  onSelectChild,
  onOpenBookmark,
  onOpenHistory,
  onRemoveBookmark,
  onClearHistory,
}) {
  const [searchFocused, setSearchFocused] = useState(false);
  const showHistory = searchFocused && searchHistory.length > 0;

  return (
    <aside id="sidebar" className={open ? 'open' : ''}>
      <div className="sb-search">
        <div className="sb-search-wrap">
          <span className="sb-search-ico">🔍</span>
          <input
            type="text"
            className="sb-search-input"
            placeholder="Tìm nhanh tiêu chí, biểu mẫu..."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
          />
        </div>

        {showHistory && (
          <div className="sb-history">
            <div className="sb-history-hdr">
              <span>Lịch sử tra cứu</span>
              <button type="button" className="sb-history-clear" onMouseDown={e => { e.preventDefault(); onClearHistory(); }}>
                Xóa
              </button>
            </div>
            {searchHistory.slice(0, 6).map((h, i) => (
              <button
                key={`${h.query}-${h.childId}-${i}`}
                type="button"
                className="sb-history-item"
                onMouseDown={e => { e.preventDefault(); onOpenHistory(h); }}
              >
                <span className="sb-history-query">{h.query}</span>
                <span className="sb-history-meta">{h.childLabel}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <nav className="sb-menu">
        {bookmarks.length > 0 && (
          <div className="acc-grp">
            <div
              className={`acc-hdr ${openGroups.saved ? 'open' : ''}`}
              onClick={() => onToggleGroup('saved')}
              onKeyDown={e => e.key === 'Enter' && onToggleGroup('saved')}
              role="button"
              tabIndex={0}
            >
              <span className="acc-num">★</span>
              <span className="acc-title">ĐÃ LƯU</span>
              <span className="acc-arrow">▼</span>
            </div>
            <div className={`acc-body ${openGroups.saved ? 'open' : ''}`}>
              {bookmarks.map(bm => (
                <div key={bm.key} className="sb-bookmark-row">
                  <button
                    type="button"
                    className="acc-item sb-bookmark-item"
                    onClick={() => onOpenBookmark(bm)}
                  >
                    <span className="sb-bookmark-star">★</span>
                    <span className="sb-bookmark-title">{bm.title}</span>
                  </button>
                  <button
                    type="button"
                    className="sb-bookmark-remove"
                    title="Bỏ lưu"
                    onClick={() => onRemoveBookmark(bm.key)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {MENU.map(group => {
          const isOpen = !!openGroups[group.id];
          return (
            <div key={group.id} className="acc-grp">
              <div
                className={`acc-hdr ${isOpen ? 'open' : ''}`}
                onClick={() => onToggleGroup(group.id)}
                onKeyDown={e => e.key === 'Enter' && onToggleGroup(group.id)}
                role="button"
                tabIndex={0}
              >
                <span className="acc-num">{group.num}.</span>
                <span className="acc-title">{group.title}</span>
                <span className="acc-arrow">▼</span>
              </div>

              <div className={`acc-body ${isOpen ? 'open' : ''}`}>
                {group.children.map(child => {
                  const count = child.data.filter(child.filter).length;
                  const isActive = activeChild === child.id;
                  return (
                    <button
                      key={child.id}
                      type="button"
                      className={`acc-item ${isActive ? 'active' : ''}`}
                      onClick={() => onSelectChild(group, child)}
                    >
                      {child.label}
                      {count > 0 && <span className="acc-badge">{count}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}