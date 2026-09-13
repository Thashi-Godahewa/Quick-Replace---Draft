const iconMap = {
  wrench: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M14.5 5.5a4 4 0 0 1 5.5 5.5l-1.3 1.3-1.4-1.4 1.4-1.4a2 2 0 0 0-2.8-2.8L13.2 7.9 11.8 9.3l2.3 2.3-1.4 1.4-2.3-2.3-4 4A3 3 0 1 1 3 15l4-4 2.3 2.3 1.4-1.4-2.3-2.3 1.4-1.4 2.3 2.3 1.5-1.5Z' })
  ),
  bolt: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M13 2L5 13h5l-1 9 8-11h-5l1-9Z' })
  ),
  glass: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M6 5h12l-1 14H7L6 5Z' }),
    React.createElement('path', { d: 'M9 9h6M10 13h4' })
  ),
  lock: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('rect', { x: '5', y: '10', width: '14', height: '10', rx: '2' }),
    React.createElement('path', { d: 'M8 10V8a4 4 0 1 1 8 0v2' })
  ),
  paint: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M5 13h12l2 2v4H5z' }),
    React.createElement('path', { d: 'M7 13V5h8v8' }),
    React.createElement('path', { d: 'M9 18v2M15 18v2' })
  ),
  hammer: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M8 3h7l4 4-7 7-4-4V3Z' }),
    React.createElement('path', { d: 'M8 14l-5 5 4 4 5-5' })
  ),
  phone: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2 3.8 1.1a2 2 0 0 1 1.4 1.9v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6.9a2 2 0 0 1 2-2h3a2 2 0 0 1 1.9 1.4l1.1 3.8-2.3 2.2Z' })
  ),
  check: React.createElement(
    'svg',
    { viewBox: '0 0 24 24', width: '18', height: '18', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
    React.createElement('path', { d: 'm5 12 4 4L19 2' })
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

function SectionBadge({ text, icon = 'wrench' }) {
  return React.createElement(
    'div',
    { className: 'section-badge' },
    iconMap[icon] || null,
    React.createElement('span', null, text)
  );
}

function App() {
  return React.createElement(
    'div',
    { className: 'page-shell' },
    React.createElement(
      'header',
      { className: 'topbar' },
      React.createElement(
        'div',
        { className: 'topbar-inner' },
        React.createElement('div', { className: 'brand-logo', 'aria-label': 'Quick Replace home' },
          React.createElement('img', {
            src: './src/Images/Quick%20Replace%20Logo.png',
            alt: 'Quick Replace logo',
            className: 'quick-logo'
          })
        ),
        React.createElement(
          'nav',
          { className: 'nav', 'aria-label': 'Main navigation' },
          React.createElement('a', { href: '#' }, 'Home'),
          React.createElement('a', { href: '#' }, 'About'),
          React.createElement('a', { href: '#' }, 'Services'),
          React.createElement('a', { href: '#' }, 'Pricing'),
          React.createElement('a', { href: '#' }, 'Projects'),
          React.createElement('a', { href: '#' }, 'Reviews')
        ),
        React.createElement(
          'div',
          { className: 'header-cta' },
          React.createElement('button', { className: 'mini-btn', type: 'button' }, 'Contact'),
          React.createElement('button', { className: 'main-btn', type: 'button' }, 'Get a quote')
        )
      )
    ),
    React.createElement(
      'main',
      null,
      React.createElement(
        'section',
        { className: 'hero' },
        React.createElement(
          'div',
          { className: 'hero-inner' },
          React.createElement(
            'div',
            { className: 'hero-grid' },
            React.createElement(
              'div',
              { className: 'hero-copy' },
              React.createElement('span', { className: 'eyebrow' }, 'Trusted property experts'),
              React.createElement('h1', null, 'Reliable Property Maintenance & Quick Replace Solutions'),
              React.createElement('p', null, 'Fast, efficient, and professional maintenance services for homes and businesses. We handle repairs, replacements, and upkeep with quality workmanship you can trust.'),
              React.createElement(
                'div',
                { className: 'hero-actions' },
                React.createElement('button', { className: 'primary-btn', type: 'button' }, 'Get a Quote'),
                React.createElement('button', { className: 'secondary-btn', type: 'button' }, 'View Services')
              )
            ),
            React.createElement(
              'div',
              { className: 'hero-stats', 'aria-label': 'Key performance stats' },
              React.createElement('div', { className: 'stat-box' }, React.createElement('span', { className: 'value' }, '50K+'), React.createElement('span', { className: 'label' }, 'Projects completed with dependable, quality-driven service.')),
              React.createElement('div', { className: 'stat-box' }, React.createElement('span', { className: 'value' }, '12M+'), React.createElement('span', { className: 'label' }, 'Square feet maintained with consistent, hands-on expertise.')),
              React.createElement('div', { className: 'stat-box' }, React.createElement('span', { className: 'value' }, '30 Min'), React.createElement('span', { className: 'label' }, 'Average response time for emergency repair support.')),
              React.createElement('div', { className: 'stat-box' }, React.createElement('span', { className: 'value' }, '100%'), React.createElement('span', { className: 'label' }, 'Satisfaction-focused service and clear communication throughout.'))
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'mini-grid' },
        React.createElement(
          'div',
          { className: 'stat-strip' },
          React.createElement('div', { className: 'item' }, React.createElement('span', { className: 'number' }, '50%'), React.createElement('span', { className: 'subtitle' }, 'Faster response time', React.createElement('br'), 'than standard providers')),
          React.createElement('div', { className: 'item' }, React.createElement('span', { className: 'number' }, '12M+'), React.createElement('span', { className: 'subtitle' }, 'Sq ft maintained', React.createElement('br'), 'across property work')),
          React.createElement('div', { className: 'item' }, React.createElement('span', { className: 'number' }, '30 Min'), React.createElement('span', { className: 'subtitle' }, 'Average emergency', React.createElement('br'), 'dispatch time')),
          React.createElement('div', { className: 'item' }, React.createElement('span', { className: 'number' }, '100%'), React.createElement('span', { className: 'subtitle' }, 'Customer-first service', React.createElement('br'), 'and workmanship assurance'))
        )
      ),
      React.createElement(
        'section',
        { className: 'services section' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement(SectionBadge, { text: 'Our Services', icon: 'wrench' }),
          React.createElement(
            'h2',
            null,
            'Our Expertise: ',
            React.createElement('span', { className: 'highlight-script' }, 'Quality'),
            ' Handyman Solutions'
          ),
          React.createElement('p', null, 'At Quick Replace, we provide comprehensive property maintenance and emergency trade solutions. From minor repairs to emergency make-safe works, our licensed multi-trade specialists are on call 24/7.')
        ),
        React.createElement(
          'div',
          { className: 'services-grid' },
          services.map(function (service) {
            return React.createElement(
              'article',
              { className: 'service-card', key: service.title },
              React.createElement('div', { className: 'service-icon' }, iconMap[service.icon]),
              React.createElement('h3', null, service.title),
              React.createElement('p', null, service.text),
              React.createElement('a', { href: '#', className: 'link' }, React.createElement('span', null, service.link), React.createElement('span', { className: 'link-arrow' }, '→'))
            );
          })
        ),
        React.createElement(
          'div',
          { className: 'services-cta' },
          React.createElement(
            'button',
            { className: 'outline-btn', type: 'button' },
            React.createElement(
              'span',
              { className: 'btn-icon-circle' },
              React.createElement(
                'svg',
                { viewBox: '0 0 24 24', width: '12', height: '12', fill: '#3e6bf3', 'aria-hidden': 'true' },
                React.createElement('polygon', { points: '7 4 19 12 7 20 7 4' })
              )
            ),
            React.createElement('span', null, 'View all services')
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'how-it-works section' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement(SectionBadge, { text: 'How It Works', icon: 'bolt' }),
          React.createElement('h2', null, 'How It Works: Seamless Service in 4 Simple Steps')
        ),
        React.createElement(
          'div',
          { className: 'steps-wrap' },
          React.createElement(
            'div',
            { className: 'step-feature' },
            React.createElement('div', { className: 'step-tag' }, 'Step 01'),
            React.createElement('h3', null, 'Fast Online Booking & 24/7 Intake'),
            React.createElement('p', null, 'Start with a quick online request or phone call, and we’ll collect the job details needed to get the right service moving.')
          ),
          steps.slice(1).map(function (step) {
            return React.createElement(
              'article',
              { className: 'step-card', key: step.title },
              React.createElement('div', { className: 'icon-wrap' }, iconMap[step.icon]),
              React.createElement('span', { className: 'step-no' }, step.tag),
              React.createElement('h4', null, step.title),
              React.createElement('p', null, step.text)
            );
          })
        )
      ),
      React.createElement(
        'section',
        { className: 'about-wrap section' },
        React.createElement(
          'div',
          { className: 'about-copy' },
          React.createElement('h2', null, 'With over 15+ years of experience, our team provides top-quality services'),
          React.createElement('p', null, 'From routine maintenance and repairs to urgent property support, we bring experience, precision, and customer-first care to every task.'),
          React.createElement('p', null, 'We pride ourselves on a smooth process, clear communication, and dependable workmanship that helps homeowners and businesses keep operations running safely.'),
          React.createElement('button', { className: 'primary-btn', type: 'button' }, 'About us')
        ),
        React.createElement(
          'div',
          { className: 'about-image' },
          React.createElement('img', { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80', alt: 'Maintenance worker repairing building systems' })
        )
      ),
      React.createElement(
        'section',
        { className: 'projects section' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement(SectionBadge, { text: 'Our Portfolio', icon: 'hammer' }),
          React.createElement('h2', null, 'Projects We Have Done')
        ),
        React.createElement(
          'div',
          { className: 'projects-tabs', 'aria-label': 'Project filters' },
          React.createElement('button', { className: 'tab active', type: 'button' }, 'All'),
          React.createElement('button', { className: 'tab', type: 'button' }, 'Bathroom'),
          React.createElement('button', { className: 'tab', type: 'button' }, 'Kitchen'),
          React.createElement('button', { className: 'tab', type: 'button' }, 'Plumbing')
        ),
        React.createElement(
          'div',
          { className: 'project-grid' },
          projects.map(function (project) {
            return React.createElement(
              'article',
              { className: 'project-card', key: project.title },
              React.createElement('img', { src: project.image, alt: project.title }),
              React.createElement(
                'div',
                { className: 'meta' },
                React.createElement('strong', null, project.title),
                React.createElement('span', { className: 'project-badge' }, project.badge)
              )
            );
          })
        )
      ),
      React.createElement(
        'section',
        { className: 'testimonials section' },
        React.createElement(
          'div',
          { className: 'section-title' },
          React.createElement(SectionBadge, { text: 'Testimonials', icon: 'check' }),
          React.createElement('h2', null, 'What Our Clients Say')
        ),
        React.createElement(
          'div',
          { className: 'testimonial-grid' },
          testimonials.map(function (item) {
            return React.createElement(
              'article',
              { className: 'testimonial-card', key: item.name },
              React.createElement(
                'div',
                { className: 'person' },
                React.createElement('div', { className: 'avatar', 'aria-hidden': 'true' }),
                React.createElement('div', null, React.createElement('strong', null, item.name), React.createElement('small', null, item.role))
              ),
              React.createElement('p', null, '“', item.quote, '”')
            );
          })
        )
      ),
      React.createElement(
        'section',
        { className: 'service-area section' },
        React.createElement(
          'div',
          { className: 'service-area-inner' },
          React.createElement(
            'div',
            { className: 'map-area', 'aria-label': 'Service area map' },
            React.createElement('div', { className: 'map-bg' }),
            React.createElement('div', { className: 'map-overlay' }),
            React.createElement('span', { className: 'map-pin p1' }),
            React.createElement('span', { className: 'map-pin p2' }),
            React.createElement('span', { className: 'map-pin p3' }),
            React.createElement('span', { className: 'map-pin p4' })
          ),
          React.createElement(
            'div',
            { className: 'map-copy' },
            React.createElement('h2', null, 'Do We Serve Your Area?'),
            React.createElement('p', null, 'We provide maintenance and repair services across a wide service area. If you need a fast, dependable team for plumbing, electrical, glazing, or general property work, get in touch to confirm coverage near you.'),
            React.createElement('div', { className: 'filter-box' }, 'Find out your service area')
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'cta-band section' },
        React.createElement(
          'div',
          { className: 'cta-inner' },
          React.createElement(
            'div',
            { className: 'cta-copy' },
            React.createElement('h2', null, 'Need an Emergency Repair or Make Safe Right Now? Quick Replace Is Ready.'),
            React.createElement('p', null, 'Don’t wait for damage to worsen. Contact our team for immediate emergency support, quick-response repairs, and safe property solutions.')
          ),
          React.createElement(
            'div',
            { className: 'cta-actions' },
            React.createElement('button', { className: 'primary-btn', type: 'button' }, 'Call 0800 000 000'),
            React.createElement('button', { className: 'secondary-btn', type: 'button' }, 'Book a Service')
          )
        )
      )
    ),
    React.createElement(
      'footer',
      null,
      React.createElement(
        'div',
        { className: 'footer-grid' },
        React.createElement(
          'div',
          { className: 'footer-brand footer-col' },
          React.createElement(
            'div',
            { className: 'brand', style: { color: '#10273d' } },
            React.createElement('span', { className: 'brand-mark', 'aria-hidden': 'true' }),
            React.createElement('span', null, 'Quick Replace')
          ),
          React.createElement('p', null, 'Reliable property upkeep, repairs, and replacements with quick response times and quality workmanship.')
        ),
        React.createElement('div', { className: 'footer-col' }, React.createElement('h4', null, 'Company'), React.createElement('ul', null, React.createElement('li', null, React.createElement('a', { href: '#' }, 'About')), React.createElement('li', null, React.createElement('a', { href: '#' }, 'Our Team')), React.createElement('li', null, React.createElement('a', { href: '#' }, 'Projects')), React.createElement('li', null, React.createElement('a', { href: '#' }, 'Contact')))),
        React.createElement('div', { className: 'footer-col' }, React.createElement('h4', null, 'Services'), React.createElement('ul', null, React.createElement('li', null, React.createElement('a', { href: '#' }, 'Plumbing')), React.createElement('li', null, React.createElement('a', { href: '#' }, 'Electrical')), React.createElement('li', null, React.createElement('a', { href: '#' }, 'Locksmith')), React.createElement('li', null, React.createElement('a', { href: '#' }, 'Painting')))),
        React.createElement('div', { className: 'footer-col' }, React.createElement('h4', null, 'Contact'), React.createElement('p', null, 'Phone: +1 (800) 123-4567'), React.createElement('p', null, 'Email: hello@quickreplace.co'), React.createElement('p', null, 'Open: Mon - Sat, 8am - 6pm'))
      ),
      React.createElement('div', { className: 'copyright' }, '© 2026 Quick Replace. All rights reserved.')
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
