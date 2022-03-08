import "wicg-inert";
import { Animations } from "./animations";
import bindAccordions from "./accordions";
import { Nav } from "./nav";
import { ContactForm } from "./contact-form";
import initCarousels from "./carousels";

const navElement = document.getElementById("nav");
new Nav(navElement);

const contactForm = document.getElementById("contact-form");
if (contactForm) new ContactForm(contactForm);

new Animations();
initCarousels();
bindAccordions();
