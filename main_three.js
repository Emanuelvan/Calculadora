import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
document.getElementById("Carrito3D").appendChild(renderer.domElement);

let carro;
let controls;



loader.load(
    "Modelo/Monster_rc.glb",
    function (gltf) {
        carro = gltf.scene;
        scene.add(carro)
    },
    function(xhr){
        console.log((xhr.loaded/xhr.total *100)+'% loaded');
    },
    function (error) {
        console.error(error);
    }
);

camera.position.z = carro = "carrito"?25:500;

const topLight = new THREE.DirectionalLight(0xffffff, 1)
topLight.position.set(500,500,500)
topLight.castShadow = true;
scene.add(topLight);

const ambietnLight = new THREE.AmbientLight(0x33333, carro = "carrito" ? 5:1);
scene.add(ambietnLight);


function animate() {
	requestAnimationFrame( animate );


	renderer.render( scene, camera );
}

animate();