// ---------- Page transition ----------
const TRANSITION_MS = 380;

function initPageTransition() {
  const el = document.querySelector(".page-transition");
  if (!el) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add("revealed"));
  });

  document.querySelectorAll("a.js-transition").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || a.target === "_blank") return;
      e.preventDefault();
      el.classList.remove("revealed");
      setTimeout(() => {
        window.location.href = href;
      }, TRANSITION_MS);
    });
  });
}

// ---------- Hero sky video (accueil) ----------
function initHeroVideo() {
  const video = document.querySelector(".hero-sky-video");
  if (!video) return;

  const tryPlay = () => {
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  };

  tryPlay();

  if (video.paused) {
    const resume = () => {
      tryPlay();
      window.removeEventListener("touchstart", resume);
      window.removeEventListener("scroll", resume);
      window.removeEventListener("click", resume);
    };
    window.addEventListener("touchstart", resume, { once: true, passive: true });
    window.addEventListener("scroll", resume, { once: true, passive: true });
    window.addEventListener("click", resume, { once: true });
  }
}

// ---------- Hero logo (accueil) ----------
function initHeroLogo() {
  const logo = document.querySelector(".hero-logo");
  if (!logo) return;
  const overlay = document.querySelector(".page-transition");
  const canHover = window.matchMedia("(hover: hover)").matches;

  logo.addEventListener("click", (e) => {
    e.preventDefault();
    const href = logo.getAttribute("href");
    const go = () => {
      if (overlay) {
        overlay.classList.remove("revealed");
        setTimeout(() => {
          window.location.href = href;
        }, TRANSITION_MS);
      } else {
        window.location.href = href;
      }
    };
    if (canHover) {
      go();
    } else {
      if (logo.classList.contains("is-tapped")) return;
      logo.classList.add("is-tapped");
      setTimeout(go, 1000);
    }
  });
}

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
function cardHTML(p) {
  return `
    <a class="project-tile js-transition" data-group="${p.group}" href="project.html?p=${p.slug}" aria-label="Voir le projet ${p.title}">
      <span class="tile-frame">
        <img class="tile-photo" src="${projectCover(p)}" alt="${p.title}" loading="lazy">
      </span>
      <span class="tile-caption">${p.title}</span>
    </a>`;
}

// ---------- Projects page: grid grouped by category ----------
function renderProjectsGrid() {
  const el = document.querySelector("#projects-groups");
  if (!el) return;

  el.innerHTML = CATEGORIES.map((cat) => {
    const items = PROJECTS.filter((p) => p.group === cat.key);
    return `
      <section class="project-group">
        <h2 class="category-label" data-group="${cat.key}">${cat.label}</h2>
        <div class="projects-grid">
          ${items.map((p) => cardHTML(p)).join("")}
        </div>
      </section>`;
  }).join("");

  document.querySelectorAll(".category-label").forEach((label) => {
    const group = label.dataset.group;
    label.addEventListener("mouseenter", () => document.body.classList.add(`hover-${group}`));
    label.addEventListener("mouseleave", () => document.body.classList.remove(`hover-${group}`));
  });
}

// ---------- Project detail page ----------
function renderProjectDetail() {
  const container = document.querySelector("#project-detail");
  if (!container) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get("p");
  const idx = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
  const project = PROJECTS[idx];
  const nextProject = PROJECTS[(idx + 1) % PROJECTS.length];

  document.title = `${project.title} — maast.a`;

  const photos = projectPhotos(project);

  const META_FIELDS = [
    { key: "lieu", heading: "lieu" },
    { key: "moe", heading: "maîtrise d'œuvre" },
    { key: "surface", heading: "surface" },
    { key: "cout", heading: "coût de construction" },
    { key: "certification", heading: "certification environnementale" },
  ];
  const NARRATIVE_FIELDS = [
    { key: "programme", heading: "programme" },
    { key: "contexte", heading: "contexte" },
  ];
  const fieldHTML = (field) => `
      <div class="project-description-section">
        <h3>${field.heading}</h3>
        <p>${project.description[field.key]}</p>
      </div>`;
  const descriptionHTML = META_FIELDS
    .filter((field) => project.description && project.description[field.key])
    .map(fieldHTML)
    .join("");
  const narrativeHTML = NARRATIVE_FIELDS
    .filter((field) => project.description && project.description[field.key])
    .map(fieldHTML)
    .join("");

  const plans = project.plans || (project.plan ? [{ file: "plan.jpg" }] : []);
  const planHTML = plans
    .map(
      (pl) => `
      <figure class="project-plan-figure">
        ${plans.length > 1 && pl.label ? `<div class="project-plan-label">${pl.label}</div>` : ""}
        <img class="project-plan" src="assets/projects/${project.slug}/${pl.file}" alt="${project.title} — ${pl.label || "plan"}">
      </figure>`
    )
    .join("");

  container.innerHTML = `
    <h1 class="project-title project-title--mobile">${project.title}</h1>
    <aside class="project-sidebar">
      <a class="project-back js-transition" href="projects.html">&larr; Projets</a>
      <h1 class="project-title">${project.title}</h1>
      ${descriptionHTML ? `<div class="project-description">${descriptionHTML}</div>` : ""}
      ${planHTML}
    </aside>
    <div class="project-photos">
      ${photos
        .map(
          (ph, i) => `
        <figure class="project-photo">
          <img src="${ph.full}" alt="${project.title} — photo ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}">
        </figure>`
        )
        .join("")}
    </div>
    <a class="project-next js-transition" href="project.html?p=${nextProject.slug}">
      <span class="project-next-label">Projet suivant</span>
      <span class="project-next-title">${nextProject.title}</span>
    </a>
    ${narrativeHTML ? `<aside class="project-narrative"><div class="project-description">${narrativeHTML}</div></aside>` : ""}
  `;

  initPlanLightbox();
}

// ---------- Project plan lightbox ----------
function initPlanLightbox() {
  const plans = document.querySelectorAll(".project-plan");
  if (!plans.length) return;

  const overlay = document.createElement("div");
  overlay.className = "plan-lightbox";
  const img = document.createElement("img");
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  const close = () => overlay.classList.remove("open");
  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      img.src = plan.src;
      img.alt = plan.alt;
      overlay.classList.add("open");
    });
  });
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHeroVideo();
  initHeroLogo();
  renderProjectsGrid();
  renderProjectDetail();
  initPageTransition();
});
