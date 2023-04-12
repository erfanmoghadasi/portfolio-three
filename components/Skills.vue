<template>
    <div id="contain" class="w-full h-screen relative">
        <h2 class="absolute header top-7 left-0 w-full text-center text-zinc-200 text-xl">My Skills</h2>
        <div class="h-1/3 w-full px-28 pt-20 flex gap-20">
            <NuxtIcon name="vue-icon" class="vue text-9xl" filled />
            <NuxtIcon name="nuxt" class="text-9xl scale-125" filled />
            <div class="flex items-end">
              <NuxtIcon name="pinia" class="text-9xl" filled />
              <span class="text-2xl text-yellow-400 drop-shadow font-mono font-thin">Pinia</span>
            </div>
            <NuxtIcon name="vuetify" class="text-9xl scale-125" filled />
            <div class="flex items-end gap-5">
              <nuxt-img src="images/formkit.webp" class="text-9xl" filled />
              <span class="text-xl text-amber-300 drop-shadow font-mono font-thin">Formkit</span>
            </div>
        </div>
        <div class="h-1/3 w-full px-28 flex flex-row-reverse gap-20 pt-10">
            <NuxtIcon name="react-icon" class="react text-9xl" filled />
          <div class="flex gap-3 pt-4">
            <NuxtIcon name="next" class="text-8xl" filled />
            <NuxtIcon name="nextjs-icon" class="text-8xl text-white" />
          </div>
          <div class="flex gap-3 pt-4">
            <NuxtIcon name="material" class="text-8xl" filled />
            <span class="text-sky-500">MaterialUI</span>
          </div>
          <div class="flex gap-3 pt-4">
            <NuxtIcon name="redux" class="text-8xl" filled />
            <span class="text-purple-400 pt-16">Redux</span>
          </div>
          <div class="flex gap-3 pt-4">
            <NuxtIcon name="framer-motion" class="text-8xl" filled />
            <span class="text-purple-400 pt-5 font-serif font-smeibold tracking-wider">
              <p class="text-violet-300">Framer</p>
              <p class="text-violet-400">Motion</p>
            </span>
          </div>
        </div>
        <div class="h-1/3 swiper-container relative w-full bg-black">
            <span class="cover absolute h-full w-full bg-white" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

onMounted(() => { 
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: "#contain",
      start: `top 20%`,
    },
  });

  $gsap.set('.vue', {
    x: () => window.innerWidth/2 - 224
  })
  $gsap.set('.react', {
    x: () => (window.innerWidth/2 - 128) * -1
  })

  tl.from('.vue',  {
      scale:1.2,
    ease: "power3.in"
  }) 
  .from('.react', {
      scale:1.2,
    ease: "power3.in"
  }, '<')
  .to('.vue', {
      
    x: 0,
    ease: "power4.out",
    duration:1.5,
  }) 
  .to('.react', {
      scale:1.2,
    x: 0 ,
    ease: "power4.out",
    duration:1.5,
  }, '<')
  .from('.header', {
    y: -5,
    opacity: 0,
    ease: "circ.out",
  }, '<')
  .from('.swiper-container', {
    y : '100%',
    duration: 1,
    ease: "power4.out"
  }, '>')
  .to('.cover', {
    y: '100%',
    duration: 1.5,
    ease: "expo.out"
  }, '>-0.4' )
  
  })
</script>

<style scoped>

</style>