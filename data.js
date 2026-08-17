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
    skills: ['圖層概念', '色彩理論', '構圖邏輯'],
    intro: `｜從一張空白畫布開始｜
孩子們使用iPad初步接觸圖層、構圖、透明度、像素藝術與色彩搭配，透過簡單的操作與練習，嘗試完成角色和小作品。
課程以體驗為主，讓孩子認識不同的數位創作工具，並試著把自己的想法呈現在畫面上。`,
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
    skills: ['觀察力', '推理邏輯', '策展思維'],
    intro: `｜從文物認識不同的故事｜
孩子們透過世界博物館、故宮文物、袖珍藝術與標本收藏等主題，初步認識文物的材質、用途、歷史與保存方式。
課程搭配圖片、投影片與討論，鼓勵孩子練習觀察細節，並從文物中認識不同時代與文化。`,
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
    skills: ['飲食文化', '食材知識', '用餐禮儀'],
    intro: `｜從料理認識不同文化｜
從冰涼甜點、日式料理到英式下午茶，孩子們透過簡單的料理活動接觸不同食材，也認識各國飲食文化與基本餐桌禮儀。
課程以動手體驗為主，讓孩子參與準備與製作過程，享受一起完成料理的樂趣。`,
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
    skills: ['比例概念', '造型思維', '空間美感'],
    intro: `｜動手製作自己的小作品｜
孩子們先從圖片與袖珍藝術中尋找靈感，再使用樹脂黏土嘗試製作簡單的微縮作品。
課程讓孩子初步體驗造型、配色與細節製作，並依照自己的主題設計小小展品。`,
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
    skills: ['提示詞邏輯', '創意發想', '人機協作'],
    intro: `｜認識AI創作工具｜
孩子們初步接觸AI工具，嘗試設定主題、整理想法、撰寫簡單歌詞，並體驗如何產生不同風格的音樂。
課程重點是認識AI可以怎麼協助創作，同時練習提出比較清楚的指令與想法。`,
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
    skills: ['文本理解', '延伸閱讀', '自然知識'],
    intro: `｜從閱讀認識自然｜
這次課程以「竹子」為主題，孩子們透過素養閱讀，初步認識竹子的生長特色、用途，以及它與生活環境之間的關係。
課程以閱讀理解與討論為主，練習從文章中找出重點，並分享自己的觀察與想法。`
  },
  {
    id: '07-japanese',
    zh: '日文探險家',
    en: 'Japanese Explorer',
    icon: 'language',
    type: 'fixed',
    months: ['jul', 'aug'],
    skills: ['五十音', '基礎字詞', '簡單句型'],
    intro: `｜從生活情境接觸日語｜
孩子們透過圖片、遊戲及生活情境，接觸簡單的日語單字與表達方式，也認識部分日本飲食、節慶與生活文化。
課程以輕鬆體驗為主，讓孩子對日語產生基本認識與興趣。`
  },
  {
    id: '08-swim',
    zh: '游泳課',
    en: 'Aqua Explorer',
    icon: 'swimming',
    type: 'fixed',
    months: ['jul', 'aug'],
    skills: ['換氣原理', '水中安全', '自信建立'],
    intro: `｜每週的水中活動｜
孩子們每週外出進行游泳課程，依照個別程度練習基本動作、呼吸與水中活動。
除了活動身體，也讓孩子逐步熟悉水性，並建立基本的水中安全觀念。`
  },
  {
    id: '09-fieldtrip',
    zh: '戶外教學',
    en: 'Field Trips',
    icon: 'bus',
    type: 'sessions',
    skills: ['實地觀察', '知識應用'],
    intro: `｜把課堂延伸到不同場域｜
暑假期間，我們安排故宮博物院、自來水博物館、袖珍博物館及小叮噹科學主題樂園等戶外教學。
孩子們透過實際參觀與現場觀察，接觸課堂中介紹過的文物、建築、科學及生活主題。`,
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
