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
    const mediaQuery = window.matchMedia("(min-width: 48em)");
    mediaQuery.addEventListener("change", (event) => {
      if (event.matches) {
        this.textAnimationsDesktop();
      } else {
        this.textAnimationsMobile();
      }
    });

    if (mediaQuery.matches) {
      this.textAnimationsDesktop();
    } else {
      this.textAnimationsMobile();
    }
  }

  textAnimationsDesktop() {
    const covers = document.querySelectorAll(".text-animation__cover");

    covers.forEach((cover) => {
      cover.removeAttribute("style");

      cover.addEventListener("mouseenter", () => {
        cover.style.transform = "scaleX(0)";
      });
    });

    lax.removeElements(".text-animation__cover");
  }

  textAnimationsMobile() {
    lax.addElements(".text-animation__cover", {
      scrollY: {
        scaleX: [
          ["elCenterY+100", "elOutY-150"],
          [1, 0],
        ],
      },
    });
  }
}
