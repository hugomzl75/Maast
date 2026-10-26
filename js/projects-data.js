const CATEGORIES = [
  { key: "logements", label: "Logements collectifs" },
  { key: "equipements", label: "Programmes mixtes & équipements" },
  { key: "etudes", label: "Études & concours" },
];

const MANDATAIRE = "maast architecture — Isabelle Manescau & François Marzelle";

const PROJECTS = [
  // Logements
  {
    slug: "amiens", title: "11 logements sociaux | SIP | Amiens", group: "logements", photoCount: 8,
    description: {
      contexte: "L'opération est située à Amiens dans la ZAC Paul-Claudel, superficie totale de 40 ha au sud de la ville, à proximité du centre-ville, et répond à la manière d'habiter à la fois dans un parc et en ville.",
      programme: "Réalisation d'un immeuble de 11 logements collectifs locatifs et parking en superstructure.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "poyenne", title: "103 studios | ADOMA | Bordeaux", group: "logements", photoCount: 6,
    description: {
      programme: "Restructuration en 102 studios équipés, lauréate du Prix de la Première Œuvre du Moniteur pour la réalisation de 102 chambres en 21 unités de vie.",
      mandataire: "maast architecture",
    },
  },
  {
    slug: "reginaldo", title: "43 studios | I3F | Paris 11", group: "logements", photoCount: 6,
    description: {
      contexte: "Le site proposé par RSI 3F est le cœur de Belleville, le Paris du quotidien, celui du tissu faubourien.",
      programme: "Démolition d'un foyer de travailleurs migrants de 29 logements existants et construction d'une résidence sociale de 43 logements locatifs sociaux (PLAI) pour les mêmes résidents.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "poissonniers", title: "6 logements sociaux | RIVP | Paris 18", group: "logements", photoCount: 7,
    description: {
      contexte: "Quartier Château Rouge, le site proposé par la RIVP est le vieux Paris de tissu de faubourg, celui des courettes et des petits jardins aujourd'hui en pleine mutation.",
      programme: "Réalisation d'un ensemble immobilier de six logements sociaux locatifs (PLAI).",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "beranger", title: "53 logements | ADOMA | Paris 3", group: "logements", photoCount: 6,
    description: {
      contexte: "Un quartier du vieux Paris situé entre la rue Béranger et la place de la République.",
      programme: "Restructuration d'un immeuble haussmannien avec la création de 43 logements sur rue et la construction de 10 logements sur cour.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "crouy", title: "45 logements | OPAL | Crouy", group: "logements", photoCount: 7,
    description: {
      contexte: "En limite des terres agricoles et en plein cœur de la commune de Crouy, le tissu est dense et se constitue de grosses maisons de ville. Le projet s'inscrit dans le plan de reconversion de la friche urbaine Pecquet Tesson.",
      programme: "Reconversion de la friche urbaine Pecquet-Tesson et construction de 45 logements.",
      mandataire: `${MANDATAIRE} (architecte associé : Pouget-Delasalle architectes)`,
    },
  },
  {
    slug: "maroc", title: "46 logements sociaux | Paris Habitat | Paris 19", group: "logements", photoCount: 7,
    description: {
      contexte: "Greffé à la rue du Maroc dans un quartier hétéroclite, le bâtiment marque l'entrée d'un futur jardin public ainsi que l'aboutissement de la restructuration de l'îlot après la démolition de la tour du Maroc.",
      programme: "Réalisation d'un bâtiment de 46 logements et d'un local d'activité sur 2 niveaux de sous-sol.",
      mandataire: MANDATAIRE,
    },
  },
  // Programmes mixtes & équipements
  {
    slug: "vaucouleurs", title: "152 logements + commerces | Paris Habitat | Paris 11", group: "equipements", photoCount: 6,
    description: {
      programme: "Opération de réhabilitation de logements rues de Vaucouleurs, de la Fontaine aux Rois, de l'Orillon et du Moulin Joly.",
      mandataire: "maast architecture",
    },
  },
  {
    slug: "massy", title: "53 logements + crèche | Générale de Promotion | Massy", group: "equipements", photoCount: 6,
    description: {
      programme: "Opération de logements en accession et d'une crèche, rue Emile Baudot à Massy.",
      mandataire: "maast architecture",
    },
  },
  {
    slug: "jean-jaures", title: "34 logements en accession + commerces | Nexity | Clichy la Garenne", group: "equipements", photoCount: 7,
    description: {
      contexte: "Le site proposé par Nexity est au cœur de Clichy-la-Garenne, proche des équipements et du métro, dans un tissu de faubourg hétéroclite offrant en bon voisinage : pavillons, petits logements collectifs, commerces de proximité et bâtiments industriels de bonne facture.",
      programme: "Réalisation de 34 logements en accession, commerces au rez-de-chaussée et parkings.",
      mandataire: MANDATAIRE,
    },
  },
  { slug: "guebwiller", title: "EHPAD de 120 lits | HCC | Guebwiller", group: "equipements", photoCount: 7 },
  {
    slug: "zcb", title: "107 logements locatifs intermédiaires + commerces | SNI | Paris 17", group: "equipements", photoCount: 7,
    description: {
      contexte: "L'îlot E.10.A met en tension l'avenue de Clichy et l'entrée nord du parc Martin Luther King, faisant lien entre la ville existante et le morceau de ville en devenir.",
      programme: "Réalisation de 107 logements BBC, commerces et parking en infrastructure.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "albert-thomas", title: "MAPAD de 73 lits | SAGE | Tremblay en France", group: "equipements", photoCount: 7,
    description: {
      contexte: "La Mapad donne sur la place Albert Thomas ouverte dans un quartier pavillonnaire de proximité : le quartier du Vert Galant.",
      programme: "Maison pour personnes âgées dépendantes (Mapad) de 73 lits, salle de restaurant, cuisine collective, locaux d'accueil, logement de fonction et locaux administratifs, parking en infrastructure.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "jean-viollet", title: "EHPAD de 82 lits + 27 logements | SAHLM du Moulin Vert | la Courneuve", group: "equipements", photoCount: 5,
    description: {
      contexte: "Le bâtiment est situé dans le quartier de la gare en pleine restructuration. Il est mitoyen du bâtiment des Pléiades construit dans les années 70.",
      programme: "Réalisation d'un Ehpad de 82 chambres et d'un ensemble de 27 logements sociaux avec parking en infrastructure.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "prony", title: "Bureaux | Groupe MEDERIC | Paris 17", group: "equipements", photoCount: 5,
    description: {
      contexte: "Situé dans un quartier d'architecture haussmannienne, à proximité du parc Monceau, le bâtiment retrouve la partition classique de la rue à travers une nouvelle façade en double peau de verre tramé verticalement.",
      programme: "Restructuration d'un immeuble de bureaux avec recomposition de la façade sur rue.",
      mandataire: MANDATAIRE,
    },
  },
  {
    slug: "snecma", title: "Bureaux | Groupe SAFRAN | Evry Corbeil", group: "equipements", photoCount: 5,
    description: {
      contexte: "Le site de la Snecma à Evry-Corbeil : le bâtiment existant, une usine et ses bureaux, est à optimiser et humaniser.",
      programme: "Restructuration des bureaux, ateliers et vestiaires du site d'Evry-Corbeil.",
      mandataire: MANDATAIRE,
    },
  },
  // Études
  { slug: "opera-bastille", title: "Fermeture de façade | OPERA dE PARIS | Paris 4", group: "etudes", photoCount: 7 },
  {
    slug: "rueil", title: "Espace cinématographique | Groupe SOPIC | Rueil Malmaison", group: "etudes", photoCount: 7,
    description: {
      programme: "Inventons la Métropole du Grand Paris « La Lanterne » — construction d'un espace cinématographique, d'une halle gourmande, de salles de sport et d'une terrasse agricole. Concours en 2017.",
      mandataire: "maast architecture",
    },
  },
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
