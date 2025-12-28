import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { CanvasLoader } from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Validate the loaded model and fix any geometry issues
  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          try {
            // Check for NaN values in geometry attributes
            const positions = child.geometry.attributes.position;
            if (positions) {
              const array = positions.array;
              let hasNaN = false;
              for (let i = 0; i < array.length; i++) {
                if (isNaN(array[i]) || !isFinite(array[i])) {
                  array[i] = 0;
                  hasNaN = true;
                }
              }
              if (hasNaN) {
                positions.needsUpdate = true;
                // Recompute bounding sphere after fixing NaN values
                child.geometry.computeBoundingSphere();
                console.warn('Fixed NaN values in earth model geometry');
              }
            }
          } catch (error) {
            console.error('Error validating earth geometry:', error);
            // Disable the mesh if geometry is corrupted
            child.visible = false;
          }
        }
      });
    }
  }, [earth.scene]);

  return (
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <hemisphereLight intensity={4.5} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;