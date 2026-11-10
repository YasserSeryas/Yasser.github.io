import { experiences } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h1 className="text-center mb-5">Expérience Professionnelle</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map(exp => (
              <div className="card mb-4 experience-card" key={`${exp.company}-${exp.period}`}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <span className="badge bg-primary fs-6">{exp.period}</span>
                      <p className="text-muted mt-2 mb-0">{exp.location}</p>
                    </div>
                    <div className="col-md-9">
                      <h4 className="text-primary">{exp.role}</h4>
                      <h6 className="text-muted">{exp.company}</h6>
                      <p className="mt-3">{exp.description}</p>
                      <div>
                        {exp.tags.map(tag => (
                          <span className="badge bg-secondary me-2" key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
