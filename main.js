import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight + 100), 1, 100 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight + 100 );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
const material = new THREE.MeshNormalMaterial( { color: 0xfff000 } ); 
const torus = new THREE.Mesh( geometry, material ); scene.add( torus );

const geo = new THREE.TorusKnotGeometry( 10, 3, 100, 100 ); 
const torusKnot = new THREE.Mesh( geo, material ); scene.add( torusKnot );

const geo2 = new THREE.CapsuleGeometry( 2, 4, 4, 100 ); 
const capsule = new THREE.Mesh( geo2, material ); scene.add( capsule );

torusKnot.position.z = 120
capsule.position.z = 240


function animate() {
    camera.position.z = window.scrollY / 10;
	renderer.render( scene, camera );
    torusKnot.rotation.y += 0.01
    torusKnot.rotation.x += 0.01
    torus.rotation.x = window.scrollY / 500
    capsule.rotation.z = window.scrollY / 400
    capsule.rotation.y = window.scrollY / 400
    capsule.rotation.x = window.scrollY / 400

}
renderer.setAnimationLoop( animate );


