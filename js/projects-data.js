const CATEGORIES = [
  { key: "logements", label: "Logements" },
  { key: "equipements", label: "Programmes mixtes & équipements" },
  { key: "etudes", label: "Études" },
];

const PROJECTS = [
  // Logements
  { slug: "amiens",         title: "Claudel",        group: "logements",   photoCount: 7 },
  { slug: "poyenne",        title: "Poyenne",        group: "logements",   photoCount: 6 },
  { slug: "reginaldo",      title: "Reginaldo",      group: "logements",   photoCount: 6 },
  { slug: "poissonniers",   title: "Poissonniers",   group: "logements",   photoCount: 7 },
  { slug: "beranger",       title: "Béranger",       group: "logements",   photoCount: 6 },
  { slug: "crouy",          title: "Crouy",          group: "logements",   photoCount: 7 },
  { slug: "maroc",          title: "Maroc",          group: "logements",   photoCount: 7 },
  // Programmes mixtes & équipements
  { slug: "vaucouleurs",    title: "Vaucouleurs",    group: "equipements", photoCount: 6 },
  { slug: "massy",          title: "Massy",          group: "equipements", photoCount: 6 },
  { slug: "jean-jaures",    title: "Jean-Jaurès",    group: "equipements", photoCount: 7 },
  { slug: "guebwiller",     title: "Guebwiller",     group: "equipements", photoCount: 7 },
  { slug: "zcb",            title: "ZCB",            group: "equipements", photoCount: 7 },
  { slug: "albert-thomas",  title: "Albert Thomas",  group: "equipements", photoCount: 7 },
  { slug: "jean-viollet",   title: "Jean Viollet",   group: "equipements", photoCount: 5 },
  { slug: "prony",          title: "Prony",          group: "equipements", photoCount: 5 },
  { slug: "snecma",         title: "Snecma",         group: "equipements", photoCount: 5 },
  // Études
  { slug: "opera-bastille", title: "Bastille",       group: "etudes",      photoCount: 7 },
  { slug: "rueil",          title: "Rueil",          group: "etudes",      photoCount: 7 },
];

function projectCover(p) {
  return `assets/projects/${p.slug}/01-thumb.jpg`;
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
