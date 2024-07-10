import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none animate-pulse">
      {Array.from({ length: 80 }).map((_, i) => {
        const duration = 4 + Math.random() * 10;
        return (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--color': 'white',
              '--duration': `${duration}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ParticleBackground;
