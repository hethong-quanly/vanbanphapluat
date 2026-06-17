import ListView from './ListView';
import DetailView from './DetailView';

export default function CenterPanel({
  activeChild,
  activeGroup,
  activeLabel,
  activeItems,
  activeType,
  selectedItem,
  searchQuery,
  isBookmarked,
  onSelectItem,
  onBack,
  onToggleBookmark,
}) {
  if (!activeChild) {
    return (
      <main id="center-panel">
        <div className="center-welcome">
          <div className="welcome-icon">⚖️</div>
          <div className="welcome-title">
            Vui lòng chọn một mục nghiệp vụ bên trái để xem nội dung văn bản
          </div>
          <div className="welcome-sub">
            Hệ thống tra cứu văn bản pháp luật và nghiệp vụ kiểm sát VKSND TP. Cần Thơ.
            Chọn nhóm danh mục bên trái để bắt đầu tra cứu.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main id="center-panel">
      {selectedItem ? (
        <DetailView
          item={selectedItem}
          type={activeType}
          isBookmarked={isBookmarked}
          onBack={onBack}
          onToggleBookmark={onToggleBookmark}
        />
      ) : (
        <div className="center-inner fade-in">
          <div className="breadcrumb">{activeGroup} › {activeLabel}</div>
          <div className="list-heading">
            <h2>{activeLabel}</h2>
            <div className="list-count">
              {activeItems.length} văn bản
              {searchQuery && ` · Lọc: "${searchQuery}"`}
            </div>
          </div>
          <ListView
            items={activeItems}
            type={activeType}
            onSelect={onSelectItem}
            searchQuery={searchQuery}
          />
        </div>
      )}
    </main>
  );
}