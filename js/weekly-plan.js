// Wait for DOM content to load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // Load sidebar HTML dynamically and initialize active link
  fetch("../shared/sidebar.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("sidebar-placeholder").innerHTML = html;
      window.sidebarInit({ activePage: "weekly-plan" });
    })
    .catch(err => console.error("Failed to load sidebar:", err));

  // Highlight current day dynamically in days highlight section
  const days = document.querySelectorAll(".days-highlight .day");
  const todayIndex = new Date().getDay(); // Sunday=0, Monday=1, ...
  // Map JS day index to your design's day order (Thu=0, Sat=1, Sun=2, Mon=3, Tue=4, Wed=5)
  const dayMap = [2, 3, 4, 5, 0, 1, 2]; // Adjust if needed
  days.forEach(day => day.classList.remove("day--active"));
  if (days[dayMap[todayIndex]]) {
    days[dayMap[todayIndex]].classList.add("day--active");
  }

  // Search bar submit handler (example)
  const searchForm = document.querySelector(".search-bar");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchForm.querySelector("input[type='search']").value.trim();
    alert("Search for: " + query);
  });
});
