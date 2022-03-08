import Splide from "@splidejs/splide";

export default function () {
  const carousels = document.querySelectorAll(".splide");

  carousels.forEach((carousel) => {
    return new Splide(carousel, {
      type: "fade",
      pagination: false,
      arrows: true,
    }).mount();
  });
}
