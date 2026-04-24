import { useState } from "react";
import "./Testimonial.css";
import arrowLeft from "../assets/images/leftarrow.png";
import arrowRight from "../assets/images/rightarrow.png";
import deg from "../assets/images/79deg.png";
import cm from "../assets/images/cmlogo.png";

const testimonials = [

  {
    name: "Chennai Maratha",
    role: "Chandigarh Client",
    avatar: cm,
    text: "Excellent work! The website perfectly reflects our brand and food journey. The design is modern, user-friendly, and helps us connect better with our customers. Highly professional service.",
  },
  {
    name: "THT GLOBAL CONSULTING",
    role: "Chandigarh Client",
    avatar: null,
    text: "Great experience working with the team. The website looks professional, clean, and clearly presents our immigration services. Smooth process, timely delivery, and excellent support throughout.",
  },
    {
    name: "Ishan Bishnoi",
    role: "Founder - (79 deggree experience)",
    avatar: deg,
    text: "Excellent work! The website perfectly captures our premium adventure travel brand and the spirit of high-altitude motorcycle expeditions. The design is modern, visually strong, and offers a smooth user experience for our riders. Professional service, timely delivery, and great attention to detail throughout the project.",
  },
];

export const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const change = (dir) =>
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="bg-black min-vh-100 d-flex flex-column align-items-center justify-content-center py-5 px-3" id="testimonial">

      <h1 className="testi-heading m-0">CLIENT</h1>
      <p className="text-secondary fw-semibold small text-uppercase mt-2 mb-5">
        Client will very happy with my work
      </p>

      <div className="testi-card p-4 w-100" style={{ maxWidth: "700px" }}>

        <div className="d-flex align-items-center gap-3 mb-4">
          {t.avatar
            ? <img src={t.avatar} alt={t.name} className="testi-avatar object-fit-cover" />
            : <div className="testi-avatar" />
          }
          <div>
            <div className="testi-name text-white mb-1">{t.name}</div>
            <div className="testi-role text-secondary text-uppercase">{t.role}</div>
          </div>
        </div>

        <p className="text-secondary lh-lg mb-4">{t.text}</p>

        <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">

          <button className="arrow-btn" onClick={() => change(-1)}>
            <img src={arrowLeft} alt="prev" width={44} height={44} />
          </button>

          <div className="d-flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <button className="arrow-btn" onClick={() => change(1)}>
            <img src={arrowRight} alt="next" width={44} height={44} />
          </button>

        </div>
      </div>
    </section>
  );
};