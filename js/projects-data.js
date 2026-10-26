const CATEGORIES = [
  { key: "logements", label: "Logements collectifs" },
  { key: "equipements", label: "Programmes mixtes & équipements" },
];

const MANDATAIRE = "maast.a";

const PROJECTS = [
  // Logements
  {
    slug: "amiens", title: "11 logements sociaux | SIP | Amiens", group: "logements", photoCount: 9, plan: true,
    description: {
      lieu: "ZAC Paul-Claudel tranche 4, îlot D5, Amiens (80)",
      moe: MANDATAIRE,
      programme: "Réalisation d'un immeuble de 11 logements collectifs locatifs et parking en superstructure.",
      surface: "1 100 m²",
      cout: "1,4 M€ HT",
      certification: "Premier label BBCA des Hauts-de-France",
      contexte: "L'opération est située à Amiens dans la ZAC Paul-Claudel, superficie totale de 40 ha au sud de la ville, à proximité du centre-ville, et répond à la manière d'habiter à la fois dans un parc et en ville.",
    },
  },
  {
    slug: "poyenne", title: "103 studios | ADOMA | Bordeaux", group: "logements", photoCount: 5, plan: true,
    description: {
      lieu: "Bordeaux (33)",
      moe: MANDATAIRE,
      programme: "Restructuration de la résidence en 102 studios équipés (240 m² de surface de plancher créée sur 2 700 m²) — lauréate du Prix de la Première Œuvre 1994 du Moniteur pour la réalisation de 102 chambres réparties en 21 unités de vie.",
      surface: "2 700 m²",
      cout: "576 950 € HT",
    },
  },
  {
    slug: "reginaldo", title: "43 studios | I3F | Paris 11", group: "logements", photoCount: 6, plan: true,
    description: {
      lieu: "51 boulevard de Belleville, Paris 11e",
      moe: MANDATAIRE,
      programme: "Démolition d'un foyer de travailleurs migrants de 29 logements existants et construction d'une résidence sociale de 43 logements locatifs sociaux (PLAI) pour les mêmes résidents.",
      surface: "1 345 m² SHON",
      cout: "3 M€ HT",
      certification: "BBC Effinergie / Plan Climat",
      contexte: "Le site proposé par RSI 3F est le cœur de Belleville, le Paris du quotidien, celui du tissu faubourien.",
    },
  },
  {
    slug: "poissonniers", title: "6 logements sociaux | RIVP | Paris 18", group: "logements", photoCount: 5, plan: true,
    description: {
      lieu: "36 rue des Poissonniers, Paris 18e",
      moe: MANDATAIRE,
      programme: "Réalisation d'un ensemble immobilier de six logements sociaux locatifs (PLAI).",
      surface: "495 m² SHON",
      cout: "1,32 M€ HT",
      certification: "BBC / Plan Climat",
      contexte: "Quartier Château Rouge, le site proposé par la RIVP est le vieux Paris de tissu de faubourg, celui des courettes et des petits jardins aujourd'hui en pleine mutation.",
    },
  },
  {
    slug: "beranger", title: "53 logements | ADOMA | Paris 3", group: "logements", photoCount: 6, plan: true,
    description: {
      lieu: "22 rue Béranger, Paris 3e",
      moe: MANDATAIRE,
      programme: "Restructuration d'un immeuble haussmannien avec la création de 43 logements sur rue et la construction de 10 logements sur cour.",
      surface: "2 114 m² SHON",
      cout: "2,9 M€ HT",
      certification: "Certification Qualitel THPE",
      contexte: "Un quartier du vieux Paris situé entre la rue Béranger et la place de la République.",
    },
  },
  {
    slug: "crouy", title: "45 logements | OPAL | Crouy", group: "logements", photoCount: 7, plan: true,
    description: {
      lieu: "Avenue du Général-Patton / rue Louis-et-Edouard-Gérard, Crouy (02)",
      moe: `${MANDATAIRE} (architecte associé : Pouget-Delasalle architectes)`,
      programme: "Reconversion de la friche urbaine Pecquet-Tesson et construction de 45 logements.",
      surface: "3 000 m² SHON",
      cout: "4 M€ HT",
      certification: "BBC Effinergie",
      contexte: "En limite des terres agricoles et en plein cœur de la commune de Crouy, le tissu est dense et se constitue de grosses maisons de ville. Le projet s'inscrit dans le plan de reconversion de la friche urbaine Pecquet Tesson.",
    },
  },
  {
    slug: "maroc", title: "46 logements sociaux | Paris Habitat | Paris 19", group: "logements", photoCount: 4, plan: true,
    description: {
      lieu: "14/16 rue du Maroc, Paris 19e",
      moe: MANDATAIRE,
      programme: "Réalisation d'un bâtiment de 46 logements et d'un local d'activité sur 2 niveaux de sous-sol.",
      surface: "3 610 m² SHON",
      cout: "5,7 M€ HT",
      certification: "BBC Effinergie / Plan Climat",
      contexte: "Greffé à la rue du Maroc dans un quartier hétéroclite, le bâtiment marque l'entrée d'un futur jardin public ainsi que l'aboutissement de la restructuration de l'îlot après la démolition de la tour du Maroc.",
    },
  },
  // Programmes mixtes & équipements
  {
    slug: "vaucouleurs", title: "152 logements + commerces | Paris Habitat | Paris 11", group: "equipements", photoCount: 3, plan: true,
    description: {
      lieu: "Rues de Vaucouleurs, de la Fontaine-aux-Rois, de l'Orillon et du Moulin-Joly, Paris 11e",
      moe: MANDATAIRE,
      programme: "Opération de réhabilitation de logements rues de Vaucouleurs, de la Fontaine aux Rois, de l'Orillon et du Moulin Joly.",
      surface: "12 770 m²",
      cout: "4,3 M€ HT",
    },
  },
  {
    slug: "massy", title: "53 logements + crèche | Générale de Promotion | Massy", group: "equipements", photoCount: 4,
    description: {
      lieu: "Rue Emile-Baudot, Massy (91)",
      moe: MANDATAIRE,
      programme: "Opération de logements en accession et d'une crèche, rue Emile Baudot à Massy.",
      surface: "3 425 m²",
      cout: "5,2 M€ HT",
    },
  },
  {
    slug: "jean-jaures", title: "34 logements en accession + commerces | Nexity | Clichy la Garenne", group: "equipements", photoCount: 5, plan: true,
    description: {
      lieu: "33 boulevard Jean-Jaurès, Clichy-la-Garenne (92)",
      moe: MANDATAIRE,
      programme: "Réalisation de 34 logements en accession, commerces au rez-de-chaussée et parkings.",
      surface: "2 191,90 m² SHON",
      cout: "3,9 M€ HT",
      certification: "BBC Effinergie / Plan Climat",
      contexte: "Le site proposé par Nexity est au cœur de Clichy-la-Garenne, proche des équipements et du métro, dans un tissu de faubourg hétéroclite offrant en bon voisinage : pavillons, petits logements collectifs, commerces de proximité et bâtiments industriels de bonne facture.",
    },
  },
  { slug: "guebwiller", title: "EHPAD de 120 lits | HCC | Guebwiller", group: "equipements", photoCount: 5, plan: true },
  {
    slug: "zcb", title: "107 logements locatifs intermédiaires + commerces | SNI | Paris 17", group: "equipements", photoCount: 6, plan: true,
    description: {
      lieu: "ZAC Clichy-Batignolles, lot E10A, 183 avenue de Clichy, Paris 17e",
      moe: MANDATAIRE,
      programme: "Réalisation de 107 logements BBC, commerces et parking en infrastructure.",
      surface: "1 182 m² commerces, 3 110 m² parkings, 7 533 m² SHON logements",
      cout: "16 M€ HT",
      certification: "BBC Effinergie / Plan Climat",
      contexte: "L'îlot E.10.A met en tension l'avenue de Clichy et l'entrée nord du parc Martin Luther King, faisant lien entre la ville existante et le morceau de ville en devenir.",
    },
  },
  {
    slug: "albert-thomas", title: "MAPAD de 73 lits | SAGE | Tremblay en France", group: "equipements", photoCount: 6, plan: true,
    description: {
      lieu: "Place Albert-Thomas, Tremblay-en-France (93)",
      moe: MANDATAIRE,
      programme: "Maison pour personnes âgées dépendantes (Mapad) de 73 lits, salle de restaurant, cuisine collective, locaux d'accueil, logement de fonction et locaux administratifs, parking en infrastructure.",
      surface: "3 720 m² SHON",
      cout: "4,048 M€ HT",
      certification: "Certification Qualitel THPE",
      contexte: "La Mapad donne sur la place Albert Thomas ouverte dans un quartier pavillonnaire de proximité : le quartier du Vert Galant.",
    },
  },
  {
    slug: "jean-viollet", title: "EHPAD de 82 lits + 27 logements | SAHLM du Moulin Vert | la Courneuve", group: "equipements", photoCount: 5, plan: true,
    description: {
      lieu: "Allée des Pléiades, La Courneuve (93)",
      moe: MANDATAIRE,
      programme: "Réalisation d'un Ehpad de 82 chambres et d'un ensemble de 27 logements sociaux avec parking en infrastructure.",
      surface: "7 760 m² SHON",
      cout: "10,43 M€ HT",
      certification: "Certification Qualitel THPE",
      contexte: "Le bâtiment est situé dans le quartier de la gare en pleine restructuration. Il est mitoyen du bâtiment des Pléiades construit dans les années 70.",
    },
  },
  {
    slug: "prony", title: "Bureaux | Groupe MEDERIC | Paris 17", group: "equipements", photoCount: 3, plan: true,
    description: {
      lieu: "44 rue de Prony, Paris 17e",
      moe: MANDATAIRE,
      programme: "Restructuration d'un immeuble de bureaux avec recomposition de la façade sur rue.",
      surface: "1 971 m² SHON",
      cout: "2,75 M€ HT",
      certification: "Démarche Qualitel THPE",
      contexte: "Situé dans un quartier d'architecture haussmannienne, à proximité du parc Monceau, le bâtiment retrouve la partition classique de la rue à travers une nouvelle façade en double peau de verre tramé verticalement.",
    },
  },
  {
    slug: "snecma", title: "Bureaux | Groupe SAFRAN | Evry Corbeil", group: "equipements", photoCount: 3, plan: true,
    description: {
      lieu: "Route Henri-Auguste-Desbruyères, Evry cedex (91)",
      moe: MANDATAIRE,
      programme: "Restructuration des bureaux, ateliers et vestiaires du site d'Evry-Corbeil.",
      surface: "16 000 m² de bureaux, 288 000 m² d'ateliers",
      cout: "13 M€ HT",
      certification: "Démarche Qualitel THPE",
      contexte: "Le site de la Snecma à Evry-Corbeil : le bâtiment existant, une usine et ses bureaux, est à optimiser et humaniser.",
    },
  },
  { slug: "opera-bastille", title: "Fermeture de façade | OPERA dE PARIS | Paris 4", group: "equipements", photoCount: 4, plan: true },
  {
    slug: "rueil", title: "Espace cinématographique | Groupe SOPIC | Rueil Malmaison", group: "equipements", photoCount: 6, plan: true,
    description: {
      lieu: "Rueil-Malmaison (92)",
      moe: MANDATAIRE,
      programme: "Inventons la Métropole du Grand Paris « La Lanterne » — construction d'un espace cinématographique, d'une halle gourmande, de salles de sport et d'une terrasse agricole. Concours en 2017.",
    },
  },
];

function projectCover(p) {
  const n = String(p.cover || 1).padStart(2, "0");
  return `assets/projects/${p.slug}/${n}-thumb.jpg`;
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
