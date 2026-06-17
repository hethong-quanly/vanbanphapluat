const KEY = 'lexviet_user_prefs';
const MAX_HISTORY = 15;
const MAX_BOOKMARKS = 50;

function defaultPrefs() {
  return { bookmarks: [], searchHistory: [] };
}

export function loadPrefs() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultPrefs();
    const data = JSON.parse(raw);
    return {
      bookmarks: Array.isArray(data.bookmarks) ? data.bookmarks : [],
      searchHistory: Array.isArray(data.searchHistory) ? data.searchHistory : [],
    };
  } catch {
    return defaultPrefs();
  }
}

export function savePrefs(prefs) {
  localStorage.setItem(KEY, JSON.stringify(prefs));
}

export function getItemKey(item, type) {
  if (item.id != null) return `${type}:${item.id}`;
  const fallback = item.soHieu || item.soAnLe || item.maQuyTrinh || item.tieuDe || 'unknown';
  return `${type}:${fallback}`;
}

export function getItemTitle(item) {
  return item.tenVanBan || item.tieuDe || item.soAnLe || item.soHieu || '(Không có tiêu đề)';
}

export function isBookmarked(prefs, item, type) {
  const key = getItemKey(item, type);
  return prefs.bookmarks.some(b => b.key === key);
}

export function toggleBookmark(prefs, item, type) {
  const key = getItemKey(item, type);
  const title = getItemTitle(item);
  const bookmarks = prefs.bookmarks.some(b => b.key === key)
    ? prefs.bookmarks.filter(b => b.key !== key)
    : [{ key, itemId: item.id, type, title, savedAt: Date.now() }, ...prefs.bookmarks].slice(0, MAX_BOOKMARKS);
  return { ...prefs, bookmarks };
}

export function addSearchHistory(prefs, { query, childId, childLabel, groupTitle }) {
  const q = query.trim();
  if (!q || q.length < 2) return prefs;
  const filtered = prefs.searchHistory.filter(
    h => !(h.query.toLowerCase() === q.toLowerCase() && h.childId === childId),
  );
  return {
    ...prefs,
    searchHistory: [{ query: q, childId, childLabel, groupTitle, ts: Date.now() }, ...filtered].slice(0, MAX_HISTORY),
  };
}

export function clearSearchHistory(prefs) {
  return { ...prefs, searchHistory: [] };
}

export function removeBookmark(prefs, key) {
  return { ...prefs, bookmarks: prefs.bookmarks.filter(b => b.key !== key) };
}

export function findItemByKey(knowledge, key) {
  const [type, idStr] = key.split(':');
  const pool = {
    vb: knowledge.DOCS,
    qt: knowledge.QUYTRINH,
    rkn: knowledge.RKN,
    al: knowledge.ANLE,
    cv: knowledge.CONGVAN,
  }[type];
  if (!pool) return null;
  const numId = Number(idStr);
  return pool.find(item => {
    if (!Number.isNaN(numId) && item.id === numId) return true;
    return getItemKey(item, type) === key;
  }) || null;
}

export function findMenuChildForItem(menu, item, type) {
  for (const group of menu) {
    for (const child of group.children) {
      if (child.type !== type) continue;
      if (child.data.some(d => d === item || (d.id != null && d.id === item.id))) {
        return { group, child };
      }
    }
  }
  for (const group of menu) {
    const child = group.children.find(c => c.type === type);
    if (child) return { group, child };
  }
  return null;
}