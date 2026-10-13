/* ==========================================================
   Zajednicki delovi sajta: header, footer, dugme "na vrh".
   Menjaju se ovde, a vaze za sve stranice.
   ========================================================== */

const LOGO_TEXT = "Lorem Designs";

const NAV_LEFT = [
  { href: "usluge.html", label: "Usluge" },
  { href: "o-meni.html", label: "O meni" },
];

const NAV_RIGHT = [
  { href: "portfolio.html", label: "Portfolio" },
  { href: "kontakt.html", label: "Kontakt" },
];

// Datum do kog traje odbrojavanje u zutoj traci (format: GGGG-MM-DDTHH:MM:SS)
const PROMO_DEADLINE = "2027-01-10T12:00:00";

const ICONS = {
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>',
  pinterest:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-5 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.4 1.9.8 2.5.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.4-.7-2.2-2.7-2.2-4.3 0-3.5 2.5-6.7 7.3-6.7 3.8 0 6.8 2.7 6.8 6.4 0 3.8-2.4 6.9-5.8 6.9-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.2-1.4 2.9A10 10 0 1 0 12 2z"/></svg>',
  behance:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor"/><path fill="#19233a" d="M10.4 11.6c.5-.3.8-.7.8-1.4 0-1.3-1-1.8-2.2-1.8H5.8v7.2h3.3c1.3 0 2.4-.6 2.4-2 0-.9-.4-1.6-1.1-2zM7.3 9.6h1.4c.5 0 .9.2.9.7 0 .5-.3.8-.9.8H7.3V9.6zm1.6 4.8H7.3v-1.9H9c.6 0 1 .3 1 1 0 .6-.5.9-1.1.9zm6-4.2c-1.6 0-2.7 1.1-2.7 2.7 0 1.6 1 2.7 2.7 2.7 1.2 0 2.1-.6 2.4-1.8h-1.3c-.1.4-.6.7-1.1.7-.8 0-1.3-.5-1.3-1.3h3.8c.1-1.7-.8-3-2.5-3zm-1.3 2.1c.1-.7.5-1.1 1.2-1.1s1.1.4 1.1 1.1h-2.3zM13.5 9h2.9v.8h-2.9z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor"/><path fill="#19233a" d="M14.6 6h-2v8.1a1.8 1.8 0 1 1-1.8-1.8h.5v-2h-.5a3.8 3.8 0 1 0 3.8 3.8V9.9c.8.5 1.7.8 2.7.8v-2c-1.5 0-2.7-1.2-2.7-2.7z"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5h20v14H2z" opacity="0"/><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.3V8l9 5.6L21 8v-.7l-9 5.6-9-5.6z"/></svg>',
};

function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

function navLink(l) {
  const active = l.href === currentPage() ? ' class="active" aria-current="page"' : "";
  return `<a href="${l.href}"${active}>${l.label}</a>`;
}

function renderHeader() {
  return `
    <header class="site-header">
      <div class="topbar">
        <div class="topbar-promo">
          <span>Lorem ipsum počinje za</span>
          <span class="countdown" data-deadline="${PROMO_DEADLINE}">
            <b data-unit="d">00</b><small>D</small>
            <b data-unit="h">00</b><small>H</small>
            <b data-unit="m">00</b><small>M</small>
            <b data-unit="s">00</b><small>S</small>
          </span>
          <span class="promo-extra">Prve 2 rezervacije štede 200 €</span>
        </div>
        <a class="topbar-cta" href="kontakt.html">Zakaži besplatne konsultacije</a>
      </div>
      <div class="navbar">
        <nav class="nav-links" aria-label="Glavna navigacija">
          <div class="nav-group">${NAV_LEFT.map(navLink).join("")}</div>
          <a class="logo" href="index.html" aria-label="Početna">${LOGO_TEXT}</a>
          <div class="nav-group">${NAV_RIGHT.map(navLink).join("")}</div>
        </nav>
        <button class="nav-toggle" aria-label="Otvori meni" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-menu" aria-label="Mobilna navigacija">
        <a href="index.html">Početna</a>
        ${[...NAV_LEFT, ...NAV_RIGHT].map(navLink).join("")}
      </nav>
    </header>`;
}

