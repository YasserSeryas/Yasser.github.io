import { useEffect, useState } from 'react'

const translations = {
 fr: {
 nav: [['about','À propos'],['skills','Compétences'],['projects','Projets'],['experience','Expériences'],['education','Formation'],['contact','Contact']],
 menu: 'Menu', theme: 'Activer le thème clair',
 availability: 'Disponible en CDI / CDD', location: 'Nantes · mobilité Île-de-France',
 heroTitle: 'Développeur Full-Stack orienté produit, performance et mise en production.',
 heroText: 'Je conçois des applications web modernes avec React, Node.js et des architectures microservices.',
 viewProjects: 'Voir mes projets', contactMe: 'Me contacter',
 metrics: [['12+','Composants React livrés en production'],['-18%','Temps de chargement optimisé'],['6','Microservices sur un projet personnel'],['50+','Endpoints sur le projet Spotify Clone']],
 aboutTitle: 'Un profil full-stack avec une vraie logique de livraison.',
 about: ['Développeur Full-Stack basé à Nantes, je conçois des interfaces performantes et des backends robustes.','De l’intégration API à l’automatisation du déploiement, je privilégie la qualité du code, la modularité et la performance.','Diplômé d’un Master Expert en Développement Logiciel chez Ynov Paris.'],
 skillsTitle: 'Une stack organisée par impact en projet.', projectsTitle: 'Des projets à forte profondeur technique.', experienceTitle: 'Des expériences concrètes en développement.', educationTitle: 'Développement logiciel et ouverture internationale.', contactTitle: 'Échangeons sur votre prochain projet.',
 github: 'GitHub', formIntro: 'Ce formulaire prépare un email dans votre messagerie.', prepare: 'Préparer mon email', mailNotice: 'Votre application de messagerie va s’ouvrir.', labels: {name:'Nom',email:'Email',subject:'Sujet',message:'Message'}
 },
 en: {
 nav: [['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['education','Education'],['contact','Contact']],
 menu: 'Menu', theme: 'Enable light theme',
 availability: 'Available for full-time / fixed-term roles', location: 'Nantes · Île-de-France mobility',
 heroTitle: 'Product-focused Full-Stack Developer for performance and production.',
 heroText: 'I build modern web applications with React, Node.js and microservice architectures.',
 viewProjects: 'View my projects', contactMe: 'Contact me',
 metrics: [['12+','React components shipped to production'],['-18%','Page load time improvement'],['6','Microservices in a personal project'],['50+','Endpoints in the Spotify Clone project']],
 aboutTitle: 'A full-stack profile with a real delivery mindset.',
 about: ['Full-Stack Developer based in Nantes, I build performant interfaces and robust backends.','From API integration to deployment automation, I focus on code quality, modularity and performance.','I hold a Master’s degree in Software Development from Ynov Paris.'],
 skillsTitle: 'A stack organised around project impact.', projectsTitle: 'Projects with strong technical depth.', experienceTitle: 'Hands-on development experience.', educationTitle: 'Software development and international exposure.', contactTitle: 'Let’s discuss your next project.',
 github: 'GitHub', formIntro: 'This form prepares an email in your mail application.', prepare: 'Prepare my email', mailNotice: 'Your mail application will open.', labels: {name:'Name',email:'Email',subject:'Subject',message:'Message'}
 }
}
const skills = [
 ['Front-end','React, Redux, TypeScript, JavaScript ES6+, HTML5, CSS3','Vue 3, Angular, React Native'],
 ['Back-end','Node.js, Express.js, Spring Boot, API RESTful','PHP / Laravel'],
 ['Databases','PostgreSQL, MySQL, MongoDB','Redis'],
 ['DevOps & tools','Docker, Jenkins, GitHub Actions, Git, Nginx, AWS','CI/CD, deployment, automation'],
 ['Integrations','JWT, OAuth, Stripe, Swagger, FFmpeg, Prometheus, Grafana','APIs, security, monitoring'],
 ['Methods','Microservices, MVC, Agile, TDD, event-driven architecture','Quality and maintainability']
]
const projects = [
 {title:'Booking & ticketing platform',type:'Personal project',date:'2025 — Present',text:'Complete architecture with 6 microservices: JWT/OAuth authentication, Stripe payments, notifications, monitoring and CI/CD.',tags:['React','Redux','Node.js','Stripe','Docker','Prometheus'],repo:'https://github.com/YasserSeryas'},
 {title:'Spotify Clone',type:'Team project',date:'2025',text:'Audio streaming application with 50+ endpoints, Redis caching, FFmpeg media processing and OpenAPI documentation.',tags:['Express','React','Redis','FFmpeg','Swagger'],repo:'https://github.com/YasserSeryas'},
 {title:'48-hour e-commerce',type:'Hackathon',date:'2023',text:'MERN store with product catalogue, shopping cart and checkout.',tags:['MongoDB','Express','React','Node.js'],repo:'https://github.com/YasserSeryas'},
 {title:'Android app — Open Data',type:'Academic project',date:'2023',text:'Native Kotlin mobile application consuming a REST API with a Spring Boot backend.',tags:['Spring Boot','Kotlin','REST API'],repo:'https://github.com/YasserSeryas'}
]
const experiences = [
 ['Dec. 2023 — Dec. 2025','Front-End Developer Internship — Elab Fluxod','Development of 3 B2B data-flow management web platforms in an Agile team.',['12+ modular React components shipped to production.','18% reduction in page load time.','Automated front-end deployment with Jenkins.','REST API integration with the back-end team.']],
 ['2023','Web Developer — AKA Logistique et Transport','Independent development of a WordPress showcase website.',['Custom theme aligned with the brand identity.','Configuration of forms, SEO and caching plugins.','Production release and client training.']],
 ['2022','Web Developer — Accoord Nantes','Development of two internal tools to digitise administrative processes.',['Household quotient calculator in vanilla JavaScript.','Laravel / MySQL CRUD phone directory.','Management of 470+ contacts with advanced search.']]
]
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
 return <header className="site-header" id="top"><div className="container nav-shell"><a className="brand" href="#top"><span className="brand-mark">YM</span><span>Youssouf Mohamed Yasser</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{t.menu}</button><nav id="navigation" className={open?'main-nav open':'main-nav'} aria-label="Main navigation">{t.nav.map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="nav-actions"><button className="lang-toggle" onClick={()=>setLang(lang==='fr'?'en':'fr')} aria-label="Switch language">{lang==='fr'?'EN':'FR'}</button><ThemeToggle label={t.theme}/></div></div></header>
}
function Contact({t}) {
 const [fields,setFields]=useState({name:'',email:'',subject:'',message:''})
 const [notice,setNotice]=useState('')
 function submit(event){event.preventDefault();const body=`Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`;window.location.href=`mailto:yasseryoussoufm@gmail.com?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;setNotice(t.mailNotice)}
 return <div className="contact-grid"><div className="card contact-links"><a href="mailto:yasseryoussoufm@gmail.com">yasseryoussoufm@gmail.com</a><a href="tel:+33764512779">07 64 51 27 79</a><a href="https://www.linkedin.com/in/yasser-youssouf-mohamed-396b1a19a/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/YasserSeryas" target="_blank" rel="noopener noreferrer">GitHub</a><p>Nantes · Île-de-France mobility</p></div><form className="card contact-form" onSubmit={submit}><p>{t.formIntro}</p>{[['name','text'],['email','email'],['subject','text'],['message','textarea']].map(([key,type])=><label key={key} htmlFor={'contact-'+key}>{t.labels[key]}{type==='textarea'?<textarea id={'contact-'+key} name={key} rows={5} required value={fields[key]} onChange={e=>setFields({...fields,[key]:e.target.value})}/>:<input id={'contact-'+key} name={key} type={type} required value={fields[key]} onChange={e=>setFields({...fields,[key]:e.target.value})}/>}</label>)}<button className="btn primary" type="submit">{t.prepare}</button><p role="status">{notice}</p></form></div>
}
export default function App(){
 const [lang,setLang] = useState(()=>{try{return localStorage.getItem('portfolio-lang')||'fr'}catch{return 'fr'}})
 useEffect(()=>{try{localStorage.setItem('portfolio-lang',lang)}catch{}},[lang])
 const t = translations[lang]
 return <><a className="skip-link" href="#main">{lang==='fr'?'Aller au contenu':'Skip to content'}</a><Navbar t={t} lang={lang} setLang={setLang}/><main id="main"><section className="section hero"><div className="container hero-grid"><div><div className="tags"><span>{t.availability}</span><span>{t.location}</span></div><h1>{t.heroTitle}</h1><p className="lead">{t.heroText}</p><div className="tags"><span>React · Redux · TypeScript</span><span>Node.js · Express · Spring Boot</span><span>Microservices · Docker · CI/CD</span></div><div className="actions"><a className="btn primary" href="#projects">{t.viewProjects}</a><a className="btn" href="#contact">{t.contactMe}</a></div></div><img className="portrait" src="https://raw.githubusercontent.com/YasserSeryas/Yasser.github.io/gh-pages/images/moi.png" alt="Youssouf Mohamed Yasser" width="260" height="260"/><aside className="metrics" aria-label="Key metrics">{t.metrics.map(([value,label])=><div className="card" key={label}><strong>{value}</strong><p>{label}</p></div>)}</aside></div></section><Section id="about" title={t.aboutTitle}><div className="card about">{t.about.map(text=><p key={text}>{text}</p>)}</div></Section><Section id="skills" title={t.skillsTitle} alternate><div className="skills-grid">{skills.map(([title,text,note])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p><small>{note}</small></article>)}</div></Section><Section id="projects" title={t.projectsTitle}><div className="projects-grid">{projects.map((project,index)=><article className={'card project '+(index===0?'featured':'')} key={project.title}><div className="tags"><span>{project.type}</span><span>{project.date}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><a className="btn project-link" href={project.repo} target="_blank" rel="noopener noreferrer">{t.github}</a></article>)}</div></Section><Section id="experience" title={t.experienceTitle} alternate><div className="timeline">{experiences.map(([date,title,text,points])=><article className="timeline-item" key={title}><div className="date">{date}</div><div className="card"><h3>{title}</h3><p>{text}</p><ul>{points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</div></Section><Section id="education" title={t.educationTitle}><div className="education-grid">{[['Master Expert in Software Development','Ynov Paris · 2024 — 2025','RNCP Level 7'],['Master’s Degree in Computer Science — Development','Ynov Nantes · 2020 — 2024',''],['General Computer Science & HSK 4','Shanghai Institute of Technology · 2015 — 2019','Official Chinese certification']].map(([title,school,note])=><article className="card" key={title}><h3>{title}</h3><p>{school}</p><small>{note}</small></article>)}</div></Section><Section id="contact" title={t.contactTitle} alternate><Contact t={t}/></Section></main><footer className="container">© {new Date().getFullYear()} Youssouf Mohamed Yasser · React</footer></>
}
