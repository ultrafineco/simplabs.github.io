import lax from "lax.js";

export class Animations {
  constructor() {
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      lax.init();
      lax.addDriver("scrollY", () => window.scrollY);
      this.textAnimations();
      this.imageBars();
    }
  }

  imageBars() {
    lax.addElements(".image-text__bar", {
      scrollY: {
        scaleX: [
          ["elInY", "elCenterY"],
          [0, 1],
        ],
      },
    });
  }

  textAnimations() {
    lax.addElements(".text-animation__cover", {
      scrollY: {
        scaleX: [
          {
            768: ["elCenterY+100", "elOutY-100"],
            1024: ["elOutY-100", "elOutY-50"],
            1366: ["elOutY-150", "elOutY-50"],
            1900: ["elOutY-200", "elOutY-50"],
          },
          [1, 0],
        ],
      },
    });
  }
}
