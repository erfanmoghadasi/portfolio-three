<template>
  <div class="flex relative w-full h-screen px-20 py-16">
    <!-- ----------------------- lines ---------------------- -->
    <span id="h-line" class=" absolute left-24 w-[1px] h-5/6 bg-slate-300" />
    <span id="v-line" class=" absolute left-14 bottom-20 w-11/12 h-[1px] bg-slate-300" />

    <!-- ---------------------------- triangle ------------------- -->
    <span id="triangle" class="absolute -right-40 top-40 w-80 h-80 bg-slate-700 rotate-45">
    </span>

    <!-- ---------------------------- left section ------------------- -->
    <div class="w-1/3 h-full z-20 flex flex-col items-center gap-10">
      <div
        id="glass"
        ref="glass"
        class="w-[250px] h-[250px] mt-10 rounded-full flex justify-center items-center aspect-square"
      >
        <nuxt-img src="images/profile.png" class="w-[170px]" />
      </div>
      <div class="flex justify-center items-center gap-5">
        <NuxtIcon
          name="link"
          class="social-icon text-3xl hover:shadow-[0px_5px_5px_0px_rgba(30,30,30,1)] transition-all hover:text-white text-sky-600 cursor-pointer"
        />
        <NuxtIcon
          name="github"
          class="social-icon text-3xl hover:shadow-[0px_5px_5px_0px_rgba(30,30,30,1)] transition-all hover:text-white text-slate-600 cursor-pointer"
        />
      </div>
    </div>

    <!-- ---------------------------- right section ------------------- -->
    <div
      class="w-2/3 z-10 h-full px-20 text-white text-xl flex flex-col gap-10 mt-20"
    >
      <div class="flex items-center gap-3">
        <span class="dot w-2 h-2 bg-slate-600 rounded-full inline-block" />
        <span class="txt"> My name is </span>
        <span class="txt text-3xl font-bold text-cyan-300"> Erfan Moghadasi </span>
      </div>
      <div class="flex items-center gap-3">
        <span class="dot w-2 h-2 bg-slate-600 rounded-full inline-block" />
        <span class="txt"> I'm a Front-End Developer .</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="dot w-2 h-2 bg-slate-600 rounded-full inline-block" />
        <span class="txt"> I have +1 year experience .</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="dot w-2 h-2 bg-slate-600 rounded-full inline-block" />
        <span class="txt">
          I love challenges, team works and develop modern designs .
        </span>
      </div>
      <div class="txt aut flex items-center gap-3 text-lg">
        <nuxt-img src="images/aut.png" class="w-12" />
        <span class="txt"
          >Bachelor degree in Mining engineering in Arak university of
          Technology .</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const glass = ref();

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: "#glass",
      start: `top 20%`,
    },
  });
  tl.from("#glass", {
    scale: 1.4,
    duration: 1,
    ease: "power2.in",
    css: {
      filter: "grayscale(50%)",
      "-webkit-filter": "grayscale(50%)",
      background: 'rgba(255, 255, 255, 1)',
      scale: "1.1",
    },
  })
  .from('#h-line',{
    height: 0,
    delay:0.5,
    duration:2,
    opacity:0.5
  }, '<')
  .from('#v-line',{
    width: 0,
    duration:2,
    opacity:0.5
  }, '<')
  .from('.dot',{
    x:-3,
    opacity:0,
    stagger: {
      amount:1
    }
  }, '<')
  .from('.txt',{
    opacity:0,
    x:30,
    y:5,
    stagger: {
      amount:1
    },
    ease: 'back'
  }, '-=1.5')
  .from('#triangle',{
    opacity:0,
    x:70,
    y:-30,
    rotate:30,
    duration:2,
    ease: 'power.out',
    backgroundColor:'#333'
  }, '-=1.5')

  $gsap.from('.social-icon',{
    ease: "expo.out",
    y:50,
    scale:2,
    duration:1.5,
  })
  
});
</script>

<style scoped>
#glass {
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  /* border-radius: 10px; */
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
