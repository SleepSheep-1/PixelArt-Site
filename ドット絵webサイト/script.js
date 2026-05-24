/* ============================================================
   Cold Sleep — Portfolio Script
   ============================================================ */
'use strict';

// ── Palette ────────────────────────────────────────────────────
const PAL = {
  '_':null,
  'B':'#080814','b':'#12122C','K':'#0E0E22','k':'#1A1A3A','j':'#222244',
  'S':'#FFCB9A','s':'#EAA870','q':'#CC8855',
  'H':'#6B3410','h':'#9B5220','I':'#FFE566','i':'#FFD700',
  'U':'#1B3DA8','u':'#2D55CC','t':'#4470E8','T':'#6090FF',
  'Y':'#FFD700','y':'#FFE566','Z':'#B89000',
  'W':'#D8D8EC','w':'#AAAACC','V':'#6A6A8A',
  'N':'#4A2010','n':'#7A4030',
  'P':'#5522AA','p':'#7744CC','o':'#9966EE',
  'X':'#1A8A22','x':'#2ACC33','z':'#66EE44',
  'R':'#AA1111','r':'#DD2222','e':'#FF4433','E':'#FF9966',
  'O':'#CC6600','c':'#FF9933',
  'G':'#3A3A5A','g':'#555580',
  'M':'#FF88CC','C':'#22BBCC',
};

// ── 16×16 Sprites ──────────────────────────────────────────────
const SPRITES = {
  hero: {
    name:'勇者', role:'ウォーリアー', accentColor:'#4470E8',
    hp:92, mp:40, atk:82,
    data:[
      '_____IiYYYi_____',
      '____IiYYYYYi____',
      '____iYSSSSYi____',
      '____YSSSSSsy____',
      '____YSBSSBsy____',
      '____YSSSSSSy____',
      '_____YBBBBYy____',
      '____YuSSSSSu____',
      '___ZYuuuuuuYZ___',
      '__ZZYuUUUUuYZZ__',
      '__ZZYuUUUUuYZZ__',
      '__ZZYuTUTuuYZZ__',
      '___ZYYYYYYYYY___',
      '____GGGggGGG____',
      '____GGnnnnGG____',
      '____NNNNNNnn____',
    ],
  },
  mage: {
    name:'魔法使い', role:'ソーサラー', accentColor:'#9966EE',
    hp:55, mp:98, atk:95,
    data:[
      '_______Pp_______',
      '______PPPp______',
      '_____PPpPPP_____',
      '____PPpSSSpP____',
      '____pPSBSBSp____',
      '____pPSSSSPp____',
      '_____pWBBWp_____',
      '____pWWWWWWp____',
      '___opPpPpPpo____',
      '___oPPPPPPPo____',
      '__ooPPPPPPPoo___',
      '__ooPPPPPPPoo___',
      '___oopPPPpoo____',
      '___oopPPPpoo____',
      '____oopPpoo_____',
      '_____oNNoNo_____',
    ],
  },
  knight: {
    name:'騎士', role:'パラディン', accentColor:'#D8D8EC',
    hp:100, mp:28, atk:70,
    data:[
      '_____wwwwww_____',
      '____wwwwwwww____',
      '____wVVVVVVw____',
      '____WSSSSSSW____',
      '____WSBSSBsW____',
      '____WWwwwwWW____',
      '____WwwwwwwW____',
      '___YWwwwwwwYW___',
      '__YWWWWWWWWYYW__',
      '__YWWWWWWWWYyW__',
      '__YWWWtTtWWYyW__',
      '__YWWWWWWWWYyW__',
      '___YYYYYYYYYY___',
      '____VwVVwVVw____',
      '____VwNVNVwN____',
      '____NNNNNNnn____',
    ],
  },
  slime: {
    name:'スライム', role:'エネミー', accentColor:'#2ACC33',
    hp:28, mp:10, atk:18,
    data:[
      '________________',
      '______xXXx______',
      '_____xXXXXx_____',
      '____xXXXXXXx____',
      '___xXXXXXXXXx___',
      '___xXXBBXXBBx___',
      '___xXXXXXXXXx___',
      '___xXXXXXXXXx___',
      '___xXXxXXxXXx___',
      '____XXXXXXXXx___',
      '_____XXXXXXX____',
      '______XXXXX_____',
      '_______XXX______',
      '________X_______',
      '________________',
      '________________',
    ],
  },
  dragon: {
    name:'ドラゴン', role:'ボスエネミー', accentColor:'#DD2222',
    hp:100, mp:62, atk:100,
    data:[
      '__r__________r__',
      '_Rr__rRRRRr__rR_',
      '_RRrRRRRRRRRrRR_',
      '__rRREERRREERRr_',
      '__rRRRRRRRRRRr__',
      '__rRBBRRRRBBRr__',
      '___rRRRRRRRRr___',
      '___RRRBBBBRR____',
      '__RRrRRRRRrRR___',
      '__eRRRRRRRRRe___',
      '__eRRRRRRRRRe___',
      '___eRRRRRRRe____',
      '___eRRRRRRRe____',
      '____eRRRRRe_____',
      '_____eRRRe______',
      '______eRe_______',
    ],
  },
  rogue: {
    name:'盗賊', role:'ローグ', accentColor:'#9966EE',
    hp:70, mp:55, atk:88,
    data:[
      '_____gggggg_____',
      '____gkkkkkkg____',
      '____gkSSSSkg____',
      '____gkSSSSkg____',
      '____gkBSSBkg____',
      '____gkSSSSkg____',
      '_____kkBBkk_____',
      '_____kkkkkk_____',
      '___jkkkkkkkj____',
      '__jkkkkkkkkj____',
      '__jkkYYYYkkj____',
      '__jkkkkkkkj_____',
      '___jkkkkj_______',
      '____jkkkj_______',
      '____jkNkNj______',
      '_____NNNNn______',
    ],
  },
};

