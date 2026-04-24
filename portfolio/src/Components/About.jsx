import { useEffect, useRef } from "react";
import "./About.css";
import { useNavigate } from 'react-router-dom';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import illustration3 from "../assets/images/illustration3.png";
import illustration4 from "../assets/images/illustration4.png";
import illustration1 from "../assets/images/illustration1.png";
import illustration2 from "../assets/images/illustration2.png";

import bg1 from "../assets/images/creative1.jpg";
import bg2 from "../assets/images/creative2.jpg";
import bg3 from "../assets/images/creative3.jpg";
import bg4 from "../assets/images/creative4.jpg";
import bg5 from "../assets/images/creative5.jpg";
import bg6 from "../assets/images/creative6.jpg";
import bg7 from "../assets/images/creative7.jpg";
import bg8 from "../assets/images/creative8.jpg";

gsap.registerPlugin(ScrollTrigger);

const rowOne = [bg1, bg2, bg3, bg4];
const rowTwo = [bg5, bg6, bg7, bg8];

export const About = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);

  useEffect(() => {


    const ctx = gsap.context(() => {
      gsap.to(row1Ref.current, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        row2Ref.current,
        { x: "-50%" },
        { x: "0%", duration: 20, ease: "none", repeat: -1 },
      );

      const r1 = row1Ref.current;
      const r2 = row2Ref.current;
      const pause = () => gsap.globalTimeline.pause();
      const resume = () => gsap.globalTimeline.resume();
      r1.addEventListener("mouseenter", pause);
      r1.addEventListener("mouseleave", resume);
      r2.addEventListener("mouseenter", pause);
      r2.addEventListener("mouseleave", resume);

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, skewX: -5 },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
        },
      );

      gsap.fromTo(
        headingRef.current,
        { y: 100, opacity: 0, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: paraRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        btnRef.current,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",
          delay: 0.4,
          scrollTrigger: { trigger: btnRef.current, start: "top 90%" },
        },
      );

      gsap.fromTo(
        [img1Ref.current, img3Ref.current],
        { x: -100, opacity: 0, rotation: -12 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );
      gsap.fromTo(
        [img2Ref.current, img4Ref.current],
        { x: 100, opacity: 0, rotation: 12 },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );

      gsap.to([img1Ref.current, img2Ref.current], {
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to([img3Ref.current, img4Ref.current], {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
     const navigate = useNavigate();

  return (
    <section className="combined-sec"  ref={sectionRef}>
      <div className="cards-part">
        <p className="cards-eyebrow">Selected Works</p>
        <h2 className="cards-title" ref={titleRef}>
          Creative <span>Designs</span>
        </h2>

        <div className="row-wrapper">
          <div className="marquee-row" ref={row1Ref}>
            {[...rowOne, ...rowOne, ...rowOne].map((img, i) => (
              <div className="m-card" key={`r1-${i}`}>
                <img src={img} alt={`bg-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="row-wrapper">
          <div className="marquee-row" ref={row2Ref}>
            {[...rowTwo, ...rowTwo, ...rowTwo].map((img, i) => (
              <div className="m-card" key={`r2-${i}`}>
                <img src={img} alt={`bg-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-sec ">
        <div className="img">
          <img
            src={illustration3}
            alt="illustration"
            className="img1"
            ref={img1Ref}
          />
          <img
            src={illustration4}
            alt="illustration"
            className="img2"
            ref={img2Ref}
          />
        </div>

        <div className="container" id="about">
          <div className="row">
            <div className="text-container">
              <h1 ref={headingRef}>ABOUT ME</h1>
              <p ref={paraRef}>
                Hi, I'm a passionate Front-End Developer who loves turning ideas
                into beautiful, responsive web experiences. With a strong
                command of HTML, CSS, JavaScript, and React, I build clean and
                interactive interfaces that users actually enjoy. I also work
                with WordPress to create dynamic websites and use Bootstrap to
                craft pixel-perfect, mobile-friendly layouts — fast and
                efficiently. I believe great design and solid code go hand in
                hand. Whether it's a sleek landing page, a custom WordPress
                theme, or a full React application, I bring both creativity and
                precision to every project. I'm always learning, always
                building, and always pushing to make the web a little better —
                one line of code at a time.
              </p>
              
              <button className="btn-gradient" ref={btnRef} onClick={()=>{navigate('/projects')}}> See My Work </button>
            </div>
          </div>
        </div>

        <div className="img-container">
          <img
            src={illustration1}
            alt="illustration"
            className="img3"
            ref={img3Ref}
          />
          <img
            src={illustration2}
            alt="illustration"
            className="img4"
            ref={img4Ref}
          />
        </div>
      </div>
    </section>
  );
};
