<template>
  <div id="cont" class="w-full min-h-fit sm:h-screen flex flex-col sm:flex-row px-5 sm:px-20">
    <!-- ---------------------------- left section --------------------- -->
    <div class="w-full sm:w-3/5 h-full flex flex-col justify-center gap-10 pt-20 sm:pt-0 sm:pr-20">
      <h5 id="title" class="text-gray-200 text-center sm:text-left text-xl pb-10 drop-shadow">
        Some of my (open source) Experiences
      </h5>
      <div class="w-full flex flex-col gap-7 sm:pb-14">
        <div
          @click="() => clickOnTabs(1)"
          id="tab1"
          :class="
            currentTab.id === 1
              ? 'bg-opacity-60 border-blue-700'
              : 'bg-opacity-25'
          "
          class="tab flex items-center  px-4 sm:px-10 justify-between backdrop-blur-md text-white w-full h-20 bg-blue-800 rounded-lg border border-blue-900 hover:border-blue-700 cursor-pointer transition-all shadow-[0_0px_32px_0_rgba(31,38,135,0.37)]"
        >
          <NuxtIcon name="react-icon" filled class="text-5xl" />
          <p class="sm:text-lg w-1/3 pl-5">Car Insurance</p>
          <span class="w-1/3 flex items-center gap-2">
            <NuxtIcon name="warning" filled class="text-lg sm:text-2xl" />
            <p class="text-xs sm:text-sm text-zinc-400">Only in Desktop</p>
          </span>
        </div>
        <div
          @click="() => clickOnTabs(2)"
          id="tab2"
          :class="
            currentTab.id === 2
              ? 'bg-opacity-70 border-teal-700'
              : 'bg-opacity-25'
          "
          class="tab flex items-center  px-4 sm:px-10 justify-between backdrop-blur-md text-white w-full h-20 bg-teal-800 rounded-lg border border-teal-900 hover:border-teal-700 cursor-pointer transition-all shadow-[0_0px_32px_0_rgba(31,138,35,0.15)]"
        >
          <NuxtIcon name="vue-icon" filled class="text-5xl" />
          <p class="text-lg w-1/3 pl-5">Urbanears</p>
          <span class="w-1/3 flex items-center gap-2">
            <NuxtIcon name="warning" filled class="text-lg sm:text-2xl" />
            <p class="text-xs sm:text-sm text-zinc-400">Only in Desktop</p>
          </span>
        </div>
        <div
          @click="() => clickOnTabs(3)"
          id="tab3"
          :class="
            currentTab.id === 3
              ? 'bg-opacity-60 border-blue-700'
              : 'bg-opacity-25'
          "
          class="tab flex items-center  px-4 sm:px-10 justify-between backdrop-blur-md text-white w-full h-20 bg-blue-800 bg-opacity-25 rounded-lg border border-blue-900 hover:border-blue-700 cursor-pointer transition-all shadow-[0_0px_32px_0_rgba(31,38,135,0.37)]"
        >
          <NuxtIcon name="react-icon" filled class="text-5xl" />
          <p class="text-lg w-1/3 pl-5">Portfolio</p>
          <span class="w-1/3 flex items-center gap-2">
            <NuxtIcon name="success" filled class="text-lg sm:text-2xl" />
            <p class="text-xs sm:text-sm text-zinc-400">Mobile and Desktop</p>
          </span>
        </div>
      </div>
    </div>
    <!-- ---------------------------- right section --------------------- -->
    <div
      class=" w-full sm:w-2/5 h-full pt-24 pb-40 flex flex-col items-center justify-between"
    >
      <div id="imgg" class="shadow  max-w-96 h-60">
        <img :src="currentTab.gif" class="shadow-2xl w-96" />
      </div>
      <div class="flex flex-col justify-center items-center gap-20">
        <div class="alrt flex items-center gap-2 text-red-100">
          <NuxtIcon name="alert" filled />
          <p>Please make sure your VPN is on.</p>
        </div>
        <a :href="currentTab.link" class="atag" target="”_blank”">
          <button
            class="text-white bg-black border border-slate-900 shadow transition-all hover:border-slate-700 px-4 py-3"
          >
            Visit this site
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const activeTab = ref(1);
const currentTab = computed(() => {
  return tabList[activeTab.value - 1];
});

const tabList = [
  {
    id: 1,
    gif: "images/car.gif",
    link: "https://genuine-phoenix-a4cd42.netlify.app/",
  },
  {
    id: 2,
    gif: "images/urbanears2.gif",
    link: "https://cozy-croquembouche-2e1cdc.netlify.app/",
  },
  {
    id: 3,
    gif: "images/portfolio.gif",
    link: "https://portfolio-delta-two-38.vercel.app/",
  },
];

const tabPlus = () => {
  activeTab.value !== 3 ? activeTab.value++ : (activeTab.value = 1);
};

const interval = setInterval(tabPlus, 2500);

const clickOnTabs = (index: number) => {
  clearInterval(interval);
  activeTab.value = index;
};

onMounted(() => {
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: "#title",
      start: `top center`,
    },
  });

  tl.from('#title', {
    x:-100,
    opacity: 0,
    ease: "power2.out"
  }) 
  .from('#imgg', {
    y:-40,
    opacity:0 
  })
  .from('.alrt', {
    x:30,
    opacity:0
  }, '<0.2')
  .from('.atag', {
    x:30,
    opacity:0
  }, '<0.2') 
});
</script>

<style scoped></style>