// ── プロフィール画像設定 ─────────────────────────────────────────────
//
//  ↓ ここだけ書き換えれば「展示について」のプロフィール画像が変わります
//
//  同じフォルダに画像を置く場合 → 'portrait.png'
//  サブフォルダの場合           → 'images/portrait.png'
//  外部 URL の場合              → 'https://example.com/photo.jpg'
//  デフォルトのドット絵に戻す  → '' (空文字)
//
const PORTRAIT_IMAGE = 'Sleepicon.png';


function drawSprite(canvas, data, scale) {
  const rows = data.length, cols = data[0].length;
  canvas.width  = cols * scale;
  canvas.height = rows * scale;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  data.forEach((row, y) => {
    for (let x = 0; x < cols; x++) {
      const c = PAL[row[x]]; if (!c) continue;
      ctx.fillStyle = c;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    }
  });
}

// ── About self-portrait ────────────────────────────────────────
function renderAboutSprite() {
  const cv    = document.getElementById('about-sprite');
  const img   = document.getElementById('about-portrait-img');
  const frame = document.getElementById('about-sprite-frame');
  if (!cv) return;

  if (PORTRAIT_IMAGE) {
    cv.style.display = 'none';
    img.src = PORTRAIT_IMAGE;
    img.hidden = false;
    if (frame) frame.classList.add('about-sprite-frame--custom');
  } else {
    cv.style.display = '';
    img.hidden = true;
    if (frame) frame.classList.remove('about-sprite-frame--custom');
    drawSprite(cv, SPRITES.hero.data, 5);
  }
}

// ── Thumbnail generator ────────────────────────────────────────
const TW=192, TH=108, PX=3;

function seededRand(seed) {
  let s = (seed|0) >>> 0;
  return () => { s = (Math.imul(1664525, s) + 1013904223) >>> 0; return s / 4294967296; };
}
function blendHex(h1, h2, t) {
  const p = h => { const c = parseInt(h.replace('#',''),16); return [(c>>16)&255,(c>>8)&255,c&255]; };
  const [a,b] = [p(h1),p(h2)];
  return `rgb(${Math.round(a[0]+(b[0]-a[0])*t)},${Math.round(a[1]+(b[1]-a[1])*t)},${Math.round(a[2]+(b[2]-a[2])*t)})`;
}

const SCHEMES = {
  rpg:       {sky:'#0A1640',mid:'#152260',ground:'#1A3A1A',acc:'#FFD700',star:'#FFEEAA',obj:'#CC4422'},
  action:    {sky:'#000012',mid:'#000830',ground:'#001230',acc:'#FF4444',star:'#FF8888',obj:'#4444FF'},
  puzzle:    {sky:'#150A2E',mid:'#22104A',ground:'#2A1A48',acc:'#FF99CC',star:'#FFCCEE',obj:'#88FFCC'},
  adventure: {sky:'#081A0C',mid:'#0E2E14',ground:'#183A18',acc:'#44FF88',star:'#AAFFCC',obj:'#FFAA22'},
  simulation:{sky:'#08141E',mid:'#101E2A',ground:'#14281A',acc:'#44CCFF',star:'#AADDFF',obj:'#AAFF44'},
  other:     {sky:'#18080A',mid:'#281010',ground:'#28100A',acc:'#FF9944',star:'#FFCCAA',obj:'#AA44FF'},
  /* 絵ギャラリー用プレースホルダー */
  art:       {sky:'#120818',mid:'#1C1030',ground:'#181028',acc:'#DD88FF',star:'#FFCCFF',obj:'#FFD700'},
};

