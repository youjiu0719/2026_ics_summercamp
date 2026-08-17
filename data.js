// ============================================
// 2026 ICS 夏令營｜Creator Academy 成果展
// 共用設定與資料
// ============================================

const REPO = {
  owner: 'youjiu0719',
  name: '2026_ics_summercamp',
  branch: 'main'
};

// 檔案讀取：優先 jsDelivr CDN，失敗改用 GitHub raw 備援
function rawUrl(path) {
  return `https://cdn.jsdelivr.net/gh/${REPO.owner}/${REPO.name}@${REPO.branch}/${path}`;
}
function rawUrlFallback(path) {
  return `https://raw.githubusercontent.com/${REPO.owner}/${REPO.name}/${REPO.branch}/${path}`;
}

// 課程清單：id 對應 repo 內 courses/{id}/ 資料夾，順序即網頁顯示順序
const COURSES = [
  { id: '01-ipad',     zh: 'iPad 數位創作課',        en: 'iPad Creative Studio',        icon: 'device-ipad' },
  { id: '02-museum',   zh: '博物館與文物探索課',      en: 'Museum & Artifact Explorer',  icon: 'building-monument' },
  { id: '03-chef',     zh: '小廚神',                  en: 'Junior Chef',                 icon: 'chef-hat' },
  { id: '04-clay',     zh: '樹脂黏土',                en: 'Clay Workshop',               icon: 'palette' },
  { id: '05-ai',       zh: 'AI 課程',                 en: 'AI Studio',                   icon: 'cpu' },
  { id: '06-garden',   zh: '田園探索課',              en: 'Garden Exploration',          icon: 'plant-2' },
  { id: '07-japanese', zh: '日文探險家',              en: 'Japanese Explorer',           icon: 'language' },
  { id: '08-swim',     zh: '游泳課',                  en: 'Aqua Explorer',               icon: 'swimming' },
  { id: '09-fieldtrip',zh: '戶外教學',                en: 'Field Trips',                 icon: 'bus' }
];

// intro.txt 解析：用 ｜標題｜ 包住的行變小標題，其餘變段落文字
function parseIntroText(raw) {
  if (!raw) return [];
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  return lines.map(line => {
    const m = line.match(/^｜(.+)｜$/);
    if (m) return { type: 'heading', text: m[1] };
    return { type: 'para', text: line };
  });
}

// 讀取文字檔（intro.txt），jsDelivr 失敗自動改 GitHub raw
async function fetchTextFile(path) {
  try {
    const res = await fetch(rawUrl(path));
    if (res.ok) {
      const text = await res.text();
      if (text && !text.trim().startsWith('<!DOCTYPE') && !text.includes('404: Not Found')) return text;
    }
  } catch (e) {}
  try {
    const res = await fetch(rawUrlFallback(path));
    if (res.ok) {
      const text = await res.text();
      if (text && !text.includes('404: Not Found')) return text;
    }
  } catch (e) {}
  return null;
}

// 用 GitHub API 檢查 photos/ 資料夾是否存在，並列出圖片檔名（不存在則回傳空陣列，不會報錯）
async function listPhotoFiles(courseId) {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO.owner}/${REPO.name}/contents/courses/${courseId}/photos?ref=${REPO.branch}`);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter(f => f.type === 'file' && /\.(jpe?g|png|webp)$/i.test(f.name))
      .map(f => f.name)
      .sort();
  } catch (e) {
    return [];
  }
}

function coursePdfUrl(courseId) {
  return rawUrl(`courses/${courseId}/slides.pdf`);
}
function coursePdfUrlFallback(courseId) {
  return rawUrlFallback(`courses/${courseId}/slides.pdf`);
}
function courseIntroPath(courseId) {
  return `courses/${courseId}/intro.txt`;
}
function coursePhotoUrl(courseId, filename) {
  return rawUrl(`courses/${courseId}/photos/${filename}`);
}
