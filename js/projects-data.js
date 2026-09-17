const CATEGORIES = [
  { key: "logements", label: "Logements" },
  { key: "equipements", label: "Programmes mixtes & équipements" },
];

const PROJECTS = [
  // Logements
  { slug: "amiens",         title: "Claudel",        group: "logements",   photoCount: 7, hasPlan: true },
  { slug: "poyenne",        title: "Poyenne",        group: "logements",   photoCount: 6, hasPlan: false },
  { slug: "reginaldo",      title: "Reginaldo",      group: "logements",   photoCount: 6, hasPlan: false },
  { slug: "poissonniers",   title: "Poissonniers",   group: "logements",   photoCount: 7, hasPlan: true },
  { slug: "beranger",       title: "Béranger",       group: "logements",   photoCount: 6, hasPlan: false },
  { slug: "crouy",          title: "Crouy",          group: "logements",   photoCount: 7, hasPlan: true },
  { slug: "maroc",          title: "Maroc",          group: "logements",   photoCount: 7, hasPlan: true },
  // Programmes mixtes & équipements
  { slug: "opera-bastille", title: "Bastille",       group: "equipements", photoCount: 7, hasPlan: true },
  { slug: "rueil",          title: "Rueil",          group: "equipements", photoCount: 7, hasPlan: true },
  { slug: "vaucouleurs",    title: "Vaucouleurs",    group: "equipements", photoCount: 6, hasPlan: true },
  { slug: "massy",          title: "Massy",          group: "equipements", photoCount: 6, hasPlan: false },
  { slug: "jean-jaures",    title: "Jean-Jaurès",    group: "equipements", photoCount: 7, hasPlan: true },
  { slug: "guebwiller",     title: "Guebwiller",     group: "equipements", photoCount: 7, hasPlan: true },
  { slug: "zcb",            title: "ZCB",            group: "equipements", photoCount: 7, hasPlan: true },
  { slug: "albert-thomas",  title: "Albert Thomas",  group: "equipements", photoCount: 7, hasPlan: true },
  { slug: "jean-viollet",   title: "Jean Viollet",   group: "equipements", photoCount: 5, hasPlan: false },
  { slug: "prony",          title: "Prony",          group: "equipements", photoCount: 5, hasPlan: false },
  { slug: "snecma",         title: "Snecma",         group: "equipements", photoCount: 5, hasPlan: false },
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
