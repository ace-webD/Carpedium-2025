import "./Count.css";

export default function Count() {
  return (
    <>
      <section className="about-stats-section">
        <div className="stats-container">
          {/* First row: numbers */}
          <div className="stats-grid first-grid">
            <div className="stat-item">60+</div>
            <div className="stat-item">10K+</div>
            <div className="stat-item">10+</div>
          </div>

          {/* Second row: labels */}
          <div className="stats-grid second-grid">
            <div className="stat-label">Events</div>
            <div className="stat-label">&nbsp;&nbsp;Prizes</div>
            <div className="stat-label">Sponsors</div>
          </div>
        </div>

        {/* Mobile stacked version */}
        <div className="stats-vertical">
          <div className="stat-block">
            <div className="stat-item">60+</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-block">
            <div className="stat-item">10K+</div>
            <div className="stat-label">Prizes</div>
          </div>
          <div className="stat-block">
            <div className="stat-item">10+</div>
            <div className="stat-label">Sponsors</div>
          </div>
        </div>
      </section>
    </>
  );
}
