const iconSvgs = {
  code: (
    <svg viewBox="0 0 100 100">
      <path d="M30 35 L15 50 L30 65" stroke="#1a1a1a" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M70 35 L85 50 L70 65" stroke="#1a1a1a" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M60 25 L40 75" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  circle: (
    <svg viewBox="0 0 100 100">
      <path d="M50 15 C30 15 15 30 15 50 C15 70 30 85 50 85 C70 85 85 70 85 50 Z"></path>
      <circle cx="35" cy="40" r="8" fill="white"></circle>
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 100 100">
      <path d="M20 20 L80 20 L50 80 Z"></path>
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 100 100">
      <path d="M10 50 Q30 10 50 50 T90 50" stroke="#1a1a1a" strokeWidth="12" fill="none"></path>
    </svg>
  ),
  shapes: (
    <svg viewBox="0 0 100 100">
      <rect x="25" y="25" width="30" height="30"></rect>
      <circle cx="65" cy="65" r="15"></circle>
    </svg>
  ),
};

const colorClasses = {
  coral: 'bg-coral',
  mustard: 'bg-mustard',
  purple: 'bg-purple',
  mint: 'bg-mint',
};

export default function CardStack({ theme, color, icon, category, title, stats, image }) {
  return (
    <div className={`card-stack theme-${theme}`}>
      <div className="card-main">
        <div className="card-header">
          {image ? (
            <div className="card-image-container">
              <img src={image} alt={title} className="card-image" />
              <div className={`icon-circle overlay ${colorClasses[color]}`}>
                {iconSvgs[icon]}
              </div>
            </div>
          ) : (
            <div className={`icon-circle ${colorClasses[color]}`}>
              {iconSvgs[icon]}
            </div>
          )}
        </div>
        <div className="card-content">
          <span className="meta-label">{category}</span>
          <h2>{title}</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-row">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
