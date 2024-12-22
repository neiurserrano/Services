// fade in on page load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// fade reveal effect
const elements = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // Remove the class when out of view
      }
    });
  },
  { threshold: 0.1 }
);

elements.forEach((el) => observer.observe(el));
