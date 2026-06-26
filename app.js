const STORAGE_KEY = 'siddur-v2-state';

const library = [
  {
    id: 'shacharit',
    collection: 'Siddur',
    title: 'Shacharit',
    subtitle: 'Morning prayer flow',
    icon: '☀',
    pages: [
      {
        title: 'Modeh Ani',
        hebrew: 'מודה אני לפניך, מלך חי וקיים, שהחזרת בי נשמתי בחמלה, רבה אמונתך.',
        text: 'I give thanks before You, living and eternal King, for returning my soul to me with compassion. Great is Your faithfulness.',
      },
      {
        title: 'Asher Yatzar',
        hebrew: 'ברוך אתה ה׳ אלקינו מלך העולם, אשר יצר את האדם בחכמה.',
        text: 'Blessed are You, Hashem our God, King of the universe, who formed the human being with wisdom and created the body with wondrous openings and vessels.',
      },
      {
        title: 'Birchot HaTorah',
        hebrew: 'ברוך אתה ה׳, נותן התורה.',
        text: 'Blessed are You, Hashem, giver of the Torah. May the words of Torah be sweet in our mouths and in the mouths of Your people.',
      },
      {
        title: 'Shema',
        hebrew: 'שמע ישראל, ה׳ אלקינו, ה׳ אחד. ברוך שם כבוד מלכותו לעולם ועד.',
        text: 'Hear, Israel: Hashem is our God, Hashem is One. Blessed is the name of His glorious kingdom forever and ever.',
      },
      {
        title: 'Aleinu',
        hebrew: 'עלינו לשבח לאדון הכל, לתת גדולה ליוצר בראשית.',
        text: 'It is upon us to praise the Master of all, to ascribe greatness to the Creator of creation.',
      },
    ],
  },
  {
    id: 'mincha',
    collection: 'Siddur',
    title: 'Mincha',
    subtitle: 'Afternoon prayer',
    icon: '◐',
    pages: [
      {
        title: 'Ashrei',
        hebrew: 'אשרי יושבי ביתך, עוד יהללוך סלה.',
        text: 'Fortunate are those who dwell in Your house; they will continue to praise You forever.',
      },
      {
        title: 'Amidah Preparation',
        hebrew: 'ה׳ שפתי תפתח, ופי יגיד תהלתך.',
        text: 'Hashem, open my lips, and my mouth will declare Your praise.',
      },
      {
        title: 'Oseh Shalom',
        hebrew: 'עושה שלום במרומיו, הוא יעשה שלום עלינו ועל כל ישראל.',
        text: 'May the One who makes peace in His heights make peace upon us and upon all Israel.',
      },
    ],
  },
  {
    id: 'maariv',
    collection: 'Siddur',
    title: 'Maariv',
    subtitle: 'Evening prayer',
    icon: '☾',
    pages: [
      {
        title: 'Baruch Hashem',
        hebrew: 'ברוך ה׳ לעולם, אמן ואמן.',
        text: 'Blessed is Hashem forever. Amen and amen.',
      },
      {
        title: 'Hashkiveinu',
        hebrew: 'השכיבנו ה׳ אלקינו לשלום, והעמידנו מלכנו לחיים.',
        text: 'Lay us down, Hashem our God, in peace, and raise us, our King, to life.',
      },
      {
        title: 'Shema at Night',
        hebrew: 'בידך אפקיד רוחי, פדיתה אותי ה׳ א-ל אמת.',
        text: 'Into Your hand I entrust my spirit; You have redeemed me, Hashem, God of truth.',
      },
    ],
  },
  {
    id: 'tehillim-23',
    collection: 'Tehillim',
    title: 'Tehillim 23',
    subtitle: 'Confidence and calm',
    icon: '♬',
    pages: [
      {
        title: 'Psalm 23',
        hebrew: 'ה׳ רועי לא אחסר. בנאות דשא ירביצני, על מי מנחות ינהלני.',
        text: 'Hashem is my shepherd; I shall not lack. He lays me down in green pastures and leads me beside still waters.',
      },
      {
        title: 'Closing',
        hebrew: 'אך טוב וחסד ירדפוני כל ימי חיי, ושבתי בבית ה׳ לאורך ימים.',
        text: 'Only goodness and kindness shall pursue me all the days of my life, and I shall dwell in the house of Hashem for long days.',
      },
    ],
  },
  {
    id: 'tehillim-121',
    collection: 'Tehillim',
    title: 'Tehillim 121',
    subtitle: 'Protection for the road',
    icon: '△',
    pages: [
      {
        title: 'Psalm 121',
        hebrew: 'אשא עיני אל ההרים, מאין יבוא עזרי. עזרי מעם ה׳, עושה שמים וארץ.',
        text: 'I lift my eyes to the mountains; from where will my help come? My help comes from Hashem, maker of heaven and earth.',
      },
      {
        title: 'Guarding',
        hebrew: 'ה׳ ישמר צאתך ובואך מעתה ועד עולם.',
        text: 'Hashem will guard your going out and your coming in, from now and forever.',
      },
    ],
  },
  {
    id: 'havdalah',
    collection: 'Daily',
    title: 'Havdalah',
    subtitle: 'After Shabbat',
    icon: '✺',
    pages: [
      {
        title: 'Opening',
        hebrew: 'הנה א-ל ישועתי, אבטח ולא אפחד.',
        text: 'Behold, God is my salvation; I will trust and not be afraid.',
      },
      {
        title: 'Separation',
        hebrew: 'ברוך אתה ה׳, המבדיל בין קודש לחול.',
        text: 'Blessed are You, Hashem, who separates between holy and weekday.',
      },
    ],
  },
];

