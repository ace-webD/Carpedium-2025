import "./About.css";
import photoGrp from "./assets/Photo_grp.svg"; // this replaces the slider

export default function About() {
  return (
    <section className="about-section">
      {/* Mobile heading above image */}
      <div className="mobile-heading">ABOUT CARPEDIEM</div>

      {/* Single photo instead of slider */}
      <div className="wrap" style={{ textAlign: "center" }}>
        <img
          src={photoGrp}
          alt="Carpediem group"
          className="about-photo"
          loading="lazy"
        />
      </div>

      {/* Mobile paragraphs below image */}
      <div className="about-paragraphs">
        <p>
          Carpediem is SASTRA University's flagship cultural fest—a vibrant confluence of creativity, rhythm, and campus spirit. 
          Held annually, it unites teams from across departments to compete, collaborate, and celebrate through music, dance, drama, design, and more.
          In its 25th edition, Carpediem flows with the theme “Pravaah”—a celebration of movement, momentum, and transformation. 
          Like a river carving its path, Pravaah channels the energy of every club and performer into a shared current of expression.

        </p>
        <p>
          From electrifying proshows to immersive workshops, Carpediem becomes a living canvas of bold ideas and youthful momentum. 
          Whether you're lighting up the stage or amplifying the crowd, Carpediem is yours to seize.
          Cultural clubs across campus—from dramatics and design to music and media—fuel this creative surge, each adding their own ripple to the Pravaah.
          It's not just a fest. It's a flow. And you're part of it

        </p>
      </div>

      {/* Desktop content */}
      <div className="about-grid first-row">
        <div className="about-word">ABOUT</div>
        <div className="about-text first-para">
          <p>
          The 25th Edition of Carpe Diem is here, flowing back with boundless energy and spirit! 
          This year, with the theme Pravaah – The Flow of Expressions, we celebrate the rhythm of creativity, the pulse of talent, and the stream of unforgettable moments.
          From fiery beats to graceful moves, Carpe Diem promises to be a vibrant celebration of expression. 
        </p>
        </div>
      </div>

      <div className="about-grid second-row">
        <div className="about-word large">CARPEDIEM</div>
        <div className="about-text second-para">
          <p>
            The highlight, as always, is the Flagship event Mr./Ms. Freshers – the crown of this two-day extravaganza! 
            Mark your calendars for the 4th & 5th of October – SASTRA awaits you for an endless flow of fun and celebration!
          
        </p>
        </div>
      </div>
    </section>
  );
}
