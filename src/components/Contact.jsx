import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h1 className="text-center mb-5">Me Contacter</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4">
              <p><i className="fas fa-envelope text-primary"></i> <strong>Email :</strong> {profile.email}</p>
              <p><i className="fas fa-phone text-primary"></i> <strong>Téléphone :</strong> {profile.phone}</p>
              <p><i className="fas fa-map-marker-alt text-primary"></i> <strong>Localisation :</strong> {profile.location}</p>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Envoyer un email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
