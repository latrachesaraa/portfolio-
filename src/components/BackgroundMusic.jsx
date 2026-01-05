import React, { useState, useRef, useEffect } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Start as true for auto-play
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = volume;
    audio.loop = false; // Play once, don't loop
    
    // Aggressive auto-play attempt immediately on mount
    const attemptAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        console.log('Music auto-playing');
      } catch (error) {
        console.log('Auto-play blocked by browser, waiting for user interaction');
        setIsPlaying(false);
        
        // Auto-play on first ANY user interaction
        const playOnInteraction = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            console.log('Music started after user interaction');
          } catch (err) {
            console.log('Failed to play audio:', err);
          }
        };
        
        // Listen for multiple interaction types
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('keydown', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
      }
    };
    
    // Small delay to ensure DOM is ready, then auto-play
    setTimeout(attemptAutoPlay, 100);
  }, []);

  // Separate effect for volume changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-tertiary p-3 rounded-lg shadow-lg">
      <audio ref={audioRef} preload="none" autoplay>
        {/* Add your music file here */}
       <source src="/audio/song.mp3" type="audio/mpeg"  /> 
        Your browser does not support the audio element.
      </audio>

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="text-white hover:text-secondary transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6V4zM14 4h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-secondary rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;