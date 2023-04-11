<template>
    <div
      v-if="isHello"
      id="hello"
      class="absolute flex w-screen h-screen overflow-hidden top-0 left-0 z-50"
    >
      <span class="w-1/5 h-screen bg-black"></span>
      <span class="w-1/5 h-screen bg-black"></span>
      <span
      id="hello-split"
        class="w-1/5 h-screen bg-black text-white flex items-center text-center justify-center"
        >
        <div v-for="c in helloSplit" class="text-5xl text-gray-100 tracking-[5px] ">{{ c }}</div>
        </span
      >
      <span class="w-1/5 h-screen bg-black"></span>
      <span class="w-1/5 h-screen bg-black"></span>
    </div>
</template>

<script setup lang="ts">
const {$gsap} = useNuxtApp()

const isHello = ref(true);

const helloSplit = 'Hello...'.split('')

onMounted(() => {
    setTimeout(() => {
      isHello.value = false;
    }, 3000);

    $gsap.from('#hello-split div', {opacity:0, x:50, y:20 ,delay:0.3,  stagger:{
        amount:0.7
    }})
})

</script>

<style scoped>
    #hello-split{
  font-family: 'aetherius';
    }
</style>