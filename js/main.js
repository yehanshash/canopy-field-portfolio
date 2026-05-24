// ─────────────────────────────────────────────────────────────────────────────
// Iris Vega — Field Portfolio · vanilla JS interactions
// ─────────────────────────────────────────────────────────────────────────────

const $  = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const STATUS = window.DATA.STATUS_LABELS;

// ─────────────────────────────────────────────────────────────────────────────
// 1. INTRO OVERLAY — loading bar then peel
// ─────────────────────────────────────────────────────────────────────────────
(function intro() {
  const el = $("#intro");
  if (!el) return;
  const fill = $("#intro-bar-fill");
  const txt  = $("#intro-bar-text");
  document.body.style.overflow = "hidden";

  const DUR = 1600;
  const t0 = performance.now();
  function step(t) {
    const p = Math.min(1, (t - t0) / DUR);
    const pct = Math.round(p * 100);
    fill.style.width = pct + "%";
    txt.textContent = String(pct).padStart(3, "0") + " / 100";
    if (p < 1) requestAnimationFrame(step);
    else {
      el.classList.add("showing");
      setTimeout(() => {
        el.remove();
        document.body.style.overflow = "";
        document.body.classList.add("intro-done");
      }, 1200);
    }
  }
  requestAnimationFrame(step);
})();

// ─────────────────────────────────────────────────────────────────────────────
// 2. CUSTOM CURSOR
// ─────────────────────────────────────────────────────────────────────────────
(function cursor() {
  if (matchMedia("(pointer: coarse)").matches) {
    $("#cur-dot")?.remove();
    $("#cur-ring")?.remove();
    return;
  }
  const dot  = $("#cur-dot");
  const ring = $("#cur-ring");
  const state = { x: 0, y: 0, rx: 0, ry: 0, hover: false };
  const sel = "a, button, .h-card, .j-tile, .sx, .map-pin, .press-item, .contact-row, .pub, [data-magnetic]";

  window.addEventListener("pointermove", (e) => {
    state.x = e.clientX; state.y = e.clientY;
    state.hover = !!e.target.closest(sel);
  });
  function tick() {
    state.rx += (state.x - state.rx) * 0.18;
    state.ry += (state.y - state.ry) * 0.18;
    dot.style.transform  = `translate3d(${state.x}px, ${state.y}px, 0)`;
    ring.style.transform = `translate3d(${state.rx}px, ${state.ry}px, 0) scale(${state.hover ? 1.8 : 1})`;
    ring.style.opacity   = state.hover ? 1 : 0.6;
    requestAnimationFrame(tick);
  }
  tick();
})();

// ─────────────────────────────────────────────────────────────────────────────
// 3. READING PROGRESS
// ─────────────────────────────────────────────────────────────────────────────
(function progress() {
  const bar = $("#read-progress");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// ─────────────────────────────────────────────────────────────────────────────
// 4. LIVE TICKER — Manaus clock + temperature
// ─────────────────────────────────────────────────────────────────────────────
(function ticker() {
  const t = $("#ticker-time"), te = $("#ticker-temp");
  let pulse = 0;
  function update() {
    const now = new Date();
    const h = ((now.getUTCHours() - 4) + 24) % 24;
    const m = String(now.getUTCMinutes()).padStart(2, "0");
    const s = String(now.getUTCSeconds()).padStart(2, "0");
    t.textContent = String(h).padStart(2, "0") + ":" + m + ":" + s;
    te.textContent = (26.4 + Math.sin(pulse / 4) * 0.3).toFixed(1) + "°C";
  }
  update();
  setInterval(update, 1000);
  setInterval(() => { pulse++; update(); }, 2400);
})();

// ─────────────────────────────────────────────────────────────────────────────
// 5. HERO PARALLAX + entrance
// ─────────────────────────────────────────────────────────────────────────────
(function hero() {
  const l1 = $("#hero-layer-1"), l2 = $("#hero-layer-2"), l3 = $("#hero-layer-3");
  const h1 = $("#hero-h1"), meta = $("#hero-meta"), tags = $("#hero-tags");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      l1.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.08)`;
      l2.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(1.1)`;
      l3.style.transform = `translate3d(0, ${y * 0.5}px, 0) scale(1.04)`;
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  setTimeout(() => {
    h1.classList.add("in");
    meta.classList.add("in");
    tags.classList.add("in");
  }, 1700);
})();

// ─────────────────────────────────────────────────────────────────────────────
// 6. REVEAL ON SCROLL
// ─────────────────────────────────────────────────────────────────────────────
(function reveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
})();

