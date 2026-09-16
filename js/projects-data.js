const PROJECTS = [
  { slug: "albert-thomas",  title: "Albert Thomas",  category: "", photoCount: 7, hasPlan: true },
  { slug: "amiens",         title: "Amiens",         category: "", photoCount: 7, hasPlan: true },
  { slug: "beranger",       title: "Béranger",       category: "", photoCount: 6, hasPlan: false },
  { slug: "crouy",          title: "Crouy",          category: "", photoCount: 7, hasPlan: true },
  { slug: "guebwiller",     title: "Guebwiller",     category: "", photoCount: 7, hasPlan: true },
  { slug: "jean-viollet",   title: "Jean Viollet",   category: "", photoCount: 5, hasPlan: false },
  { slug: "jean-jaures",    title: "Jean-Jaurès",    category: "", photoCount: 7, hasPlan: true },
  { slug: "maroc",          title: "Maroc",          category: "", photoCount: 7, hasPlan: true },
  { slug: "massy",          title: "Massy",          category: "", photoCount: 6, hasPlan: false },
  { slug: "opera-bastille", title: "Opéra Bastille", category: "", photoCount: 7, hasPlan: true },
  { slug: "poissonniers",   title: "Poissonniers",   category: "", photoCount: 7, hasPlan: true },
  { slug: "poyenne",        title: "Poyenne",        category: "", photoCount: 6, hasPlan: false },
  { slug: "prony",          title: "Prony",          category: "", photoCount: 5, hasPlan: false },
  { slug: "reginaldo",      title: "Reginaldo",      category: "", photoCount: 6, hasPlan: false },
  { slug: "rueil",          title: "Rueil",          category: "", photoCount: 7, hasPlan: true },
  { slug: "snecma",         title: "Snecma",         category: "", photoCount: 5, hasPlan: false },
  { slug: "vaucouleurs",    title: "Vaucouleurs",    category: "", photoCount: 6, hasPlan: true },
  { slug: "zcb",            title: "ZCB",            category: "", photoCount: 7, hasPlan: true },
];

function projectCover(p) {
  return `assets/projects/${p.slug}/01-thumb.jpg`;
}

function projectPlan(p) {
  return `assets/projects/${p.slug}/${String(p.photoCount).padStart(2, "0")}-thumb.jpg`;
}

function projectPhotos(p) {
  const photos = [];
  for (let i = 1; i <= p.photoCount; i++) {
    const n = String(i).padStart(2, "0");
    photos.push({
      full: `assets/projects/${p.slug}/${n}.jpg`,
      thumb: `assets/projects/${p.slug}/${n}-thumb.jpg`,
    });
  }
  return photos;
}
