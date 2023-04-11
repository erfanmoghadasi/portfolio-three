<template>
  <div
    id="main"
    ref="mainEl"
    class="bg-zinc-800 relative overflow-hidden h-screen"
  >
    <span
      id="left-circle"
      class="absolute shadow w-96 h-96 scale-125 rounded-full bg-slate-700 -left-28 top-80"
    />
    <span
      id="right-circle"
      class="absolute shadow w-96 h-96 scale-[2] rounded-full bg-slate-500 -right-28 -top-32"
    />
    <ClientOnly>
      <HomeLand />
    </ClientOnly>
    <Introduction />
    <Examples />
  </div>
</template>

<script setup lang="ts">
import Examples from '~/components/Examples.vue';

const mainEl = ref();

onMounted(() => {
  setTimeout(() => {
    mainEl.value.classList.remove("h-screen");
    mainEl.value.classList.add("min-h-fit");
  }, 2500);
});
</script>

<style scoped>
#main {
  scroll-snap-align: center;
}
</style>
