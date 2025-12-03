import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaHtml5, FaWordpress } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project200.png';
import projectImg2 from '../assets/project02.png';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project05.png';
import projectImg5 from '../assets/project0005.png';
import projectImg6 from '../assets/project10.png';
import projectImg7 from '../assets/project222.png';
import presentation from '../components/presentation';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: "J'adore créer des solutions uniques à des problèmes complexes à l'aide de technologies de pointe.",
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Rigueur',
      description: "Une méthodologie sans faille et un sens aigu du détail sont les piliers de la qualité et de la fiabilité de toutes mes livraisons.",
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Code épuré',
      description: "J'écris du code facile à maintenir et efficace en suivant les meilleures pratiques et les modèles modernes.",
      color: 'text-blue'
    },   
    {
      icon: FaCode,
      title: 'GitHub et systèmes Linux',
      description: "gestion de versions, collaboration sur des projets, utilisation avancée du terminal, configuration du système, gestion des services et résolution de problèmes.",
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Développeur Front-end ',
    icon: FaReact,
    description: "Développement front-end Création d'interfaces utilisateur réactives et interactives à l'aide de frameworks modernes.",
    tags: ['React', 'Vue.js', 'TypeScript']
  },
  {
    title: 'Développeur Backend',
    icon: FaServer,
    description: "Création d'applications côté serveur robustes et d'API RESTful.",
    tags: ['Node.js', 'Express', 'Laravel', "Flask"]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Conception et optimisation de bases de données pour améliorer les performances et la scalabilité.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Développeur Mobile',
    icon: FaMobileAlt,
    description: "Création d'applications mobiles multiplateformes à l'aide d'outils modernes.",
    tags: ['React Native', 'Flutter']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: "Déploiement et gestion d'applications dans des environnements cloud.",
    tags: ['Docker']
  },
  {
    title: 'Outils et technologies',
    icon: FaTools,
    description: "Outils et technologies essentiels que j'utilise dans mon processus de développement.",
    tags: ['Git & GitHub', 'Figma']
  }
];



export const projects = [
  {
    title: "Yowl – Projet Laravel/MySQL",
    description: "Création d’une application web permettant de publier des liens provenant de forums et d’échanger via un système de commentaires.",
    image: projectImg1,
    tech: ["Laravel", "MySql", "vue.js"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://freedomyowl.alwaysdata.net/",
    code: "#",
  },
  {
    title: "Institut Giovani Bitti",
    description: "Site vitrine de l'IGB réalisé pendant la formation we.code en une semaine",
    image: projectImg2,
    tech: ["Wordpress"],
    icons: [FaWordpress],
    demo: "https://igb-refonte.online/",
    code: "#",
  },
  {
    title: "Portfolio ",
    description: "Ce site web a été entièrement conçu et développé en ReactJS afin d'assurer une expérience utilisateur (UX) rapide et fluid",
    image: projectImg4,
    tech: ["React.Js"],
    icons: [FaReact,],
    demo: "#home",
    code: "#",
  },
  {
    title: "Integration ",
    description: "réalisation complète d’une interface responsive en HTML et CSS, respect des maquettes, optimisation de la structure et bonnes pratiques front-end.",
    image: projectImg5,
    tech: ["HTML", "CSS"],
    icons: [FaHtml5,],
    demo: "https://integration-indol-chi.vercel.app/",
    code: "#",
  },
   {
    title: "Réalisation de nombreux projets en mode privé sur GitHub",
    description: "durant les 6 mois de formation, un projet était développé chaque semaine (du lundi au dimanche), renforçant ainsi ma capacité à respecter les délais, à travailler sous pression et à maintenir une organisation rigoureuse tout au long du processus de développement.",
    image: projectImg6,
    tech: ["HTML", "CSS", "React", "node.js", "laravel", "php", "vue.js", "next.js", "bash", "javascript", "flask", "python", "wordpress"],
    icons: [FaHtml5,],
    demo: "https://github.com/nindoscar"
  },
  {
    title: "contributions GitHub sur les 6 derniers mois",
    description: "participation active à de nombreux projets privés et personnels, démontrant une régularité dans le développement, une bonne maîtrise de Git/GitHub et un engagement constant dans l’amélioration de mes compétences techniques.",
    image: projectImg7,
    tech: ["HTML", "CSS"],
    icons: [FaHtml5,],
    demo: "https://github.com/nindoscar",
    code: "#",
  },
];


export const workData = [
  {
    role: "Dévoloppeur Full Stack junior",
    company: "We.code ",
    duration: "2025",
    description:
      "Formé à we.code by Epitech, j’ai réalisé plus de 28 projets en développement web et mobile et développé des compétences en leadership et gestion de projet. Deux fois chef de projet, j’ai dirigé des équipes et mené des projets complets jusqu’à leur présentation finale.",
    color: "purple"
  },
  {
    role: "Correspondant fichier",
    company: "Institut Technique Secondaire Professionnel ",
    duration: "2018 - 2024",
    description:
      "Correspondant Fichier à l’Institut Technique Secondaire Professionnel et Technique, où j’ai géré les données élèves et l’archivage numérique avec rigueur et précision.",
    color: "pink"
  },
  {
    role: "Stageaire",
    company: "Risque Informatique",
    duration: "2016 - 2017",
    description:
      "Mise en place d’une organisation logique des documents pour optimiser leur recherche et leur gestion, avec numérisation et archivage électronique,Organisation et classement des fichiers dans des stockages locaux ou cloud, dans le cadre d’un projet réalisé en WinDev.",
    color: "blue"
  }
];
  export const presentations = [
    {
      profil: ""
    }
  ]
