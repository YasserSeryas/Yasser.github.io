import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h1 className="text-center">À Propos</h1>
        <div className="row mt-4">
          <div className="col-lg-4">
            <img src={profile.photo} alt={profile.name} className="img-fluid rounded" />
          </div>
          <div className="col-lg-8">
            <p className="lead">
              Développeur Full-Stack avec <strong>3 ans d'expérience React</strong> et spécialisation en architectures microservices.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><strong>Nom :</strong> {profile.name}</li>
                  <li><strong>Téléphone :</strong> {profile.phone}</li>
                  <li><strong>Email :</strong> {profile.email}</li>
                  <li><strong>Localisation :</strong> {profile.location}</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><strong>Statut :</strong> Disponible CDI/CDD</li>
                  <li><strong>Langues :</strong> FR, EN (C1), CN (HSK 4)</li>
                  <li><strong>Spécialité :</strong> React / Node.js</li>
                  <li><strong>Formation :</strong> Master Ynov Paris</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