const collections = ['Siddur', 'Tehillim', 'Daily'];

const app = document.querySelector('#app');
const tabs = [...document.querySelectorAll('.tab')];
const sheet = document.querySelector('#settingsSheet');
const sheetBackdrop = document.querySelector('#sheetBackdrop');
const menuButton = document.querySelector('#menuButton');
const closeSheetButton = document.querySelector('#closeSheetButton');
const fontSizeInput = document.querySelector('#fontSizeInput');
const themeToggle = document.querySelector('#themeToggle');
const clearProgressButton = document.querySelector('#clearProgressButton');

const defaultState = {
  tab: 'home',
  readerId: null,
  page: 0,
  query: '',
  saved: [],
  recent: null,
  fontSize: 19,
  sepia: false,
  turn: 'next',
};

let state = loadState();

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
  } catch {
    return { ...defaultState };
  }
}

function persist() {
  const { turn, ...stored } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

function setState(next) {
  state = { ...state, ...next };
  persist();
  render();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function findText(id) {
  return library.find((item) => item.id === id) || library[0];
}

function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
}

function todayLabel() {
  return new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date());
}

function openReader(id, page = 0, turn = 'next') {
  const text = findText(id);
  const safePage = Math.max(0, Math.min(page, text.pages.length - 1));
  state.recent = { id, page: safePage, at: Date.now() };
  setState({ tab: 'reader', readerId: id, page: safePage, turn });
}

function setActiveTab() {
  tabs.forEach((tab) => {
    const active = tab.dataset.tab === state.tab || (state.tab === 'reader' && tab.dataset.tab === 'texts');
    tab.classList.toggle('active', active);
  });
}

function resultRows(items) {
  return items.map((item) => `
    <button class="row-button" data-open="${item.id}" type="button">
      <span class="row-icon" aria-hidden="true">${item.icon}</span>
      <span>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.collection)} · ${escapeHtml(item.subtitle)} · ${item.pages.length} pages</span>
      </span>
      <span class="chevron" aria-hidden="true">›</span>
    </button>
  `).join('');
}

function renderHome() {
  const recent = state.recent ? findText(state.recent.id) : library[0];
  const recentPage = state.recent?.page || 0;
  return `
    <section class="hero-card">
      <div class="eyebrow">${todayLabel()}</div>
      <h1>${greeting()}, Shaya.</h1>
      <p>Open the Siddur, turn pages by swipe or tap, search core texts, and keep your place offline.</p>
    </section>

    <label class="search-card" aria-label="Search prayer texts">
      <span aria-hidden="true">⌕</span>
      <input id="homeSearch" type="search" value="${escapeHtml(state.query)}" placeholder="Search siddur, tehillim, parsha..." />
    </label>

    <section class="quick-grid" aria-label="Main sections">
      ${collections.map((name) => `
        <button class="quick-card" data-collection="${name}" type="button">
          <span class="quick-icon" aria-hidden="true">${name === 'Siddur' ? '✦' : name === 'Tehillim' ? '♬' : '◷'}</span>
          <span class="quick-title">${name}</span>
          <span class="quick-subtitle">${library.filter((item) => item.collection === name).length} ready texts</span>
        </button>
      `).join('')}
      <button class="quick-card" data-tab-target="saved" type="button">
        <span class="quick-icon" aria-hidden="true">◇</span>
        <span class="quick-title">Saved</span>
        <span class="quick-subtitle">${state.saved.length || 'No'} bookmarks</span>
      </button>
    </section>

    <section class="section stack">
      <div class="section-label">Continue</div>
      <button class="row-button" data-open="${recent.id}" data-page="${recentPage}" type="button">
        <span class="row-icon" aria-hidden="true">${recent.icon}</span>
        <span>
          <strong>${escapeHtml(recent.title)}</strong>
          <span>Page ${recentPage + 1} of ${recent.pages.length} · ${escapeHtml(recent.subtitle)}</span>
        </span>
        <span class="chevron" aria-hidden="true">›</span>
      </button>
    </section>
  `;
}

