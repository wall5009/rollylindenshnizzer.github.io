// main.js
import * as THREE from 'https://unpkg.com/three@0.164.0/build/three.module.js';

const canvas = document.getElementById('viewport');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(12, 12, 20);
camera.lookAt(0, 0, 0);

// 15 x 1 x 15 baseplate
const cubeGeom = new THREE.BoxGeometry(1, 1, 1);
const cubeMat = new THREE.MeshNormalMaterial();

const sizeX = 15;
const sizeZ = 15;
const offsetX = -(sizeX - 1) / 2;
const offsetZ = -(sizeZ - 1) / 2;

for (let x = 0; x < sizeX; x++) {
    for (let z = 0; z < sizeZ; z++) {
        const cube = new THREE.Mesh(cubeGeom, cubeMat);
        cube.position.set(offsetX + x, 0, offsetZ + z);
        scene.add(cube);
    }
}

function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', onResize);

// render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();