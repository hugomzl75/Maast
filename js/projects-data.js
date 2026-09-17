const CATEGORIES = [
  { key: "logements", label: "Logements" },
  { key: "equipements", label: "Programmes mixtes & équipements" },
  { key: "etudes", label: "Études" },
];

const PROJECTS = [
  // Logements
  { slug: "amiens",         title: "11 logements sociaux | SIP | Amiens",        group: "logements",   photoCount: 7 },
  { slug: "poyenne",        title: "103 studios | ADOMA | Bordeaux",             group: "logements",   photoCount: 6 },
  { slug: "reginaldo",      title: "43 studios | I3F | Paris 11",                group: "logements",   photoCount: 6 },
  { slug: "poissonniers",   title: "6 logements sociaux | RIVP | Paris 18",      group: "logements",   photoCount: 7 },
  { slug: "beranger",       title: "53 logements | ADOMA | Paris 3",             group: "logements",   photoCount: 6 },
  { slug: "crouy",          title: "45 logements | OPAL | Crouy",                group: "logements",   photoCount: 7 },
  { slug: "maroc",          title: "46 logements sociaux | Paris Habitat | Paris 19", group: "logements",   photoCount: 7 },
  // Programmes mixtes & équipements
  { slug: "vaucouleurs",    title: "152 logements + commerces | Paris Habitat | Paris 11", group: "equipements", photoCount: 6 },
  { slug: "massy",          title: "53 logements + crèche | Générale de Promotion | Massy", group: "equipements", photoCount: 6 },
  { slug: "jean-jaures",    title: "34 logements en accession + commerces | Nexity | Clichy la Garenne", group: "equipements", photoCount: 7 },
  { slug: "guebwiller",     title: "EHPAD de 120 lits | HCC | Guebwiller",       group: "equipements", photoCount: 7 },
  { slug: "zcb",            title: "107 logements locatifs intermédiaires + commerces | SNI | Paris 17", group: "equipements", photoCount: 7 },
  { slug: "albert-thomas",  title: "MAPAD de 73 lits | SAGE | Tremblay en France", group: "equipements", photoCount: 7 },
  { slug: "jean-viollet",   title: "EHPAD de 82 lits + 27 logements | SAHLM du Moulin Vert | la Courneuve", group: "equipements", photoCount: 5 },
  { slug: "prony",          title: "Bureaux | Groupe MEDERIC | Paris 17",        group: "equipements", photoCount: 5 },
  { slug: "snecma",         title: "Bureaux | Groupe SAFRAN | Evry Corbeil",     group: "equipements", photoCount: 5 },
  // Études
  { slug: "opera-bastille", title: "Fermeture de façade | OPERA dE PARIS | Paris 4", group: "etudes",      photoCount: 7 },
  { slug: "rueil",          title: "Espace cinématographique | Groupe SOPIC | Rueil Malmaison", group: "etudes",      photoCount: 7 },
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
