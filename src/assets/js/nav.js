import { trapFocus } from './utils/trap-focus';

export class Nav {
  constructor(element) {
    this.container = element;
    this.menuToggles = this.container.querySelectorAll("[data-menu-toggle]");
    this.menuCloseButtons = this.container.querySelectorAll("[data-menu-close]");
    this.submenuOpen = this.container.querySelectorAll("[data-submenu-open]");
    this.submenuClose = this.container.querySelectorAll("[data-submenu-close]");

    this.bindEvents();
  }

  bindEvents() {
    this.menuToggles.forEach((menuToggle) => {
      menuToggle.addEventListener("click", () => {
        if (menuToggle.getAttribute("aria-expanded") === "true") {
          this.closeMenu(menuToggle);
        } else {
          this.openMenu(menuToggle);
        }
      });
    });

    this.menuCloseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const toggle = button.closest("[data-has-modal")?.querySelector("[data-menu-toggle]");
        if (toggle.getAttribute("aria-expanded") === "true") {
          this.closeMenu(toggle);
        } else {
          this.openMenu(toggle);
        }
      });
    });

    this.submenuOpen.forEach((button) => {
      button.addEventListener("click", () => {
        button.setAttribute("aria-expanded", "true");
      });
    });

    this.submenuClose.forEach((button) => {
      button.addEventListener("click", () => {
        const toggle = button.closest("[data-submenu]").querySelector("[data-submenu-open]");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Escape key handler
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.menuToggles.forEach((menuToggle) => {
          this.closeMenu(menuToggle);
        });
      }
    });
  }

  closeMenu(menuToggle) {
    const siblings = this.getAllSiblings(this.container);
    menuToggle.setAttribute("aria-expanded", "false");
    siblings.forEach((sibling) => sibling.removeAttribute("inert"));
    menuToggle.focus();
    document.documentElement.style.overflow = "";
    document.body.classList.remove("menu-open");
  }

  getAllSiblings(element) {
    const children = [...element.parentElement.children];
    return children.filter((child) => child !== element);
  }

  openMenu(menuToggle) {
    const siblings = this.getAllSiblings(this.container);
    menuToggle.setAttribute("aria-expanded", "true");
    siblings.forEach((sibling) => sibling.setAttribute("inert", true));
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("menu-open");

    // Set trap focus
    const modal = menuToggle.closest("[data-has-modal")?.querySelector("[data-modal]");
    if (modal) {
      setTimeout(function () {
        trapFocus(modal);
      }, 100);
    }
  }
}