function renderTexts() {
  const query = state.query.trim().toLowerCase();
  const filtered = library.filter((item) => {
    const haystack = [item.title, item.subtitle, item.collection, ...item.pages.flatMap((page) => [page.title, page.text, page.hebrew])].join(' ').toLowerCase();
    return !query || haystack.includes(query);
  });

  return `
    <label class="search-card" aria-label="Search all texts">
      <span aria-hidden="true">⌕</span>
      <input id="textSearch" type="search" value="${escapeHtml(state.query)}" placeholder="Search every page..." autofocus />
    </label>
    <section class="stack">
      ${filtered.length ? resultRows(filtered) : `
        <div class="empty-state">
          <div>
            <h2>No matches</h2>
            <p>Try Shema, Tehillim, morning, protection, or Havdalah.</p>
          </div>
        </div>
      `}
    </section>
  `;
}

function renderDaily() {
  const hour = new Date().getHours();
  const recommended = hour < 12 ? 'shacharit' : hour < 18 ? 'mincha' : 'maariv';
  const cards = ['shacharit', 'mincha', 'maariv', 'havdalah'].map(findText);
  return `
    <section class="hero-card">
      <div class="eyebrow">Daily flow</div>
      <h1>Today is ready.</h1>
      <p>Suggested now: ${escapeHtml(findText(recommended).title)}. You can still open any prayer directly.</p>
    </section>
    <section class="section stack">
      ${resultRows(cards)}
    </section>
  `;
}

function renderSaved() {
  const savedTexts = state.saved.map(findText).filter(Boolean);
  if (!savedTexts.length) {
    return `
      <div class="empty-state">
        <div>
          <h2>No saved texts yet</h2>
          <p>Open any prayer and tap Save. It will stay here and work offline.</p>
        </div>
      </div>
    `;
  }
  return `<section class="stack">${resultRows(savedTexts)}</section>`;
}

function renderNavi() {
  return `
    <section class="prompt-card">
      <div class="eyebrow">NaviOS guide</div>
      <h1>What can I open?</h1>
      <p>This local guide can route you instantly. Tap a prompt and the app opens the right section.</p>
    </section>
    <section class="section stack">
      <button class="row-button" data-open="shacharit" type="button"><span class="row-icon">☀</span><span><strong>Start morning prayers</strong><span>Open Shacharit at the first page</span></span><span class="chevron">›</span></button>
      <button class="row-button" data-open="tehillim-121" type="button"><span class="row-icon">△</span><span><strong>Prayer for travel</strong><span>Open Tehillim 121</span></span><span class="chevron">›</span></button>
      <button class="row-button" data-tab-target="texts" type="button"><span class="row-icon">⌕</span><span><strong>Search the Siddur</strong><span>Find words across every stored page</span></span><span class="chevron">›</span></button>
    </section>
  `;
}

function renderReader() {
  const text = findText(state.readerId);
  const pageIndex = Math.max(0, Math.min(state.page, text.pages.length - 1));
  const page = text.pages[pageIndex];
  const isSaved = state.saved.includes(text.id);
  return `
    <section class="reader-shell">
      <div class="reader-topline">
        <button class="reader-nav-button" data-tab-target="texts" aria-label="Back to texts" type="button">‹</button>
        <div class="reader-title">
          <h1>${escapeHtml(text.title)}</h1>
          <p>${escapeHtml(text.collection)} · Page ${pageIndex + 1} of ${text.pages.length}</p>
        </div>
        <button class="reader-nav-button" data-save="${text.id}" aria-label="${isSaved ? 'Remove bookmark' : 'Save text'}" type="button">${isSaved ? '◆' : '◇'}</button>
      </div>

      <article class="reader-card turn-${state.turn}" id="readerCard">
        <div class="reader-page-label">${escapeHtml(page.title)}</div>
        <h2>${escapeHtml(page.title)}</h2>
        <div class="prayer-block">
          <div class="hebrew">${escapeHtml(page.hebrew)}</div>
          <div class="translation">${escapeHtml(page.text)}</div>
        </div>
        <div class="reader-footer">
          <button class="pill-button" data-page-prev type="button" ${pageIndex === 0 ? 'disabled' : ''}>Prev</button>
          <div class="page-dots" aria-label="Page position">
            ${text.pages.map((_, index) => `<span class="${index === pageIndex ? 'active' : ''}"></span>`).join('')}
          </div>
          <button class="pill-button" data-page-next type="button" ${pageIndex === text.pages.length - 1 ? 'disabled' : ''}>Next</button>
        </div>
      </article>

      <div class="reader-actions">
        <button data-copy-page type="button">Copy page</button>
        <button data-share-page type="button">Share</button>
      </div>
    </section>
  `;
}

