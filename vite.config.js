export default {
    build: {
      rollupOptions: {
        external: [
          'three/examples/jsm/loaders/GLTFLoader.js'
        ]
      }
    }
  }