/** opts.hiRes — ドット絵（genre art）用にキャンバスを大きく描画（一覧・モーダルで拡大しても粗くなりにくい） */
function drawThumb(canvas, genre, seed, opts = {}) {
  const hi = opts.hiRes && genre === 'art';
  const tw = hi ? 512 : TW;
  const th = hi ? 288 : TH;
  const px = hi ? 4 : PX;
  canvas.width = tw;
  canvas.height = th;
  const ctx = canvas.getContext('2d');
  const sc = SCHEMES[genre] || SCHEMES.other;
  const rng = seededRand(seed);

  const skyH = Math.floor(th * 0.62);
  for (let y = 0; y < skyH; y += px) {
    ctx.fillStyle = blendHex(sc.sky, sc.mid, y / skyH);
    ctx.fillRect(0, y, tw, px);
  }
  for (let i = 0; i < 30; i++) {
    const sx = Math.floor(rng() * (tw / px)) * px;
    const sy = Math.floor(rng() * (th * 0.55 / px)) * px;
    ctx.fillStyle = rng() > 0.5 ? sc.star : sc.acc;
    ctx.fillRect(sx, sy, rng() > 0.8 ? px * 2 : px, rng() > 0.8 ? px * 2 : px);
  }
  ctx.fillStyle = blendHex(sc.sky, sc.ground, 0.45);
  for (let col = 0; col < Math.floor(tw / px); col++) {
    const hh = Math.floor((Math.sin(col * 0.42 + seed * 0.01) * 0.5 + 0.5) * 14 + 5) * px;
    ctx.fillRect(col * px, skyH - hh, px, hh);
  }
  ctx.fillStyle = sc.ground;
  ctx.fillRect(0, skyH, tw, th);
  const gc = blendHex(sc.ground, '#FFF', 0.1);
  for (let gx = 0; gx < tw; gx += px * 2) {
    if (rng() > 0.45) {
      ctx.fillStyle = gc;
      ctx.fillRect(gx, skyH, px, px);
    }
  }
  const cx = Math.round(tw * 0.5 / px) * px;
  const cy = Math.round(th * 0.34 / px) * px;
  ctx.fillStyle = sc.acc;
  ctx.fillRect(cx - px, cy - px * 6, px * 2, px * 2);
  ctx.fillRect(cx - px * 2, cy - px * 4, px * 4, px * 4);
  ctx.fillRect(cx - px * 3, cy - px * 3, px, px * 2);
  ctx.fillRect(cx + px * 2, cy - px * 3, px, px * 2);
  ctx.fillRect(cx - px * 2, cy, px * 4, px * 3);
  const ox = Math.round(tw * 0.78 / px) * px;
  const oy = Math.round(th * 0.26 / px) * px;
  ctx.fillStyle = sc.obj;
  ctx.fillRect(ox, oy, px * 2, px * 4);
  ctx.fillRect(ox - px, oy + px, px * 4, px * 2);
  ctx.fillStyle = sc.acc + 'AA';
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(Math.floor(rng() * (tw / px)) * px, Math.floor(rng() * (th * 0.58 / px)) * px, px * 2, px * 2);
  }
}

// ── Game works (organized by year) ─────────────────────────────
//
//  image: 画像パスまたはURLを入れると自動サムネイルの代わりに表示されます
//  例: image:'images/game1.png'  または  image:'https://example.com/img.png'
//  空文字 '' のままにすると自動生成サムネイルが使われます
//
const WORKS_BY_YEAR = {
  2026: [
    {kind:'game',id:'w1',title:'アバロンの剣',       genre:'rpg',       creator:'Cold Sleep',year:2026,desc:'古代の剣を巡る壮大なRPG。ダンジョンを探索し、強大なボスを倒して世界を救え！',              tags:['ファンタジー','一人用','長編'],    url:'#',seed:11, image:''},
    {kind:'game',id:'w2',title:'スペースシューター999',genre:'action',   creator:'Cold Sleep',year:2026,desc:'宇宙を舞台にした縦スクロールシューティング。次々と現れる敵機を撃墜せよ！',          tags:['宇宙','爽快','スコアアタック'],  url:'#',seed:22, image:''},
    {kind:'game',id:'w3',title:'ブロックの迷宮',      genre:'puzzle',    creator:'Cold Sleep',year:2026,desc:'色とりどりのブロックを操作して出口を目指せ。全50ステージで頭を使おう！',           tags:['頭脳','短時間','カジュアル'],  url:'#',seed:33, image:''},
  ],
  2025: [
    {kind:'game',id:'w4',title:'森の探検家',          genre:'adventure', creator:'Cold Sleep',year:2025,desc:'不思議な森を探索するアドベンチャー。謎を解きながら妖精の王国を目指せ！',           tags:['探索','謎解き','ファンタジー'],  url:'#',seed:44, image:''},
    {kind:'game',id:'w5',title:'ドット農場',           genre:'simulation',creator:'Cold Sleep',year:2025,desc:'自分だけの農場を育てよう。種を植えて、水をやり、収穫して市場で売ろう！',           tags:['のんびり','経営','ライフシム'], url:'#',seed:55, image:''},
  ],
  2024: [
    {kind:'game',id:'w6',title:'ナイトウォーカー',    genre:'action',    creator:'Cold Sleep',year:2024,desc:'闇を駆け抜けるステルスアクション。影に隠れてトリッキーに敵を翻弄せよ！',           tags:['難易度高','スタイリッシュ'],   url:'#',seed:66, image:''},
  ],
};

