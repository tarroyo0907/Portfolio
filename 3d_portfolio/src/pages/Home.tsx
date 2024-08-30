'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '@/components/Loader'
import Mars from '@/models/Mars'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            POPUP
        </div> */}
        
const Home = () => {
  const adjustIslandForScreenSize = () => {
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

  const [marsScale, marsPosition, marsRotation] = adjustIslandForScreenSize();


  return (
    <section className='w-full h-screen relative'>
        <Canvas 
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={3}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />
          <Mars
          position = {marsPosition}
          scale = {marsScale}
          rotation = {marsRotation}
          />
          </Suspense>
        </Canvas>
    </section>
  )
}

export default Home