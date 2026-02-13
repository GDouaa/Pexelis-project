
// Usage: call sidebarInit({ activePage: 'page-name' }) after sidebar HTML is loaded.

(function () {
  // Function to add active class to the correct link
  function setActiveLink(pageName) {
    // Select all sidebargit  links
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

  // Expose a global function to initialize sidebar active state
  window.sidebarInit = function (options = {}) {
    if (options.activePage) {
      setActiveLink(options.activePage);
    }
  };
})();