// ── Pixel art / illustration works ─────────────────────────────
//
//  image: 上記ゲームと同様、画像パスまたはURLを入れると自動サムネイルの代わりに表示されます
//
const ART_BY_YEAR = {
  2026: [
    {kind:'art',id:'pa1',title:'勇者バストアップ', genre:'art', creator:'Cold Sleep',year:2026,desc:'主人公のドット絵立ち絵。ゲーム用アセットの一部。', url:'#',seed:101, image:''},
    {kind:'art',id:'pa2',title:'スライムちゃん',   genre:'art', creator:'Cold Sleep',year:2026,desc:'ゆらゆら動くスライムの一枚絵。', url:'#',seed:102, image:''},
  ],
  2025: [
    {kind:'art',id:'pa3',title:'タイトルロゴ案',   genre:'art', creator:'Cold Sleep',year:2025,desc:'レトロ調のタイトルロゴの試作。', url:'#',seed:103, image:''},
    {kind:'art',id:'pa4',title:'背景・夜空の街',   genre:'art', creator:'Cold Sleep',year:2025,desc:'パララックス用の星空と建造物。', url:'#',seed:104, image:''},
  ],
};

function cloneYearMap(staticMap, kind) {
  const map = {};
  Object.entries(staticMap).forEach(([year, works]) => {
    map[year] = works.map(w => ({ ...w, kind: w.kind || kind }));
  });
  return map;
}

/** 作品一覧は script 内のカタログのみ（投稿UIは別途追加予定） */
function getAllWorksByYear(kind) {
  const src = kind === 'game' ? WORKS_BY_YEAR : ART_BY_YEAR;
  return cloneYearMap(src, kind);
}

function getAllWorksFlat() {
  return [
    ...Object.values(getAllWorksByYear('game')).flat(),
    ...Object.values(getAllWorksByYear('art')).flat(),
  ];
}

// ── Review storage ─────────────────────────────────────────────
function getReviews()            { try{return JSON.parse(localStorage.getItem('da_reviews')||'{}')}catch{return {};} }
function getWorkReviews(id)      { return getReviews()[id]||[]; }
function saveReview(id, review) {
  if (id == null || id === '') return;
  try {
    const a = getReviews();
    (a[id] = a[id] || []).unshift(review);
    localStorage.setItem('da_reviews', JSON.stringify(a));
  } catch (e) {
    console.warn(e);
    throw e;
  }
}
function avgRating(id)           { const r=getWorkReviews(id); return r.length?r.reduce((s,x)=>s+x.rating,0)/r.length:null; }
function starsStr(n, total)      {
  if(n===null) return '';
  const f=Math.round(n);
  return `${'★'.repeat(f)}${'☆'.repeat(5-f)} ${n.toFixed(1)} (${total}件)`;
}

// ── Build a single work item element ───────────────────────────
function buildWorkItem(work) {
  const item = document.createElement('div');
  const kind = work.kind || 'game';
  item.className = kind === 'art' ? 'work-item work-item--art' : 'work-item';
  item.dataset.id = work.id;

  if (work.image) {
    const img = document.createElement('img');
    img.src = work.image;
    img.alt = work.title;
    item.appendChild(img);
  } else {
    const cv = document.createElement('canvas');
    drawThumb(cv, work.genre, work.seed || hashCode(work.id), { hiRes: kind === 'art' });
    item.appendChild(cv);
  }

  // Hover overlay
  const ov = document.createElement('div');
  ov.className = 'work-overlay';
  const avg = avgRating(work.id), cnt = getWorkReviews(work.id).length;
  const stars = avg!==null ? `<div class="wo-rating">${'★'.repeat(Math.round(avg))} ${avg.toFixed(1)}</div>` : '';
  const genreCls = kind === 'art' ? 'wo-genre wo-genre-art' : 'wo-genre';
  const genreTxt = kind === 'art' ? '絵' : genreLabel(work.genre);
  ov.innerHTML = `
    <div class="wo-meta">
      <span class="${genreCls}">${genreTxt}</span>
      <span class="wo-year">${work.year}</span>
    </div>
    <div class="wo-title">${esc(work.title)}</div>
    <div class="wo-creator">${esc(work.creator||'Cold Sleep')}</div>
    ${stars}`;
  item.appendChild(ov);

  item.addEventListener('click', () => openWorkModal(work.id));
  return item;
}

