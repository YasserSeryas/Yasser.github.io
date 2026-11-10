import { projects } from '../data.js'

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="text-center mb-5">Mes Projets Réalisés</h1>
        <div className="row">
          {projects.map(project => (
            <div className="col-lg-4 mt-4" key={project.title}>
              <div className="card portfolioContent h-100">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map(tag => (
                      <span className="badge bg-primary me-1" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="btn btn-primary">Voir le projet</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
