import {
    OrbitControls
} from './library/OrbitControls.js';


import {
    MTLLoader
} from './library/MTLLoader.js';


import {
    OBJLoader
} from './library/OBJLoader.js';



var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(0, 0, -120);

camera.position.z = 200;
scene.add(camera);


var renderer = new THREE.WebGLRenderer({
    alpha: true
});




renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".container").appendChild(renderer.domElement);


var controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;

controls.autoRotate = true;
controls.autoRotateSpeed = 3;



camera.position.set(0, 0, -300);
// controls.update();
controls.enableZoom = false;



var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new MTLLoader();


mtlLoader.load('/assets/images/texture.mtl', function (materials) {

    materials.preload();

    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/assets/images/');


    objLoader.load('heartGrande.obj',
        function (object) {

            scene.add(object);
            object.position.y = 0;
        });




});



renderer.setClearColor("rgb(0,0,0)", 0); // the default


var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);



};

animate();