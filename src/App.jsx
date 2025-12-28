import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import BackgroundMusic from "./components/BackgroundMusic";
import ScrollToTop from "./components/ScrollToTop";
import { LoadingScreen } from "./components/Loader";

import { About, Contact, Experience, Feedbacks, Intro, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Suppress specific Three.js warnings that are not critical
  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      // Suppress Three.js BufferGeometry NaN warnings as we handle them
      if (args[0] && typeof args[0] === 'string' &&
          args[0].includes('THREE.BufferGeometry.computeBoundingSphere()') &&
          args[0].includes('NaN')) {
        return; // Suppress this specific warning
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.warn = originalWarn; // Restore original console.warn
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Intro />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <BackgroundMusic />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;