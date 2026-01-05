import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);

  // Generate code particles for loading
  useEffect(() => {
    const particleArray = [];
    const numberOfParticles = 40; // Fewer particles for loading screen
    
    for (let i = 0; i < numberOfParticles; i++) {
      const angle = (i / numberOfParticles) * 360;
      const radius = 80 + Math.random() * 100;
      
      particleArray.push({
        id: i,
        angle: angle,
        radius: radius,
        delay: Math.random() * 0.5,
        duration: 1.5 + Math.random() * 1,
        size: 12 + Math.random() * 8,
        orbits: 2 + Math.random() * 2,
        color: getPurpleColor(),
        symbol: getCodeSymbol(),
      });
    }
    
    setParticles(particleArray);
  }, []);

  // Progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [onComplete]);

  const getPurpleColor = () => {
    const colors = ['#8B5CF6', '#A78BFA', '#C084FC', '#DDD6FE', '#7C3AED'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getCodeSymbol = () => {
    const symbols = ['</>', '{ }', '< >', '( )', '[ ]', '=>', '&&', '||', '===', '...', 'fn', 'const'];
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  return (
    <div className="fixed inset-0 z-50 bg-primary flex items-center justify-center overflow-hidden">
      {/* Code Particles Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute"
            style={{
              fontSize: `${particle.size}px`,
              color: particle.color,
              fontFamily: 'Monaco, Consolas, Courier New, monospace',
              fontWeight: 600,
              animation: `loading-orbit ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              textShadow: `0 0 8px ${particle.color}, 0 0 16px ${particle.color}`,
              '--angle': `${particle.angle}deg`,
              '--radius': `${particle.radius}px`,
              '--orbits': particle.orbits,
            }}
          >
            {particle.symbol}
          </div>
        ))}
      </div>

      {/* Loading Text and Progress */}
      <div className="relative z-10 text-center">
        <h2 className="text-white text-3xl font-bold mb-4 animate-pulse">
          Loading Portfolio
        </h2>
        <div className="w-64 h-2 bg-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-secondary mt-3 text-lg font-semibold">{progress}%</p>
      </div>

      {/* Add the animation keyframes */}
      <style>{`
        @keyframes loading-orbit {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--radius)) scale(1);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(calc(var(--angle) + 360deg * var(--orbits))) translateX(var(--radius)) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(calc(var(--angle) + 360deg * var(--orbits) + 180deg)) translateX(calc(var(--radius) * 1.2)) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

export { CanvasLoader, LoadingScreen };