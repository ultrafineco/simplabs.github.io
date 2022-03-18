import Splide from "@splidejs/splide";

export default function () {
  const carousels = document.querySelectorAll(".splide");

  carousels.forEach((carousel) => {
    const splide = new Splide(carousel, {
      type: "fade",
      pagination: false,
      arrows: true,
    }).mount();

    splide.on("move", function () {
      carousel.scrollIntoView(true);
    });
  });
}