function render() {
  document.documentElement.style.setProperty('--reader-size', `${state.fontSize}px`);
  document.body.classList.toggle('sepia', state.sepia);
  setActiveTab();

  if (state.tab === 'texts') app.innerHTML = renderTexts();
  else if (state.tab === 'daily') app.innerHTML = renderDaily();
  else if (state.tab === 'saved') app.innerHTML = renderSaved();
  else if (state.tab === 'navi') app.innerHTML = renderNavi();
  else if (state.tab === 'reader') app.innerHTML = renderReader();
  else app.innerHTML = renderHome();

  bindRenderedControls();
}

function bindRenderedControls() {
  app.querySelectorAll('[data-open]').forEach((button) => {
    button.addEventListener('click', () => openReader(button.dataset.open, Number(button.dataset.page || 0)));
  });

  app.querySelectorAll('[data-tab-target]').forEach((button) => {
    button.addEventListener('click', () => setState({ tab: button.dataset.tabTarget }));
  });

  app.querySelectorAll('[data-collection]').forEach((button) => {
    button.addEventListener('click', () => setState({ tab: 'texts', query: button.dataset.collection }));
  });

  ['homeSearch', 'textSearch'].forEach((id) => {
    const input = app.querySelector(`#${id}`);
    if (input) {
      input.addEventListener('input', (event) => {
        state.query = event.target.value;
        persist();
        if (id === 'homeSearch' && event.target.value.trim()) setState({ tab: 'texts' });
      });
    }
  });

  const prev = app.querySelector('[data-page-prev]');
  const next = app.querySelector('[data-page-next]');
  if (prev) prev.addEventListener('click', () => turnPage(-1));
  if (next) next.addEventListener('click', () => turnPage(1));

  const save = app.querySelector('[data-save]');
  if (save) {
    save.addEventListener('click', () => {
      const id = save.dataset.save;
      const saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id];
      setState({ saved });
    });
  }

  const copyButton = app.querySelector('[data-copy-page]');
  if (copyButton) copyButton.addEventListener('click', copyCurrentPage);

  const shareButton = app.querySelector('[data-share-page]');
  if (shareButton) shareButton.addEventListener('click', shareCurrentPage);

  const readerCard = app.querySelector('#readerCard');
  if (readerCard) bindSwipe(readerCard);
}

function turnPage(delta) {
  if (state.tab !== 'reader') return;
  const text = findText(state.readerId);
  const nextPage = Math.max(0, Math.min(state.page + delta, text.pages.length - 1));
  if (nextPage === state.page) return;
  openReader(text.id, nextPage, delta > 0 ? 'next' : 'prev');
}

function currentPageText() {
  const text = findText(state.readerId);
  const page = text.pages[state.page] || text.pages[0];
  return `${text.title} - ${page.title}\n\n${page.hebrew}\n\n${page.text}`;
}

async function copyCurrentPage() {
  try {
    await navigator.clipboard.writeText(currentPageText());
    flashButton('[data-copy-page]', 'Copied');
  } catch {
    flashButton('[data-copy-page]', 'Unavailable');
  }
}

async function shareCurrentPage() {
  const shareData = { title: 'Siddur', text: currentPageText() };
  if (navigator.share) {
    await navigator.share(shareData).catch(() => {});
  } else {
    await copyCurrentPage();
  }
}

function flashButton(selector, label) {
  const button = app.querySelector(selector);
  if (!button) return;
  const original = button.textContent;
  button.textContent = label;
  setTimeout(() => {
    button.textContent = original;
  }, 900);
}

function bindSwipe(element) {
  let startX = 0;
  let startY = 0;
  element.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, { passive: true });

  element.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.35) {
      turnPage(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    setState({ tab: target, query: target === 'texts' ? state.query : state.query });
  });
});

function openSheet() {
  fontSizeInput.value = String(state.fontSize);
  themeToggle.checked = state.sepia;
  sheet.hidden = false;
  sheetBackdrop.hidden = false;
}

function closeSheet() {
  sheet.hidden = true;
  sheetBackdrop.hidden = true;
}

menuButton.addEventListener('click', openSheet);
document.querySelector('#profileButton').addEventListener('click', openSheet);
closeSheetButton.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);

fontSizeInput.addEventListener('input', (event) => setState({ fontSize: Number(event.target.value) }));
themeToggle.addEventListener('change', (event) => setState({ sepia: event.target.checked }));
clearProgressButton.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEY);
  state = { ...defaultState };
  closeSheet();
  render();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') turnPage(1);
  if (event.key === 'ArrowLeft') turnPage(-1);
  if (event.key === 'Escape') closeSheet();
});

render();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
