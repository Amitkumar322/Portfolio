import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import bootstrap from "../assets/images/bootstrap.png";
import react from "../assets/images/react.png";
import wordpres from "../assets/images/wordpres.png";
import illustration10 from "../assets/images/illustration10.png";
import { useEffect, useRef } from "react";
import './Skills.css'

const skills = [
  { name: "HTML",       img: html      },
  { name: "CSS",        img: css       },
  { name: "JavaScript", img: js        },
  { name: "Bootstrap",  img: bootstrap },
  { name: "React",      img: react     },
  { name: "WordPress",  img: wordpres  },
];

export const Skills = () => {
  const row1ref = useRef(null);
  const row2ref = useRef(null);

  useEffect(() => {
  }, []);

  return (
    <> 
    <div className="container my-5" id="skills">
      <h3 className="text-center text">SKILLS</h3>
      <p className="text-center mb-5">
        Creative Skills That Build Modern Digital Experiences.

      </p>

      <div className="row border border-secondary m-2 ">
        {skills.map((skill) => (  
          <div key={skill.name} className="col-lg-4 col-md-4 col-sm-6  border  pt-5 pb-5 text-center d-flex justify-content-center align-items-center flex-column p-4"> 
            <img src={skill.img} alt={skill.name} width={100} height={100} /> 
            <p className="text-white small text-uppercase fw-regular ls-wide mt-5">
              {skill.name} 
            </p>
          </div>
        ))}
      </div>
    </div>
    <img src={illustration10} className="illust-10" alt="error" />
    </>
  );
};