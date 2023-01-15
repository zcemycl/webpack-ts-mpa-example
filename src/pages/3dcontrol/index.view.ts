import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

export interface IView {
  app: HTMLCanvasElement
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  geometry: THREE.BoxGeometry
  material: THREE.MeshBasicMaterial
  stats: Stats
  cube: THREE.Mesh
  object2: THREE.Mesh
  debug: HTMLDivElement
  controls: OrbitControls
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
  object2: THREE.Mesh
  debug: HTMLDivElement
  controls: OrbitControls
  stats: Stats
  observer: ResizeObserver

  constructor() {
    this.app = document.querySelector('#root') as HTMLCanvasElement
    this.debug = document.querySelector('#debug') as HTMLDivElement
    this.scene = new THREE.Scene()
    const globalaxes = new THREE.AxesHelper(1)
    globalaxes.position.set(-1, 0, 0)
    this.scene.add(globalaxes)
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 10
    this.renderer = new THREE.WebGLRenderer({ canvas: this.app })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.target.set(0, 0, 0)

    const light1 = new THREE.PointLight()
    light1.position.set(10, 10, 10)
    this.scene.add(light1)

    const light2 = new THREE.PointLight()
    light2.position.set(-10, 10, 10)
    this.scene.add(light2)

    window.addEventListener('resize', this.onWindowResize, true)

    this.geometry = new THREE.BoxGeometry()
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    })

    this.cube = new THREE.Mesh(this.geometry, this.material)
    this.cube.add(new THREE.AxesHelper(1))
    this.scene.add(this.cube)

    this.stats = Stats()
    document.body.appendChild(this.stats.dom)

    this.object2 = new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshPhongMaterial({ color: 0x00ff00 }))
    this.object2.position.set(2, 0, 0)
    this.cube.add(this.object2)
    this.object2.add(new THREE.AxesHelper(4))

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
    this.controls.update()
    //this.stats.begin()
    // this.cube.rotation.x += 0.01
    // this.cube.rotation.y += 0.01
    //this.stats.end()

    this.render()

    const cubePos = new THREE.Vector3()
    const obj2Pos = new THREE.Vector3()
    this.cube.getWorldPosition(cubePos)
    this.object2.getWorldPosition(obj2Pos)
    this.debug.innerText = `Cube\n local (${this.cube.position.toArray()})
      global (${cubePos.toArray()})
      Green sphere\nlocal (${this.object2.position.toArray()})
      global (${obj2Pos.toArray()})`

    this.stats.update()
  }
}
