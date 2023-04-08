<template>
  <div>
    <canvas ref="canvasEl" />
  </div>
</template>

<script setup lang="ts">
import {
  Color,
  Fog,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new Scene();
const bgColor = new Color("#101010");
scene.fog = new Fog(bgColor, 0.1, 100);
scene.background = bgColor;

//Sizes
const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

// 3D objects
const geometry = new SphereGeometry(3, 64, 64);
const material = new MeshStandardMaterial({
  color: "#00ff83",
});
const mesh = new Mesh(geometry, material);
scene.add(mesh);

// Camera
const camera = new PerspectiveCamera(45, aspectRatio.value, 0.1, 100);
camera.position.z = 20;
scene.add(camera);

//Light
const light = new PointLight(0xffffff, 1, 100);
light.position.set(5, 10, 20);
scene.add(light);

//Renderer
let renderer: WebGLRenderer;
const canvasEl = ref(null);

const updateRenderer = () => {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
};

let controls: OrbitControls;
const setRenderer = () => {
  if (canvasEl.value) {
    renderer = new WebGLRenderer({ canvas: canvasEl.value, alpha: true });
    updateRenderer();
    renderer.setPixelRatio(2)
    //Controls
    controls = new OrbitControls(camera, canvasEl.value);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true
    controls.autoRotateSpeed = 5
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
  controls.update()
};

onMounted(() => {
  setRenderer();
  loop();
});
</script>

<style scoped></style>
