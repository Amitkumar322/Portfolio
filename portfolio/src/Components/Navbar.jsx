import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate(); // ✅ Fix 1: () lagaya

  const handleNavClick = (id) => {
    const offcanvasEl = document.getElementById("mobileMenu");
    
    if (offcanvasEl && offcanvasEl.classList.contains("show")) {
      offcanvasEl.classList.remove("show");
      document.body.classList.remove("offcanvas-backdrop");
      
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) backdrop.remove();
      
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  // ✅ Go Back to Home handler
  const handleGoHome = () => {
    const offcanvasEl = document.getElementById("mobileMenu");
    
    if (offcanvasEl && offcanvasEl.classList.contains("show")) {
      offcanvasEl.classList.remove("show");
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) backdrop.remove();
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    setTimeout(() => {
      navigate('/'); // ✅ Fix 2: lowercase navigate
    }, 300);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex justify-content-center w-100">
            <ul className="navbar-nav desktop-menu">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Client</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-start mobile-menu"
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <h5 className="menu-title">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav mobile-nav">

            <li className="nav-item">
              <a className="nav-link" href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick("about"); }}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick("skills"); }}>
                Skills
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects"
                onClick={() => handleNavClick(null)}>
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick("testimonial"); }}>
                Client
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#"
                onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }}>
                Contact
              </a>
            </li>

            {/* ✅ Go Back To Home - Fixed */}
            <li className="nav-item">
              <a className="nav-link" href="#"
                onClick={(e) => { e.preventDefault(); handleGoHome('/'); }}>
                Go Back To Home
              </a>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};