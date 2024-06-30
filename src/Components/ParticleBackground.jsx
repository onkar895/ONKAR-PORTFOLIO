import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 160 }).map((_, i) => {
        const type = i % 3 === 0 ? 'particle1' : i % 5 === 0 ? 'particle2' : 'particle';
        const color = i % 3 === 0 ? 'cyan' : i % 5 === 0 ? 'pink' : 'white';
        const duration = 3 + Math.random() * 10;
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
