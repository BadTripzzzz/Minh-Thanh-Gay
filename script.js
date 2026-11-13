const themeToggle = document.getElementById("themeToggle");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.getElementById("mobileNav");

// Switch between the light and dark appearance.
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.innerHTML = `${isDark ? "☀" : "◐"} <span>${isDark ? "Light appearance" : "Dark appearance"}</span>`;
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

// Open and close the mobile navigation.
mobileMenuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenuToggle.textContent = isOpen ? "×" : "☰";
});

// Close the mobile navigation after choosing a section.
mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.textContent = "☰";
  });
});

// Highlight the active navigation item as the page scrolls.
const sections = document.querySelectorAll("#menu, #experience, #visit");
const navLinks = document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});
