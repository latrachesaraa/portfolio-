import { useState, useRef, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
  const ref = useRef();

  // Generate sphere positions manually to avoid NaN issues
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000);
    for (let i = 0; i < 5000; i += 3) {
      // Generate points on a sphere using spherical coordinates
      const radius = Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2; // azimuthal angle
      const phi = Math.acos(2 * Math.random() - 1); // polar angle

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Ensure no NaN values
      if (isNaN(positions[i]) || !isFinite(positions[i])) positions[i] = 0;
      if (isNaN(positions[i + 1]) || !isFinite(positions[i + 1])) positions[i + 1] = 0;
      if (isNaN(positions[i + 2]) || !isFinite(positions[i + 2])) positions[i + 2] = 0;
    }
    return positions;
  }, []);

  useEffect(() => {
    // Additional validation after component mounts
    if (ref.current) {
      try {
        // Force geometry update to ensure no NaN values
        ref.current.geometry.computeBoundingSphere();
      } catch (error) {
        console.warn('Error computing bounding sphere for stars:', error);
      }
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;