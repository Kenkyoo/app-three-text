import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function init(text, size, depth, color, suavidad) {
  
let geometry;
const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); 
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);

const loader = new FontLoader();

loader.load('Ainsley Latinesed_Bold.json', function (font) {

    geometry = new TextGeometry(text, {
        font: font,
        size: size,
        depth: depth,
        curveSegments: suavidad,
        bevelEnabled: false,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 2
    });

    // Crea un material básico
    const material = new THREE.MeshStandardMaterial({ color: color });
    
    // Asigna la geometría y el material a la malla de texto
    const textMesh = new THREE.Mesh(geometry, material);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiental tenue
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional
    directionalLight.position.set(50, 50, 50); // Posición de la luz

    const textureLoader = new THREE.TextureLoader();

    scene.background = textureLoader.load('background.jpg');
    scene.add(ambientLight);
    scene.add(directionalLight);  
    scene.add(textMesh);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

const controls = new OrbitControls( camera, renderer.domElement );

}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
