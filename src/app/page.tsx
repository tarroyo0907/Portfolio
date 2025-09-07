'use client'
import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, CameraControls, Html, Stats } from '@react-three/drei'
import { marsConfig, moonConfig, earthConfig } from '../configs/planets'
import Planet from '@/models/Planet'
import { Loader, SpaceSkybox, Navbar, Footer, Sidebar } from '@/components'
        
export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState<'mars' | 'moon' | 'earth' | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<'mars' | 'moon' | 'earth' | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<{
    title: string;
    description: string;
    extraInfo?: string;
    customContent?: React.ReactNode;
  } | null>(null);
  const [leftSidebarVisible, setLeftSidebarVisible] = useState(false);
  const [rightSidebarVisible, setRightSidebarVisible] = useState(false);
  const [focusedAnnotationIndex, setFocusedAnnotationIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    // This code will only run on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  const handleAnnotationNavigate = (annotationIndex: number) => {
    setFocusedAnnotationIndex(annotationIndex);
    // Also set the sidebar content to show the annotation details
    const currentConfig = selectedPlanet === 'mars' ? marsConfig : 
                         selectedPlanet === 'moon' ? moonConfig : earthConfig;
    const annotation = currentConfig.annotations[annotationIndex];
    if (annotation) {
      setSidebarContent(annotation);
    }
  };

  const getCurrentPlanetConfig = () => {
    switch(selectedPlanet) {
      case 'mars': return marsConfig;
      case 'moon': return moonConfig;
      case 'earth': return earthConfig;
      default: return null;
    }
  }

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

    // Automatically focus on the first annotation
    setFocusedAnnotationIndex(0);

    // Set sidebar content to the first annotation
    const currentConfig = planet === 'mars' ? marsConfig : 
                       planet === 'moon' ? moonConfig : earthConfig;
  
    if (currentConfig.annotations && currentConfig.annotations.length > 0) {
      setSidebarContent(currentConfig.annotations[0]);
    }

    document.querySelector("#footerText")!.innerHTML = "Explore all the features on the planet!";
  };

  const adjustMarsForScreenSize = (): [number[], [number, number, number], [number, number, number]] => {
    let screenScale = null;
    let screenPosition: [number, number, number] = [0, -6.5, -43];
    let rotation: [number, number, number] = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [180, -6.5, -43];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [180, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustMoonForScreenSize = (): [number[], [number, number, number], [number, number, number]] => {
    let screenScale = null;
    let screenPosition: [number, number, number] = [0, -6.5, -43];
    let rotation: [number, number, number] = [0, 0, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustEarthForScreenSize = (): [number[], [number, number, number], [number, number, number]] => {
    let screenScale = null;
    let screenPosition: [number, number, number] = [0, -6.5, -43];
    let rotation: [number, number, number] = [0, 0, 0];

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
  const [earthScale, earthPosition, earthRotation]:  [number[], [number, number, number], [number, number, number]]= adjustEarthForScreenSize();

  return (
    <>
    <Navbar />
    <section className='w-full h-screen relative'>
      {/* Right Sidebar - Planet Information */}
        <Sidebar
          isVisible={!!selectedPlanet}
          side="right"
          title={selectedPlanet === 'mars' ? 'Experience' : selectedPlanet === 'moon' ? 'Projects' : 'About Me'}
        >
          {sidebarContent ? (
    <>
      {/* Render custom content if available, otherwise fallback to description */}
      {sidebarContent.customContent? (
        <div className="mb-6">
          {sidebarContent.customContent}
        </div>
      ) : (
        <>
          <p className="mb-6">{sidebarContent.description}</p>
          <p className="text-sm leading-relaxed text-white/80">
            {sidebarContent.extraInfo}
          </p>
        </>
      )}
    </>
          ) : (
            <p className="text-sm leading-relaxed text-white/80">
              Click on any feature to learn more!
            </p>
          )}
        </Sidebar>

        {/* Left Sidebar - Controls/Navigation */}
        <Sidebar
          isVisible={!!selectedPlanet}
          side="left"
          title="Navigation"
        >
          <div className="space-y-4">
            <button 
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setSelectedPlanet('mars')}
            >
              View Experience
            </button>
            <button 
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setSelectedPlanet('moon')}
            >
              View Projects
            </button>
            <button 
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setSelectedPlanet('earth')}
            >
              View About Me
            </button>
          </div>

        {/* Annotation Navigation Buttons */}
        {selectedPlanet && (
          <div className="space-y-4 mt-6">
            <h4 className="text-white font-semibold mb-3">Explore Features:</h4>
            {getCurrentPlanetConfig()?.annotations.map((annotation, index) => (
              <button
                key={index}
                className={`w-full px-4 py-2 rounded-lg transition-colors text-left ${
                  focusedAnnotationIndex === index 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gray-600 hover:bg-gray-700'
                }`}
                onClick={() => handleAnnotationNavigate(index)}
              >
                <div className="text-white font-medium">{annotation.title}</div>
                <div className="text-white/70 text-sm">{annotation.description}</div>
              </button>
            ))}
          </div>
        )}
        </Sidebar>
        <Canvas 
          className="w-full h-screen bg-transparent"
          camera={{
            near: 0.1,
            far: 2000,
            fov: 75,
            position: [0, 0, 200]
            }}
          gl={{ 
            antialias: false,  // Try disabling antialiasing first
            pixelRatio: Math.min(window.devicePixelRatio, 2),  // Cap pixel ratio
            powerPreference: "high-performance"  // Use discrete GPU if available
          }}
          style={{ background: 'transparent'}}
        >

          <Suspense fallback={<Loader />}>
            <SpaceSkybox />
            {/* Lights */}
            <directionalLight position={[1, 1, 1]} intensity={3}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight groundColor="#000000" intensity={0.5} />

            {/* Camera Controls */}
            <CameraControls
              enabled={false}
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
                  autoRotate={!selectedPlanet}
                  focusedAnnotationIndex={selectedPlanet === 'mars' ? focusedAnnotationIndex : undefined}
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
                  autoRotate={!selectedPlanet}
                  focusedAnnotationIndex={selectedPlanet === 'moon' ? focusedAnnotationIndex : undefined}
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
                  autoRotate={!selectedPlanet}
                  focusedAnnotationIndex={selectedPlanet === 'earth' ? focusedAnnotationIndex : undefined}
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
                        document.querySelector("#footerText")!.innerHTML = "Click on a planet to learn more information about a specific subject!";
                      }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm"
                  >
                    Back to Planets
                  </button>
                </Html>
              )}
            </group>
          </Suspense>
        </Canvas>
    </section>
    <Footer />
    </>
  )
}