// ── Render works (games + art, separate roots) ─────────────────
function renderYearBlocksInto(rootEl, kind) {
  rootEl.innerHTML = '';
  const byYear = getAllWorksByYear(kind);

  Object.entries(byYear)
    .sort(([a],[b]) => Number(b)-Number(a))
    .forEach(([year, works]) => {
      if (!works.length) return;
      const block = document.createElement('div');
      block.className = 'works-year-block';

      const hdr = document.createElement('div');
      hdr.className = 'works-year-label';
      hdr.textContent = year;
      block.appendChild(hdr);

      const grid = document.createElement('div');
      grid.className = kind === 'art' ? 'works-grid works-grid--art' : 'works-grid';
      works.forEach(work => grid.appendChild(buildWorkItem(work)));

      block.appendChild(grid);
      rootEl.appendChild(block);
    });

  if (!rootEl.children.length) {
    const empty = document.createElement('p');
    empty.className = 'works-empty';
    empty.textContent = kind === 'game' ? '展示作品を準備中です。' : '展示作品を準備中です。';
    rootEl.appendChild(empty);
  }
}

function renderWorks() {
  renderYearBlocksInto(document.getElementById('games-root'), 'game');
  renderYearBlocksInto(document.getElementById('art-root'), 'art');
}

// ── Work detail modal ──────────────────────────────────────────
let activeWorkId = null;

function openWorkModal(id) {
  const work = getAllWorksFlat().find(w => w.id === id);
  if (!work) return;
  activeWorkId = id;

  const kind = work.kind || 'game';
  const modalPanel = document.querySelector('#work-modal .work-modal');
  if (modalPanel) modalPanel.classList.toggle('work-modal--art', kind === 'art');

  const thumbEl = document.getElementById('wm-thumb');
  thumbEl.innerHTML = '';
  if (work.image) {
    const img = document.createElement('img');
    img.id = 'wm-img';
    img.src = work.image;
    img.alt = work.title;
    img.style.cssText = 'width:100%;height:100%;object-fit:contain;display:block;';
    thumbEl.appendChild(img);
  } else {
    const cv = document.createElement('canvas');
    cv.id = 'wm-canvas';
    drawThumb(cv, work.genre, work.seed || hashCode(work.id), { hiRes: kind === 'art' });
    cv.style.width  = '100%';
    cv.style.height = '100%';
    thumbEl.appendChild(cv);
  }
  document.getElementById('wm-genre').textContent   = kind === 'art' ? '絵' : genreLabel(work.genre);
  document.getElementById('wm-genre').className     = kind === 'art' ? 'wm-genre wm-genre-art' : 'wm-genre';
  document.getElementById('wm-year').textContent    = work.year;
  document.getElementById('wm-title').textContent   = work.title;
  document.getElementById('wm-creator').textContent = 'by ' + (work.creator || 'Cold Sleep');
  document.getElementById('wm-desc').textContent    = work.desc || '';

  const avg = avgRating(id), cnt = getWorkReviews(id).length;
  document.getElementById('wm-rating').textContent = avg!==null ? starsStr(avg,cnt) : 'ご感想はまだありません';

  const playBtn = document.getElementById('wm-play');
  const linkBtn = document.getElementById('wm-link');
  const url = work.url || '#';

  if (kind === 'art') {
    playBtn.style.display = 'none';
    if (url !== '#') {
      linkBtn.href = url;
      linkBtn.style.display = 'inline-flex';
    } else {
      linkBtn.style.display = 'none';
      linkBtn.removeAttribute('href');
    }
  } else {
    playBtn.style.display = 'inline-flex';
    linkBtn.style.display = 'none';
    playBtn.href = url;
    if (url !== '#') playBtn.target = '_blank';
    else playBtn.removeAttribute('target');
  }

  renderWorkReviews(id);

  document.getElementById('work-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWorkModal() {
  document.getElementById('work-modal').classList.remove('open');
  document.body.style.overflow = '';
  activeWorkId = null;
  const modalPanel = document.querySelector('#work-modal .work-modal');
  if (modalPanel) modalPanel.classList.remove('work-modal--art');
}

function renderWorkReviews(id) {
  const container = document.getElementById('wm-reviews');
  const reviews   = getWorkReviews(id);
  if (!reviews.length) {
    container.innerHTML = '<p class="rv-empty">ご感想の投稿はまだありません。展示を楽しんだ方の一言をお待ちしています。</p>';
    return;
  }
  container.innerHTML = `<div class="wm-reviews-title">ご感想 (${reviews.length}件)</div>` +
    reviews.map(r =>
      `<div class="rv-item">
        <div class="rv-item-head">
          <span class="rv-item-name">${esc(r.name)}</span>
          <span class="rv-item-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
          <span class="rv-item-date">${r.date}</span>
        </div>
        ${r.comment ? `<p class="rv-item-text">${esc(r.comment)}</p>` : ''}
      </div>`
    ).join('');
}

function initWorkModal() {
  document.getElementById('work-close').addEventListener('click', closeWorkModal);
  document.getElementById('work-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('work-modal')) closeWorkModal();
  });
  document.getElementById('wm-review-btn').addEventListener('click', () => {
    if (!activeWorkId) return;
    const workId = activeWorkId;
    const work = getAllWorksFlat().find(w => w.id === workId);
    closeWorkModal(); // activeWorkId を null にするので、その前に ID を退避する
    openReviewModal(workId, work ? work.title : '');
  });
}

