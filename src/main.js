import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player } from "./components/Player";
import { map, initializeMap } from "./components/Map";
import { animateVehicles } from "./animateVehicles";

import "./style.css";

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

// 结合环境光和直射光
// 环境光给整个环境一定的亮度，但他的缺点是没有阴影
// 直射光可以给物体阴影，但是没有被他照到的物体会隐藏在黑暗中，两种光源相结合形成互补。
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame() {
  initializeMap();
}

const renderer = Renderer();

renderer.setAnimationLoop(animate);

function animate() {
  animateVehicles();

  renderer.render(scene, camera);
}
