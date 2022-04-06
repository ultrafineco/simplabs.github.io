export class Overflow {
  constructor(element) {
    this.container = element;
    this.scrollContainer = this.container.querySelector(
      "[data-overflow-scroll]"
    );
    this.grid = this.container.querySelector("[data-overflow-grid]");
    this.prev = this.container.querySelector("[data-prev]");
    this.next = this.container.querySelector("[data-next]");
    this.behavior = "auto";
    this.gap = 24;

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      this.behavior = "smooth";
    }

    this.bindEvents();
  }

  bindEvents() {
    const debouncedScroll = this.debounce(this.handleScroll.bind(this), 250);
    this.scrollContainer.addEventListener("scroll", debouncedScroll);

    this.next.addEventListener("click", this.scrollToNext.bind(this));
    this.prev.addEventListener("click", this.scrollToPrev.bind(this));
  }

  debounce(callback, wait) {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  }

  handleScroll(event) {
    const target = event.target;
    const offset = target.scrollLeft;
    const isFullyScrolled =
      offset + target.clientWidth > target.scrollWidth - 1;

    if (offset === 0) {
      this.prev.setAttribute("disabled", true);
    } else {
      this.prev.removeAttribute("disabled");
    }

    if (isFullyScrolled) {
      this.next.setAttribute("disabled", true);
    } else {
      this.next.removeAttribute("disabled");
    }
  }

  scrollTo(childNumber) {
    const newOffset = this.grid.children[childNumber].offsetLeft;

    this.scrollContainer.scrollTo({
      top: 0,
      left: newOffset,
      behavior: this.behavior,
    });
  }

  scrollToNext() {
    const childWidth = this.grid.firstElementChild.clientWidth;
    const offset = this.scrollContainer.scrollLeft;
    const childNumber = Math.ceil(offset / childWidth) || 1;

    this.scrollTo(childNumber);
  }

  scrollToPrev() {
    const childWidth = this.grid.firstElementChild.clientWidth;
    const offset = this.scrollContainer.scrollLeft;
    const childNumber = Math.floor(offset / childWidth) - 1 || 0;

    this.scrollTo(childNumber);
  }
}
