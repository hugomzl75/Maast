const CATEGORIES = [
  { key: "logements", label: "Logements collectifs" },
  { key: "equipements", label: "Programmes mixtes & équipements" },
  { key: "etudes", label: "Études & concours" },
];

const PROJECTS = [
  // Logements
  {
    slug: "amiens", title: "11 logements sociaux | SIP | Amiens", group: "logements", photoCount: 7,
    description: [
      { heading: "contexte", text: "L'opération est située à Amiens dans la ZAC Paul-Claudel, superficie totale de 40 ha au sud de la ville, à proximité du centre-ville, et répond à la manière d'habiter à la fois dans un parc et en ville." },
      { heading: "compacité, simplicité et générosité des usages", text: "Avec une contrainte de hauteur en R+2 le bâtiment est compact et organisé en volumes simples. Il offre une façade étirée sur les espaces publics qui vient protéger les vis-à-vis et les vues en abritant les terrasses. Chacun des 11 logements (5T2, 4T3, 2T4) est prolongé d'une terrasse allant de 15 à 20 m² ou d'un jardin privatif pour les logements du RDC. Les séjours sont dans les angles afin d'avoir double orientation, les fenêtres (menuiseries bois) toute hauteur avec allège vitrée pour un maximum de lumière." },
      { heading: "mode constructif et matériaux", text: "La structure est mixte bois béton, le béton s'articule autour d'un noyau central dalles pour planchers et prémurs. La structure bois est de type CLT, ce sont des panneaux contrecollés en bois massif KLH (épicéa) en couches croisées (murs et planchers). Le bardage bois à faux clair voie en Douglas clair. Les balcons métal rapportés avec planchers bacs métalliques collaborants (béton coulé sur tôles nervurées) et poteau en H acier galva, sous face des balcons tôle galva. Occultations volets roulants métalliques." },
      { heading: "qualité environnementale et particularités", text: "Du bois, du béton et un premier label BBCA (bâtiment bas carbone) pour les Hauts-de-France, par l'Association pour le développement du bâtiment bas carbone. Le label certifie que les émissions de CO2 liées à la construction sont bien plus faibles que les 1,5 t par mètre carré construit qui sont émises habituellement." },
    ],
  },
  { slug: "poyenne", title: "103 studios | ADOMA | Bordeaux", group: "logements", photoCount: 6,
    description: [
      { text: "Résidence Poyenne : restructuration en 102 studios équipés pour Adoma à Bordeaux, livrée en 2016, lauréate du Prix de la Première Œuvre du Moniteur pour la réalisation de 102 chambres en 21 unités de vie." },
    ],
  },
  {
    slug: "reginaldo", title: "43 studios | I3F | Paris 11", group: "logements", photoCount: 6,
    description: [
      { heading: "contexte", text: "Le site proposé par RSI 3F est le cœur de Belleville, le Paris du quotidien, celui du tissu faubourien." },
      { heading: "compacité", text: "Le bâtiment est un monolithe à deux têtes organisé autour d'un noyau dur et dessert six appartements par plateau avec peu de surface de distribution." },
      { heading: "dualité recto/verso", text: "Cette distribution permet d'offrir deux façades distinctes : celle du boulevard au nord et celle du jardin plein sud. La façade sur le boulevard reprend la typologie tripartite des façades parisiennes avec un rez-de-chaussée marqué sur la partie courante et une toiture différenciée. La façade sud est prolongée de loggias. Toutes deux sont épaisses, lisses, satinées, elles sont recouvertes d'alucobond." },
      { heading: "qualité environnementale", text: "Les panneaux solaires en toiture permettent de réaliser 30% de la production d'eau chaude. La conception du bâtiment, l'enveloppe et les systèmes énergétiques permettent au projet de consommer 50 kwhep/m²/an et de répondre au plan climat." },
    ],
  },
  {
    slug: "poissonniers", title: "6 logements sociaux | RIVP | Paris 18", group: "logements", photoCount: 7,
    description: [
      { heading: "contexte", text: "Quartier Château Rouge, le site proposé par la RIVP est le vieux Paris de tissu de faubourg, celui des courettes et des petits jardins aujourd'hui en pleine mutation." },
      { heading: "plateaux libres", text: "Les six appartements traversants sont répartis sur sept niveaux. Le noyau de distribution est situé dans le jardin pour libérer les plateaux desservis par des coursives privatives." },
      { heading: "lumière et matérialité", text: "Cette organisation permet d'offrir un appartement traversant à chaque étage, exposé ouest côté boulevard et est côté jardin. Chaque appartement se prolonge d'une coursive privative. La parcelle étant enclavée, le bâtiment doit jouer avec la lumière pour optimiser l'éclairage naturel des logements. Le Carea a été choisi comme matériau pour envelopper le bâtiment et réverbérer la lumière. La façade sur le boulevard reprend la typologie tripartite des façades parisiennes. Elle est recouverte de Carea très clair et rythmée de volets coulissants métalliques au nu de la façade. Celle-ci devient alors totalement lisse." },
      { heading: "qualité environnementale", text: "Les panneaux solaires en toiture permettent de réaliser 39% de la production d'eau chaude." },
    ],
  },
  {
    slug: "beranger", title: "53 logements | ADOMA | Paris 3", group: "logements", photoCount: 6,
    description: [
      { heading: "contexte", text: "Un quartier du vieux Paris situé entre la rue Béranger et la place de la République." },
      { heading: "densité", text: "Le site : un immeuble post-haussmannien à restructurer en 43 logements et une extension de 10 logements à créer dans une parcelle exigüe." },
      { heading: "mixité", text: "Le programme : organiser 43 studios dans de grands appartements et construire 10 grands logements dans l'extension à créer en fond de parcelle. Au rez-de-chaussée sur la rue Béranger, des surfaces de commerce sont proposées." },
      { heading: "confidentialité", text: "La façade de l'immeuble post-haussmannien lui est rendue en état. Sa restructuration complète ne se laisse découvrir que de l'intérieur du bâtiment existant. L'extension créée est un contraste de modernité et d'ouverture, protégée en cœur de parcelle." },
    ],
  },
  {
    slug: "crouy", title: "45 logements | OPAL | Crouy", group: "logements", photoCount: 7,
    description: [
      { heading: "contexte", text: "En limite des terres agricoles et en plein cœur de la commune de Crouy, le tissu est dense et se constitue de grosses maisons de ville. Le projet s'inscrit dans le plan de reconversion de la friche urbaine Pecquet Tesson." },
      { heading: "écoquartier et jardin fédérateur", text: "Le site de l'opération de 45 logements devient un grand jardin fédérateur que l'on peut parcourir et qui permet de relier le centre de la commune au quartier de la gare. Jouant de la forte déclivité du terrain, l'opération est organisée en deux parties calées par le collectif de 18 T2 qui accueille le parking mutualisé en son socle et les petits logements sur deux niveaux." },
      { heading: "mixité des formes bâties", text: "Le programme de l'opération répartit les 45 logements en 18 T2 collectifs et 27 maisons individuelles T3 et T4 organisées de plain-pied ou sur deux niveaux. Le collectif en bandes permet de faire la transition entre le niveau bas et le niveau haut du terrain. Les maisons ont toutes des patios ou des jardins. Les T2 sont tous prolongés par des balcons ou des terrasses." },
      { heading: "qualité environnementale", text: "Les logements individuels et collectifs sont conçus avec une structure bois revêtue de panneaux de mélèze à faux clervoie. Les panneaux solaires en toiture permettent de réaliser 40% de la production d'eau chaude. Le projet est inscrit dans une démarche environnementale avec certification « qualitel » 2008 avec « bbc effinergie » pour une performance énergétique de 65 kwh/m²/an, ainsi que la certification « habitat & environnement » avec un « profil a »." },
    ],
  },
  {
    slug: "maroc", title: "46 logements sociaux | Paris Habitat | Paris 19", group: "logements", photoCount: 7,
    description: [
      { heading: "contexte", text: "Greffé à la rue du Maroc dans un quartier hétéroclite, le bâtiment marque l'entrée d'un futur jardin public ainsi que l'aboutissement de la restructuration de l'îlot après la démolition de la tour du Maroc." },
      { heading: "densité", text: "Attenante à un immeuble haussmannien, la parcelle proposée est exigüe pour un programme comportant des activités et 46 logements répartis sur 9 niveaux." },
      { heading: "compacité", text: "Le bâtiment est conçu comme un monolithe sculpté. Il est organisé autour d'un noyau dur et dessert six appartements par plateau dont un traversant et trois ayant une double orientation. Les appartements sont prolongés au rez-de-chaussée par des jardins privatifs, à l'étage par des loggias côté rue et côté jardin. La façade d'entrée du jardin est une double peau de verre coulissante ayant un rôle thermique." },
    ],
  },
  // Programmes mixtes & équipements
  { slug: "vaucouleurs", title: "152 logements + commerces | Paris Habitat | Paris 11", group: "equipements", photoCount: 6,
    description: [
      { text: "Opération de réhabilitation de logements rues de Vaucouleurs, de la Fontaine aux Rois, de l'Orillon et du Moulin Joly, pour Paris Habitat — livraison en 2020." },
    ],
  },
  { slug: "massy", title: "53 logements + crèche | Générale de Promotion | Massy", group: "equipements", photoCount: 6,
    description: [
      { text: "Opération de logements en accession et d'une crèche, rue Emile Baudot à Massy, pour La Générale de Promotion." },
    ],
  },
  {
    slug: "jean-jaures", title: "34 logements en accession + commerces | Nexity | Clichy la Garenne", group: "equipements", photoCount: 7,
    description: [
      { heading: "contexte", text: "Le site proposé par Nexity est au cœur de Clichy-la-Garenne, proche des équipements et du métro, dans un tissu de faubourg hétéroclite offrant en bon voisinage : pavillons, petits logements collectifs, commerces de proximité et bâtiments industriels de bonne facture." },
      { heading: "mixité", text: "Le programme propose en centre-ville 34 logements en accession, 200 m² de commerce au rez-de-chaussée et 34 places de parkings en sous-sol." },
      { heading: "dualité des façades, diversité des logements", text: "La façade sur le boulevard, orientée nord-est, reprend la typologie tripartite des façades fauboriennes : un rez-de-chaussée pour les commerces, la partie courante pour les logements et la partie toiture différenciée. La façade urbaine, recouverte d'un parement minéral blanc satiné, est fragmentée pour composer avec le gabarit mitoyen. Elle offre à la rue une séquence verticale de jardins d'hiver. La façade sud-ouest est revêtue de clins en alu laqué champagne s'ouvrant sur le calme du jardin. Les appartements sont prolongés par des loggias." },
      { heading: "compacité et qualité environnementale", text: "Le bâtiment est compact dans une volonté d'économie de surface de distribution à construire, afin de répondre aux exigences thermiques. Chaque plateau dessert cinq logements maximum. La conception du bâtiment, l'enveloppe et les systèmes énergétiques permettent au projet de consommer 50 kwhep/m²/an et de répondre au plan climat." },
    ],
  },
  { slug: "guebwiller", title: "EHPAD de 120 lits | HCC | Guebwiller", group: "equipements", photoCount: 7 },
  {
    slug: "zcb", title: "107 logements locatifs intermédiaires + commerces | SNI | Paris 17", group: "equipements", photoCount: 7,
    description: [
      { heading: "contexte", text: "L'îlot E.10.A met en tension l'avenue de Clichy et l'entrée nord du parc Martin Luther King, faisant lien entre la ville existante et le morceau de ville en devenir." },
      { heading: "porosité", text: "L'autonomie privilégiée des programmes favorise des échappées visuelles et des passages qui viennent rythmer la rue, comme des marqueurs urbains." },
      { heading: "corps commun et émergences", text: "Un soubassement forme l'interface entre l'espace public et privé et accueille les commerces bordant les espaces publics. Un corps commun sur trois niveaux assure la continuité horizontale et la cohérence de l'îlot. Depuis la place orientée à l'est, les émergences du bâti sont ponctuées de loggias en consoles s'évasant pour devenir des balcons vers la rue exposée au sud." },
      { heading: "qualité environnementale et densité", text: "La conception du bâtiment, l'enveloppe et les systèmes énergétiques permettent au projet de consommer 50 kwhep/m²/an et de répondre au plan climat. Les épaisseurs des bâtiments sont optimisées afin de privilégier des orientations doubles voire triples. Les quelques petits appartements mono-orientés bénéficient d'expositions favorables." },
    ],
  },
  {
    slug: "albert-thomas", title: "MAPAD de 73 lits | SAGE | Tremblay en France", group: "equipements", photoCount: 7,
    description: [
      { heading: "contexte", text: "La Mapad donne sur la place Albert Thomas ouverte dans un quartier pavillonnaire de proximité : le quartier du Vert Galant." },
      { heading: "densité", text: "Le site : une parcelle triangulaire. Le programme : 73 chambres, une cuisine centrale, une salle de restauration, l'administration et les services de soin, et un parking en infrastructure." },
      { heading: "fragmentation", text: "La fragmentation comme organisation fonctionnelle et comme moyen d'insertion dans le tissu pavillonnaire." },
      { heading: "qualité environnementale", text: "Les façades des chambres orientées à l'est sont composées de panneaux sandwich en médium côté intérieur et en okoumé côté extérieur. Les façades donnant sur les jardins fruitiers sont composées de panneaux de clins de red cedar filant sur le béton et les surfaces vitrées." },
    ],
  },
  {
    slug: "jean-viollet", title: "EHPAD de 82 lits + 27 logements | SAHLM du Moulin Vert | la Courneuve", group: "equipements", photoCount: 5,
    description: [
      { heading: "contexte", text: "Le bâtiment est situé dans le quartier de la gare en pleine restructuration. Il est mitoyen du bâtiment des Pléiades construit dans les années 70." },
      { heading: "mixité", text: "Le site : une parcelle rectangulaire donnant sur le nouveau boulevard urbain et proche du collège. Le programme : organiser 82 chambres, une cuisine centrale, une salle de restauration, l'administration, les services de soin de l'Ehpad et réaliser 27 logements locatifs." },
      { heading: "continuité", text: "Un seul bâtiment répond aux deux programmes. Accroché au pignon des Pléiades, il se déroule le long du jardin et offre une façade au nouveau boulevard urbain." },
      { heading: "ouverture", text: "Le bâtiment est organisé vers son jardin et se déroule autour de lui. Le jardin fruitier est ouvert sur l'allée des Pléiades et le met en relation avec la vie du quartier." },
    ],
  },
  {
    slug: "prony", title: "Bureaux | Groupe MEDERIC | Paris 17", group: "equipements", photoCount: 5,
    description: [
      { heading: "contexte", text: "Situé dans un quartier d'architecture haussmannienne, à proximité du parc Monceau, le bâtiment retrouve la partition classique de la rue à travers une nouvelle façade en double peau de verre tramé verticalement." },
      { heading: "densité", text: "Sur une parcelle d'îlot haussmannien, le bâtiment à restructurer accueille un programme de bureaux, une salle de réunion et une cafétéria répartis sur huit niveaux." },
      { heading: "modularité des espaces", text: "Chacun des sept niveaux d'étage courant du bâtiment est conçu comme un plateau libre non aménagé mais équipé de rails en suspente permettant de moduler ou non les espaces de travail." },
      { heading: "qualité environnementale", text: "Le projet, en assurant le confort thermique, acoustique et la protection au soleil, confère une grande qualité environnementale au bâtiment. Filtrant la lumière, la façade sur rue est une double peau de grandes lames de verre coulissantes ayant un rôle thermique." },
    ],
  },
  {
    slug: "snecma", title: "Bureaux | Groupe SAFRAN | Evry Corbeil", group: "equipements", photoCount: 5,
    description: [
      { heading: "contexte", text: "Le site de la Snecma à Evry-Corbeil : le bâtiment existant, une usine et ses bureaux, est à optimiser et humaniser." },
      { heading: "densité", text: "Le programme d'ateliers et bureaux de la Snecma est à composer sur un site recentré. Une surface complémentaire de 3 000 m² est demandée. Le choix architectural a déterminé l'extension des planchers pour obtenir cette surface, sans construction rajoutée." },
      { heading: "mixité", text: "Le programme est la restructuration et l'extension des bureaux, l'humanisation et la signalétique des ateliers." },
    ],
  },
  // Études
  { slug: "opera-bastille", title: "Fermeture de façade | OPERA dE PARIS | Paris 4", group: "etudes", photoCount: 7 },
  { slug: "rueil", title: "Espace cinématographique | Groupe SOPIC | Rueil Malmaison", group: "etudes", photoCount: 7,
    description: [
      { text: "Inventons la Métropole du Grand Paris « La Lanterne », Rueil-Malmaison — groupement Sopic. Construction d'un espace cinématographique, d'une halle gourmande, de salles de sport et d'une terrasse agricole. Concours en 2017." },
    ],
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
