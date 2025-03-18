import { useThree } from '@react-three/fiber'
import { CubeTextureLoader, LinearMipmapLinearFilter, LinearFilter, BackSide } from 'three'
import { Mesh, ShaderMaterial } from 'three'
import * as THREE from 'three'

const SpaceSkybox = () => {
  const { scene } = useThree()

  const loader = new CubeTextureLoader()
  // Make sure these paths point to your skybox images in the public folder
  const texture = loader.load([
    '/assets/skybox/galaxy+X.png', // front
    '/assets/skybox/galaxy+Y.png', // back
    '/assets/skybox/galaxy+Z.png', // up
    '/assets/skybox/galaxy-X.png', // down
    '/assets/skybox/galaxy-Y.png', // right
    '/assets/skybox/galaxy-Z.png'  // left
  ])

  // Improve texture quality
  texture.minFilter = LinearMipmapLinearFilter
  texture.magFilter = LinearFilter
  texture.generateMipmaps = true

  // Create a custom shader material that ignores lighting
  const skyboxMaterial = new ShaderMaterial({
    uniforms: {
      envMap: { value: texture }
    },
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
  const skybox = new Mesh(
    new THREE.BoxGeometry(1000, 1000, 1000),
    skyboxMaterial
  )
  
  scene.add(skybox)

  //scene.background = texture
  return null
}

export default SpaceSkybox