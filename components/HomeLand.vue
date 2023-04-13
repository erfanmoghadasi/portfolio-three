<template>
  <div class="relative">
    <Hello />
    <div
      id="container"
      class="flex flex-col-reverse sm:flex-row relative items-center overflow-hidden w-screen h-screen shadow-[inset_0_60px_25px_rgba(0,0,0,0.2)]"
    >
      <div class="absolute right-14 top-10 sm:top-40 flex flex-col items-center gap-4">
        <span class="social-child w-[1px] h-24 bg-slate-300 rounded-full" />
        <NuxtIcon name="dribbble" class="social-child text-slate-300 text-sm" />
        <NuxtIcon
          name="instagram"
          class="social-child text-slate-300 text-sm"
        />
        <NuxtIcon name="linkedin" class="social-child text-slate-300 text-sm" />
        <NuxtIcon name="telegram" class="social-child text-slate-300 text-sm" />
        <NuxtIcon name="whatsapp" class="social-child text-slate-300 text-sm" />
      </div>
      <h4
        id="portfolio"
        class="absolute text-xs sm:text-base top-5 left-10 text-slate-100 font-black tracking-[5px]"
      >
        PORTFOLIO
      </h4>
      <div
        id="welcome"
        class="w-1/2 flex  text-center sm:text-left items-center sm:items-start  flex-col h-1/2 max-h-72 sm:justify-between py-0 sm:pt-10 sm:pl-28 text-slate-50 z-10"
      >
        <h1
          id="title"
          class="welcome-el text-2xl -translate-y-20 sm:translate-y-0 sm:text-5xl leading-10 sm:leading-[70px] drop-shadow-[0_5px_5px_rgba(255,0,0,0.25)]"
        >
          Welcome To My Portfolio
          <p class="welcome-el hidden sm:inline-block mt-10 text-xs sm:text-lg text-slate-200">
            Click to download my resume.
          </p>
        </h1>
        <button
          class="welcome-butt  -translate-y-16 sm:translate-y-0 opacity-0 scale-75 sm:scale-100 sm:-translate-x-10 w-fit bg-amber-500 border border-transparent hover:border-amber-500 px-7 py-3 rounded-full text-slate-900 hover:bg-white transition-all shadow-[0_0_15px_rgba(200,200,0,0.5)] hover:shadow-[0_0px_0px_rgba(0,0,0,0.2)]"
        >
          Download CV
        </button>
      </div>
      <div class="w-1/2">
        <component :is="isLoad ? CanvasPot : Loading" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CanvasPot from "./CanvasPot.vue";
import Loading from "./Loading.vue";

const { $gsap } = useNuxtApp();
const tl = $gsap.timeline();

const isLoad = ref(false);

onMounted(() => {
  tl.to("#hello span", {
    y: "-100%",
    delay: 2,
    duration: 0.7,
    ease: "power2.Out",
    stagger: {
      amount: 0.07,
      from: "edges",
    },
  })
    .from(
      "#portfolio",
      {
        opacity: 0,
        translateX: -170,
        duration: 1.2,
        ease: "power3.Out",
      },
      "-=0.3"
    )
    .from(
      ".welcome-el",
      {
        opacity: 0,
        translateX: -70,
        stagger: 0.5,
        duration: 2,
        ease: "power3.In",
      },
      "<"
    )
    .to(
      ".welcome-butt",
      {
        opacity: 1,
        duration: 2,
        x: 0,
      },
      "<"
    )
    .from(
      "#left-circle",
      {
        opacity: 0.5,
        translateX: -170,
        translateY: 100,
        duration: 2,
        ease: "power3.In",
      },
      "<"
    )
    .from(
      "#right-circle",
      {
        opacity: 0,
        translateX: 20,
        translateY: -10,
        duration: 2,
        ease: "power4.In",
      },
      "<"
    )
    .from(
      ".social-child",
      {
        opacity: 0,
        translateY: 20,
        stagger: {
          amount: 1,
        },
        ease: "power4.out",
      },
      "-=1.5"
    );
  setTimeout(() => {
    isLoad.value = true;
  }, 5000);

});
</script>

<style scoped>
#portfolio {
  font-family: "shadded";
}
#title {
  font-family: "digidon";
}
#welcome p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
