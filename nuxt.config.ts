// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules:[
    '@vueuse/nuxt',
    'nuxt-icons',
    '@nuxt/image-edge',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  imports: {
    dirs: ["layouts/**", "pages/**", "components/**", "assets/**"],
  },
});
