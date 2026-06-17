import { DB_VAN_BAN_LUAT } from '../../vanbanluat.js';
import { DB_QUY_TRINH, DB_BIEU_MAU } from '../../quytrinh.js';
import { DB_RUT_KINH_NGHIEM } from '../../rutkinhngiem.js';
import { DB_AN_LE, CHM_AN_LE } from '../../anle.js';
import { DB_CONG_VAN } from '../../congvan.js';

function dedup(arr, keyFn) {
  const seen = new Set();
  return arr.filter(item => {
    const k = keyFn(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export const DOCS = dedup([...DB_VAN_BAN_LUAT], d => d.soHieu || d.id);
export const QUYTRINH = dedup([...DB_QUY_TRINH], q => q.maQuyTrinh || q.id);
export const RKN = dedup([...DB_RUT_KINH_NGHIEM], r => r.soThongBao || r.id);
export const ANLE = dedup([...DB_AN_LE, ...CHM_AN_LE], a => a.soAnLe || a.id);
export const CONGVAN = dedup([...DB_CONG_VAN], c => c.soHieu || c.id);
export const BIEUMAU = dedup([...DB_BIEU_MAU], b => b.id);

export const KNOWLEDGE = { DOCS, QUYTRINH, RKN, ANLE, CONGVAN, BIEUMAU };