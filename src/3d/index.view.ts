import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
// import { GUI } from 'dat.gui'

export interface IView {
  app: HTMLCanvasElement
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  geometry: THREE.BoxGeometry
  material: THREE.MeshBasicMaterial
  stats: Stats
  render: () => void
  animate: () => void
  onWindowResize: () => void
}

export class View implements IView {
  app: HTMLCanvasElement
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  geometry: THREE.BoxGeometry
  material: THREE.MeshBasicMaterial
  cube: THREE.Mesh
  stats: Stats
  observer: ResizeObserver

  constructor() {
    this.app = document.querySelector('#root') as HTMLCanvasElement
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 2
    this.renderer = new THREE.WebGLRenderer({ canvas: this.app })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    new OrbitControls(this.camera, this.renderer.domElement)

    window.addEventListener('resize', this.onWindowResize, true)

    this.geometry = new THREE.BoxGeometry()
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    })

    this.cube = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.cube)

    this.stats = Stats()
    document.body.appendChild(this.stats.dom)

    this.animate()
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.render()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))

    //this.stats.begin()
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    //this.stats.end()

    this.render()

    this.stats.update()
  }
}
