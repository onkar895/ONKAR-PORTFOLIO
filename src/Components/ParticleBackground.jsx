import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none animate-pulse">
      {Array.from({ length: 80 }).map((_, i) => {
        const type = i % 2 === 0 ? 'particle2' : 'particle';
        const color = i % 2 === 0 ? 'pink' : 'white';
        const duration = 4 + Math.random() * 10;
        return (
          <div
            key={i}
            className={type}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--color': color,
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
