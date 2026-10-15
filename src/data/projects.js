import artists from "../assets/project-artists.png";
import review from "../assets/project-revieweo.png";
import streaming from "../assets/project-streaming.png";
import hotel from "../assets/project-hotel.png";
import mosi from "../assets/project-mosi.png";

// Captures : public/projects/nom.webp puis image: '/projects/nom.webp'.
// Renseigner github et demo avec les URL réelles pour afficher les liens.
export const projects = [
  {
    id: "artists",
    title: "Top Artistes Africains",
    category: "Application Full Stack",
    filter: "Web",
    image: artists,
    description:
      "Application web permettant de découvrir des artistes africains, consulter leurs profils et explorer leurs informations.",
    stack: ["React", "Node.js", "Express", "API REST"],
    demonstrates:
      "Développement Full Stack, communication front-end / back-end, création d’API et structuration d’une application web.",
    github: "https://github.com/eyegue/Artists-afro-API",
    demo: "https://artists-afro-api.vercel.app",
    featured: true,
  },

  {
    id: "revieweo",
    title: "Revieweo",
    category: "Plateforme web PHP",
    filter: "Web",
    image: review,
    description:
      "Plateforme web de gestion d’avis avec authentification, création et modification d’avis, administration, likes et newsletter.",
    stack: ["PHP", "MySQL", "CSS", "JavaScript"],
    demonstrates:
      "Gestion des utilisateurs, authentification, CRUD, organisation des données et développement d’une interface responsive.",
    github: "https://github.com/eyegue/Revieweo",
    demo: "https://revieweo.vercel.app/",
  },

  {
    id: "streaming",
    title: "Plateforme de Streaming",
    category: "PHP orienté objet",
    filter: "Web",
    image: streaming,
    description:
      "Application de streaming développée en PHP orienté objet avec catalogue de films et séries, recherche, filtres et playlists utilisateur.",
    stack: ["PHP", "POO", "HTML", "CSS"],
    demonstrates:
      "Programmation orientée objet, héritage, classes abstraites, organisation des données et interface responsive.",
    github: "https://github.com/eyegue/Streaming-php-poo",
    demo: "https://streaming-php-poo.vercel.app",
  },

  {
    id: "hotel",
    title: "Gestion Hôtelière",
    category: "Application de réservation",
    filter: "Web",
    image: hotel,
    description:
      "Application web de gestion hôtelière permettant de consulter les services et de réserver des chambres, un restaurant ou un spa.",
    stack: ["HTML", "CSS", "SQL", "Base de données"],
    demonstrates:
      "Conception d’une application métier, gestion de réservations et utilisation d’une base de données relationnelle.",
    github: "https://github.com/eyegue/projet-hotel",
    demo: "https://projet-hotel.vercel.app/",
  },

  {
    id: "mosi",
    title: "MOSI – Application Fintech",
    category: "Projet de stage · UX/UI",
    filter: "UX/UI",
    image: mosi,
    description:
      "Conception des parcours utilisateurs et des interfaces d’une plateforme fintech destinée aux clients, marchands et agents.",
    stack: [
      "Figma",
      "UX/UI Design",
      "Wireframes",
      "Prototypage",
      "Design System",
    ],
    demonstrates:
      "Conception de parcours d’authentification, KYC, transactions, dashboards et création de composants réutilisables.",
    note: "Projet non disponible publiquement pour des raisons de confidentialité liées à l’entreprise.",
      github: "",
    demo: "",
    featured: true,
  },
];

