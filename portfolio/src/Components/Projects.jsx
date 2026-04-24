import { useRef } from "react";
import "./Project.css";
import { useNavigate } from 'react-router-dom';
import exp1 from "../assets/images/exp1.png";
import exp2 from "../assets/images/exp2.png";
import exp3 from "../assets/images/exp3.png";
import cm1 from "../assets/images/cm1.png";
import cm2 from "../assets/images/cm2.png";
import cm3 from "../assets/images/cm3.png";
import tht1 from "../assets/images/tht1.png";
import tht2 from "../assets/images/tht2.png";
import tht3 from "../assets/images/tht3.png";


const projects = [
  {
    number: "01",
    name: "Chennai Maratha",
    tech: ["Wordpress","Html","Css"],
    img1: cm1,
    img2: cm2,
    img3: cm3,
    live: "https://www.chennaimaratha.com/",
  },
  {
    number: "02",
    name: "79 Degree Experiences",
    tech: ["Wordpress","Html","Css"],
    img1: exp1,
    img2: exp2,
    img3: exp3,
    live: "https://www.79exp.com/",
  },
  {
    number: "03",
    name: "tht global consultancy",
    tech: ["Wordpress","Html","Css"],
    img1: tht1,
    img2: tht2,
    img3: tht3,
    live: "https://www.thtglobalconsulting.com/#",
  },
  {
    number: "04",
    name: "Portfolio Site",
    tech: ["React", "GSAP"],
     img1: tht1,
    img2: tht2,
    img3: tht3,
    live: "#",
  },
  {
    number: "05",
    name: "E-Commerce Store",
    tech: ["WordPress", "WooCommerce"],
     img1: tht1,
    img2: tht2,
    img3: tht3,
    live: "#",
  },
  {
    number: "06",
    name: "Landing Page",
    tech: ["HTML", "CSS", "JS"],
    img1: tht1,
    img2: tht2,
    img3: tht3,
    live: "#",
  },
];

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <div id="projects" className="bg-black py-5 px-3">
      
      {/* Heading */}
      <h2 className="projects-heading text-center mb-1">PROJECTS</h2>
      <p className="text-secondary text-center small text-uppercase mb-5">
        Some of my recent work
      </p>
        <button className="btn mb-5" onClick={()=>{navigate('/')}}>Go back to Home</button>
      {/* Grid */}
      <div className="row g-4 mx-0">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="project-card card bg-black border h-100">

              {/* Main Image */}
              <img
                src={project.img1}
                alt={project.name}
                className="card-img-top-main"
              />

              {/* Small Images */}
              <div className="d-flex gap-2 px-3 pt-3">
                <img
                  src={project.img2}
                  alt={project.name}
                  className="card-img-small w-50"
                />
                <img
                  src={project.img3}
                  alt={project.name}
                  className="card-img-small w-50"
                />
              </div>

              {/* Body */}
              <div className="card-body d-flex flex-column gap-2 p-3">

                {/* Number + Name */}
                <div className="d-flex align-items-baseline gap-2">
                  <span className="card-number">{project.number}</span>
                  <span className="text-white fw-bold text-uppercase small">
                    {project.name}
                  </span>
                </div>

                {/* Tech */}
                <div className="d-flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto pt-2">
                  <a
                    href={project.live || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    Live ↗
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};