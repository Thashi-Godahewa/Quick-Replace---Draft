const iconMap = {
  wrench: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 5.5a4 4 0 0 1 5.5 5.5l-1.3 1.3-1.4-1.4 1.4-1.4a2 2 0 0 0-2.8-2.8L13.2 7.9 11.8 9.3l2.3 2.3-1.4 1.4-2.3-2.3-4 4A3 3 0 1 1 3 15l4-4 2.3 2.3 1.4-1.4-2.3-2.3 1.4-1.4 2.3 2.3 1.5-1.5Z"/>
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L5 13h5l-1 9 8-11h-5l1-9Z"/>
    </svg>
  ),
  glass: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 5h12l-1 14H7L6 5Z"/>
      <path d="M9 9h6M10 13h4"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2"/>
      <path d="M8 10V8a4 4 0 1 1 8 0v2"/>
    </svg>
  ),
  paint: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13h12l2 2v4H5z"/>
      <path d="M7 13V5h8v8"/>
      <path d="M9 18v2M15 18v2"/>
    </svg>
  ),
  hammer: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3h7l4 4-7 7-4-4V3Z"/>
      <path d="M8 14l-5 5 4 4 5-5"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2 3.8 1.1a2 2 0 0 1 1.4 1.9v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6.9a2 2 0 0 1 2-2h3a2 2 0 0 1 1.9 1.4l1.1 3.8-2.3 2.2Z"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 4 4L19 2"/>
    </svg>
  )
};

const services = [
  { icon: 'wrench', title: 'Plumbing', text: 'From leak repairs to pipe replacements and bathroom upgrades, we keep your plumbing running smoothly and efficiently.', link: 'Learn more' },
  { icon: 'bolt', title: 'Electrical', text: 'Need reliable electrical repairs or rewiring? Our certified team handles every job with safety, precision, and care.', link: 'Learn more' },
  { icon: 'glass', title: 'Glazing', text: 'We install and repair glass panels, windows, doors, and screens to restore security and natural light.', link: 'Learn more' },
  { icon: 'lock', title: 'Make Safe', text: 'We respond quickly to hazardous issues, securing properties and preventing further damage until full repairs are completed.', link: 'Learn more' },
  { icon: 'hammer', title: 'Locksmith', text: 'Our locksmith specialists can repair, replace, and upgrade locks and security solutions for homes and businesses.', link: 'Learn more' },
  { icon: 'paint', title: 'Painting & Plastering', text: 'Refresh your space with expert surface preparation, repairs, and modern finishes that last.', link: 'Learn more' }
];

const steps = [
  { title: 'Fast Online Booking & 24/7 Intake', text: 'Book your service quickly online or by phone, and our team gathers the details you need to prepare the right fix.', tag: 'Step 01', icon: 'phone' },
  { title: 'Expert Assessment & Transparent Quote', text: 'We inspect the issue, explain the work clearly, and provide a straightforward, honest quote before any job starts.', tag: 'Step 02', icon: 'check' },
  { title: 'Professional Repair & Installation', text: 'Our skilled technicians complete the work with high-quality materials and a focus on long-lasting results.', tag: 'Step 03', icon: 'wrench' },
  { title: 'Final Quality Check & Support', text: 'We test every repair, review the finished result, and leave you with total confidence in the service delivered.', tag: 'Step 04', icon: 'bolt' }
];

