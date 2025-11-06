import Image from "next/image";

const artists = [
  {
    name: "Luna Ferri",
    meta: "Nuova voce del pop orchestrale",
    tag: "headliner"
  },
  {
    name: "Orchestra Riviera",
    meta: "Sinfonie contaminate da synth",
    tag: "ensemble"
  },
  {
    name: "Davide Riva",
    meta: "Cantautorato moderno ispirato al Mogol",
    tag: "cantautore"
  },
  {
    name: "Chiara D'Asta",
    meta: "Jazz couture per notti eleganti",
    tag: "special guest"
  }
];

const schedule = [
  {
    time: "18:30",
    title: "Aperitivo panoramico",
    description: "DJ set vinile, degustazione Riviera Ligure, vista su Piazza Colombo.",
    highlight: "Dress code: Glam cocktail"
  },
  {
    time: "20:00",
    title: "Dimensione Musica Live",
    description: "Luna Ferri accompagnata dall'Orchestra Riviera per un viaggio nei classici sanremesi.",
    highlight: "Speciale medley 'Città dei Fiori'"
  },
  {
    time: "22:15",
    title: "After Theatre",
    description: "Chiara D'Asta interpreta standard jazz italiani con contaminazioni elettroniche.",
    highlight: "Session esclusiva con ospiti sorpresa"
  }
];

const ribbonItems = [
  "Edizione 2024",
  "Sanremo - Teatro del Mare",
  "12-18 Febbraio",
  "Esperienza immersiva",
  "Posti limitati"
];

const stats = [
  { value: "7", label: "Serate tematiche" },
  { value: "3", label: "Palchi scenografici" },
  { value: "18", label: "Artisti internazionali" },
  { value: "1", label: "Unica esperienza" }
];

export default function Home() {
  return (
    <main>
      <header className="layout-grid section">
        <nav className="header-nav">
          <div className="header-brand">
            <Image src="/images/logo-symbol.svg" alt="Dimensione Musica logo" width={36} height={36} priority />
            <div className="header-brand-text">
              <span className="header-brand-title">Dimensione Musica</span>
              <span className="header-brand-subtitle">Sanremo Edition</span>
            </div>
          </div>
          <div className="header-nav-links">
            <a href="#lineup" className="nav-link">Lineup</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#program" className="nav-link">Programma</a>
            <a href="#tickets" className="btn btn-primary">
              Biglietti
            </a>
          </div>
        </nav>
      </header>

      <section className="hero layout-grid">
        <div className="hero-content">
          <div className="hero-header">
            <div className="pill">Dal cuore di Sanremo</div>
            <h1 className="hero-title">Dimensione Musica Sanremo</h1>
            <p className="hero-subtitle">
              Un viaggio multisensoriale tra eleganza vintage e sperimentazione sonora. Dal foyer al palco, ogni momento reinterpreta la tradizione del Festival con un linguaggio contemporaneo.
            </p>
            <div className="hero-cta">
              <a href="#tickets" className="btn btn-primary">
                Prenota l&apos;esperienza
              </a>
              <a href="#lineup" className="btn btn-secondary">
                Scopri la lineup
              </a>
            </div>
          </div>
          <div className="hero-media surface">
            <Image src="/images/hero-vocalist.svg" alt="Cantante sul palco" width={420} height={520} priority />
          </div>
        </div>
        <div className="hero-badge-list">
          <div className="hero-badge">
            <span>18-24 Feb</span>
            <label>Settimana Festival</label>
          </div>
          <div className="hero-badge">
            <span>Teatro del Mare</span>
            <label>Sanremo</label>
          </div>
          <div className="hero-badge">
            <span>VIP 120</span>
            <label>Posti Seletti</label>
          </div>
          <div className="hero-badge">
            <span>Live + Immersive</span>
            <label>Formato</label>
          </div>
        </div>
      </section>

      <section className="ribbon">
        <div className="ribbon-track">
          <div className="ribbon-content">
            {ribbonItems.concat(ribbonItems).map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="layout-grid section">
        <div className="section-heading">
          <h2>Un rito contemporaneo</h2>
        </div>
        <div className="about">
          <div className="about-copy">
            <p>
              Dimensione Musica riscrive l&apos;iconografia del Festival di Sanremo: foyer esperienziali, lounge olfattive, sartorie pop-up e un palco che respira scenografie dinamiche ispirate alle coste liguri.
            </p>
            <p>
              Ogni sera un concept cromatico differente, abbinato a menu curati da chef stellati e signature cocktail disegnati dalla mixology Riviera Club. Un equilibrio tra heritage e new glamour.
            </p>
            <p>
              L&apos;esperienza si completa con installazioni audiovisive immersive e percorsi sonori interattivi progettati da studi creativi europei.
            </p>
          </div>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <div className="about-stat-value">{stat.value}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lineup" className="layout-grid section">
        <div className="section-heading">
          <h2>Lineup curatoriale</h2>
        </div>
        <div className="lineup-grid">
          {artists.map((artist) => (
            <article key={artist.name} className="artist-card">
              <div className="artist-info">
                <span className="artist-tag">{artist.tag}</span>
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-meta">{artist.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="program" className="layout-grid section">
        <div className="section-heading">
          <h2>Programma serale</h2>
        </div>
        <div className="schedule">
          {schedule.map((item) => (
            <article key={item.time} className="schedule-card">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-details">
                <h3>{item.title}</h3>
                <p className="subtle-text">{item.description}</p>
              </div>
              <div className="schedule-highlight">{item.highlight}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="tickets" className="layout-grid section">
        <div className="tickets-callout surface">
          <div className="tickets-copy">
            <h3>Accedi all&apos;esperienza signature</h3>
            <p>
              Passe-partout con sedute in prima fila, private concierge, backstage walk-through e degustazione firmata. Disponibilità ultra-limitata: solo 120 membership per l&apos;intera settimana.
            </p>
          </div>
          <div className="tickets-actions">
            <a href="https://dimensione-musica-sanremo.com/tickets" className="btn btn-primary">
              Richiedi invito
            </a>
            <a href="mailto:concierge@dimensione-musica.it" className="btn btn-secondary">
              Contatta concierge
            </a>
          </div>
        </div>
      </section>

      <footer className="layout-grid footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>Dimensione Musica</h4>
            <p>
              Concept immersivo by Atelier Riviera. Produzione e direzione artistica Lume Collective.
            </p>
          </div>
          <div className="footer-links">
            <strong>Programma</strong>
            <a href="#experience">Experience</a>
            <a href="#lineup">Lineup</a>
            <a href="#program">Programma</a>
          </div>
          <div className="footer-links">
            <strong>Info utili</strong>
            <a href="#tickets">Biglietti</a>
            <a href="https://dimensione-musica-sanremo.com/faq">FAQ</a>
            <a href="mailto:press@dimensione-musica.it">Press Room</a>
          </div>
          <div className="footer-links">
            <strong>Contatti</strong>
            <a href="mailto:concierge@dimensione-musica.it">concierge@dimensione-musica.it</a>
            <a href="tel:+390184123456">+39 0184 123 456</a>
            <a href="https://instagram.com/dimensionemusica">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Dimensione Musica — Crafted in Sanremo</span>
          <span>Privacy & Cookies · Credits</span>
        </div>
      </footer>
    </main>
  );
}