function renderFooter() {
  const socials = Object.entries(ICONS)
    .map(([name, svg]) => {
      const href = name === "email" ? "mailto:info@example.com" : "#";
      return `<a href="${href}" aria-label="${name}">${svg}</a>`;
    })
    .join("");

  const links = [{ href: "index.html", label: "Početna" }, ...NAV_LEFT, ...NAV_RIGHT]
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="container">
        <a class="footer-logo" href="index.html">${LOGO_TEXT}</a>
        <div class="socials">${socials}</div>
        <nav class="footer-links" aria-label="Footer navigacija">${links}</nav>
      </div>
    </footer>
    <a class="to-top" href="#top" aria-label="Nazad na vrh">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15l7-7 7 7"/></svg>
    </a>`;
}

/* ==========================================================
   Ponasanje
   ========================================================== */

function initHeader() {
  const header = document.querySelector(".site-header");
  const toggle = header.querySelector(".nav-toggle");

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Zatvori meni" : "Otvori meni");
  });
}

function initCountdown() {
  const el = document.querySelector(".countdown");
  if (!el) return;

  const deadline = new Date(el.dataset.deadline).getTime();
  const unit = (u) => el.querySelector(`[data-unit="${u}"]`);
  const parts = { d: unit("d"), h: unit("h"), m: unit("m"), s: unit("s") };
  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const diff = Math.max(0, deadline - Date.now());
    const s = Math.floor(diff / 1000);
    parts.d.textContent = pad(Math.floor(s / 86400));
    parts.h.textContent = pad(Math.floor((s % 86400) / 3600));
    parts.m.textContent = pad(Math.floor((s % 3600) / 60));
    parts.s.textContent = pad(s % 60);
    if (diff === 0) clearInterval(timer);
  }

  const timer = setInterval(tick, 1000);
  tick();
}

function initMarquees() {
  // Udvostrucuje sadrzaj trake da bi animacija isla bez prekida
  document.querySelectorAll(".marquee-track").forEach((track) => {
    track.innerHTML += track.innerHTML;
  });
}

function initSlideshow() {
  document.querySelectorAll(".slideshow").forEach((show) => {
    const imgs = show.querySelectorAll("img");
    if (imgs.length < 2) return;
    let i = 0;
    setInterval(() => {
      imgs[i].classList.remove("active");
      i = (i + 1) % imgs.length;
      imgs[i].classList.add("active");
    }, 4000);
  });
}

function initTestimonials() {
  const slider = document.querySelector(".testimonial-slider");
  if (!slider) return;
  const slides = slider.querySelectorAll(".slide");
  let i = 0;

  function show(next) {
    slides[i].hidden = true;
    i = (next + slides.length) % slides.length;
    slides[i].hidden = false;
    slides[i].classList.remove("fade-in");
    void slides[i].offsetWidth;
    slides[i].classList.add("fade-in");
  }

  slider.querySelector(".prev").addEventListener("click", () => show(i - 1));
  slider.querySelector(".next").addEventListener("click", () => show(i + 1));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

function initForms() {
  // Forme su za sada samo prikaz; povezivanje (npr. Formspree, Mailchimp) ide kasnije
  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) note.textContent = "Hvala! Primljeno (demo — forma još nije povezana).";
      form.reset();
    });
  });
}

function initPortfolioFilter() {
  const filters = document.querySelector(".filters");
  if (!filters) return;
  const cards = document.querySelectorAll("[data-category]");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filters.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b === btn));
    const cat = btn.dataset.filter;
    cards.forEach((card) => {
      card.hidden = cat !== "all" && card.dataset.category !== cat;
    });
  });
}

document.body.id = "top";
document.body.insertAdjacentHTML("afterbegin", renderHeader());
document.body.insertAdjacentHTML("beforeend", renderFooter());

initHeader();
initCountdown();
initMarquees();
initSlideshow();
initTestimonials();
initReveal();
initForms();
initPortfolioFilter();
