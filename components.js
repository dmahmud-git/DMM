/**
 * components.js
 * Builds and injects the shared Header and Footer into every page.
 *
 * Usage (at bottom of each HTML file):
 *   Components.init(rootPath);
 *   // rootPath = ""   for index.html (root level)
 *   // rootPath = "../" for pages/*.html
 */
const Components = {

  init(rootPath = "") {
    this.root = rootPath;
    
    // Apply configured base font size from SITE config if defined
    if (typeof SITE !== "undefined" && SITE.fontSize) {
      document.documentElement.style.setProperty("--base-font-size", SITE.fontSize);
    }

    this._buildHeader();
    this._buildFooter();
    this._highlightNav();
    this._initBurger();
  },

  _url(href) {
    if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return href;
    return this.root + href;
  },

  /* ── HEADER ──────────────────────────────── */
  _buildHeader() {
    const topbar = document.getElementById("topbar");
    if (!topbar) return;

    const navLinks = SITE.nav.map(item =>
      `<a href="${this._url(item.href)}" data-navhref="${item.href}">${item.label}</a>`
    ).join("");

    topbar.innerHTML = `
      <div class="topbar-inner">
        <a class="topbar-brand" href="${this._url("index.html")}">${SITE.siteTitle}</a>
        <nav class="topbar-nav" id="desktop-nav">${navLinks}</nav>
        <button class="burger" id="burger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>`;

    /* Mobile drawer */
    const drawer = document.getElementById("mobile-drawer");
    if (drawer) {
      drawer.innerHTML = SITE.nav.map(item =>
        `<a href="${this._url(item.href)}" data-navhref="${item.href}">${item.label}</a>`
      ).join("");
    }

    /* Sidebar */
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    let avatarHtml;
    if (SITE.avatar) {
      avatarHtml = `<img src="${this._url(SITE.avatar)}" alt="${SITE.name}"/>`;
    } else {
      const initials = SITE.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
      avatarHtml = `<span class="sb-initials">${initials}</span>`;
    }

    const linksHtml = SITE.links.map(lk => {
      let iconHtml = lk.icon;
      if (lk.icon && (lk.icon.includes(".") || lk.icon.startsWith("images/"))) {
        iconHtml = `<img src="${this._url(lk.icon)}" alt="" style="width: 16px; height: 16px; object-fit: contain; display: block;"/>`;
      }
      return `
      <li>
        <a href="${lk.href}" target="_blank" rel="noopener noreferrer">
          <span class="sb-icon">${iconHtml}</span>
          <span>${lk.label}</span>
        </a>
      </li>`;
    }).join("");

    sidebar.innerHTML = `
      <div class="sb-avatar">${avatarHtml}</div>
      <h3 class="sb-name">${SITE.name}</h3>
      <hr class="sb-hr"/>
      <ul class="sb-links">${linksHtml}</ul>`;
  },

  /* ── FOOTER ──────────────────────────────── */
  _buildFooter() {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-left">
          <strong>Follow:</strong>
          <a href="https://github.com" target="_blank">GitHub</a>
          <span class="sep">·</span>
          <a href="#">Feed</a>
        </div>
        <div class="footer-copy">
          &copy; ${year} ${SITE.name} &nbsp;·&nbsp;
          Powered by <a href="https://jekyllrb.com" target="_blank">Jekyll</a>
          &amp; <a href="https://github.com/academicpages/academicpages.github.io" target="_blank">Academic Pages</a>
        </div>
      </div>`;
  },

  /* ── Active nav highlight ─────────────────── */
  _highlightNav() {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-navhref]").forEach(a => {
      if (a.dataset.navhref.split("/").pop() === current) a.classList.add("active");
    });
  },

  /* ── Burger / mobile drawer ──────────────── */
  _initBurger() {
    const burger = document.getElementById("burger");
    const drawer = document.getElementById("mobile-drawer");
    if (!burger || !drawer) return;
    burger.addEventListener("click", () => {
      const open = drawer.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    drawer.addEventListener("click", e => {
      if (e.target.tagName === "A") {
        drawer.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  },
};