// ── Review modal ────────────────────────────────────────────────
let rvGameId='', rvStars=0;

function openReviewModal(id, title) {
  rvGameId = id != null ? String(id) : '';
  rvStars = 0;
  document.getElementById('rv-game-name').textContent = title;
  document.getElementById('rv-name').value = '';
  document.getElementById('rv-text').value = '';
  setStars(0);
  document.getElementById('review-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeReviewModal() {
  document.getElementById('review-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function setStars(val) {
  rvStars = val;
  document.querySelectorAll('#star-row .star').forEach(s => {
    s.classList.toggle('lit', parseInt(s.dataset.val) <= val);
  });
}

function initReviewModal() {
  const stars = document.querySelectorAll('#star-row .star');
  stars.forEach(s => {
    s.addEventListener('mouseover', () => stars.forEach(x => x.classList.toggle('hov', parseInt(x.dataset.val) <= parseInt(s.dataset.val))));
    s.addEventListener('mouseout',  () => stars.forEach(x => x.classList.remove('hov')));
    s.addEventListener('click',     () => setStars(parseInt(s.dataset.val)));
  });
  document.getElementById('rv-submit').addEventListener('click', () => {
    const name = document.getElementById('rv-name').value.trim();
    const comment = document.getElementById('rv-text').value.trim();
    if (!rvGameId) { showToast('作品を特定できません。作品を開き直してから再度お試しください', true); return; }
    if (!name)    { showToast('ニックネームを入力してください', true); return; }
    if (!rvStars) { showToast('評価を選択してください', true); return; }
    const date = new Date().toLocaleDateString('ja-JP',{year:'numeric',month:'2-digit',day:'2-digit'});
    try {
      saveReview(rvGameId, { name, rating: rvStars, comment, date });
    } catch {
      showToast('保存に失敗しました（ブラウザの容量不足の可能性があります）', true);
      return;
    }
    closeReviewModal();
    renderWorks();
    showToast('ご感想をお預かりしました。');
    const work = getAllWorksFlat().find(w => w.id === rvGameId);
    notifyEmail({
      _subject: `【Cold Sleep】ご感想: 『${work?.title ?? rvGameId}』 ★${rvStars} / ${name}`,
      作品: work?.title ?? rvGameId,
      評価: `★${rvStars}`,
      ニックネーム: name,
      コメント: comment || '（コメントなし）',
      日時: date,
    });
  });
  document.getElementById('rv-close').addEventListener('click', closeReviewModal);
  document.getElementById('rv-cancel').addEventListener('click', closeReviewModal);
  document.getElementById('review-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('review-modal')) closeReviewModal();
  });
}

// ── Contact / Message board ─────────────────────────────────────
const TYPE_LABELS = {review:'感想',bug:'バグ報告',character:'キャラ',work:'お仕事',other:'その他'};

function getMsgs() { try{return JSON.parse(localStorage.getItem('da_msgs')||'[]')}catch{return[];} }
function saveMsg(m){ const a=getMsgs(); a.unshift(m); localStorage.setItem('da_msgs',JSON.stringify(a.slice(0,20))); }

function renderMsgs() {
  const list = document.getElementById('msg-list');
  const msgs = getMsgs();
  if (!msgs.length) { list.innerHTML='<p style="font-size:12px;color:var(--text-3);text-align:center;padding:24px 0">まだメッセージはありません</p>'; return; }
  const grid = document.createElement('div'); grid.className='msg-grid';
  msgs.slice(0,6).forEach(m => {
    grid.innerHTML += `<div class="msg-card">
      <div class="msg-card-type">${esc(TYPE_LABELS[m.type]||m.type)} / ${esc(m.name)}</div>
      <p class="msg-card-body">${esc(m.msg.slice(0,80))}${m.msg.length>80?'…':''}</p>
      <div class="msg-card-meta"><span>${m.game?'『'+esc(m.game)+'』':''}</span><span>${m.date}</span></div>
    </div>`;
  });
  list.innerHTML = ''; list.appendChild(grid);
}

function initContactForm() {
  const form  = document.getElementById('contact-form');
  const type  = document.getElementById('c-type');
  const gg    = document.getElementById('c-game-group');
  const workHint = document.getElementById('c-work-mail-hint');

  function syncContactTypeUI() {
    const v = type.value;
    gg.style.display = (v === 'review' || v === 'bug') ? '' : 'none';
    if (workHint) workHint.hidden = v !== 'work';
  }

  type.addEventListener('change', syncContactTypeUI);
  syncContactTypeUI();

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('c-name').value.trim();
    const tv   = type.value;
    const msg  = document.getElementById('c-msg').value.trim();
    const game = document.getElementById('c-game').value.trim();
    let ok = true;
    [['c-name',name],['c-type',tv],['c-msg',msg]].forEach(([id,v])=>{
      const el=document.getElementById(id);
      if(!v){el.classList.add('error');ok=false;} else el.classList.remove('error');
    });
    if(!ok){showToast('必須項目を入力してください',true);return;}
    const date = new Date().toLocaleDateString('ja-JP',{year:'numeric',month:'2-digit',day:'2-digit'});
    saveMsg({name,type:tv,msg,game,date});
    renderMsgs();
    form.reset();
    syncContactTypeUI();
    showToast('送信しました！ありがとうございます');
    notifyEmail({
      _subject: `【Cold Sleep】お問い合わせ: ${TYPE_LABELS[tv] ?? tv} / ${name}`,
      種別: TYPE_LABELS[tv] ?? tv,
      お名前: name,
      対象作品: game || '（なし）',
      メッセージ: msg,
      日時: date,
    });
  });
  form.querySelectorAll('.form-input').forEach(el=>el.addEventListener('input',()=>el.classList.remove('error')));
  renderMsgs();
}

