/* ============================================================
   Meer Merel — Merel Janssen  |  script.js

   Inhoud aanpassen: zoek de secties ARTWORKS, CV_DATA,
   CONTACT_DATA en AGENDA_DATA hieronder.
   Afbeeldingen horen in de map /images/.
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// VERTALINGEN
// ─────────────────────────────────────────────────────────────

const i18n = {
  nl: {
    nav: {
      about:   'Over mij',
      archive: 'Archief',
      contact: 'Contact',
      agenda:  'Agenda',
    },
    sections: {
      about:   'Over mij',
      archive: 'Archief',
      contact: 'Contact',
      agenda:  'Agenda',
    },
    cv: {
      personal:     'Persoonsgegevens',
      education:    'Opleidingen',
      residencies:  'Residenties',
      exhibitions:  'Tentoonstellingen',
      collections:  'Collecties',
      publications: 'Publicaties',
      internships:  'Stage',
      other:        'Overig',
      born:         'Geboren',
      lives:        'Woont en werkt',
    },
    contact: {
      email:    'E-mail',
      instagram:'Instagram',
      phone:    'Telefoon',
    },
    agenda: {
      current:   'Lopend',
      upcoming:  'Aankomend',
      nowShowing:'Nu te zien',
      badge:     'Aankomend',
      empty:     'Binnenkort meer informatie.',
    },
    statement: `
      <p>Mijn werk is zich bewust van jou.</p>
      <p>
        In mijn praktijk onderzoek ik de grens tussen kijken en bekeken worden. De
        interactie tussen publiek en werk zie ik als een tijdelijke ontmoeting, waarin de
        toeschouwer onderdeel wordt van het werk zelf.
      </p>
      <p>
        Die ontmoeting vertaalt zich in het beeld. Een vragende blik doorbreekt de vierde
        wand van het schilderij en sculpturen houden de toeschouwer in hun vizier.
      </p>
      <p>
        Op het doek keren herkenbare figuren terug die verdwijnen in hun omgeving en
        oplossen in de achtergrond. Ze bevinden zich tussen het tastbare en het
        ongrijpbare, net zoals de materialen waaruit zij zijn opgebouwd.
      </p>
      <p>
        Ledlicht en olieverf vormen een oppervlak dat zich telkens opnieuw verhoudt tot de
        waarnemer. Wellicht beweegt het werk nog net, precies wanneer jouw ogen een
        andere kant op dwalen.
      </p>
    `,
  },

  en: {
    nav: {
      about:   'About',
      archive: 'Archive',
      contact: 'Contact',
      agenda:  'Events',
    },
    sections: {
      about:   'About',
      archive: 'Archive',
      contact: 'Contact',
      agenda:  'Events',
    },
    cv: {
      personal:     'Personal',
      education:    'Education',
      residencies:  'Residencies',
      exhibitions:  'Exhibitions',
      collections:  'Collections',
      publications: 'Publications',
      internships:  'Internship',
      other:        'Other',
      born:         'Born',
      lives:        'Lives and works',
    },
    contact: {
      email:    'E-mail',
      instagram:'Instagram',
      phone:    'Phone',
    },
    agenda: {
      current:   'Current',
      upcoming:  'Upcoming',
      nowShowing:'On view',
      badge:     'Upcoming',
      empty:     'More information coming soon.',
    },
    statement: `
      <p>My work is aware of you.</p>
      <p>
        In my practice, I question the boundary between looking and being seen. I view 
        the interaction between the audience and the artwork as a temporary encounter, in which 
        the spectator becomes a part of the work itself.
      </p>
      <p>
       This encounter translates into the image. A questioning gaze breaks the painting's fourth wall, while sculptures keep the viewer firmly in their sights.
      </p>
      <p>
       Recognizable figures return to the canvas, fading into their surroundings and dissolving into the background. They exist between the tangible and the elusive, much like the materials they are built from.
      </p>
      <p>
      LED light and oil paint form a surface that constantly shifts its relationship with the observer. Perhaps the work moves ever so slightly, just as your eyes start to wander elsewhere.
      </p>
    `,
  },
};

// Actieve taal — opgeslagen in localStorage
const LANG = { current: localStorage.getItem('mm-lang') || 'nl' };

function t(path) {
  return path.split('.').reduce((o, k) => o?.[k], i18n[LANG.current]) ?? path;
}

function setLang(lang) {
  LANG.current = lang;
  localStorage.setItem('mm-lang', lang);
  document.getElementById('htmlRoot').setAttribute('lang', lang);

  // Taalknopjes bijwerken
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // data-i18n elementen bijwerken
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // Herrender inhoud
  const scrollY = window.scrollY;
  renderStatement();
  renderCV();
  renderContact();
  renderAgenda();
  window.scrollTo(0, scrollY);
}

// ─────────────────────────────────────────────────────────────
// HERO AFBEELDINGEN
// ─────────────────────────────────────────────────────────────
// Voeg meer afbeeldingen toe om te laten rouleren.
// Desktop: liggende foto's — Mobiel: staande foto's.
// Gebruik images/hero_mobile.jpg als je een aparte mobiele foto hebt;
// ontbreekt die, dan valt de site terug op de desktopfoto.

const HERO_IMAGES = {
  desktop: [
    'images/hero.jpg',
    // 'images/hero2.jpg',
    // 'images/hero3.jpg',
  ],
  mobile: [
    'images/hero_mobile.jpg',  // optioneel — valt terug op hero.jpg
    // 'images/hero_mobile2.jpg',
  ],
};

// ─────────────────────────────────────────────────────────────
// WERKEN IN HET ARCHIEF
// ─────────────────────────────────────────────────────────────

const ARTWORKS = [
  // ── 2026 ──────────────────────────────────────────────────
  {
    id: 'w2603',
    year: 2026,
    title: '"Kickbacks"',
    medium: 'keramiek en metaal',
    dimensions: '325 x 70 cm',
    description: '',
    ratio: '3/4',
    images: ['images/2026_kickback_a.jpg','images/2026_kickback_b.jpg','images/2026_kickback_c.jpg'],
    thumbnail: 'images/2026_kickback_a.jpg',
  },
   {
    id: 'w2601',
    year: 2026,
    title: '"(Inhoud tussen haakjes)"',
    medium: 'houtskool, verf van uischillen en draad op canvas',
    dimensions: '17 x 27 x 6,5 m',
    description: '',
    ratio: '3/4',
    images: ['images/2026_de fabriek_a.jpg','images/2026_de fabriek_b.jpg','images/2026_de fabriek_c.jpg','images/2026_de fabriek_d.jpg','images/2026_de fabriek_e.jpg','images/2026_de fabriek_f.jpg'],
    thumbnail: 'images/2026_de fabriek_a.jpg',
  },
  {
    id: 'w2602',
    year: 2026,
    title: '',
    medium: 'Olieverf op linnen',
    dimensions: '80 × 100 cm',
    description: '',
    ratio: '4/5',
    images: '',
    thumbnail: '',
 
  },
  // ── 2025 ──────────────────────────────────────────────────
  {
    id: 'w2402',
    year: 2025,
    title: 'Who wants to be like all the girls?',
    medium: 'olieverf op doek',
    dimensions: '128 x 90 cm',
    description: '',
    ratio: '4/3',
    images: ['images/2025_who wants to be_a.jpg'],
    thumbnail: 'images/2025_who wants to be_thumb.jpg',
  },
   {
    id: 'w2501',
    year: 2025,
    title: 'De confrontatie',
    medium: 'Olieverf op doek',
    dimensions: '128 x 90 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2025_de confrontatie_a.jpg'],
    thumbnail: 'images/2025_de confrontatie_thumb.jpg',
  },
    {
    id: 'w2401',
    year: 2025,
    title: '"Pak liever een emmer"',
    medium: 'Olieverf op doek',
    dimensions: '128 x 90 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2025_pak liever een emmer_a.jpg'],
    thumbnail: 'images/2025_pak liever een emmer_thumb.jpg',
  },
    {
    id: 'w2502',
    year: 2025,
    title: '"I, Fall, Apart"',
    medium: 'Olieverf op doek',
    dimensions: '90 x 160 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2025_Fall_a.jpg'],
    thumbnail: 'images/2026_fall_c.jpg',
  },
   {
    id: 'w2503',
    year: 2025,
    title: '"Care"',
    medium: 'keramiek, metaal en steen',
    dimensions: '127 x 12 x 14 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2025_care_a.jpg','images/2025_care_b.jpg'],
    thumbnail: 'images/2025_care_a.jpg',
  },
    {
    id: 'w2504',
    year: 2025,
    title: '"Hold"',
    medium: 'keramiek',
    dimensions: '10 x 25 x 16cm',
    description: '',
    ratio: '4/5',
    images: ['images/2025_hold_b.jpg'],
    thumbnail: 'images/2025_hold_b.jpg',
  },
   
  // ── 2024 ──────────────────────────────────────────────────
  {
    id: 'w2403',
    year: 2024,
    title: '',
    medium: '',
    dimensions: '',
    description: '',
    ratio: '4/5',
    images: [''],
    thumbnail: '',
  },
  {
    id: 'w2404',
    year: 2024,
    title: 'Herinnering aan de ochtend',
    medium: 'Aquarel op papier',
    dimensions: '30 × 40 cm',
    description: '',
    ratio: '3/4',
    images: ['images/2024_04_a.jpg'],
    thumbnail: 'images/2024_04_a.jpg',
  },
  // ── 2023 ──────────────────────────────────────────────────
  {
    id: 'w2301',
    year: 2023,
    title: 'Landschap met figuur',
    medium: 'Olieverf op linnen',
    dimensions: '100 × 130 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2023_01_a.jpg', 'images/2023_01_b.jpg'],
    thumbnail: 'images/2023_01_a.jpg',
  },
  {
    id: 'w2302',
    year: 2023,
    title: 'Interieur',
    medium: 'Olieverf op paneel',
    dimensions: '40 × 50 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2023_02_a.jpg'],
    thumbnail: 'images/2023_02_a.jpg',
  },
  {
    id: 'w2303',
    year: 2023,
    title: 'Fragment',
    medium: 'Gemengde techniek',
    dimensions: '70 × 70 cm',
    description: '',
    ratio: '1/1',
    images: ['images/2023_03_a.jpg'],
    thumbnail: 'images/2023_03_a.jpg',
  },
  {
    id: 'w2304',
    year: 2023,
    title: 'Blauw uur',
    medium: 'Olieverf op linnen',
    dimensions: '90 × 110 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2023_04_a.jpg', 'images/2023_04_b.jpg'],
    thumbnail: 'images/2023_04_a.jpg',
  },
  {
    id: 'w2305',
    year: 2023,
    title: 'Gesloten tuin',
    medium: 'Aquarel op papier',
    dimensions: '50 × 70 cm',
    description: '',
    ratio: '5/7',
    images: ['images/2023_05_a.jpg'],
    thumbnail: 'images/2023_05_a.jpg',
  },
  // ── 2022 ──────────────────────────────────────────────────
  {
    id: 'w2201',
    year: 2022,
    title: 'Voorbereidende studie',
    medium: 'Potlood op papier',
    dimensions: '21 × 29 cm',
    description: '',
    ratio: '3/4',
    images: ['images/2022_01_a.jpg'],
    thumbnail: 'images/2022_01_a.jpg',
  },
  {
    id: 'w2202',
    year: 2022,
    title: 'Sporen',
    medium: 'Olieverf op linnen',
    dimensions: '130 × 150 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2022_02_a.jpg', 'images/2022_02_b.jpg'],
    thumbnail: 'images/2022_02_a.jpg',
  },
  {
    id: 'w2203',
    year: 2022,
    title: 'Horizontaal vlak',
    medium: 'Gemengde techniek op doek',
    dimensions: '80 × 60 cm',
    description: '',
    ratio: '3/4',
    images: ['images/2022_03_a.jpg'],
    thumbnail: 'images/2022_03_a.jpg',
  },
  {
    id: 'w2204',
    year: 2022,
    title: 'Stilleven met licht',
    medium: 'Olieverf op paneel',
    dimensions: '35 × 45 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2022_04_a.jpg'],
    thumbnail: 'images/2022_04_a.jpg',
  },
  // ── 2021 ──────────────────────────────────────────────────
  {
    id: 'w2101',
    year: 2021,
    title: 'Begin',
    medium: 'Olieverf op doek',
    dimensions: '100 × 100 cm',
    description: '',
    ratio: '1/1',
    images: ['images/2021_01_a.jpg'],
    thumbnail: 'images/2021_01_a.jpg',
  },
  {
    id: 'w2102',
    year: 2021,
    title: 'Schets I',
    medium: 'Inkt op papier',
    dimensions: '29 × 42 cm',
    description: '',
    ratio: '2/3',
    images: ['images/2021_02_a.jpg'],
    thumbnail: 'images/2021_02_a.jpg',
  },
  {
    id: 'w2103',
    year: 2021,
    title: 'Compositie in grijs',
    medium: 'Acrylverf op linnen',
    dimensions: '60 × 80 cm',
    description: '',
    ratio: '3/4',
    images: ['images/2021_03_a.jpg'],
    thumbnail: 'images/2021_03_a.jpg',
  },
];

// ─────────────────────────────────────────────────────────────
// CV
// ─────────────────────────────────────────────────────────────

const CV_DATA = {
  personal: [
    { key: 'born',  value: '17-03-2001, Utrecht' },
    { key: 'lives', value: 'Nijmegen, Nederland' },
  ],
  education: [
    ['2022–2026', 'BA Art & Research, St. Joost, \'s-Hertogenbosch'],
    ['2024–2025', 'Minor Kunstgeschiedenis, Radboud Universiteit, Nijmegen'],
    ['2018',      'Brede basisopleiding, HKU, Utrecht'],
  ],
  residencies: [
    ['2026', 'Inhoud tussen haakjes, De Fabriek, Eindhoven'],
    ['2025', 'Om water naar de zee te dragen, Viervaart, Zeeland'],
    ['2024', 'On/af, Lokaal0.62, \'s-Hertogenbosch'],
  ],
  exhibitions: [
    ['2026', 'Inhoud tussen haakjes, afsluiting werkperiode De Fabriek'],
    ['2026', 'De afstand met je handen meten, Graduation show St. Joost'],
    ['2025', 'Om water naar de zee te dragen, afsluiting werkperiode Viervaart, St. Joost'],
    ['2024', 'On/af, Lokaal0.62'],
    ['2022', 'Groot, groter, grootst, tentoonstelling St. Joost'],
  ],
  collections: [
    ['2025', 'Private collecties, Nederland'],
    ['2019', 'Private collecties, Nederland'],
  ],
  publications: [
    ['2022', 'Derop of Deronder, Boekscout'],
  ],
  internships: [
    ['2025', 'MAKE, Eindhoven'],
  ],
  other: [
    ['2025–2026', 'Vrijwilliger Platform P-OST'],
  ],
};

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────

const CONTACT_DATA = [
  { key: 'email',     value: 'meermerelmailt@gmail.com', href: 'mailto:meermerelmailt@gmail.com' },
  { key: 'instagram', value: '@meermerel_', href: 'https://www.instagram.com/meer.merel_', external: true },
  { key: 'phone number',     value: '+31 (0)6 37277662', href: null },
];

// ─────────────────────────────────────────────────────────────
// AGENDA
// ─────────────────────────────────────────────────────────────

const AGENDA_DATA = {
  current: [
    {
      title:    '"NOW SHOW"',
      location: 'St. Joost School of Art & Design, s-Hertogenbosch',
      date:     '2-5 juli, 2026',
    },
  ],
  upcoming: [
    {
      title:    '"De afstand met je handen meten"',
      location: 'St. Joost School of Art & Design, s-Hertogenbosch',
      date:     '2-5 juli, 2026',
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// HULPFUNCTIES
// ─────────────────────────────────────────────────────────────

function svgPlaceholder(ratio, label) {
  const parts = ratio.split('/');
  const w = 400;
  const h = Math.round(w * (parseInt(parts[1]) / parseInt(parts[0])));
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">`,
    `<rect width="100%" height="100%" fill="#e4e3e1"/>`,
    `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"`,
    ` font-family="Helvetica Neue,Helvetica,Arial,sans-serif"`,
    ` font-size="10" font-weight="300" fill="#b0afad" letter-spacing="1.5">`,
    label || 'afbeelding',
    `</text></svg>`,
  ].join('');
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function isRealImage(src) {
  return src && !src.startsWith('data:');
}

function loadImage(el, src, ratio, label) {
  if (!isRealImage(src)) {
    el.src = svgPlaceholder(ratio, label);
    return;
  }
  const img = new Image();
  img.onload  = () => { el.src = src; };
  img.onerror = () => { el.src = svgPlaceholder(ratio, label); };
  img.src = src;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─────────────────────────────────────────────────────────────
// RENDER: STATEMENT
// ─────────────────────────────────────────────────────────────

function renderStatement() {
  document.getElementById('statementText').innerHTML = t('statement');
}

// ─────────────────────────────────────────────────────────────
// RENDER: ARCHIEF
// ─────────────────────────────────────────────────────────────

function renderArchive() {
  const container = document.getElementById('archiveContent');
  const years = [...new Set(ARTWORKS.map(a => a.year))].sort((a, b) => b - a);

  container.innerHTML = years.map(year => {
    const works = ARTWORKS.filter(w => w.year === year);

    const thumbs = works.map(work => {
      const dots = '';

      return `
        <div class="archive-thumb"
             data-work-id="${escapeHtml(work.id)}"
             role="button" tabindex="0"
             aria-label="${escapeHtml(work.title)}">
          <img class="archive-thumb-img"
               src="${escapeHtml(svgPlaceholder(work.ratio, work.title))}"
               alt="${escapeHtml(work.title)}">
          ${dots}
          <div class="archive-thumb-caption">
            <span class="archive-thumb-title">${escapeHtml(work.title)}</span>
            <span class="archive-thumb-meta">${escapeHtml(work.medium)}</span>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="archive-year">
        <h3 class="archive-year-heading">${year}</h3>
        <div class="archive-grid">${thumbs}</div>
      </div>`;
  }).join('');

  // Afbeeldingen laden en interactie koppelen
  container.querySelectorAll('.archive-thumb').forEach(el => {
    const work = ARTWORKS.find(w => w.id === el.dataset.workId);
    if (!work) return;
    const imgEl = el.querySelector('.archive-thumb-img');

    // Thumbnail laden
    loadImage(imgEl, work.thumbnail || work.images[0], work.ratio, work.title);

    // Lightbox openen
    const open = () => openLightbox(work.id);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

// ─────────────────────────────────────────────────────────────
// RENDER: CV
// ─────────────────────────────────────────────────────────────

function renderCV() {
  const container = document.getElementById('cvContent');
  const { personal, education, residencies, exhibitions,
          collections, publications, internships, other } = CV_DATA;

  function table(rows) {
    return `<table class="cv-table">${rows.map(([year, desc]) => `
      <tr>
        <td>${escapeHtml(year)}</td>
        <td>${escapeHtml(desc)}</td>
      </tr>`).join('')}</table>`;
  }

  function block(titleKey, rows) {
    return `
      <div class="cv-block">
        <h3 class="cv-block-title">${t('cv.' + titleKey)}</h3>
        ${table(rows)}
      </div>`;
  }

  const personalHtml = personal.map(row => `
    <div class="cv-personal-row">
      <span class="cv-personal-label">${t('cv.' + row.key)}</span>
      <span>${escapeHtml(row.value)}</span>
    </div>`).join('');

  container.innerHTML = `
    <div class="cv-grid">
      <div>
        <div class="cv-block">
          <h3 class="cv-block-title">${t('cv.personal')}</h3>
          <div class="cv-personal">${personalHtml}</div>
        </div>
        ${block('education',    education)}
        ${block('exhibitions',  exhibitions)}
        ${block('residencies',  residencies)}
        ${block('collections',  collections)}
        ${block('publications', publications)}
        ${block('internships',  internships)}
        ${block('other',        other)}
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// RENDER: CONTACT
// ─────────────────────────────────────────────────────────────

function renderContact() {
  const container = document.getElementById('contactContent');
  container.innerHTML = `
    <ul class="contact-list">
      ${CONTACT_DATA.map(item => {
        const label = t('contact.' + item.key);
        const val = item.href
          ? `<a href="${escapeHtml(item.href)}"${item.external
              ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(item.value)}</a>`
          : escapeHtml(item.value);
        return `
          <li class="contact-item">
            <span class="contact-label">${label}</span>
            <span class="contact-value">${val}</span>
          </li>`;
      }).join('')}
    </ul>`;
}

// ─────────────────────────────────────────────────────────────
// RENDER: AGENDA
// ─────────────────────────────────────────────────────────────

function renderAgenda() {
  const container = document.getElementById('agendaContent');
  const { current, upcoming } = AGENDA_DATA;

  function renderItems(items) {
    if (!items.length) {
      return `<p class="agenda-empty">${t('agenda.empty')}</p>`;
    }
    return items.map(item => `
      <div class="agenda-item">
        <span class="agenda-date">${escapeHtml(item.date)}</span>
        <div>
          <p class="agenda-title">${escapeHtml(item.title)}</p>
          <p class="agenda-location">${escapeHtml(item.location)}</p>
          <span class="agenda-badge ${item.status}">
            ${item.status === 'lopend' ? t('agenda.nowShowing') : t('agenda.badge')}
          </span>
        </div>
      </div>`).join('');
  }

  container.innerHTML = `
    <div class="agenda-col">
      <div class="agenda-group">
        <h3 class="agenda-group-title">${t('agenda.current')}</h3>
        ${renderItems(current)}
      </div>
      <div class="agenda-group">
        <h3 class="agenda-group-title">${t('agenda.upcoming')}</h3>
        ${renderItems(upcoming)}
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// HERO — rotatie + desktop/mobiel
// ─────────────────────────────────────────────────────────────

let heroInterval = null;
const heroMQ = window.matchMedia('(max-width: 600px)');

function initHero() {
  const heroBg = document.getElementById('heroBg');

  // Ruim vorige inhoud en rotatie-interval op
  heroBg.innerHTML = '';
  if (heroInterval) { clearInterval(heroInterval); heroInterval = null; }

  function getSources() {
    if (heroMQ.matches) {
      const m = HERO_IMAGES.mobile.filter(Boolean);
      return m.length ? m : HERO_IMAGES.desktop;
    }
    return HERO_IMAGES.desktop;
  }

  const sources = getSources();
  const loaded = [];

  const placeholder = document.createElement('div');
  placeholder.className = 'hero-placeholder-label';
  placeholder.textContent = 'Afbeelding: images/hero.jpg';
  heroBg.appendChild(placeholder);

  function tryLoad(src) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(src);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  Promise.all(sources.map(tryLoad)).then(results => {
    results.filter(Boolean).forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
      slide.style.backgroundImage = 'url(' + src + ')';
      heroBg.appendChild(slide);
      loaded.push(slide);
    });

    if (loaded.length) placeholder.style.display = 'none';

    if (loaded.length > 1) {
      let current = 0;
      heroInterval = setInterval(() => {
        loaded[current].classList.remove('active');
        current = (current + 1) % loaded.length;
        loaded[current].classList.add('active');
      }, 5000);
    }
  });
}

// Wissel beeld wanneer de 600px-grens wordt overschreden
heroMQ.addEventListener('change', initHero);

// ─────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────

let lbWork = null;
let lbIndex = 0;
let lbTouchStartX = 0;

function openLightbox(workId) {
  lbWork = ARTWORKS.find(w => w.id === workId);
  if (!lbWork) return;
  lbIndex = 0;
  updateLightbox();
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose').focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lbWork = null;
}

function updateLightbox() {
  if (!lbWork) return;
  const src = lbWork.images[lbIndex];
  const img = document.getElementById('lbImg');

  img.src = svgPlaceholder(lbWork.ratio, lbWork.title);
  if (isRealImage(src)) {
    const real = new Image();
    real.onload  = () => { img.src = src; };
    real.onerror = () => {};
    real.src = src;
  }

  img.alt = lbWork.title;
  document.getElementById('lbTitle').textContent = lbWork.title;
  document.getElementById('lbMeta').textContent =
    [lbWork.medium, lbWork.dimensions].filter(Boolean).join(' — ');
  document.getElementById('lbDesc').textContent = lbWork.description || '';
  document.getElementById('lbCounter').textContent =
    lbWork.images.length > 1 ? (lbIndex + 1) + ' / ' + lbWork.images.length : '';

  document.getElementById('lbPrev').classList.toggle('hidden', lbIndex === 0);
  document.getElementById('lbNext').classList.toggle('hidden', lbIndex >= lbWork.images.length - 1);
  document.getElementById('lightbox').scrollTop = 0;
}

function lbPrevImg() { if (lbIndex > 0) { lbIndex--; updateLightbox(); } }
function lbNextImg() { if (lbWork && lbIndex < lbWork.images.length - 1) { lbIndex++; updateLightbox(); } }

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', lbPrevImg);
document.getElementById('lbNext').addEventListener('click', lbNextImg);

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lbPrevImg();
  if (e.key === 'ArrowRight') lbNextImg();
});

document.getElementById('lightbox').addEventListener('touchstart', e => {
  lbTouchStartX = e.touches[0].clientX;
}, { passive: true });

document.getElementById('lightbox').addEventListener('touchend', e => {
  const diff = lbTouchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) { if (diff > 0) lbNextImg(); else lbPrevImg(); }
}, { passive: true });

// ─────────────────────────────────────────────────────────────
// NAVIGATIE
// ─────────────────────────────────────────────────────────────

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openDrawer() {
  navLinks.classList.add('open');
  navToggle.classList.add('open');
  navOverlay.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  navOverlay.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () =>
  navLinks.classList.contains('open') ? closeDrawer() : openDrawer()
);
navOverlay.addEventListener('click', closeDrawer);

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeDrawer);
});

// Scroll-spy
const sections   = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-15% 0px -75% 0px' }).observe
  ? sections.forEach(s => {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navAnchors.forEach(a => {
              a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
          }
        });
      }, { rootMargin: '-15% 0px -75% 0px' }).observe(s);
    })
  : null;

// Taalschakelaar
document.getElementById('langSwitch').addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn && btn.dataset.lang !== LANG.current) {
    setLang(btn.dataset.lang);
  }
});

// ─────────────────────────────────────────────────────────────
// INITIALISATIE
// ─────────────────────────────────────────────────────────────

document.getElementById('footerYear').textContent = new Date().getFullYear();

// Taal instellen op opgeslagen voorkeur
setLang(LANG.current);

renderArchive();
initHero();
