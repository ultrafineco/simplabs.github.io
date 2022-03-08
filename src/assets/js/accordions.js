export default function () {
  const accordionToggles = document.querySelectorAll("[data-accordion-toggle]");
  accordionToggles.forEach((toggle) => {
    const behavior = toggle.dataset.accordionToggle;
    toggle.addEventListener("click", () => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");

        if (behavior === "loadMore") {
          requestAnimationFrame(() => {
            toggle.nextElementSibling.firstChild.focus({ preventScroll: true });
          });
        }
      } else {
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });
}
