export default function Navbar() {
  const links = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Expérience' },
    { href: '#portfolio', label: 'Projets' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">Mohamed Yasser</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map(link => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
