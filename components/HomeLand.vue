<template>
  <div id="container" class="flex relative items-center overflow-hidden w-screen h-screen shadow-[inset_0_60px_25px_rgba(0,0,0,0.2)]">
    <span id="left-circle" class="absolute shadow w-96 h-96 scale-125 rounded-full bg-slate-700 -left-28 -bottom-32" />
    <span id="right-circle" class="absolute shadow w-96 h-96 scale-[2] rounded-full bg-slate-500 -right-28 -top-32" />
    <h4 id="portfolio" class="absolute top-5 left-10 text-slate-100 font-thin ">PORTFOLIO</h4>
    <div id="welcome" class="w-1/2 pl-28 text-slate-50 z-10">
      <h1 class="welcome-el text-6xl leading-[80px] drop-shadow-[0_5px_5px_rgba(255,0,0,0.25)]">Welcome To My Portfolio</h1>
      <p class="welcome-el mt-10">Click to download my resume.</p>
      <button class="welcome-butt bg-amber-500 px-7 py-3 rounded-full mt-5 text-slate-900 hover:bg-white transition-all shadow-[0_0_15px_rgba(200,200,0,0.5)] hover:shadow-[0_0px_0px_rgba(0,0,0,0.2)]">Download CV</button>
    </div>
    <div class="w-1/2">
      <!-- <CanvasPot /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  const {$gsap} = useNuxtApp()
  onMounted(() => {
    $gsap.from('#container', {opacity: 0 , duration: 2, })
    $gsap.from('#portfolio', {opacity: 0 , translateX: -170 , duration: 1.2, ease: 'power3.out'})
    $gsap.from('.welcome-el', {opacity: 0 , translateX: -70, stagger:0.5 , duration: 2, ease: 'power3.out'})
    $gsap.from('.welcome-butt', {opacity: 0 , translateX: -70, stagger:0.5 , duration: 2, ease: 'power3.out'})
    $gsap.from('#left-circle', {opacity: 0.5 , translateX: -170, translateY: 100 , duration: 2, ease: 'power3.out'})
    $gsap.from('#right-circle', {opacity: 0 , translateX: 20, translateY: -10 , duration: 2, delay: 0.3, ease: 'power4.out'})

  })
</script>

<style scoped></style>
