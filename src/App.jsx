import { useState, useEffect, useCallback, useRef } from 'react';
import { MENU } from './config/menu';
import { KNOWLEDGE } from './data/knowledge';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CenterPanel from './components/CenterPanel';
import AIChatPanel from './components/AIChatPanel';
import {
  loadPrefs,
  savePrefs,
  toggleBookmark,
  addSearchHistory,
  clearSearchHistory,
  removeBookmark,
  findItemByKey,
  findMenuChildForItem,
  isBookmarked,
} from './services/user-prefs';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [openGroups, setOpenGroups] = useState({ vb: true, saved: true });
  const [activeChild, setActiveChild] = useState(null);
  const [activeItems, setActiveItems] = useState([]);
  const [activeType, setActiveType] = useState('vb');
  const [activeLabel, setActiveLabel] = useState('');
  const [activeGroup, setActiveGroup] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [prefs, setPrefs] = useState(() => loadPrefs());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const searchDebounceRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onResize = () => {
      if (mq.matches) {
        setSidebarOpen(false);
        setAiPanelOpen(false);
      }
    };
    mq.addEventListener('change', onResize);
    return () => mq.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen || aiPanelOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen, aiPanelOpen]);

  const persistPrefs = useCallback((next) => {
    setPrefs(next);
    savePrefs(next);
  }, []);

  function toggleGroup(id) {
    setOpenGroups(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function selectChild(group, child) {
    const items = child.data.filter(child.filter);
    setActiveChild(child.id);
    setActiveItems(items);
    setActiveType(child.type);
    setActiveLabel(child.label);
    setActiveGroup(group.title);
    setSelectedItem(null);
    setSearchQuery('');
    setSidebarOpen(false);
  }

  function openAllGroups() {
    const all = { saved: openGroups.saved };
    MENU.forEach(g => { all[g.id] = true; });
    setOpenGroups(all);
    setSidebarOpen(true);
  }

  function handleSearchChange(q) {
    setSearchQuery(q);
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    if (!activeChild || q.trim().length < 2) return;
    const childId = activeChild;
    const childLabel = activeLabel;
    const groupTitle = activeGroup;
    searchDebounceRef.current = setTimeout(() => {
      setPrefs(prev => {
        const next = addSearchHistory(prev, { query: q, childId, childLabel, groupTitle });
        savePrefs(next);
        return next;
      });
    }, 1200);
  }

  function handleSelectItem(item) {
    if (activeChild && searchQuery.trim().length >= 2) {
      persistPrefs(addSearchHistory(prefs, {
        query: searchQuery,
        childId: activeChild,
        childLabel: activeLabel,
        groupTitle: activeGroup,
      }));
    }
    setSelectedItem(item);
  }

  function handleToggleBookmark(item, type) {
    persistPrefs(toggleBookmark(prefs, item, type));
  }

  function openBookmark(bm) {
    const item = findItemByKey(KNOWLEDGE, bm.key);
    if (!item) return;
    const ctx = findMenuChildForItem(MENU, item, bm.type);
    if (!ctx) return;
    const items = ctx.child.data.filter(ctx.child.filter);
    setActiveChild(ctx.child.id);
    setActiveItems(items);
    setActiveType(ctx.child.type);
    setActiveLabel(ctx.child.label);
    setActiveGroup(ctx.group.title);
    setSelectedItem(item);
    setSearchQuery('');
    setSidebarOpen(false);
  }

  function openHistoryEntry(entry) {
    for (const group of MENU) {
      const child = group.children.find(c => c.id === entry.childId);
      if (child) {
        const items = child.data.filter(child.filter);
        setActiveChild(child.id);
        setActiveItems(items);
        setActiveType(child.type);
        setActiveLabel(child.label);
        setActiveGroup(group.title);
        setSelectedItem(null);
        setSearchQuery(entry.query);
        setSidebarOpen(false);
        return;
      }
    }
  }

  function handleRemoveBookmark(key) {
    persistPrefs(removeBookmark(prefs, key));
  }

  function handleClearHistory() {
    persistPrefs(clearSearchHistory(prefs));
  }

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
        onOpenAllGroups={openAllGroups}
        onToggleSidebar={() => setSidebarOpen(o => !o)}
        onToggleAi={() => setAiPanelOpen(o => !o)}
        aiPanelOpen={aiPanelOpen}
      />

      {(sidebarOpen || aiPanelOpen) && (
        <div
          className="layout-overlay"
          onClick={() => { setSidebarOpen(false); setAiPanelOpen(false); }}
          aria-hidden="true"
        />
      )}

      <div id="app-layout">
        <Sidebar
          open={sidebarOpen}
          openGroups={openGroups}
          activeChild={activeChild}
          searchQuery={searchQuery}
          bookmarks={prefs.bookmarks}
          searchHistory={prefs.searchHistory}
          onSearchChange={handleSearchChange}
          onToggleGroup={toggleGroup}
          onSelectChild={selectChild}
          onOpenBookmark={openBookmark}
          onOpenHistory={openHistoryEntry}
          onRemoveBookmark={handleRemoveBookmark}
          onClearHistory={handleClearHistory}
        />

        <CenterPanel
          activeChild={activeChild}
          activeGroup={activeGroup}
          activeLabel={activeLabel}
          activeItems={activeItems}
          activeType={activeType}
          selectedItem={selectedItem}
          searchQuery={searchQuery}
          isBookmarked={selectedItem ? isBookmarked(prefs, selectedItem, activeType) : false}
          onSelectItem={handleSelectItem}
          onBack={() => setSelectedItem(null)}
          onToggleBookmark={() => selectedItem && handleToggleBookmark(selectedItem, activeType)}
        />

        <AIChatPanel
          open={aiPanelOpen}
          onClose={() => setAiPanelOpen(false)}
          contextItem={selectedItem}
          knowledge={KNOWLEDGE}
        />
      </div>
    </>
  );
}