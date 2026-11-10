import { skillGroups, otherSkills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h1 className="text-center mb-5">Mes Compétences Techniques</h1>

        {skillGroups.map(group => (
          <div className="mb-5" key={group.title}>
            <h3 className="text-center mb-4">{group.title}</h3>
            <div className="row">
              {group.skills.map(skill => (
                <div className="col-lg-3 col-md-6 mt-3" key={skill.name}>
                  <div className="card skillsText h-100">
                    <div className="card-body text-center">
                      <h5 className="card-title">{skill.name}</h5>
                      {skill.note && <p className="small text-muted">{skill.note}</p>}
                      <div className="progress mt-3">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: `${skill.level}%` }}
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="row">
          {otherSkills.map(skill => (
            <div className="col-lg-2 col-md-4 col-sm-6 mt-3" key={skill}>
              <div className="card skillsText h-100">
                <div className="card-body text-center">
                  <h6 className="card-title">{skill}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