// ─────────────────────────────────────────────────────────────────────────────
// 7. THEME TOGGLE — cycles forest → paper → canopy
// ─────────────────────────────────────────────────────────────────────────────
(function theme() {
  const btn = $("#theme-toggle"), lbl = $("#theme-label");
  const order = ["forest", "paper", "canopy"];
  const labels = { forest: "Forest", paper: "Paper", canopy: "Canopy" };
  let cur = localStorage.getItem("vega-theme") || "forest";
  apply();
  btn.addEventListener("click", () => {
    cur = order[(order.indexOf(cur) + 1) % order.length];
    localStorage.setItem("vega-theme", cur);
    apply();
  });
  function apply() {
    document.documentElement.setAttribute("data-theme", cur);
    lbl.textContent = labels[cur];
  }
})();

// ─────────────────────────────────────────────────────────────────────────────
// 8. HORIZONTAL PROJECTS — scroll-driven on desktop, native swipe on mobile
// ─────────────────────────────────────────────────────────────────────────────
(function hProjects() {
  const outer     = $("#research");
  const track     = $("#h-projects-track");
  const bar       = $("#hp-bar");
  const count     = $("#hp-count");
  const trackWrap = track && track.parentElement;
  if (!outer || !track || !trackWrap) return;

  const isMobile = () => matchMedia("(max-width: 900px)").matches;

  // Desktop: scroll-position drives horizontal translate
  function onDesktopScroll() {
    const r      = outer.getBoundingClientRect();
    const total  = outer.offsetHeight - window.innerHeight;
    const p      = Math.max(0, Math.min(1, -r.top / total));
    const gutter = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--gutter")) || 32;
    const travel = track.scrollWidth - window.innerWidth + gutter * 2;
    track.style.transform = `translate3d(${-p * travel}px, 0, 0)`;
    bar.style.width = (p * 100) + "%";
    const idx = Math.min(5, Math.floor(p * 5) + 1);
    count.textContent = String(idx).padStart(2, "0") + " / 05";
  }

  // Mobile: native horizontal scroll drives the progress bar
  function onMobileScroll() {
    const maxScroll = trackWrap.scrollWidth - trackWrap.clientWidth;
    const p = maxScroll > 0 ? trackWrap.scrollLeft / maxScroll : 0;
    bar.style.width = (p * 100) + "%";
    const cardW = (track.firstElementChild && track.firstElementChild.offsetWidth) || 1;
    const idx = Math.min(5, Math.round(trackWrap.scrollLeft / (cardW + 16)) + 1);
    count.textContent = String(idx).padStart(2, "0") + " / 05";
  }

  trackWrap.addEventListener("scroll", function () {
    if (isMobile()) onMobileScroll();
  }, { passive: true });

  window.addEventListener("scroll", function () {
    if (!isMobile()) onDesktopScroll();
  }, { passive: true });

  window.addEventListener("resize", function () {
    if (!isMobile()) onDesktopScroll();
  });

  if (!isMobile()) onDesktopScroll();
})();

