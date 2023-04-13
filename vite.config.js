export default {
  build: {
    rollupOptions: {
      external: [
        'THREE/examples/jsm/loaders/GLTFLoader.js'
      ]
    }
  }
}