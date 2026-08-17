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

// 月份分區
const MONTHS = [
  { id: 'jul', zh: '7月', en: 'July' },
  { id: 'aug', zh: '8月', en: 'August' }
];

// 課程清單
// type: 'sessions' — 課程系列，展開後是場次清單，每個場次各自一份PDF（檔名 slides/{date}_{slug}.pdf）
//                     場次會依日期自動歸到7月或8月區塊，不用手動指定 months
// type: 'fixed'    — 固定重複課程，展開後只顯示簡介文字，不放PDF/場次清單，months 手動指定要出現在哪幾個月份區塊
//
// intro 用 ｜標題｜ 包住的行會變藍色小標題，其他行是段落文字，直接在這裡改就好
const COURSES = [
  {
    id: '01-ipad',
    zh: 'iPad 數位創作課',
    en: 'iPad Creative Studio',
    icon: 'device-ipad',
    type: 'sessions',
    intro: `｜這堂課在做什麼｜
孩子們用 iPad 學習數位繪畫與構圖，從圖層、透明度到色彩搭配，一步步完成自己的展覽海報與角色設計。`,
    sessions: [
      { date: '0713', slug: 'layer_secrets', title: '圖層的秘密',
        intro: `孩子們認識數位繪圖中的圖層概念，練習新增、隱藏、排列與管理圖層，學會將背景、圖形與文字分開製作，讓作品更容易修改。` },
      { date: '0727', slug: 'pixel_grid', title: '像素格世界',
        intro: `從經典電玩角色認識像素與 8-bit 藝術，孩子們運用小方格規劃輪廓、色彩與明暗，完成自己的像素藝術作品。` },
      { date: '0803', slug: 'lasso_tool', title: '套索選取術',
        intro: `孩子們學習使用 Procreate 的套索工具，練習選取、移動、複製、縮放與調整畫面元素，提升數位創作與版面安排的效率。` },
      { date: '0810', slug: 'color_palette', title: '色彩搭配學',
        intro: `認識60／30／10配色法、單色系、互補色與三角色等配色方式，孩子們建立自己的色彩盤，讓作品更加清楚、協調又有特色。` }
    ]
  },
  {
    id: '02-museum',
    zh: '博物館與文物探索課',
    en: 'Museum & Artifact Explorer',
    icon: 'building-monument',
    type: 'sessions',
    intro: `｜這堂課在做什麼｜
孩子們變身小小策展人，從文物偵探到故宮寶物大解密，認識博物館如何蒐藏與說故事，最後練習當一日導覽員。`,
    sessions: [
      { date: '0706', slug: 'world_museum_tour', title: '世界博物館巡禮',
        intro: `走訪大英博物館、羅浮宮、大都會藝術博物館與國立故宮博物院，認識世界知名博物館的特色與代表收藏，開啟孩子們的博物館探索旅程。` },
      { date: '0713', slug: 'artifact_detective', title: '文物偵探課',
        intro: `孩子們化身文物偵探，從外觀、材質、用途與文化背景尋找線索，學習透過仔細觀察與推理，讀出一件文物背後的歷史故事。` },
      { date: '0714', slug: 'museum_behind_the_scenes', title: '博物館幕後大揭秘',
        intro: `走進博物館不對外開放的幕後世界，認識策展人、修復師、文物攝影師與展覽設計師，了解一座博物館如何收藏、保存及展示文物。` },
      { date: '0720', slug: 'miniature_history', title: '袖珍歷史課',
        intro: `從歐洲娃娃屋、日本根付到中國鼻煙壺，孩子們認識不同文化中的袖珍藝術，探索微縮作品的歷史、比例與精細工藝。` },
      { date: '0728', slug: 'stories_behind_artifacts', title: '文物的故事',
        intro: `從羅塞塔石碑、兵馬俑到帕德嫩神廟雕刻，探索文物如何被製作、發現與保存，思考文化歸屬及「誰有權說歷史故事」。` },
      { date: '0810', slug: 'specimen_collection', title: '標本與收藏學',
        intro: `認識植物、昆蟲、骨骼與礦物標本的保存方式，了解科學家如何透過標本研究物種、環境與歷史變化。` },
      { date: '0818', slug: 'collectors_world', title: '收藏家的世界',
        intro: `從達爾文、乾隆皇帝到法貝熱彩蛋，探索人們收藏物品的原因，以及稀有性、年代、來源與保存狀況如何影響收藏價值。` }
    ]
  },
  {
    id: '03-chef',
    zh: '小廚神',
    en: 'Junior Chef',
    icon: 'chef-hat',
    type: 'sessions',
    intro: `｜這堂課在做什麼｜
從冰涼甜點到日式料理、英式下午茶，孩子們動手學習不同文化的餐桌禮儀與料理技巧。`,
    sessions: [
      { date: '0728', slug: 'sushi_culture', title: '壽司文化',
        intro: `從壽司的歷史、種類與常見食材出發，認識醋飯、海苔與配料的特色，並在料理體驗中學習日本飲食文化與用餐禮儀。` }
    ]
  },
  {
    id: '04-clay',
    zh: '樹脂黏土',
    en: 'Clay Workshop',
    icon: 'palette',
    type: 'sessions',
    intro: `｜這堂課在做什麼｜
從認識微縮世界開始，孩子們親手設計並製作屬於自己的展品，最後完成一座袖珍博物館。`,
    sessions: [
      // 待補場次資料
    ]
  },
  {
    id: '05-ai',
    zh: 'AI 課程',
    en: 'AI Studio',
    icon: 'cpu',
    type: 'sessions',
    intro: `｜這堂課在做什麼｜
孩子們嘗試用 AI 工具創作展覽主題曲，體驗人工智慧如何成為創作的新夥伴。`,
    sessions: [
      // 待補場次資料
    ]
  },
  {
    id: '06-garden',
    zh: '田園探索課',
    en: 'Garden Exploration',
    icon: 'plant-2',
    type: 'fixed',
    months: ['jul', 'aug'],
    intro: `｜這堂課在做什麼｜
每週固定的戶外探索時光，讓孩子們親近自然、觀察生態。`
  },
  {
    id: '07-japanese',
    zh: '日文探險家',
    en: 'Japanese Explorer',
    icon: 'language',
    type: 'fixed',
    months: ['jul', 'aug'],
    intro: `｜這堂課在做什麼｜
每週固定的日文學習時光，用遊戲與生活情境認識日語與日本文化。`
  },
  {
    id: '08-swim',
    zh: '游泳課',
    en: 'Aqua Explorer',
    icon: 'swimming',
    type: 'fixed',
    months: ['jul', 'aug'],
    intro: `｜這堂課在做什麼｜
每週固定外出上課，學習游泳技巧，鍛鍊體能與水中安全意識。`
  },
  {
    id: '09-fieldtrip',
    zh: '戶外教學',
    en: 'Field Trips',
    icon: 'bus',
    type: 'sessions',
    intro: `｜這堂課在做什麼｜
走出教室，實地參訪故宮博物館、自來水博物館、小叮噹科學樂園等地，把課堂所學帶進真實世界。`,
    sessions: [
      { date: '0707', slug: 'palace_artifact_secrets', title: '故宮文物大解密',
        intro: `從翠玉白菜、肉形石到毛公鼎，孩子們透過材質、年代、用途與象徵意義，深入認識故宮經典文物背後的文化故事。` },
      { date: '0707', slug: 'palace_museum_story', title: '故宮的故事',
        intro: `認識國立故宮博物院的歷史，了解珍貴文物如何來到臺灣，以及博物館如何透過溫度、濕度、燈光與修復技術保存收藏。` },
      { date: '0721', slug: 'water_museum', title: '探索自來水博物館',
        intro: `參訪前先認識水循環、自來水的淨化過程，以及臺北自來水博物館的歷史與建築特色，帶著觀察任務探索百年抽水設備。` }
    ]
  }
];

