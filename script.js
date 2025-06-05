// Theme toggle
const modeToggle = document.getElementById("modeToggle");
const body = document.body;
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Hamburger menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill all fields.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "green";
    this.reset();
  }
});
// You can add interactivity later if needed
console.log("Map section loaded.");


// Skills filter
const filterButtons = document.querySelectorAll(".filter-btn");
const skillsCards = document.querySelectorAll(".skills-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    skillsCards.forEach(card => {
      card.style.display =
        filter === "all" || card.getAttribute("data-category") === filter
          ? "block"
          : "none";
    });
  });
});

// Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader-wrapper").style.display = "none";
});