// ── メール通知設定 ──────────────────────────────────────────────────
/**
 * Formspree のエンドポイントを貼るだけでメール通知が届くようになります。
 *
 * 設定手順:
 *   1. https://formspree.io/ で無料アカウントを作成
 *   2. "+ New Form" → 受信したいメールアドレスを登録
 *   3. 発行された URL（例: https://formspree.io/f/abcdefgh）を下の NOTIFY_ENDPOINT に貼る
 *
 * 空のままにしておくと通知なし・localStorage のみの動作になります（従来通り）。
 */
const NOTIFY_ENDPOINT = ''; // ← ここに Formspree の URL を貼る

/**
 * Formspree へ POST して通知メールを送る。
 * endpoint が未設定の場合は何もしない（エラーにならない）。
 */
async function notifyEmail(payload) {
  if (!NOTIFY_ENDPOINT) return;
  try {
    await fetch(NOTIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // 通知失敗はサイレントに無視（ユーザー体験を壊さない）
  }
}

// ── Landing typewriter（ヒーロー + 常設展示ブロック）────────────────
/** ランディングのタイプライター文言（編集後は index.html の script クエリを更新するか、強制再読み込みしてください） */
const LANDING_TYPE = {
  kicker: 'Stay Cold, See Dreams',
  heroL1: '凍てつく静寂に、',
  heroL2: 'ピクセルが宿る。',
  bodyL1: 'Cold Sleep の小さな展示室。',
  bodyL2: 'ドット絵とインタラクティブな作品を、',
  bodyL3: 'ひとつの冷たい空間に並べています。',
  worksTitle: '常設展示',
  worksSub: 'Exhibition',
  worksLead: '遊べる一室と、絵画の二室。閲覧のみの静かな構成です。',
  nav1: 'インタラクティブ',
  nav2: '絵画・ドット絵',
};

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** 句読点のあと一拍おく（展示文案のリズム） */
function pauseAfterChar(ch) {
  if ('、，。．！？…,.!?'.includes(ch)) return 160 + Math.floor(Math.random() * 80);
  return 0;
}

/** 1 文字ずつ表示。cps ≒ およそ秒あたりの文字数（大きいほど速い） */
function typeInto(el, text, options = {}) {
  const { cps = 10, gapAfter = 0 } = options;
  if (!el) return Promise.resolve();
  if (prefersReducedMotion()) {
    el.textContent = text;
    return sleep(gapAfter);
  }
  const base = Math.max(28, Math.floor(1000 / cps));
  return new Promise(resolve => {
    let i = 0;
    el.classList.add('type-active');
    const tick = () => {
      i += 1;
      el.textContent = text.slice(0, i);
      if (i < text.length) {
        const ch = text[i - 1];
        const extra = pauseAfterChar(ch);
        const jitter = Math.floor(Math.random() * 14);
        setTimeout(tick, base + extra + jitter);
      } else {
        el.classList.remove('type-active');
        setTimeout(() => resolve(), gapAfter);
      }
    };
    tick();
  });
}

async function runLandingTypewriter() {
  if (prefersReducedMotion()) {
    document.getElementById('hero-kicker-text').textContent = LANDING_TYPE.kicker;
    document.getElementById('hero-type-l1').textContent = LANDING_TYPE.heroL1;
    document.getElementById('hero-type-l2').textContent = LANDING_TYPE.heroL2;
    document.getElementById('hero-body-l1').textContent = LANDING_TYPE.bodyL1;
    document.getElementById('hero-body-l2').textContent = LANDING_TYPE.bodyL2;
    document.getElementById('hero-body-l3').textContent = LANDING_TYPE.bodyL3;
    document.getElementById('works-type-title').textContent = LANDING_TYPE.worksTitle;
    document.getElementById('works-type-sub').textContent = LANDING_TYPE.worksSub;
    document.getElementById('works-type-lead').textContent = LANDING_TYPE.worksLead;
    document.getElementById('works-type-nav1').textContent = LANDING_TYPE.nav1;
    document.getElementById('works-type-nav2').textContent = LANDING_TYPE.nav2;
    return;
  }
  await sleep(720);
  await typeInto(document.getElementById('hero-kicker-text'), LANDING_TYPE.kicker, { cps: 11 });
  await sleep(480);
  await typeInto(document.getElementById('hero-type-l1'), LANDING_TYPE.heroL1, { cps: 7.5 });
  await typeInto(document.getElementById('hero-type-l2'), LANDING_TYPE.heroL2, { cps: 7.5 });
  await sleep(420);
  await typeInto(document.getElementById('hero-body-l1'), LANDING_TYPE.bodyL1, { cps: 8.5 });
  await typeInto(document.getElementById('hero-body-l2'), LANDING_TYPE.bodyL2, { cps: 9 });
  await typeInto(document.getElementById('hero-body-l3'), LANDING_TYPE.bodyL3, { cps: 9 });
  await sleep(560);
  await typeInto(document.getElementById('works-type-title'), LANDING_TYPE.worksTitle, { cps: 6.5 });
  await typeInto(document.getElementById('works-type-sub'), LANDING_TYPE.worksSub, { cps: 12 });
  await typeInto(document.getElementById('works-type-lead'), LANDING_TYPE.worksLead, { cps: 9.5 });
  await sleep(360);
  await typeInto(document.getElementById('works-type-nav1'), LANDING_TYPE.nav1, { cps: 8.5 });
  await typeInto(document.getElementById('works-type-nav2'), LANDING_TYPE.nav2, { cps: 8.5 });
}

// ── Nav scroll ──────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, {passive:true});

  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('nav-drawer');
  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.classList.toggle('open', open);
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    drawer.classList.remove('open');
    toggle.classList.remove('open');
  }));
}

// ── Stat counters in hero ───────────────────────────────────────
// (no stat counters in this version — clean portfolio style)

// ── Helpers ─────────────────────────────────────────────────────
function genreLabel(g){ return {rpg:'RPG',action:'ACT',puzzle:'PZL',adventure:'ADV',simulation:'SIM',other:'?',art:'絵'}[g]||'?'; }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function hashCode(str){ let h=0; for(const c of String(str)) h=(Math.imul(31,h)+c.charCodeAt(0))|0; return h; }

// ── Toast ────────────────────────────────────────────────────────
function showToast(msg, isErr) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (isErr?' err':'') + ' show';
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.className = 'toast' + (isErr?' err':''); }, 3200);
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  runLandingTypewriter();
  renderWorks();
  renderAboutSprite();
  initWorkModal();
  initReviewModal();
  initContactForm();
  initNav();
});
