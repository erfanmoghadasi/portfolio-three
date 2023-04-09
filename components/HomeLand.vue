<template>
  <div class="relative">
    <div
      id="hello"
      class="absolute flex w-screen h-screen overflow-hidden top-0 left-0 z-50"
    >
      <span class="w-1/5 h-screen bg-black"></span>
      <span class="w-1/5 h-screen bg-black"></span>
      <span
        class="w-1/5 h-screen bg-black text-white flex items-center text-center justify-center"
        >HELLO . . .</span
      >
      <span class="w-1/5 h-screen bg-black"></span>
      <span class="w-1/5 h-screen bg-black"></span>
    </div>
    <div
      id="container"
      class="flex relative items-center overflow-hidden w-screen h-screen shadow-[inset_0_60px_25px_rgba(0,0,0,0.2)]"
    >
      <div class="absolute right-14 top-40 flex flex-col items-center gap-4">
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
      <!-- <span
      id="left-circle"
      class="absolute shadow w-96 h-96 scale-125 rounded-full bg-slate-700 -left-28 -bottom-32"
    />
    <span
      id="right-circle"
      class="absolute shadow w-96 h-96 scale-[2] rounded-full bg-slate-500 -right-28 -top-32"
    /> -->
      <h4
        id="portfolio"
        class="absolute top-5 left-10 text-slate-100 font-thin"
      >
        PORTFOLIO
      </h4>
      <div
        id="welcome"
        class="w-1/2 flex flex-col h-1/2 max-h-72 justify-between pl-28 text-slate-50 z-10"
      >
        <h1
          id="title"
          class="welcome-el text-5xl leading-[70px] drop-shadow-[0_5px_5px_rgba(255,0,0,0.25)]"
        >
          Welcome To My Portfolio
          <p class="welcome-el mt-10 text-lg text-slate-200">
            Click to download my resume.
          </p>
        </h1>
        <button
          class="welcome-butt opacity-0 -translate-x-10 w-fit bg-amber-500 border border-transparent hover:border-amber-500 px-7 py-3 rounded-full text-slate-900 hover:bg-white transition-all shadow-[0_0_15px_rgba(200,200,0,0.5)] hover:shadow-[0_0px_0px_rgba(0,0,0,0.2)]"
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
          amount: 1 
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
  font-family: "pascal";
}
#title {
  font-family: "digidon";
}
#welcome p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
