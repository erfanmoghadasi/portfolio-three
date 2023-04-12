// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@vueuse/nuxt", "nuxt-icons", "@nuxt/image-edge", 'nuxt-swiper'],

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
