import About from './About';
import Count from './Count';
import './About_App.css';


export default function App() {
  return (
    <div className="app-shell">
      <section className="about-wrapper">
        <About />
      </section>

      
      <div className="wave-transition" aria-hidden="true">
        <img
          src="/Frame.svg"
        />
      </div>

      
        <Count />
        
    </div>
  );
}
