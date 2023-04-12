<template>
  <div>
    <canvas class="-translate-x-80" ref="canvasEl" />
  </div>
</template>

<script setup>
import {
  AmbientLight,
  AmbientLightProbe,
  Color,
  DirectionalLight,
  Fog,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "THREE/examples/jsm/loaders/GLTFLoader.js";

//Scene
const scene = new Scene();
const bgColor = new Color("#2b2402");
scene.fog = new Fog(bgColor, 0.1, 100);
// scene.background = bgColor;

//Sizes
const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

// 3D objects
// const geometry = new SphereGeometry(3, 64, 64);
// const material = new MeshStandardMaterial({
//   color: "#00ff83",
// });
// const mesh = new Mesh(geometry, material);
// scene.add(mesh);

// Camera
const camera = new PerspectiveCamera(45, aspectRatio.value, 0.1, 100);
camera.position.set(0, 0, 55);
scene.add(camera);

//Light
// const light = new PointLight(0xffffff, 1, 100);
// scene.add(light);
const light = new AmbientLight(0xffffff, 1); // soft white light
// light.position.set(5, 10, 20);
scene.add(light);
const light2 = new DirectionalLight(0xffffff, 2); // soft white light
light2.position.set(-3, 5, 20);
scene.add(light2);
const light3 = new AmbientLightProbe(0xffffbb, 1);
scene.add(light3);
const light4 = new PointLight(0xffffbb, 1);
light4.position.set(-15, 1, -6);
scene.add(light4);

//Renderer
let renderer;
const canvasEl = ref(null);

const updateRenderer = () => {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
};

let controls;
const setRenderer = () => {
  if (canvasEl.value) {
    renderer = new WebGLRenderer({
      canvas: canvasEl.value,
      alpha: true,
      antialias: false,
    });
    updateRenderer();
    renderer.setPixelRatio(1);
    //Controls
    controls = new OrbitControls(camera, canvasEl.value);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
  }
};

watch(aspectRatio, () => {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
  updateRenderer();
});

const loop = () => {
  window.requestAnimationFrame(loop);
  renderer.render(scene, camera);
  controls.update();
};

onMounted(() => {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("./Three/raven/scene.gltf", (gltf) => {
    gltf.scene.position.x = 0;
    gltf.scene.position.y = -10;
    gltf.scene.position.z = 0;
    scene.add(gltf.scene);
  });
  setRenderer();
  loop();
});
</script>

<style scoped></style>
