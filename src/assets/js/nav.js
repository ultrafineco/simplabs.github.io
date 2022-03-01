export class Nav {
  constructor(element) {
    this.container = element;
    this.dropdownWrappers = this.container.querySelectorAll(
      "[data-dropdown-wrapper]"
    );
    this.menuToggle = this.container.querySelector("[data-menu-toggle]");
    this.bindEvents();
  }

  bindEvents() {
    this.dropdownWrappers.forEach((dropdownWrapper) => {
      const toggle = dropdownWrapper.querySelector("[data-dropdown-toggle]");

      dropdownWrapper.addEventListener("mouseenter", () => {
        toggle.setAttribute("aria-expanded", "true");
      });

      dropdownWrapper.addEventListener("mouseleave", () => {
        toggle.setAttribute("aria-expanded", "false");
      });

      dropdownWrapper.addEventListener("focusin", () => {
        toggle.setAttribute("aria-expanded", "true");
      });

      dropdownWrapper.addEventListener("focusout", () => {
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    this.menuToggle.addEventListener("click", () => {
      if (this.menuToggle.getAttribute("aria-expanded") === "true") {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });

    // Escape key handler
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (this.menuToggle.getAttribute("aria-expanded") === "true") {
          this.closeMenu();
        }
      }
    });
  }

  closeMenu() {
    const siblings = this.getAllSiblings(this.container);
    this.menuToggle.setAttribute("aria-expanded", "false");
    siblings.forEach((sibling) => sibling.removeAttribute("inert"));
    this.menuToggle.focus();
    document.documentElement.style.overflow = "";
  }

  getAllSiblings(element) {
    const children = [...element.parentElement.children];
    return children.filter((child) => child !== element);
  }

  openMenu() {
    const siblings = this.getAllSiblings(this.container);
    this.menuToggle.setAttribute("aria-expanded", "true");
    siblings.forEach((sibling) => sibling.setAttribute("inert", true));
    document.documentElement.style.overflow = "hidden";
  }
}
