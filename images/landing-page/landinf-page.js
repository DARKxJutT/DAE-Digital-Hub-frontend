// // Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Search Bar Functionality
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
    searchBar.focus();
  }
});

// Close search bar when clicking outside
document.addEventListener('click', (e) => {
  if (!searchButton.contains(e.target) && !searchBar.contains(e.target)) {
    searchBar.classList.remove('active');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});