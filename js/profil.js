// Toggle Dark Mode Button
const darkModeToggle = document.getElementById('darkModeToggle');
let isDark = false;

darkModeToggle.addEventListener('click', () => {
    isDark = !isDark;
    const knob = darkModeToggle.querySelector('.toggle-knob');
    const text = darkModeToggle.querySelector('span');
    
    if (isDark) {
        darkModeToggle.style.flexDirection = 'row-reverse';
        text.innerText = 'ON';
        document.body.style.filter = 'brightness(0.8)'; // Simple dark simulation
    } else {
        darkModeToggle.style.flexDirection = 'row';
        text.innerText = 'OFF';
        document.body.style.filter = 'none';
    }
});

// Example: Changing Energy Level programmatically
function setEnergy(percent) {
    const fill = document.querySelector('.energy-fill');
    fill.style.width = percent + '%';
}

// Set initial energy to 75%
setEnergy(75);
// This script highlights the active sidebar link based on the current page name.
// Usage: call sidebarInit({ activePage: 'page-name' }) after sidebar HTML is loaded.

(function () {
  // Function to add active class to the correct link
  function setActiveLink(pageName) {
    // Select all sidebar links
    const links = document.querySelectorAll('.sidebar__link');
    links.forEach(link => {
      // If the link's data-page matches the active page, add active class
      if (link.dataset.page === pageName) {
        link.classList.add('sidebar__link--active');
      } else {
        // Otherwise, remove active class
        link.classList.remove('sidebar__link--active');
      }
    });
  }

  // JavaScript to reset streak
function restartStreak() {
  const streakNumber = document.querySelector('.streak-number');
  streakNumber.textContent = 0; // reset streak to 0
}


  // Expose a global function to initialize sidebar active state
  window.sidebarInit = function (options = {}) {
    if (options.activePage) {
      setActiveLink(options.activePage);
    }
  };

  // Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

// Optional: Save dark mode preference in localStorage
if(localStorage.getItem('darkMode') === 'enabled'){
  document.body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
  if(darkModeToggle.checked){
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

})();