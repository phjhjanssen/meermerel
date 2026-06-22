/* ============================================================
   Meer Merel — Merel Janssen
   script.js

   Alle inhoud staat in dit bestand als data. Pas de teksten
   en bestandsnamen van afbeeldingen hier aan om de website
   bij te werken. Afbeeldingen horen in de map /images/.
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// INHOUD — pas dit aan met jouw eigen teksten en afbeeldingen
// ─────────────────────────────────────────────────────────────

const STATEMENT = `
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
`;

// Werken in het archief — meest recent bovenaan, oudste onderaan.
// Voeg voor elk werk een object toe met:
//   title, medium, dimensions, description, ratio (breedte/hoogte), images (array van bestandspaden), thumbnail
// Afbeeldingen staan in de map /images/ — gebruik bijv. 'images/2024_werk01.jpg'
const ARTWORKS = [
  // ── 2024 ──────────────────────────────────────────────────
  {
    id: 'w2401',
    year: 2024,
    title: 'Zonder titel I',
    medium: 'Olieverf op linnen',
    dimensions: '80 × 100 cm',
    description: 'Vertel hier iets over het werk: het ontstaan, de context of de betekenis. Je kunt dit ook leeg laten.',
    ratio: '4/5',
    images: ['images/2024_01_a.png', 'images/2024_01_b.jpg'],
    thumbnail: 'images/2024_01_a.png',
  },
  {
    id: 'w2402',
    year: 2024,
    title: 'Zonder titel II',
    medium: 'Acrylverf op papier',
    dimensions: '60 × 80 cm',
    description: '',
    ratio: '4/3',
    images: ['images/2024_02_a.jpg'],
    thumbnail: 'images/2024_02_a.jpg',
  },
  {
    id: 'w2403',
    year: 2024,
    title: 'Studie voor een stilte',
    medium: 'Gemengde techniek op doek',
    dimensions: '120 × 90 cm',
    description: '',
    ratio: '4/5',
    images: ['images/2024_03_a.jpg', 'images/2024_03_b.jpg', 'images/2024_03_c.jpg'],
    thumbnail: 'images/2024_03_a.jpg',
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

const CV_DATA = {
  personal: [
    { label: 'Geboren', value: '17 maart 2001, Nijmegen' },
    { label: 'Woont en werkt', value: 'Nijmegen, Nederland' },
  ],
  education: [
    ['2022–2026', 'BA Art & Research, St. Joost, \'s-Hertogenbosch'],
    ['2024–2025', 'Minor Kunstgeschiedenis, Radboud Universiteit, Nijmegen'],
    ['2020', 'Propedeuse Vaktherapie, HAN, Nijmegen'],
    ['2018', 'Brede basisopleiding, HKU, Utrecht'],
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

const CONTACT_DATA = [
  {
    label: 'E-mail',
    value: 'postvak.mjanssen@gmail.com',
    href: 'mailto:postvak.mjanssen@gmail.com',
  },
  {
    label: 'Instagram',
    value: '@meer.merel_',
    href: 'https://www.instagram.com/meer.merel_',
    external: true,
  },
  {
    label: 'Telefoon',
    value: '+31 (0)6 — — — — — —',
    href: null,
  },
];

const AGENDA_DATA = {
  current: [
    {
      title: '"[Naam tentoonstelling]"',
      location: '[Galerie / Museum], [Stad]',
      date: 't/m [maand] 2025',
      status: 'lopend',
    },
  ],
  upcoming: [
    {
      title: '"[Naam tentoonstelling]"',
      location: '[Galerie / Museum], [Stad]',
      date: '[maand] 2025',
      status: 'aankomend',
    },
    {
      title: '"[Naam tentoonstelling]"',
      location: '[Galerie / Museum], [Stad]',
      date: '[maand] 2026',
      status: 'aankomend',
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// HULPFUNCTIES
// ─────────────────────────────────────────────────────────────

// Maakt een SVG-placeholder als een afbeelding nog niet beschikbaar is
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

// Controleert of een afbeeldingspad een echte afbeelding is (begint met 'images/')
function isRealImage(src) {
  return src && !src.startsWith('data:');
}

// Laadt een afbeelding; bij fout wordt een placeholder getoond
function loadImage(el, src, ratio, label) {
  if (!isRealImage(src)) {
    el.style.backgroundImage = 'url(' + svgPlaceholder(ratio, label) + ')';
    return;
  }
  const img = new Image();
  img.onload = () => { el.style.backgroundImage = 'url(' + src + ')'; };
  img.onerror = () => { el.style.backgroundImage = 'url(' + svgPlaceholder(ratio, label) + ')'; };
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
// RENDER FUNCTIES
// ─────────────────────────────────────────────────────────────

function renderStatement() {
  document.getElementById('statementText').innerHTML = STATEMENT;
}

function renderArchive() {
  const container = document.getElementById('archiveContent');
  const years = [...new Set(ARTWORKS.map(a => a.year))].sort((a, b) => b - a);

  container.innerHTML = years.map(year => {
    const works = ARTWORKS.filter(w => w.year === year);
    const thumbs = works.map(work => `
      <div class="archive-thumb"
           data-work-id="${escapeHtml(work.id)}"
           role="button"
           tabindex="0"
           aria-label="Bekijk ${escapeHtml(work.title)}">
        <div class="archive-thumb-img"
             data-src="${escapeHtml(work.thumbnail)}"
             data-ratio="${work.ratio}"
             data-label="${escapeHtml(work.title)}"
             style="aspect-ratio:${work.ratio}"></div>
        <div class="archive-thumb-caption">
          <span class="archive-thumb-title">${escapeHtml(work.title)}</span>
          <span class="archive-thumb-meta">${escapeHtml(work.medium)}</span>
        </div>
      </div>`).join('');

    return `
      <div class="archive-year">
        <h3 class="archive-year-heading">${year}</h3>
        <div class="archive-grid">${thumbs}</div>
      </div>`;
  }).join('');

  // Laad placeholder-afbeeldingen en voeg click-handlers toe
  container.querySelectorAll('.archive-thumb-img').forEach(el => {
    loadImage(el, el.dataset.src, el.dataset.ratio, el.dataset.label);
  });

  container.querySelectorAll('.archive-thumb').forEach(el => {
    const open = () => openLightbox(el.dataset.workId);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

function renderCV() {
  const container = document.getElementById('cvContent');
  const { personal, education, residencies, exhibitions, collections, publications, internships, other } = CV_DATA;

  function table(rows) {
    return `<table class="cv-table">${rows.map(([year, desc]) => `
      <tr>
        <td>${escapeHtml(year)}</td>
        <td>${escapeHtml(desc)}</td>
      </tr>`).join('')}</table>`;
  }

  function block(title, rows) {
    return `
      <div class="cv-block">
        <h3 class="cv-block-title">${title}</h3>
        ${table(rows)}
      </div>`;
  }

  const personalHtml = personal.map(row => `
    <div class="cv-personal-row">
      <span class="cv-personal-label">${escapeHtml(row.label)}</span>
      <span>${escapeHtml(row.value)}</span>
    </div>`).join('');

  container.innerHTML = `
    <div class="cv-grid">
      <div>
        <div class="cv-block">
          <h3 class="cv-block-title">Persoonsgegevens</h3>
          <div class="cv-personal">${personalHtml}</div>
        </div>
        ${block('Opleidingen', education)}
        ${block('Residenties', residencies)}
        ${block('Collecties', collections)}
        ${block('Publicaties', publications)}
        ${block('Stage', internships)}
        ${block('Overig', other)}
      </div>
      <div>
        ${block('Tentoonstellingen', exhibitions)}
      </div>
    </div>`;
}

function renderContact() {
  const container = document.getElementById('contactContent');
  container.innerHTML = `
    <ul class="contact-list">
      ${CONTACT_DATA.map(item => {
        const val = item.href
          ? `<a href="${escapeHtml(item.href)}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escapeHtml(item.value)}</a>`
          : escapeHtml(item.value);
        return `
          <li class="contact-item">
            <span class="contact-label">${escapeHtml(item.label)}</span>
            <span class="contact-value">${val}</span>
          </li>`;
      }).join('')}
    </ul>`;
}

function renderAgenda() {
  const container = document.getElementById('agendaContent');
  const { current, upcoming } = AGENDA_DATA;

  function renderItems(items) {
    if (!items.length) {
      return '<p class="agenda-empty">Binnenkort meer informatie.</p>';
    }
    return items.map(item => `
      <div class="agenda-item">
        <span class="agenda-date">${escapeHtml(item.date)}</span>
        <div>
          <p class="agenda-title">${escapeHtml(item.title)}</p>
          <p class="agenda-location">${escapeHtml(item.location)}</p>
          <span class="agenda-badge ${item.status}">
            ${item.status === 'lopend' ? 'Nu te zien' : 'Aankomend'}
          </span>
        </div>
      </div>`).join('');
  }

  container.innerHTML = `
    <div class="agenda-col">
      <div class="agenda-group">
        <h3 class="agenda-group-title">Lopend</h3>
        ${renderItems(current)}
      </div>
      <div class="agenda-group">
        <h3 class="agenda-group-title">Aankomend</h3>
        ${renderItems(upcoming)}
      </div>
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

function initHero() {
  const heroBg = document.getElementById('heroBg');
  const heroImg = new Image();
  heroImg.onload = () => {
    heroBg.style.backgroundImage = 'url(images/hero.jpg)';
    heroBg.querySelector('.hero-placeholder-label').style.display = 'none';
  };
  // Bij ontbreken van hero.jpg blijft de placeholder zichtbaar
  heroImg.src = 'images/hero.jpg';
}

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

  // Toon placeholder totdat de echte afbeelding geladen is
  if (isRealImage(src)) {
    img.src = svgPlaceholder(lbWork.ratio, lbWork.title);
    const real = new Image();
    real.onload = () => { img.src = src; };
    real.onerror = () => { img.src = svgPlaceholder(lbWork.ratio, lbWork.title); };
    real.src = src;
  } else {
    img.src = svgPlaceholder(lbWork.ratio, lbWork.title);
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

  // Scroll lightbox terug naar top bij nieuwe afbeelding
  document.getElementById('lightbox').scrollTop = 0;
}

function lbPrevImg() { if (lbIndex > 0) { lbIndex--; updateLightbox(); } }
function lbNextImg() { if (lbWork && lbIndex < lbWork.images.length - 1) { lbIndex++; updateLightbox(); } }

// Knoppen
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', lbPrevImg);
document.getElementById('lbNext').addEventListener('click', lbNextImg);

// Klik buiten het werk sluit lightbox
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});

// Toetsenbordbediening
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lbPrevImg();
  if (e.key === 'ArrowRight')  lbNextImg();
});

// Touch-swipe voor mobiel
document.getElementById('lightbox').addEventListener('touchstart', e => {
  lbTouchStartX = e.touches[0].clientX;
}, { passive: true });

document.getElementById('lightbox').addEventListener('touchend', e => {
  const diff = lbTouchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) lbNextImg(); else lbPrevImg();
  }
}, { passive: true });

// ─────────────────────────────────────────────────────────────
// NAVIGATIE
// ─────────────────────────────────────────────────────────────

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Sluit mobiel menu na klikken op een link
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Scroll-spy: markeer het actieve nav-item
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });

sections.forEach(s => scrollObserver.observe(s));

// ─────────────────────────────────────────────────────────────
// INITIALISATIE
// ─────────────────────────────────────────────────────────────

document.getElementById('footerYear').textContent = new Date().getFullYear();

renderStatement();
renderArchive();
renderCV();
renderContact();
renderAgenda();
initHero();
