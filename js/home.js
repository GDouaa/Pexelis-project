/* Mobile menu toggle */
const toggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menuOpen");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

/* Scroll-triggered reveals (keeps the same visual but prevents animating everything at once) */
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = "running";
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

/* Pause animations until in view */
els.forEach((el) => {
  el.style.animationPlayState = "paused";
  io.observe(el);
});
