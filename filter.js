document.addEventListener("DOMContentLoaded", () => {
  // === Showcase Filter ===
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      document.querySelectorAll(".portfolio-item").forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // === Hero Background Slideshow ===
  const images = [
    "works/Portrait/portrait1.webp",
    "works/Wedding/wedding1.jpg",
    "works/Nature/nature2.webp",
    "works/Wedding/wedding2.jpg",
  ];

  let currentImage = 0;
  const heroBg = document.querySelector(".hero-bg");

  if (heroBg) {
    heroBg.style.backgroundImage = `url('${images[0]}')`;

    setInterval(() => {
      currentImage = (currentImage + 1) % images.length;
      heroBg.style.backgroundImage = `url('${images[currentImage]}')`;
    }, 5000); 
  }
});
