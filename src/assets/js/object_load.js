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


scene.add(camera);


var renderer = new THREE.WebGLRenderer({
    alpha: true,
});


var canvascontainer = document.querySelector(".canvas_container");


renderer.setSize(canvascontainer.offsetWidth, canvascontainer.offsetHeight);
canvascontainer.appendChild(renderer.domElement);



var controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;

controls.autoRotate = true;
controls.autoRotateSpeed = 3;



camera.position.set(0, 0, 140);
// controls.update();
controls.enableZoom = false;



// var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
// keyLight.position.set(-100, 0, 100);

// var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
// fillLight.position.set(100, 0, 100);

// var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
// backLight.position.set(100, 0, -100).normalize();



// scene.add(keyLight);
// scene.add(fillLight);
// scene.add(backLight);

var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.8);
scene.add(light);

var directionalLight = new THREE.DirectionalLight(0x000000, 0.2);
scene.add(directionalLight);


var mtlLoader = new MTLLoader();


mtlLoader.load('/assets/images/heartGrande_red.mtl', function (materials) {

    materials.preload();

    var objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/assets/images/');


    objLoader.load('heartGrande_red.obj',
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