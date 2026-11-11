import { useEffect, useState } from 'react'
import Scene3D from './components/Scene3D.jsx'

const translations = {
 fr: {
 nav: [['about','À propos'],['skills','Compétences'],['projects','Projets'],['experience','Expériences'],['education','Formation'],['contact','Contact']],
 menu: 'Menu', theme: 'Activer le thème clair', langLabel: 'Changer de langue',
 availability: 'Disponible en CDI / CDD', location: 'Paris · mobilité toute la France',
 heroTitle: 'Développeur Full-Stack orienté produit, performance et mise en production.',
 heroText: 'Je conçois des applications web modernes avec React, Node.js et des architectures microservices.',
 viewProjects: 'Voir mes projets', contactMe: 'Me contacter',
 metrics: [['12+','Composants React livrés en production'],['-18%','Temps de chargement optimisé'],['6','Microservices sur un projet personnel'],['50+','Endpoints sur le projet Spotify Clone']],
 aboutTitle: 'Un profil full-stack avec une vraie logique de livraison.',
 about: ['Développeur Full-Stack basé à Paris, je conçois des interfaces performantes et des backends robustes.','De l’intégration API à l’automatisation du déploiement, je privilégie la qualité du code, la modularité et la performance.','Diplômé d’un Master Expert en Développement Logiciel chez Ynov Paris.'],
 skillsTitle: 'Une stack organisée par impact en projet.',
 skills: [
 ['Front-end','React, Redux, TypeScript, JavaScript ES6+, HTML5, CSS3','Vue 3, Angular, React Native'],
 ['Back-end','Node.js, Express.js, Spring Boot, API RESTful','PHP / Laravel'],
 ['Bases de données','PostgreSQL, MySQL, MongoDB','Redis'],
 ['DevOps & outils','Docker, Jenkins, GitHub Actions, Git, Nginx, AWS','CI/CD, déploiement, automatisation'],
 ['Intégrations','JWT, OAuth, Stripe, Swagger, FFmpeg, Prometheus, Grafana','API, sécurité, monitoring'],
 ['Méthodes','Microservices, MVC, Agile, TDD, architecture événementielle','Qualité et maintenabilité']
 ],
 projectsTitle: 'Des projets à forte profondeur technique.',
 projects: [
 {title:'Plateforme de réservation & billetterie',type:'Projet personnel',date:'2025 — Présent',text:'Architecture complète en 6 microservices : authentification JWT/OAuth, paiements Stripe, notifications, monitoring et CI/CD.',tags:['React','Redux','Node.js','Stripe','Docker','Prometheus'],repo:'https://github.com/YasserSeryas'},
 {title:'Spotify Clone',type:'Projet en binôme',date:'2025',text:'Application de streaming audio avec 50+ endpoints, cache Redis, traitement média FFmpeg et documentation OpenAPI.',tags:['Express','React','Redis','FFmpeg','Swagger'],repo:'https://github.com/YasserSeryas'},
 {title:'E-commerce en 48h',type:'Hackathon',date:'2023',text:'Boutique MERN avec catalogue, panier et checkout.',tags:['MongoDB','Express','React','Node.js'],repo:'https://github.com/YasserSeryas'},
 {title:'Application Android — Open Data',type:'Projet académique',date:'2023',text:'Application mobile native Kotlin consommant une API REST avec backend Spring Boot.',tags:['Spring Boot','Kotlin','API REST'],repo:'https://github.com/YasserSeryas'}
 ],
 experienceTitle: 'Des expériences concrètes en développement.',
 experiences: [
 {date:'Déc. 2023 — Déc. 2025',title:'Développeur Front-End en Alternance — Elab Fluxod',context:'Développement de plateformes web d’entreprise pour la gestion de flux de données destinées à des clients B2B. Projet mené en méthodologie Agile avec système de ticketing et livraisons itératives.',team:'Membre d’une équipe cross-fonctionnelle de 5 personnes : développeurs front-end, back-end et chef de projet. Participation à des réunions hebdomadaires de suivi et de coordination.',role:'Développeur Front-End en charge de la conception, du développement et du déploiement de l’interface utilisateur des applications web, en autonomie complète sur la partie front-end.',achievements:['Développement complet du front-end de 3 plateformes web à partir d’un thème de base, en assurant la cohérence UI/UX.','Implémentation de composants React réutilisables avec architecture modulaire (Hooks, Context API, HOC).','Intégration de Redux pour la gestion d’état globale, optimisant les performances de 30%.','Résolution de tickets de maintenance corrective et évolutive selon la documentation technique fournie.','Collaboration étroite avec l’équipe back-end pour l’intégration des API REST et la synchronisation des données.','Mise en place du pipeline CI/CD avec Jenkins pour l’automatisation du déploiement front-end.','Configuration et gestion du déploiement continu des applications en environnements de staging et production.','Optimisation des performances front-end : temps de chargement, responsive design et compatibilité navigateurs.'],technologies:['React','Redux','JavaScript ES6+','HTML5','CSS3','Jenkins','Git']},
 {date:'2023',title:'Développeur Web — AKA Logistique et Transport',context:'Création de la présence digitale d’une entreprise de logistique et transport nécessitant un site vitrine professionnel pour présenter ses services et renforcer sa visibilité en ligne.',team:'Travail en autonomie complète avec reporting régulier au directeur et gestion directe de la relation client pour la validation des livrables.',role:'Développeur Web Full-Stack en charge de la conception, du développement et de la mise en production du site vitrine de l’entreprise.',achievements:['Conception et développement d’un site vitrine WordPress personnalisé avec thème sur mesure adapté à l’identité visuelle de l’entreprise.','Intégration pixel-perfect des maquettes fournies en respectant les standards web, le responsive design et l’accessibilité.','Configuration et personnalisation de plugins WordPress pour optimiser les fonctionnalités : formulaires de contact, SEO et cache.','Respect strict des délais de livraison avec gestion autonome du planning projet.','Mise en production et formation du client à l’administration du site.'],technologies:['WordPress','PHP','HTML5','CSS3','JavaScript']},
 {date:'2022',title:'Développeur Web — Accoord Nantes',context:'Développement d’outils web internes pour digitaliser les processus administratifs d’une association, incluant le calcul automatisé du Quotient Familial et la gestion centralisée des contacts.',team:'Intégration dans l’équipe informatique avec collaboration régulière pour l’analyse des besoins fonctionnels et la validation des développements.',role:'Développeur Web Full-Stack responsable du développement de deux applications web distinctes répondant aux besoins métier de l’organisation.',achievements:['Développement d’une application web de calcul de Quotient Familial en JavaScript vanilla avec algorithme conforme aux réglementations en vigueur.','Création d’une interface utilisateur intuitive avec validation des formulaires côté client et gestion des cas d’erreur.','Conception et développement d’un annuaire téléphonique avec architecture MVC Laravel.','Implémentation CRUD complète avec gestion des relations en base de données MySQL.','Développement de fonctionnalités de recherche et filtrage avancés pour faciliter la navigation dans l’annuaire.','Sécurisation des applications : validation des données, protection CSRF et requêtes préparées.'],technologies:['JavaScript ES6+','Laravel','PHP','MySQL','HTML5','CSS3']}
 ],
 educationTitle: 'Développement logiciel et ouverture internationale.',
 education: [
 ['Master Expert en Développement Logiciel','Ynov Paris · 2024 — 2025','RNCP Niveau 7'],
 ['Master Informatique — Développement','Ynov Nantes · 2020 — 2024',''],
 ['Informatique Générale & HSK 4','Shanghai Institute of Technology · 2015 — 2019','Certification officielle en chinois']
 ],
 contactTitle: 'Échangeons sur votre prochain projet.',
 github: 'GitHub', formIntro: 'Ce formulaire prépare un email dans votre messagerie.', prepare: 'Préparer mon email', mailNotice: 'Votre application de messagerie va s’ouvrir.', labels: {name:'Nom',email:'Email',subject:'Sujet',message:'Message'}
 },
 en: {
 nav: [['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['education','Education'],['contact','Contact']],
 menu: 'Menu', theme: 'Enable light theme', langLabel: 'Switch language',
 availability: 'Available for full-time / fixed-term roles', location: 'Paris · Mobility across France',
 heroTitle: 'Product-focused Full-Stack Developer for performance and production.',
 heroText: 'I build modern web applications with React, Node.js and microservice architectures.',
 viewProjects: 'View my projects', contactMe: 'Contact me',
 metrics: [['12+','React components shipped to production'],['-18%','Page load time improvement'],['6','Microservices in a personal project'],['50+','Endpoints in the Spotify Clone project']],
 aboutTitle: 'A full-stack profile with a real delivery mindset.',
 about: ['Full-Stack Developer based in Paris, I build performant interfaces and robust backends.','From API integration to deployment automation, I focus on code quality, modularity and performance.','I hold a Master’s degree in Software Development from Ynov Paris.'],
 skillsTitle: 'A stack organised around project impact.',
 skills: [
 ['Front-end','React, Redux, TypeScript, JavaScript ES6+, HTML5, CSS3','Vue 3, Angular, React Native'],
 ['Back-end','Node.js, Express.js, Spring Boot, RESTful APIs','PHP / Laravel'],
 ['Databases','PostgreSQL, MySQL, MongoDB','Redis'],
 ['DevOps & tools','Docker, Jenkins, GitHub Actions, Git, Nginx, AWS','CI/CD, deployment, automation'],
 ['Integrations','JWT, OAuth, Stripe, Swagger, FFmpeg, Prometheus, Grafana','APIs, security, monitoring'],
 ['Methods','Microservices, MVC, Agile, TDD, event-driven architecture','Quality and maintainability']
 ],
 projectsTitle: 'Projects with strong technical depth.',
 projects: [
 {title:'Booking & ticketing platform',type:'Personal project',date:'2025 — Present',text:'Complete architecture with 6 microservices: JWT/OAuth authentication, Stripe payments, notifications, monitoring and CI/CD.',tags:['React','Redux','Node.js','Stripe','Docker','Prometheus'],repo:'https://github.com/YasserSeryas'},
 {title:'Spotify Clone',type:'Team project',date:'2025',text:'Audio streaming application with 50+ endpoints, Redis caching, FFmpeg media processing and OpenAPI documentation.',tags:['Express','React','Redis','FFmpeg','Swagger'],repo:'https://github.com/YasserSeryas'},
 {title:'48-hour e-commerce',type:'Hackathon',date:'2023',text:'MERN store with product catalogue, shopping cart and checkout.',tags:['MongoDB','Express','React','Node.js'],repo:'https://github.com/YasserSeryas'},
 {title:'Android app — Open Data',type:'Academic project',date:'2023',text:'Native Kotlin mobile application consuming a REST API with a Spring Boot backend.',tags:['Spring Boot','Kotlin','REST API'],repo:'https://github.com/YasserSeryas'}
 ],
 experienceTitle: 'Hands-on development experience.',
 experiences: [
 {date:'Dec. 2023 — Dec. 2025',title:'Front-End Developer Apprenticeship — Elab Fluxod',context:'Development of enterprise web platforms for B2B data-flow management. Project delivered using Agile methodology, ticketing and iterative releases.',team:'Member of a five-person cross-functional team: front-end developers, back-end developers and a project manager. Participation in weekly follow-up and coordination meetings.',role:'Front-End Developer responsible for designing, developing and deploying the user interface of web applications, with full ownership of the front-end.',achievements:['Developed the complete front-end of 3 web platforms from a base theme, ensuring UI/UX consistency.','Implemented reusable React components with a modular architecture (Hooks, Context API, HOC).','Integrated Redux for global state management, improving performance by 30%.','Resolved corrective and evolving maintenance tickets according to the provided technical documentation.','Worked closely with the back-end team to integrate REST APIs and synchronise data.','Set up a Jenkins CI/CD pipeline to automate front-end deployment.','Configured and managed continuous deployment of applications to staging and production environments.','Optimised front-end performance: loading time, responsive design and browser compatibility.'],technologies:['React','Redux','JavaScript ES6+','HTML5','CSS3','Jenkins','Git']},
 {date:'2023',title:'Web Developer — AKA Logistique et Transport',context:'Creation of the digital presence for a logistics and transport company requiring a professional showcase website to present its services and strengthen its online visibility.',team:'Worked independently with regular reporting to the director and direct client relationship management for deliverable validation.',role:'Full-Stack Web Developer responsible for designing, developing and deploying the company showcase website.',achievements:['Designed and developed a custom WordPress showcase website with a bespoke theme aligned with the company’s visual identity.','Delivered pixel-perfect integration of provided mock-ups while respecting web standards, responsive design and accessibility.','Configured and customised WordPress plugins to optimise functionality: contact forms, SEO and caching.','Met strict delivery deadlines through autonomous project planning.','Deployed the website and trained the client to administer it.'],technologies:['WordPress','PHP','HTML5','CSS3','JavaScript']},
 {date:'2022',title:'Web Developer — Accoord Nantes',context:'Development of internal web tools to digitise administrative processes for an organisation, including automated household-quotient calculation and centralised contact management.',team:'Integrated into the IT team with regular collaboration on functional requirements analysis and development validation.',role:'Full-Stack Web Developer responsible for developing two distinct web applications addressing the organisation’s business needs.',achievements:['Developed a household-quotient calculation web application in vanilla JavaScript with an algorithm compliant with current regulations.','Created an intuitive user interface with client-side form validation and error handling.','Designed and developed a phone directory using Laravel MVC architecture.','Implemented complete CRUD functionality with relationship management in a MySQL database.','Developed advanced search and filtering features to improve directory navigation.','Secured applications through data validation, CSRF protection and prepared statements.'],technologies:['JavaScript ES6+','Laravel','PHP','MySQL','HTML5','CSS3']}
 ],
 educationTitle: 'Software development and international exposure.',
 education: [
 ['Master Expert in Software Development','Ynov Paris · 2024 — 2025','RNCP Level 7'],
 ['Master’s Degree in Computer Science — Development','Ynov Nantes · 2020 — 2024',''],
 ['General Computer Science & HSK 4','Shanghai Institute of Technology · 2015 — 2019','Official Chinese certification']
 ],
 contactTitle: 'Let’s discuss your next project.',
 github: 'GitHub', formIntro: 'This form prepares an email in your mail application.', prepare: 'Prepare my email', mailNotice: 'Your mail application will open.', labels: {name:'Name',email:'Email',subject:'Subject',message:'Message'}
 }
}
function Section({id,title,children,alternate=false}) {
 return <section id={id} className={alternate ? 'section alternate' : 'section'}><div className="container"><div className="section-heading"><span className="kicker">{id}</span><h2>{title}</h2></div>{children}</div></section>
}
function ThemeToggle({label}) {
 const [theme,setTheme] = useState(()=>{try{return localStorage.getItem('portfolio-theme')==='light'?'light':'dark'}catch{return 'dark'}})
 useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem('portfolio-theme',theme)}catch{}},[theme])
 return <button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={label}>{theme==='dark'?'☀':'☾'}</button>
}
function Navbar({t,lang,setLang}) {
 const [open,setOpen] = useState(false)
 return <header className="site-header" id="top"><div className="container nav-shell"><a className="brand" href="#top"><span className="brand-mark">YM</span><span>Youssouf Mohamed Yasser</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{t.menu}</button><nav id="navigation" className={open?'main-nav open':'main-nav'} aria-label="Main navigation">{t.nav.map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><button className="lang-toggle" onClick={()=>setLang(lang==='fr'?'en':'fr')} aria-label={t.langLabel}>{lang==='fr'?'EN':'FR'}</button><ThemeToggle label={t.theme}/></div></div></header>
}
function Contact({t}) {
 const [fields,setFields]=useState({name:'',email:'',subject:'',message:''})
 const [notice,setNotice]=useState('')
 function submit(event){event.preventDefault();const body=`${t.labels.name}: ${fields.name}\n${t.labels.email}: ${fields.email}\n\n${fields.message}`;window.location.href=`mailto:yasseryoussoufm@gmail.com?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;setNotice(t.mailNotice)}
 return <div className="contact-grid"><div className="card contact-links"><a href="mailto:yasseryoussoufm@gmail.com">yasseryoussoufm@gmail.com</a><a href="tel:+33764512779">07 64 51 27 79</a><a href="https://www.linkedin.com/in/yasser-youssouf-mohamed-396b1a19a/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/YasserSeryas" target="_blank" rel="noopener noreferrer">GitHub</a><p>{t.location}</p></div><form className="card contact-form" onSubmit={submit}><p>{t.formIntro}</p>{[['name','text'],['email','email'],['subject','text'],['message','textarea']].map(([key,type])=><label key={key} htmlFor={'contact-'+key}>{t.labels[key]}{type==='textarea'?<textarea id={'contact-'+key} name={key} rows={5} required value={fields[key]} onChange={e=>setFields({...fields,[key]:e.target.value})}/>:<input id={'contact-'+key} name={key} type={type} required value={fields[key]} onChange={e=>setFields({...fields,[key]:e.target.value})}/>}</label>)}<button className="btn primary" type="submit">{t.prepare}</button><p role="status">{notice}</p></form></div>
}
export default function App(){
 const [lang,setLang] = useState(()=>{try{return localStorage.getItem('portfolio-lang')||'fr'}catch{return 'fr'}})
 useEffect(()=>{try{localStorage.setItem('portfolio-lang',lang)}catch{}},[lang])
 const t = translations[lang]
 return <><a className="skip-link" href="#main">{lang==='fr'?'Aller au contenu':'Skip to content'}</a><Navbar t={t} lang={lang} setLang={setLang}/><main id="main"><section className="section hero"><Scene3D/><div className="container hero-grid"><div><div className="tags"><span>{t.availability}</span><span>{t.location}</span></div><h1>{t.heroTitle}</h1><p className="lead">{t.heroText}</p><div className="tags"><span>React · Redux · TypeScript</span><span>Node.js · Express · Spring Boot</span><span>Microservices · Docker · CI/CD</span></div><div className="actions"><a className="btn primary" href="#projects">{t.viewProjects}</a><a className="btn" href="#contact">{t.contactMe}</a></div></div><img className="portrait" src="https://raw.githubusercontent.com/YasserSeryas/Yasser.github.io/gh-pages/images/moi.png" alt="Youssouf Mohamed Yasser" width="260" height="260"/><aside className="metrics" aria-label="Key metrics">{t.metrics.map(([value,label])=><div className="card" key={label}><strong>{value}</strong><p>{label}</p></div>)}</aside></div></section><Section id="about" title={t.aboutTitle}><div className="card about">{t.about.map(text=><p key={text}>{text}</p>)}</div></Section><Section id="skills" title={t.skillsTitle} alternate><div className="skills-grid">{t.skills.map(([title,text,note])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p><small>{note}</small></article>)}</div></Section><Section id="projects" title={t.projectsTitle}><div className="projects-grid">{t.projects.map((project,index)=><article className={'card project '+(index===0?'featured':'')} key={project.title}><div className="tags"><span>{project.type}</span><span>{project.date}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="btn project-link" href={project.repo} target="_blank" rel="noopener noreferrer">{t.github}</a></article>)}</div></Section><Section id="experience" title={t.experienceTitle} alternate><div className="timeline">{t.experiences.map((experience)=><article className="timeline-item" key={experience.title}><div className="date">{experience.date}</div><div className="card"><h3>{experience.title}</h3><p><strong>{lang==='fr'?'Contexte':'Context'} :</strong> {experience.context}</p><p><strong>{lang==='fr'?'Équipe':'Team'} :</strong> {experience.team}</p><p><strong>{lang==='fr'?'Rôle':'Role'} :</strong> {experience.role}</p><ul>{experience.achievements.map(point=><li key={point}>{point}</li>)}</ul><div className="tags">{experience.technologies.map(technology=><span key={technology}>{technology}</span>)}</div></div></article>)}</div></Section><Section id="education" title={t.educationTitle}><div className="education-grid">{t.education.map(([title,school,note])=><article className="card" key={title}><h3>{title}</h3><p>{school}</p><small>{note}</small></article>)}</div></Section><Section id="contact" title={t.contactTitle} alternate><Contact t={t}/></Section></main><footer className="container">© {new Date().getFullYear()} Youssouf Mohamed Yasser · React</footer></>
}
