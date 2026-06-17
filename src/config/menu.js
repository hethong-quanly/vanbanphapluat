import { DOCS, QUYTRINH, RKN, ANLE, CONGVAN } from '../data/knowledge';

export const MENU = [
  {
    id: 'vb', num: 'I', icon: '📜',
    title: 'VĂN BẢN PHÁP LUẬT',
    children: [
      { id: 'vb-bl', label: 'Bộ luật & Luật', type: 'vb', data: DOCS, filter: d => ['Bộ luật', 'Luật'].includes(d.loai) },
      { id: 'vb-nd', label: 'Nghị định', type: 'vb', data: DOCS, filter: d => d.loai === 'Nghị định' },
      { id: 'vb-tt', label: 'Thông tư', type: 'vb', data: DOCS, filter: d => d.loai === 'Thông tư' },
      { id: 'vb-nq', label: 'Nghị quyết', type: 'vb', data: DOCS, filter: d => d.loai === 'Nghị quyết' },
      { id: 'vb-qd', label: 'Quyết định & Chỉ thị', type: 'vb', data: DOCS, filter: d => ['Quyết định', 'Chỉ thị'].includes(d.loai) },
    ],
  },
  {
    id: 'qt', num: 'II', icon: '📋',
    title: 'QUY TRÌNH NGHIỆP VỤ',
    children: [
      { id: 'qt-hs', label: 'Hình sự', type: 'qt', data: QUYTRINH, filter: q => q.loai === 'Hình sự' || q.linhVuc === 'Hình sự' },
      { id: 'qt-ds', label: 'Dân sự', type: 'qt', data: QUYTRINH, filter: q => q.loai === 'Dân sự' || q.linhVuc === 'Dân sự' },
      { id: 'qt-hc', label: 'Hành chính', type: 'qt', data: QUYTRINH, filter: q => q.loai === 'Hành chính' || q.linhVuc === 'Hành chính' },
      { id: 'qt-al', label: 'Tất cả quy trình', type: 'qt', data: QUYTRINH, filter: () => true },
    ],
  },
  {
    id: 'rkn', num: 'III', icon: '💡',
    title: 'RÚT KINH NGHIỆM',
    children: [
      { id: 'rkn-al', label: 'Tất cả thông báo RKN', type: 'rkn', data: RKN, filter: () => true },
    ],
  },
  {
    id: 'al', num: 'IV', icon: '⚖️',
    title: 'ÁN LỆ',
    children: [
      { id: 'al-hs', label: 'Hình sự', type: 'al', data: ANLE, filter: a => (a.linhVuc || '').includes('Hình sự') },
      { id: 'al-ds', label: 'Dân sự & Hợp đồng', type: 'al', data: ANLE, filter: a => (a.linhVuc || '').includes('Dân sự') || (a.linhVuc || '').includes('Hợp đồng') },
      { id: 'al-dd', label: 'Đất đai', type: 'al', data: ANLE, filter: a => (a.linhVuc || '').includes('Đất đai') },
      { id: 'al-ld', label: 'Lao động & Thừa kế', type: 'al', data: ANLE, filter: a => (a.linhVuc || '').includes('Lao động') || (a.linhVuc || '').includes('Thừa kế') },
      { id: 'al-al', label: 'Tất cả án lệ', type: 'al', data: ANLE, filter: () => true },
    ],
  },
  {
    id: 'cv', num: 'V', icon: '📁',
    title: 'CÔNG VĂN & HƯỚNG DẪN',
    children: [
      { id: 'cv-cv', label: 'Công văn', type: 'cv', data: CONGVAN, filter: c => c.loai === 'Công văn' },
      { id: 'cv-hd', label: 'Hướng dẫn nghiệp vụ', type: 'cv', data: CONGVAN, filter: c => c.loai === 'Hướng dẫn nghiệp vụ' },
      { id: 'cv-ct', label: 'Chỉ thị', type: 'cv', data: CONGVAN, filter: c => c.loai === 'Chỉ thị' },
      { id: 'cv-qc', label: 'Quy chế', type: 'cv', data: CONGVAN, filter: c => c.loai === 'Quy chế' },
      { id: 'cv-tl', label: 'Thông tư liên tịch', type: 'cv', data: CONGVAN, filter: c => c.loai === 'Thông tư liên tịch' },
      { id: 'cv-th', label: 'Tài liệu tập huấn', type: 'cv', data: CONGVAN, filter: c => c.loai === 'Tài liệu tập huấn' },
    ],
  },
];