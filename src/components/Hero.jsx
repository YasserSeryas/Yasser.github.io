import { profile, stats, techBadges } from '../data.js'

export default function Hero() {
  return (
    <section className="bgimage" id="home">
      <div className="container">
        <div className="row align-items-center hero-wrap">
          <div className="col-lg-7 col-md-12">
            <div className="hero-text text-white">
              <h1 className="hero_title">{profile.name}</h1>
              <p className="hero_desc">{profile.role}</p>
              <p className="hero_pitch">
                <strong>3 ans d'expérience React</strong> avec spécialisation en architectures microservices.{' '}
                <strong>1 an d'alternance</strong> chez Elab Fluxod : <strong>12+ composants React</strong> déployés en production.
              </p>

              <div className="hero-stats mt-4 mb-4">
                {stats.map(stat => (
                  <div className="stat-card" key={stat.label}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="hero-badges">
                {techBadges.map(tech => (
                  <span className="badge bg-primary me-2 mb-2" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="hero-buttons mt-4">
                <a href="#portfolio" className="btn btn-primary btn-lg me-2">
                  <i className="fas fa-code"></i> Voir mes projets
                </a>
                <a href={profile.cv} className="btn btn-outline-light btn-lg me-2" download>
                  <i className="fas fa-download"></i> Télécharger mon CV
                </a>
                <a href="#contact" className="btn btn-success btn-lg">
                  <i className="fas fa-envelope"></i> Me contacter
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-card">
              <img src={profile.photo} alt={profile.name} className="hero-avatar" />
              <ul className="hero-meta list-unstyled mt-3">
                <li><i className="fas fa-map-marker-alt"></i> {profile.location}</li>
                <li><i className="fas fa-language"></i> Français, Anglais (C1), Chinois (HSK 4)</li>
                <li><i className="fas fa-briefcase"></i> 1 an alternance Elab Fluxod</li>
                <li><i className="fas fa-graduation-cap"></i> Master Ynov Paris</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
