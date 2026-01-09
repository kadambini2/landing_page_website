// ===============================
// Landing Page JavaScript
// ===============================

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// CTA button click message
const ctaBtn = document.querySelector(".btn");

if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    alert("Thanks for joining! 🚀 We will contact you soon.");
  });
}

// Scroll animation for feature cards
const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 100) {
      card.classList.add("show");
    }
  });
});
