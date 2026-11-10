export const profile = {
  name: 'Mohamed Yasser',
  role: 'Développeur Full-Stack | React • Node.js • TypeScript',
  location: 'Paris, Île-de-France',
  email: 'yasseryoussoufm@gmail.com',
  phone: '07 64 51 27 79',
  photo: 'https://raw.githubusercontent.com/YasserSeryas/Yasser.github.io/main/images/about.jpeg',
  cv: 'https://raw.githubusercontent.com/YasserSeryas/Yasser.github.io/main/assets/CV-Yasser-Youssouf-Mohamed.pdf'
}

export const stats = [
  { value: '3 ans', label: 'React' },
  { value: '12+', label: 'Composants prod' },
  { value: '-18%', label: 'Temps chargement' },
  { value: '7', label: 'Interfaces Redux' }
]

export const techBadges = ['React', 'TypeScript', 'Node.js', 'Docker', 'Redux Toolkit']

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'fa-laptop-code',
    skills: [
      { name: 'React', level: 90, note: "3 ans d'expérience" },
      { name: 'TypeScript', level: 85, note: 'Production ready' },
      { name: 'Redux Toolkit', level: 85, note: '7 interfaces prod' },
      { name: 'HTML5 / CSS3', level: 90, note: 'Maîtrise avancée' }
    ]
  },
  {
    title: 'Backend & DevOps',
    icon: 'fa-server',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Docker / Microservices', level: 80 },
      { name: 'Laravel / PHP', level: 75 },
      { name: 'MySQL / MongoDB', level: 80 }
    ]
  }
]

export const otherSkills = [
  'Java / Spring',
  'Python',
  'Kotlin / Android',
  'Git / GitHub',
  'CI/CD',
  'Agile / Scrum'
]

export const experiences = [
  {
    period: 'Déc 2023 - Aujourd\'hui',
    location: 'Île-de-France',
    role: 'Développeur Front-End - Alternance',
    company: 'Elab Fluxod',
    description: "Contribution à la conception et au développement de 12+ composants React modulaires. Intégration d'une gestion d'état globale avec Redux Toolkit, optimisant la cohérence des données sur 7 interfaces utilisateur clés. Participation à l'amélioration continue des performances, aboutissant à une réduction de 18% du temps de chargement.",
    tags: ['React', 'Redux Toolkit', 'TypeScript', 'Optimisation Perf']
  },
  {
    period: '2023',
    location: 'Île-de-France',
    role: 'Développeur Web - Stage',
    company: 'AKA Logistique et Transport',
    description: "Développement complet d'un site vitrine sous WordPress. Personnalisation d'un thème premium et intégration de 8 plugins spécifiques. Formation du client à l'utilisation du back-office.",
    tags: ['WordPress', 'PHP', 'Web Design', 'Formation Client']
  },
  {
    period: '2022',
    location: 'Nantes',
    role: 'Développeur Web - Stage',
    company: 'Accoord Nantes',
    description: "Réalisation d'un outil interne de calcul en JavaScript vanilla. Développement d'une application CRUD d'annuaire téléphonique interne avec Laravel, API REST et MySQL.",
    tags: ['JavaScript', 'Laravel', 'MySQL', 'API REST']
  }
]

export const projects = [
  {
    title: 'Architecture Microservices',
    description: 'Projet d\'architecture microservices avec API, conteneurisation et déploiement.',
    image: 'https://raw.githubusercontent.com/YasserSeryas/Yasser.github.io/main/images/project-microservices.jpg',
    tags: ['Node.js', 'Docker', 'API REST'],
    link: '#'
  }
]
