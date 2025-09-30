import { useState, useRef, useEffect } from "react";
import "./About.css";
import img1 from "./assets/photo1.png";
import img2 from "./assets/photo2.png";
import img3 from "./assets/photo3.png";
import img4 from "./assets/photo4.png";
import img5 from "./assets/photo5.png";
import img6 from "./assets/photo6.png";
import img7 from "./assets/photo7.png";
import img8 from "./assets/photo8.png";

export default function About() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [index, setIndex] = useState(0);
  const listRef = useRef(null);
  const containerRef = useRef(null);

  const recalc = () => {
    if (!listRef.current || !containerRef.current) return;
    const cards = Array.from(listRef.current.querySelectorAll(".card"));
    if (!cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gapVar = getComputedStyle(document.documentElement).getPropertyValue("--gap");
    const gap = parseInt(gapVar) || 20;
    const centerOffset = containerRef.current.clientWidth / 2 - cardWidth / 2;
    const translateX = -(index * (cardWidth + gap)) + centerOffset;
    listRef.current.style.transform = `translateX(${translateX}px)`;

    cards.forEach((c, i) => {
      c.classList.remove("active", "side");
      if (i === index) c.classList.add("active");
      else if (i === index - 1 || i === index + 1) c.classList.add("side");
      c.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
  };

  useEffect(() => {
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    recalc();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => recalc(), [index]);

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : 0));
  const next = () => setIndex((i) => (i < 4 ? i + 1 : 4));

  return (
    <section className="about-section">
      {/* Mobile heading above slider */}
      <div className="mobile-heading">ABOUT CARPEDIEM</div>

      {/* Slider */}
      <div className="wrap" ref={containerRef}>
        <button className="nav prev" onClick={prev} aria-label="Previous slide">‹</button>
        <div className="slider-window">
          <ul className="cards" ref={listRef}>
            {images.map((src, i) => (
              <li key={i} className="card">
                <img src={src} alt={`slide ${i + 1}`} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
        <button className="nav next" onClick={next} aria-label="Next slide">›</button>
      </div>

      {/* Mobile paragraphs below slider */}
      <div className="about-paragraphs">
        <p>
          Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide. Held annually, it brings together teams from across departments to compete, collaborate and celebrate across music, dance, drama, design and more.
          Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide.Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide.
        </p>
        <p>
          From electrifying proshows to hands‑on workshops, it becomes a living canvas of bold expression and youthful momentum. Whether you fill the stage or fuel the crowd—Carpediem is yours to seize.
          Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide.
        </p>
      </div>

      {/* Desktop content */}
      <div className="about-grid first-row">
        <div className="about-word">ABOUT</div>
        <div className="about-text first-para">
          <p>
            Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide. Held annually, it brings together teams from across departments to compete, collaborate and celebrate across music, dance, drama, design and more.
            Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide.Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide.
          </p>
        </div>
      </div>
      <div className="about-grid second-row">
        <div className="about-word large">CARPEDIEM</div>
        <div className="about-text second-para">
          <p>
            From electrifying proshows to hands‑on workshops, it becomes a living canvas of bold expression and youthful momentum. Whether you fill the stage or fuel the crowd—Carpediem is yours to seize.
            Carpediem is SASTRA University's flagship cultural fest where creativity, rhythm and campus spirit collide.
          </p>
        </div>
      </div>
    </section>
  );
}
