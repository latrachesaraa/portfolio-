import { useEffect, useState } from 'react';
import './MagicSprinkles.css';

const MagicSprinkles = () => {
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Generate developer-themed code particles
    const generateCodeParticles = () => {
      const particleArray = [];
      const numberOfParticles = 80; // Good amount for full effect
      
      for (let i = 0; i < numberOfParticles; i++) {
        // Calculate circular position
        const angle = (i / numberOfParticles) * 360; // Distribute evenly in circle
        const radius = 50 + Math.random() * 150; // Random radius from center
        
        particleArray.push({
          id: i,
          angle: angle, // Starting angle for circular movement
          radius: radius, // Distance from center
          animationDelay: Math.random() * 0.2, // Random delay (0-0.2s) - instant start
          animationDuration: 0.9 + Math.random() * 0.6, // Random duration (0.9-1.5s) - very fast
          size: 10 + Math.random() * 6, // Smaller particles (10-16px) - professional size
          orbits: Math.floor(2 + Math.random() * 3), // Number of circles to make (2-4)
          color: getProfessionalPurpleColor(),
          codeSymbol: getRandomCodeSymbol(), // Code symbols instead of dots/stars
          glowIntensity: 0.5 + Math.random() * 0.3, // Subtle glow (0.5-0.8) - professional
        });
      }
      
      return particleArray;
    };

    setParticles(generateCodeParticles());

    // Hide particles after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800); // Hide after 1.8 seconds (quick and professional)

    return () => clearTimeout(timer);
  }, []);

  const getProfessionalPurpleColor = () => {
    // Professional purple color palette for developers
    const purpleColors = [
      '#8B5CF6', // Vibrant Purple
      '#7C3AED', // Deep Purple
      '#A78BFA', // Light Purple
      '#6D28D9', // Rich Purple
      '#9333EA', // Medium Purple
      '#C084FC', // Soft Purple
      '#DDD6FE', // Pale Purple
      '#5B21B6', // Dark Purple
      '#E9D5FF', // Very Light Purple
      '#F3E8FF', // Lavender
    ];
    return purpleColors[Math.floor(Math.random() * purpleColors.length)];
  };

  const getRandomCodeSymbol = () => {
    // Developer code symbols
    const codeSymbols = [
      '</>',  // JSX/HTML closing tag
      '{ }',  // Curly braces
      '< >',  // Angle brackets
      '( )',  // Parentheses
      '[ ]',  // Square brackets
      '=>',   // Arrow function
      '&&',   // Logical AND
      '||',   // Logical OR
      '++',   // Increment
      '===',  // Strict equality
      '!==',  // Strict inequality
      '...',  // Spread operator
      '${ }', // Template literal
      '?:',   // Ternary
      ';',    // Semicolon
      '//',   // Comment
      '/* */', // Block comment
      'fn',   // Function
      'const', // Const
      'let',  // Let
    ];
    return codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
  };

  if (!isVisible) return null;

  return (
    <div className="magic-transformation-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="magic-particle code-particle"
          style={{
            '--start-angle': `${particle.angle}deg`,
            '--radius': `${particle.radius}px`,
            '--orbits': particle.orbits,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            fontSize: `${particle.size}px`,
            color: particle.color,
            '--particle-color': particle.color,
            '--glow-intensity': particle.glowIntensity,
          }}
        >
          {particle.codeSymbol}
        </div>
      ))}
    </div>
  );
};

export default MagicSprinkles;
