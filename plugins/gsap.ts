import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

export default ({ app }: any, inject: (arg0: string, arg1: typeof globalThis.gsap) => void) => {
    inject("gsap", gsap);
  };