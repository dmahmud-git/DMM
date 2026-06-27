/**
 * utils.js — shared rendering helpers
 */
const Utils = {

  fmtDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    });
  },

  tags(arr = []) {
    return arr.map(t => `<span class="tag">${t}</span>`).join("");
  },

  pills(arr = []) {
    return arr.map(l =>
      `<a class="pill" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`
    ).join("");
  },

  /* Only renders an <img> if src is non-empty — no broken images.
     Prefixes the site root path so "images/x.jpg" works correctly
     whether called from index.html or from pages/*.html. */
  img(src, alt = "") {
    if (!src) return "";
    const root = (typeof Components !== "undefined" && Components.root) ? Components.root : "";
    return `<img class="entry-thumb" src="${root}${src}" alt="${alt}" loading="lazy"/>`;
  },

  render(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html || "<p>Nothing here yet.</p>";
  },
};