// intro 文字解析：用 ｜標題｜ 包住的行變小標題，其餘變段落文字
function parseIntroText(raw) {
  if (!raw) return [];
  const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  return lines.map(line => {
    const m = line.match(/^｜(.+)｜$/);
    if (m) return { type: 'heading', text: m[1] };
    return { type: 'para', text: line };
  });
}

// 日期字串 "0713" -> 屬於 jul 或 aug
function sessionMonth(dateStr) {
  return dateStr.slice(0, 2) === '07' ? 'jul' : 'aug';
}
// 日期字串 "0713" -> 顯示用 "07/13"
function formatSessionDate(dateStr) {
  return `${dateStr.slice(0, 2)}/${dateStr.slice(2, 4)}`;
}

function sessionPdfUrl(date, slug) {
  return rawUrl(`slides/${date}_${slug}.pdf`);
}
function sessionPdfUrlFallback(date, slug) {
  return rawUrlFallback(`slides/${date}_${slug}.pdf`);
}
function sessionPhotoUrl(date, slug, filename) {
  return rawUrl(`photos/${date}_${slug}/${filename}`);
}

// 用 GitHub API 檢查場次照片資料夾是否存在，並列出圖片檔名（不存在則回傳空陣列，不會報錯）
async function listSessionPhotoFiles(date, slug) {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO.owner}/${REPO.name}/contents/photos/${date}_${slug}?ref=${REPO.branch}`);
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
