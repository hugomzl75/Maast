const PROJECTS = [
  { slug: "albert-thomas",  title: "Albert Thomas",  category: "", photoCount: 6 },
  { slug: "amiens",         title: "Amiens",         category: "", photoCount: 6 },
  { slug: "beranger",       title: "Béranger",       category: "", photoCount: 6 },
  { slug: "crouy",          title: "Crouy",          category: "", photoCount: 6 },
  { slug: "guebwiller",     title: "Guebwiller",     category: "", photoCount: 6 },
  { slug: "jean-viollet",   title: "Jean Viollet",   category: "", photoCount: 5 },
  { slug: "jean-jaures",    title: "Jean-Jaurès",    category: "", photoCount: 6 },
  { slug: "maroc",          title: "Maroc",          category: "", photoCount: 6 },
  { slug: "massy",          title: "Massy",          category: "", photoCount: 6 },
  { slug: "opera-bastille", title: "Opéra Bastille", category: "", photoCount: 6 },
  { slug: "poissonniers",   title: "Poissonniers",   category: "", photoCount: 6 },
  { slug: "poyenne",        title: "Poyenne",        category: "", photoCount: 6 },
  { slug: "prony",          title: "Prony",          category: "", photoCount: 5 },
  { slug: "reginaldo",      title: "Reginaldo",      category: "", photoCount: 6 },
  { slug: "rueil",          title: "Rueil",          category: "", photoCount: 6 },
  { slug: "snecma",         title: "Snecma",         category: "", photoCount: 5 },
  { slug: "vaucouleurs",    title: "Vaucouleurs",    category: "", photoCount: 5 },
  { slug: "zcb",            title: "ZCB",            category: "", photoCount: 6 },
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