// ─────────────────────────────────────────────────────────────────────────────
// 9. PUBLICATIONS — filterable list
// ─────────────────────────────────────────────────────────────────────────────
(function pubs() {
  const filtersEl = $("#pub-filters");
  const listEl = $("#pub-list");
  const pubs = DATA.publications;
  let active = "All";

  DATA.publicationFilters.forEach((f) => {
    const btn = document.createElement("button");
    btn.className = "pub-filter" + (f === active ? " active" : "");
    btn.dataset.filter = f;
    const count = f === "All" ? "" : ` <span style="margin-left:8px;opacity:.5">${pubs.filter(p => p.tag === f).length}</span>`;
    btn.innerHTML = f + count;
    btn.addEventListener("click", () => {
      active = f;
      $$(".pub-filter", filtersEl).forEach(b => b.classList.toggle("active", b.dataset.filter === active));
      apply();
    });
    filtersEl.appendChild(btn);
  });

  function apply() {
    $$(".pub", listEl).forEach((row, i) => {
      const tag = pubs[i].tag;
      row.classList.toggle("dim", active !== "All" && tag !== active);
    });
  }

  pubs.forEach((p) => {
    const row = document.createElement("div");
    row.className = "pub";
    row.innerHTML = `
      <div class="pub-year">${p.year}</div>
      <div class="pub-title">${p.title}</div>
      <div class="pub-venue">${p.venue}</div>
      <div class="pub-tag">${p.tag}</div>
      <a href="#" class="pub-link">PDF →</a>`;
    listEl.appendChild(row);
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// 10. JOURNAL — grid + lightbox
// ─────────────────────────────────────────────────────────────────────────────
(function journal() {
  const grid = $("#journal-grid");
  const items = DATA.journal;
  let cur = null;

  items.forEach((it, i) => {
    const tile = document.createElement("div");
    tile.className = "j-tile";
    tile.style.gridColumn = it.gc;
    tile.style.gridRow = it.gr;
    tile.innerHTML = `
      <img src="${it.img}" alt="${it.ttl}" loading="lazy" />
      <div class="j-tile-caption">
        <div class="ttl">${it.ttl}</div>
        <div class="meta">${it.meta}</div>
      </div>`;
    tile.addEventListener("click", () => open(i));
    grid.appendChild(tile);
  });

  const lb = $("#lightbox");
  const lbImg = $("#lb-img");
  const lbTitle = $("#lb-title");
  const lbCounter = $("#lb-counter");

  function open(i) {
    cur = i;
    const it = items[i];
    lbImg.src = it.img;
    lbImg.alt = it.ttl;
    lbTitle.textContent = it.ttl;
    lbCounter.textContent = `${it.meta} · ${String(i + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    lb.classList.add("open");
  }
  function close() { lb.classList.remove("open"); cur = null; }
  function next()  { if (cur !== null) open((cur + 1) % items.length); }
  function prev()  { if (cur !== null) open((cur - 1 + items.length) % items.length); }

  $("#lb-close").addEventListener("click", close);
  $("#lb-next").addEventListener("click", (e) => { e.stopPropagation(); next(); });
  $("#lb-prev").addEventListener("click", (e) => { e.stopPropagation(); prev(); });
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  window.addEventListener("keydown", (e) => {
    if (cur === null) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// 11. SPECIES — auto-scrolling rail with SVG plates
// ─────────────────────────────────────────────────────────────────────────────
(function species() {
  const track = $("#species-rail-track");
  const wrap = $("#species-rail-wrap");
  const loop = [...DATA.species, ...DATA.species];

  loop.forEach((s, i) => {
    const card = document.createElement("article");
    card.className = "sx";
    card.innerHTML = `
      <div class="sx-head">
        <span class="sx-status"><span class="spx-dot status-${s.status}"></span>${s.status} · ${STATUS[s.status]}</span>
        <span class="sx-num">${String((i % DATA.species.length) + 1).padStart(2, "0")} / ${String(DATA.species.length).padStart(2, "0")}</span>
      </div>
      <div class="sx-plate">
        ${SPECIES_PLATES[s.icon] || ""}
        <div class="sx-grid-bg"></div>
      </div>
      <div class="sx-body">
        <div class="sx-sci">${s.sci}</div>
        <div class="sx-name">${s.name}</div>
        <div class="sx-note">— ${s.note}</div>
      </div>
      <div class="sx-foot">
        <span><span class="k">Region</span>${s.region}</span>
        <span><span class="k">Stratum</span>${s.height}</span>
      </div>`;
    card.addEventListener("mouseenter", () => wrap.classList.add("paused"));
    card.addEventListener("mouseleave", () => wrap.classList.remove("paused"));
    track.appendChild(card);
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// 12. EXPEDITIONS MAP — pins + details + list
// ─────────────────────────────────────────────────────────────────────────────
(function expeditions() {
  const svg = $("#map-svg");
  const list = $("#exp-list");
  const md = {
    year: $("#md-year"), title: $("#md-title"), country: $("#md-country"),
    body: $("#md-body"), days: $("#md-days"), team: $("#md-team"),
  };
  const NS = "http://www.w3.org/2000/svg";

  let active = DATA.expeditions[0].id;
  updateDetail();

  DATA.expeditions.forEach((e) => {
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "map-pin");
    g.setAttribute("transform", `translate(${e.x},${e.y})`);
    g.dataset.id = e.id;
    g.innerHTML = `<circle r="1.4" class="pin-ring"></circle><circle r="0.7" class="pin-core"></circle>`;
    g.addEventListener("mouseenter", () => { active = e.id; updateDetail(); });
    g.addEventListener("click",      () => { active = e.id; updateDetail(); });
    svg.appendChild(g);
  });

  DATA.expeditions.forEach((e) => {
    const item = document.createElement("div");
    item.className = "exp-item" + (e.id === active ? " active" : "");
    item.dataset.id = e.id;
    item.innerHTML = `<div class="y">${e.year}</div><div class="t">${e.title}</div><div class="c">${e.country}</div>`;
    item.addEventListener("click", () => { active = e.id; updateDetail(); });
    list.appendChild(item);
  });

  function updateDetail() {
    const e = DATA.expeditions.find((x) => x.id === active);
    if (!e) return;
    md.year.textContent = e.year;
    md.title.textContent = e.title;
    md.country.textContent = e.country;
    md.body.textContent = e.body;
    md.days.textContent = e.days;
    md.team.textContent = e.team;
    // active pin label
    $$(".map-pin", svg).forEach((g) => {
      const id = g.dataset.id;
      const isActive = id === active;
      g.querySelector(".pin-core").setAttribute("fill", isActive ? "var(--ink)" : "var(--accent)");
      // remove old label
      const oldLabel = g.querySelector("text");
      if (oldLabel) oldLabel.remove();
      if (isActive) {
        const exp = DATA.expeditions.find((x) => x.id === id);
        const t = document.createElementNS(NS, "text");
        t.setAttribute("x", "2");
        t.setAttribute("y", "0.6");
        t.setAttribute("fill", "var(--ink)");
        t.setAttribute("font-size", "1.4");
        t.setAttribute("font-family", "var(--mono)");
        t.setAttribute("letter-spacing", "0.08");
        t.textContent = exp.title.toUpperCase();
        g.appendChild(t);
      }
    });
    $$(".exp-item", list).forEach((item) => item.classList.toggle("active", item.dataset.id === active));
  }
})();

// ─────────────────────────────────────────────────────────────────────────────
// 13. PRESS — populate grid
// ─────────────────────────────────────────────────────────────────────────────
(function press() {
  const grid = $("#press-grid");
  DATA.press.forEach((p) => {
    const item = document.createElement("a");
    item.href = "#";
    item.className = "press-item";
    item.innerHTML = `
      <span class="outlet">${p.outlet}</span>
      <span class="ttl">${p.ttl}</span>
      <div class="date-row"><span>${p.date}</span><span>${p.kind}</span></div>
      <span class="arrow">↗</span>`;
    grid.appendChild(item);
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// 14. MAGNETIC BUTTONS — pull toward cursor
// ─────────────────────────────────────────────────────────────────────────────
(function magnetic() {
  if (matchMedia("(pointer: coarse)").matches) return;
  $$("[data-magnetic]").forEach((wrap) => {
    const el = wrap.querySelector(".magnetic");
    if (!el) return;
    const strength = 0.25;
    wrap.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * strength;
      const dy = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    wrap.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// 15. MOBILE NAV — hamburger toggle with circular reveal
// ─────────────────────────────────────────────────────────────────────────────
(function mobileNav() {
  const btn     = $("#nav-hamburger");
  const overlay = $("#nav-mobile");
  if (!btn || !overlay) return;

  function open() {
    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  btn.addEventListener("click", () => btn.classList.contains("open") ? close() : open());

  $$(".nav-mobile-link", overlay).forEach((a) => a.addEventListener("click", close));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) close();
  });
})();
