import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const loader = new GLTFLoader();
let camera;
const scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.set(-1.3, 1, -2);
const renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
document.getElementById("Carrito_3D").appendChild(renderer.domElement);

let carro;
let controls;

loader.load(
  "Modelo/Monster_rc.glb",
  function (gltf) {
    carro = gltf.scene;
    scene.add(carro);
    carro.position.set(0, 0, -1);
    /*     carro.rotation.y = 3;
    carro.rotation.x = Math.PI / 4; */
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);
controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = false;
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambietnLight = new THREE.AmbientLight(0xffffff);
scene.add(ambietnLight);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
