import "./Access.css";
import { useState } from "react";
export const Access = () => {

  return (
    <section className="quick-section">
      <h2 className="quick-heading">Quick Access</h2>
      <p>Quick Access to My Skills, Projects, and Creative Work.</p>

      <div className="quick-cards pt-5">

        <div className="quick-card">
          <h3>Projects</h3>
          <p>View my latest work & portfolio projects</p>
          <a href="/projects">
            <button>View Projects</button>
          </a>
        </div>

        <div className="quick-card">
          <h3>LinkedIn</h3>
          <p>Connect with me professionally</p>
          <a href="https://www.linkedin.com/in/amitcoder360/" target="_blank" rel="noreferrer">
            <button>Open LinkedIn</button>
          </a>
        </div>

        <div className="quick-card">
          <h3>GitHub</h3>
          <p>Check my code repositories</p>
          <a href="https://github.com/Amitkumar322" target="_blank" rel="noreferrer">
            <button>Open GitHub</button>
          </a>
        </div>

        <div className="quick-card">
          <h3>Resume</h3>
          <p>Download my latest resume</p>
          <a href="/reactjs-resume.pdf" download="Amit_Resume.pdf">
            <button>Download Resume</button>
          </a>
        </div>

        <div className="quick-card">
          <h3>Instagram</h3>
          <p>Connect with me on Instagram with fresh designs</p>
          <a href="https://www.instagram.com/amitxdesigns/" download="Amit_Resume.pdf">
            <button>Open Instagram</button>
          </a>
        </div>

        <div className="quick-card" style={{filter:'blur(4px)'}}>
          <h3>Coming</h3>
          <p>Connect with me on Behance</p>
          <a href="#">
            <button>Open Behance</button>
          </a>
        </div>

        <div className="quick-card" style={{filter:'blur(4px)'}}>
          <h3>Coming</h3>
          <p>Connect with me on Behance</p>
          <a href="#">
            <button>Open Behance</button>
          </a>
        </div>

        <div className="quick-card" style={{filter:'blur(4px)'}}>
          <h3>Coming</h3>
          <p>Connect with me on Behance</p>
          <a href="#">
            <button>Open Behance</button>
          </a>
        </div>

      </div>
    

    </section>
  );
};