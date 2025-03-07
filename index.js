    function toggleNavbar() {
const navbarNav = document.getElementById("navbarNav");
const cancelButton = document.querySelector(".cancel-btn");
const menuIcon = document.querySelector(".navbar-toggler-icon"); // Select the menu icon

if (navbarNav.classList.contains("show")) {
// If navbar is open, close it
navbarNav.classList.remove("show");
cancelButton.style.display = "none"; // Hide cancel button
menuIcon.classList.remove("hidden"); // Show menu icon
} else {
// If navbar is closed, open it
navbarNav.classList.add("show");
cancelButton.style.display = "block"; // Show cancel button
menuIcon.classList.add("hidden"); // Hide menu icon completely
}
}

document.addEventListener('DOMContentLoaded', () => {
const dropdownToggle = document.querySelector('#loginDropdown'); // ID of the main dropdown toggle
const dropdownMenu = document.querySelector('.dropdown-menu[aria-labelledby="loginDropdown"]'); // Menu linked to the toggle
const dropdownItems = dropdownMenu.querySelectorAll('a.dropdown-item'); // Items inside the dropdown menu

// Show dropdown on hover over the toggle
dropdownToggle.addEventListener('mouseover', () => {
dropdownMenu.classList.add('show');
});

// Keep the dropdown visible when hovering over the menu itself
dropdownMenu.addEventListener('mouseover', () => {
dropdownMenu.classList.add('show');
});

// Hide dropdown when mouse leaves both toggle and menu
dropdownToggle.addEventListener('mouseout', () => {
dropdownMenu.classList.remove('show');
});

dropdownMenu.addEventListener('mouseout', () => {
dropdownMenu.classList.remove('show');
});

// Navigate to the correct page and collapse the navbar when an item is clicked
dropdownItems.forEach(item => {
item.addEventListener('click', (event) => {
  const targetPage = item.getAttribute('href'); // Get the target URL
  if (targetPage) {
    const navbarNav = document.getElementById("navbarNav");
    navbarNav.classList.remove('show'); // Close the navbar
    window.location.href = targetPage; // Navigate to the target page
  }
});
});

// Hide dropdown if clicked anywhere outside the button or menu
document.addEventListener('click', (event) => {
if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
  dropdownMenu.classList.remove('show');
}
});
});
    // Scroll to top function
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    document.addEventListener("DOMContentLoaded", function () {
const newsItems = document.querySelectorAll(".news-item");
let currentIndex = 0;

function showNextNews() {
    // Remove 'active' class from all
    newsItems.forEach(item => item.classList.remove("active"));

    // Show the current news
    newsItems[currentIndex].classList.add("active");

    // Move to next index (loop back if at end)
    currentIndex = (currentIndex + 1) % newsItems.length;
}

// Initially show the first news item
showNextNews();

// Rotate news items every 5 seconds
setInterval(showNextNews, 5000);
});
