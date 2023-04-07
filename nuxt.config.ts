// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[

  ],
  plugins: [{ src: "~/plugins/gsap.js" }],
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
