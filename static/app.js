import 'normalize.css';
var d3 = require('d3');
// import THREE from 'three.js';
// import drawThreeGeo from './lib/threeGeoJSON';
import TrackballControls from 'three-trackballcontrols';

var scene, camera, renderer, controls;
var geometry, material, mesh;

init();
animate();

function init() {
    renderer = new THREE.WebGLRenderer({
        'antialias': true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector("#globe").appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 21, 10000);
    camera.position.set(20, 20, 20);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    controls = new TrackballControls(camera);

    scene.add(new THREE.AmbientLight(0x333333));

    var globeGeometry = new THREE.SphereGeometry(10, 32, 32);
    var globeMaterial = new THREE.MeshPhongMaterial({
        'wireframe': true,
        'transparent': true
    });
    var sphereMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(sphereMesh);

    geoRender(scene, 'data/countries_states.json');
}

function animate() {
    controls.update();
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

function geoRender(scene, geojsonPath) {
    d3.json(geojsonPath, function (error, data) {
        if (error) {
            console.error(error);
        }

        drawThreeGeo(scene, data, 10, 'sphere', {
            color: 'green'
        });
    });
}