import "wicg-inert";
import { Animations } from "./animations";
import bindAccordions from "./accordions";
import { Nav } from "./nav";
import { ContactForm } from "./contact-form";
import { Overflow } from "./overflow";

const body = document.querySelector("body");
body.setAttribute("data-js-enabled", "true");
window.addEventListener("load", function () {
  body.setAttribute("data-unblock-animations", "true");
});

const navElement = document.getElementById("nav");
new Nav(navElement);

const contactForm = document.getElementById("contact-form");
if (contactForm) new ContactForm(contactForm);

const overflows = document.querySelectorAll("[data-overflow]");
overflows.forEach(overflow => {
  new Overflow(overflow);
})

new Animations();
bindAccordions();
