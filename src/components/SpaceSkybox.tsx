import { useThree, useFrame } from '@react-three/fiber'
import { CubeTextureLoader, LinearMipmapLinearFilter, LinearFilter, BackSide } from 'three'
import { Mesh, ShaderMaterial } from 'three'
import * as THREE from 'three'
import { useMemo, useEffect, useRef, useState } from 'react'

const SpaceSkybox = () => {
  const { scene } = useThree()
  const skyboxRef = useRef<THREE.Object3D | null>(null)
  const [texturesLoaded, setTexturesLoaded] = useState(false)

  const loader = new CubeTextureLoader()
  const texture = useMemo(() => {
    const tex = loader.load([
      '/assets/skybox/galaxy+X.png',
      '/assets/skybox/galaxy+Y.png', 
      '/assets/skybox/galaxy+Z.png',
      '/assets/skybox/galaxy-X.png',
      '/assets/skybox/galaxy-Y.png',
      '/assets/skybox/galaxy-Z.png'
  ], () => setTexturesLoaded(true))

  // Improve texture quality
  tex.minFilter = LinearMipmapLinearFilter
  tex.magFilter = LinearFilter
  tex.generateMipmaps = true
  return tex
  }, [])
  
  // Create a custom shader material that ignores lighting
  const { skyboxMaterial, skybox } = useMemo(() => {
    const material = new ShaderMaterial({
    uniforms: { envMap: { value: texture }},
    vertexShader: `
      varying vec3 vWorldDirection;
      void main() {
        vWorldDirection = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform samplerCube envMap;
      varying vec3 vWorldDirection;
      void main() {
        vec3 color = textureCube(envMap, vWorldDirection).rgb;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    side: BackSide,
    depthWrite: false
  })

  // Create a large cube with the skybox material
  const skyboxMesh = new Mesh(
    new THREE.BoxGeometry(1000, 1000, 1000),
    material
  )
  
  return { skyboxMaterial: material, skybox: skyboxMesh } }, [])

  useFrame((state, delta) => {
    if (skyboxRef.current) {
      skyboxRef.current.rotation.y += delta * 0.05;
      skyboxRef.current.rotation.x += delta * 0.01;
    }
  })

  useEffect(() => {
    // Add the skybox to the scene
    skyboxRef.current = skybox as Mesh
    scene.add(skybox)
    return () => {
      scene.remove(skybox)
      skyboxMaterial.dispose()
      skybox.geometry.dispose()
    }
  }, [scene, skybox, skyboxMaterial])

  return null
};

export default SpaceSkybox