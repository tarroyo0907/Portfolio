'use client'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, CameraControls, Html } from '@react-three/drei'
import Loader from '@/components/Loader'
import Mars from '@/models/Mars'
import Moon from '@/models/Moon'
import SpaceSkybox from '@/components/SpaceSkybox'
import { marsConfig, moonConfig, earthConfig } from '../configs/planets'
import Planet from '@/models/Planet'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP
        </div> */}
        
const Home = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<'mars' | 'moon' | 'earth' | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<'mars' | 'moon' | 'earth' | null>(null);
  const [sidebarContent, setSidebarContent] = useState<{
    title: string;
    description: string;
    extraInfo?: string;
  } | null>(null);


  // Camera animation values
  const cameraPositions = {
    default: [0, 0, 100],
    mars: [40, 0, 0],
    moon: [-40, 0, 0],
    earth: [-80, 0, 0]
  };

  const handlePlanetClick = (planet: 'mars' | 'moon' | 'earth') => {
    setSelectedPlanet(planet);
    setSidebarContent(null);
  };

  const adjustMarsForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [180, -6.5, -43];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [180, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustMoonForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustEarthForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [-180, -6.5, -43];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [-180, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [marsScale, marsPosition, marsRotation] = adjustMarsForScreenSize();
  const [moonScale, moonPosition, moonRotation] = adjustMoonForScreenSize();
  const [earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* Side Panel - Add conditional rendering */}
      {selectedPlanet && (
        <div className="fixed right-0 top-0 h-full w-96 bg-black/75 text-white p-8 transform transition-all duration-300 ease-in-out z-10">
          <div className="mt-8">
            {sidebarContent ? (
              <>
                <h2 className="text-2xl font-bold mb-4">{sidebarContent.title}</h2>
                <p className="mb-6">{sidebarContent.description}</p>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm leading-relaxed text-white/80">
                    {sidebarContent.extraInfo}
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedPlanet === 'mars' ? 'Mars Information' : 'Moon Information'}
                </h2>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm leading-relaxed text-white/80">
                    Click on any annotation point to learn more about {selectedPlanet === 'mars' ? 'Mars' : 'Moon'} features.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
        <Canvas 
          className="w-full h-screen bg-transparent"
          camera={{
            near: 0.1,
            far: 2000,
            fov: 75,
            position: [0, 0, 200]  // Move camera back along z-axis
            }}
          gl={{ 
            antialias: true,  // Add antialiasing
            pixelRatio: window.devicePixelRatio  // Match device pixel ratio
          }}
          style={{ background: 'transparent'}}
        >

          <Suspense fallback={<Loader />}>
          <SpaceSkybox />
          {/* Lights */}
          <directionalLight position={[1, 1, 1]} intensity={3}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />

          {/* Camera Controls */}
          <CameraControls
            enabled={!selectedPlanet}
            minDistance={50}
            maxDistance={150}
          />

          {/* Planets */}
          <group>
            {/* Only render Mars if it's selected or no planet is selected */}
            {(!selectedPlanet || selectedPlanet === 'mars') && (
              <Planet
                config={marsConfig}
                position={marsPosition}
                rotation={marsRotation}
                onClick={() => handlePlanetClick('mars')}
                onAnnotationClick={selectedPlanet === 'mars' ? setSidebarContent : undefined}
                enableControls={selectedPlanet === 'mars'}
                isHovered={hoveredPlanet === 'mars'}
                onHoverStart={() => setHoveredPlanet('mars')}
                onHoverEnd={() => setHoveredPlanet(null)}
              />
            )}
            
            {/* Only render Moon if it's selected or no planet is selected */}
            {(!selectedPlanet || selectedPlanet === 'moon') && (
              <Planet
                config={moonConfig}
                position={moonPosition}
                rotation={moonRotation}
                onClick={() => handlePlanetClick('moon')}
                onAnnotationClick={selectedPlanet === 'moon' ? setSidebarContent : undefined}
                enableControls={selectedPlanet === 'moon'}
                isHovered={hoveredPlanet === 'moon'}
                onHoverStart={() => setHoveredPlanet('moon')}
                onHoverEnd={() => setHoveredPlanet(null)}
              />
            )}
            
            {/* Only render Earth if it's selected or no planet is selected */}
            {(!selectedPlanet || selectedPlanet === 'earth') && (
              <Planet
                config={earthConfig}
                position={earthPosition}
                rotation={earthRotation}
                onClick={() => handlePlanetClick('earth')}
                onAnnotationClick={selectedPlanet === 'earth' ? setSidebarContent : undefined}
                enableControls={selectedPlanet === 'earth'}
                isHovered={hoveredPlanet === 'earth'}
                onHoverStart={() => setHoveredPlanet('earth')}
                onHoverEnd={() => setHoveredPlanet(null)}
              />
            )}

            {/* Back Button */}
            {selectedPlanet && (
              <Html center position={[0, 80, 0]}>
                <button
                  onClick={() => 
                    {
                      setSelectedPlanet(null)
                      setHoveredPlanet(null)
                    }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm"
                >
                  Back to Overview
                </button>
              </Html>
            )}
          </group>
          
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Home