const projects = [
  { title: 'Bathroom Remodel', badge: 'Bathroom', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80' },
  { title: 'Kitchen Refresh', badge: 'Kitchen', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80' },
  { title: 'Plumbing Upgrade', badge: 'Plumbing', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80' },
  { title: 'Interior Renovation', badge: 'Remodel', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80' }
];

const testimonials = [
  { name: 'Sarah K.', role: 'Homeowner', quote: 'They took care of the issue quickly and explained everything clearly. The quality of the work was excellent from start to finish.' },
  { name: 'Marcus T.', role: 'Property Manager', quote: 'Their team is responsive, reliable, and professional. We have trusted them for multiple repairs and maintenance jobs.' },
  { name: 'Donna M.', role: 'Business Owner', quote: 'Fast turnaround and honest pricing. They resolved our maintenance problems without leaving a mess or unnecessary delays.' },
  { name: 'James R.', role: 'Landlord', quote: 'Working with them was a great experience. The team was punctual, skilled, and the finish was clean and professional.' }
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-logo" aria-label="Quick Replace home">
            <img
              src="./src/Images/Quick Replace Logo.png"
              alt="Quick Replace logo"
              className="quick-logo"
            />
          </div>

          <nav className="nav" aria-label="Main navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Projects</a>
            <a href="#">Reviews</a>
          </nav>

          <div className="header-cta">
            <button className="mini-btn" type="button">Contact</button>
            <button className="main-btn" type="button">Get a quote</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Trusted property experts</span>
                <h1>Reliable Property Maintenance &amp; Quick Replace Solutions</h1>
                <p>
                  Fast, efficient, and professional maintenance services for homes and businesses. We handle repairs,
                  replacements, and upkeep with quality workmanship you can trust.
                </p>

                <div className="hero-actions">
                  <button className="primary-btn" type="button">Get a Quote</button>
                  <button className="secondary-btn" type="button">View Services</button>
                </div>
              </div>

              <div className="hero-stats" aria-label="Key performance stats">
                <div className="stat-box">
                  <span className="value">50K+</span>
                  <span className="label">Projects completed with dependable, quality-driven service.</span>
                </div>
                <div className="stat-box">
                  <span className="value">12M+</span>
                  <span className="label">Square feet maintained with consistent, hands-on expertise.</span>
                </div>
                <div className="stat-box">
                  <span className="value">30 Min</span>
                  <span className="label">Average response time for emergency repair support.</span>
                </div>
                <div className="stat-box">
                  <span className="value">100%</span>
                  <span className="label">Satisfaction-focused service and clear communication throughout.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mini-grid">
          <div className="stat-strip">
            <div className="item">
              <span className="number">50%</span>
              <span className="subtitle">Faster response time<br/>than standard providers</span>
            </div>
            <div className="item">
              <span className="number">12M+</span>
              <span className="subtitle">Sq ft maintained<br/>across property work</span>
            </div>
            <div className="item">
              <span className="number">30 Min</span>
              <span className="subtitle">Average emergency<br/>dispatch time</span>
            </div>
            <div className="item">
              <span className="number">100%</span>
              <span className="subtitle">Customer-first service<br/>and workmanship assurance</span>
            </div>
          </div>
        </div>

        <section className="services section">
          <div className="section-title">
            <h2>Our Expertise: Quality Handyman Solutions</h2>
            <p>
              From plumbing and electrical repairs to painting, glazing, and locksmith work, our team delivers dependable property solutions
              for homes, offices, and commercial spaces.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{iconMap[service.icon]}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#" className="link">
                  <span>{service.link}</span>
                  <span className="link-arrow">→</span>
                </a>
              </article>
            ))}
          </div>

          <div className="services-cta">
            <button className="outline-btn" type="button">View all services</button>
          </div>
        </section>

        <section className="how-it-works section">
          <div className="section-title">
            <h2>How It Works: Seamless Service in 4 Simple Steps</h2>
          </div>

          <div className="steps-wrap">
            <div className="step-feature">
              <div className="step-tag">Step 01</div>
              <h3>Fast Online Booking &amp; 24/7 Intake</h3>
              <p>
                Start with a quick online request or phone call, and we’ll collect the job details needed to get the right service moving.
              </p>
            </div>

            {steps.slice(1).map((step) => (
              <article className="step-card" key={step.title}>
                <div className="icon-wrap">{iconMap[step.icon]}</div>
                <span className="step-no">{step.tag}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-wrap section">
          <div className="about-copy">
            <h2>With over 15+ years of experience, our team provides top-quality services</h2>
            <p>
              From routine maintenance and repairs to urgent property support, we bring experience, precision, and customer-first care to every task.
            </p>
            <p>
              We pride ourselves on a smooth process, clear communication, and dependable workmanship that helps homeowners and businesses keep operations running safely.
            </p>
            <button className="primary-btn" type="button">About us</button>
          </div>

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80" alt="Maintenance worker repairing building systems" />
          </div>
        </section>

        <section className="projects section">
          <div className="section-title">
            <h2>Projects we have done</h2>
          </div>

          <div className="projects-tabs" aria-label="Project filters">
            <button className="tab active" type="button">All</button>
            <button className="tab" type="button">Bathroom</button>
            <button className="tab" type="button">Kitchen</button>
            <button className="tab" type="button">Plumbing</button>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="meta">
                  <strong>{project.title}</strong>
                  <span className="project-badge">{project.badge}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials section">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="person">
                  <div className="avatar" aria-hidden="true" />
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </div>
                </div>
                <p>“{item.quote}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-area section">
          <div className="service-area-inner">
            <div className="map-area" aria-label="Service area map">
              <div className="map-bg" />
              <div className="map-overlay" />
              <span className="map-pin p1" />
              <span className="map-pin p2" />
              <span className="map-pin p3" />
              <span className="map-pin p4" />
            </div>

            <div className="map-copy">
              <h2>Do We Serve Your Area?</h2>
              <p>
                We provide maintenance and repair services across a wide service area. If you need a fast, dependable team for plumbing,
                electrical, glazing, or general property work, get in touch to confirm coverage near you.
              </p>
              <div className="filter-box">Find out your service area</div>
            </div>
          </div>
        </section>

        <section className="cta-band section">
          <div className="cta-inner">
            <div className="cta-copy">
              <h2>Need an Emergency Repair or Make Safe Right Now? Quick Replace Is Ready.</h2>
              <p>Don’t wait for damage to worsen. Contact our team for immediate emergency support, quick-response repairs, and safe property solutions.</p>
            </div>

            <div className="cta-actions">
              <button className="primary-btn" type="button">Call 0800 000 000</button>
              <button className="secondary-btn" type="button">Book a Service</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand footer-col">
            <div className="brand" style={{ color: '#10273d' }}>
              <span className="brand-mark" aria-hidden="true" />
              <span>Quick Replace</span>
            </div>
            <p>Reliable property upkeep, repairs, and replacements with quick response times and quality workmanship.</p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Plumbing</a></li>
              <li><a href="#">Electrical</a></li>
              <li><a href="#">Locksmith</a></li>
              <li><a href="#">Painting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Email: hello@quickreplace.co</p>
            <p>Open: Mon - Sat, 8am - 6pm</p>
          </div>
        </div>

        <div className="copyright">© 2026 Quick Replace. All rights reserved.</div>
      </footer>
    </div>
  );
}

window.App = App;
