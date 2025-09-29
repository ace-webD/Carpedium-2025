import './About.css';
import img1 from './assets/photo1.png';
import img2 from './assets/photo2.png';
import img3 from './assets/photo3.png';

export default function About(){
  return (
    <section className="about-section">
      {/* Stacked image deck */}
      <div className="image-deck">
        <div className="deck deck-left rotate-a"><img src={img1} alt="group" /></div>
        <div className="deck deck-center"><img src={img2} alt="performance" /></div>
        <div className="deck deck-right rotate-b"><img src={img3} alt="artist" /></div>
      </div>

      {/* Two-row layout like reference */}
      <div className="about-grid">
        <div className="about-word">ABOUT</div>
        <div className="about-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        </div>
        <div className="about-word large">CARPEDIEM</div>
        
      </div>
    </section>
  );
}
