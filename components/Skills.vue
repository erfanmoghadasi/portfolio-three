<template>
  <div id="contain" class="w-full h-screen relative">
    <h2
      class="absolute header top-7 left-0 w-full text-center text-zinc-200 text-xl"
    >
      My Skills
    </h2>
    <div class="h-1/3 w-full px-28 pt-20 flex gap-20">
      <NuxtIcon name="vue-icon" class="vue text-9xl" filled />
      <NuxtIcon name="nuxt" class="up-sec text-9xl scale-125" filled />
      <div class="up-sec flex items-end">
        <NuxtIcon name="pinia" class="text-9xl" filled />
        <span class="text-2xl text-yellow-400 drop-shadow font-mono font-thin"
          >Pinia</span
        >
      </div>
      <NuxtIcon name="vuetify" class="up-sec text-9xl scale-125" filled />
      <div class="up-sec flex items-end gap-5">
        <nuxt-img src="images/formkit.webp" class="text-9xl" filled />
        <span class="text-xl text-amber-300 drop-shadow font-mono font-thin"
          >Formkit</span
        >
      </div>
    </div>
    <div class="h-1/3 w-full px-28 flex flex-row-reverse gap-20 pt-10">
      <NuxtIcon name="react-icon" class="react text-9xl" filled />
      <div class="mid-sec flex gap-3 pt-4">
        <NuxtIcon name="nextjs-icon" class="text-8xl text-white" />
        <NuxtIcon name="next" class="text-8xl" filled />
      </div>
      <div class="mid-sec flex gap-3 pt-4">
        <span class="text-sky-500">MaterialUI</span>
        <NuxtIcon name="material" class="text-8xl" filled />
      </div>
      <div class="mid-sec flex gap-3 pt-4">
        <span class="text-purple-400 pt-16">Redux</span>
        <NuxtIcon name="redux" class="text-8xl" filled />
      </div>
      <div class="mid-sec flex gap-3 pt-4">
        <span
          class="text-purple-400 pt-5 font-serif font-smeibold tracking-wider"
        >
          <p class="text-violet-300">Framer</p>
          <p class="text-violet-400">Motion</p>
        </span>
        <NuxtIcon name="framer-motion" class="text-8xl" filled />
      </div>
    </div>
    <div class="h-1/3 swiper-container relative w-full bg-black">
      <span class="cover absolute h-full w-full bg-white z-30" />
      <!-- <ClientOnly>
      <Swiper
        :modules="[Autoplay]"
        class=" h-full w-full"
        :loop="true"
        direction="horizontal"
        :speed="1000"
        :autoplay="{
          delay: 4000,
          waitForTransition: true,
          stopOnLastSlide: false
        }"
      >
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      <SwiperSlide
      class="pt-10 pl-10"
      >
        <NuxtIcon name="pinia"  class="text-9xl" filled />
      </SwiperSlide>
      </Swiper>
    </ClientOnly> -->
      <div class="slider w-full h-full flex items-center justify-around">
        <div v-for="s in slides" class="w-1/5 p-14 grayscale-[20%]">
          <img :src="s" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "swiper/css";

const slides = ref([
  "images/slider/Bootstrap.svg",
  "images/slider/ts.svg",
  "images/slider/node.png",
  "images/slider/three.png",
  "images/slider/gsap.jpg",
  "images/slider/tailwind.svg",
]);

const benchSlides = ref([
  "images/slider/api.png",
  "images/slider/git.png",
  "images/slider/sass.png",
]);

const { $gsap } = useNuxtApp();

onMounted(() => {
  setInterval(() => {
    let idx = Math.random() * 6;
    let prev: any = slides.value.splice(idx, 1);
    let next: any = benchSlides.value.shift();
    slides.value.splice(idx, 0, next);
    benchSlides.value.push(prev);
  }, 1500);

  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: "#contain",
      start: `top 20%`,
    },
  });

  $gsap.set(".vue", {
    x: () => window.innerWidth / 2 - 224,
  });
  $gsap.set(".react", {
    x: () => (window.innerWidth / 2 - 128) * -1,
  });

  tl.from(".vue", {
    scale: 1.2,
    ease: "power3.in",
  })
    .from(
      ".react",
      {
        scale: 1.2,
        ease: "power3.in",
      },
      "<"
    )
    .to(".vue", {
      x: 0,
      ease: "power4.out",
      duration: 1.5,
    })
    .to(
      ".react",
      {
        scale: 1.2,
        x: 0,
        ease: "power4.out",
        duration: 1.5,
      },
      "<"
    )
    .from(
      ".up-sec",
      {
        x: 20,
        opacity: 0,
        ease: "circ.out",
        duration: 2,
        stagger: {
          amount: 3,
        },
      },
      ">-0.5"
    )
    .from(
      ".mid-sec",
      {
        x: -20,
        opacity: 0,
        ease: "circ.out",
        duration: 2,
        stagger: {
          amount: 3,
        },
      },
      "<"
    )
    .from(
      ".header",
      {
        y: -5,
        opacity: 0,
        ease: "circ.out",
      },
      "<"
    )
    .from(
      ".swiper-container",
      {
        y: "100%",
        duration: 1,
        ease: "power4.out",
      },
      ">"
    )
    .to(
      ".cover",
      {
        y: "100%",
        duration: 1.5,
        ease: "expo.out",
      },
      ">-0.4"
    );
});
</script>

<style scoped>
@import url("swiper/css");
</style>
