import "./footer.css";

export const Footer = () => {
  const navLinks = ["Home", "About", "Projects", "Contact"];
  const socials = [
    { label: "GH", href: "https://github.com/Amitkumar322" },
    { label: "LI", href: "https://www.linkedin.com/in/amitcoder360/" },
    { label: "IN", href: "https://www.instagram.com/amitxdesigns/" },
  ];

  return (
    <footer className="bg-black pt-5 pb-3 px-3">
      <div className="container">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-4">

          <h2 className="footer-heading m-0">AMIT KUMAR</h2>

          <nav className="d-flex gap-4">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                {link}
              </a>
            ))}
          </nav>

          <div className="d-flex gap-2">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-2">
          <p className="text-secondary small m-0">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-secondary small m-0">
            Designed & Built with Me
          </p>
        </div>

      </div>
    </footer>
  );
};