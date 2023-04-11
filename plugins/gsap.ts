import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin(() => {
  return{
    provide: {
      gsap 
    }
  }
})