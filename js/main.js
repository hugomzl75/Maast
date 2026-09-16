// ---------- Mobile nav ----------
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-header nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.textContent = nav.classList.contains("open") ? "Fermer" : "Menu";
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.textContent = "Menu";
    })
  );
}

// ---------- Card markup ----------
function cardHTML(p, index) {
  return `
    <a class="card" href="projects.html#${p.slug}" data-slug="${p.slug}" aria-label="Voir le projet ${p.title}">
      <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
      <img src="${projectCover(p)}" alt="${p.title}" loading="lazy">
      <span class="card-overlay">
        <span class="card-title">${p.title}</span>
        ${p.category || p.location ? `<span class="card-meta">${[p.category, p.location].filter(Boolean).join(" — ")}</span>` : ""}
      </span>
    </a>`;
}

// ---------- Home: featured strip ----------
function renderFeatured() {
  const el = document.querySelector("#featured-grid");
  if (!el) return;
  const picks = PROJECTS.slice(0, 3);
  el.innerHTML = picks.map((p, i) => cardHTML(p, i)).join("");
  attachCardHandlers(el);
}

// ---------- Projects page: full grid ----------
function renderProjectsGrid() {
  const el = document.querySelector("#projects-grid");
  if (!el) return;
  el.innerHTML = PROJECTS.map((p, i) => cardHTML(p, i)).join("");
  attachCardHandlers(el);
}

function attachCardHandlers(container) {
  container.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const slug = card.dataset.slug;
      const project = PROJECTS.find((p) => p.slug === slug);
      if (project) openLightbox(project);
      history.replaceState(null, "", `#${slug}`);
    });
  });
}

// ---------- Lightbox ----------
let currentProject = null;
let currentIndex = 0;

function buildLightbox() {
  if (document.querySelector(".lightbox")) return;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <div class="lightbox-top">
      <div>
        <div class="lightbox-title"></div>
        <div class="lightbox-meta"></div>
      </div>
      <button class="lightbox-close" aria-label="Fermer">&times;</button>
    </div>
    <div class="lightbox-stage">
      <button class="lightbox-nav lightbox-prev" aria-label="Photo précédente">&#8249;</button>
      <img src="" alt="">
      <button class="lightbox-nav lightbox-next" aria-label="Photo suivante">&#8250;</button>
    </div>
    <div class="lightbox-thumbs"></div>
  `;
  document.body.appendChild(lb);

  lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  lb.querySelector(".lightbox-prev").addEventListener("click", () => step(-1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

function openLightbox(project) {
  buildLightbox();
  currentProject = project;
  currentIndex = 0;
  const lb = document.querySelector(".lightbox");
  lb.querySelector(".lightbox-title").textContent = project.title;
  lb.querySelector(".lightbox-meta").textContent = [project.category, project.location, project.year]
    .filter(Boolean)
    .join(" — ");

  const photos = projectPhotos(project);
  const thumbs = lb.querySelector(".lightbox-thumbs");
  thumbs.innerHTML = photos
    .map((ph, i) => `<img src="${ph.thumb}" data-i="${i}" alt="${project.title} photo ${i + 1}">`)
    .join("");
  thumbs.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", () => showPhoto(parseInt(img.dataset.i, 10)));
  });

  showPhoto(0);
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function showPhoto(i) {
  const photos = projectPhotos(currentProject);
  currentIndex = (i + photos.length) % photos.length;
  const lb = document.querySelector(".lightbox");
  const img = lb.querySelector(".lightbox-stage img");
  img.src = photos[currentIndex].full;
  img.alt = `${currentProject.title} — photo ${currentIndex + 1}`;
  lb.querySelectorAll(".lightbox-thumbs img").forEach((t, i2) =>
    t.classList.toggle("active", i2 === currentIndex)
  );
}

function step(dir) {
  showPhoto(currentIndex + dir);
}

function closeLightbox() {
  const lb = document.querySelector(".lightbox");
  if (lb) lb.classList.remove("open");
  document.body.style.overflow = "";
  history.replaceState(null, "", location.pathname);
}

// ---------- Open from URL hash on projects page ----------
function openFromHash() {
  const slug = location.hash.replace("#", "");
  if (!slug) return;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (project) openLightbox(project);
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderFeatured();
  renderProjectsGrid();
  buildLightbox();
  openFromHash();
});
