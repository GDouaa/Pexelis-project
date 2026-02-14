
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

function selectAvatar(avatarNumber) {
    document.querySelectorAll('.avatar').forEach(avatar => {
        avatar.classList.remove('selected');
    });
    document.querySelectorAll('.avatar')[avatarNumber - 1].classList.add('selected');
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
    }

    const selectedAvatar = document.querySelector('.avatar.selected');
    const avatarIndex = Array.from(document.querySelectorAll('.avatar')).indexOf(selectedAvatar) + 1;

    alert('Inscription réussie ! Bienvenue ' + username + ' !');
});

