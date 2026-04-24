import { useEffect, useState } from "react";
import { About } from "../Components/About";
import { Access } from "../Components/Access";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { Hero } from "../Components/Hero";
import { Skills } from "../Components/Skills";
import { Testimonial } from "../Components/Testimonial";

export const Home = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Access />
      <Testimonial />
      <Contact />
      <Footer />

      {/* LEFT - Scroll Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary position-fixed bottom-0 start-0 m-4 rounded-circle shadow"
        >
          TOP
        </button>
      )}

      {/* RIGHT - Let's Talk */}
      <a
          href="https://wa.me/+918284863194"
            target="_blank"
            rel="noreferrer"
        className="btn btn-primary position-fixed bottom-0 end-0 m-4 rounded-pill shadow"
      >
        Let's Talk 💬</a>
    </>
  );
};