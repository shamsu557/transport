function toggleNavbar() {
    const navbarNav = document.getElementById("navbarNav");
    const cancelButton = document.querySelector(".cancel-btn");
    const menuIcon = document.querySelector(".navbar-toggler-icon");

    if (navbarNav.classList.contains("show")) {
        navbarNav.classList.remove("show"); // Collapse menu
        cancelButton.style.display = "none"; // Hide cancel button
        menuIcon.style.display = "block"; // Show menu icon
    } else {
        navbarNav.classList.add("show"); // Open menu
        cancelButton.style.display = "block"; // Show cancel button
        menuIcon.style.display = "none"; // Hide menu icon
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('#loginDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu[aria-labelledby="loginDropdown"]');
    const dropdownItems = dropdownMenu.querySelectorAll('a.dropdown-item');
    const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links
    const navbarNav = document.getElementById("navbarNav");

    // Show dropdown on hover
    dropdownToggle.addEventListener('mouseover', () => dropdownMenu.classList.add('show'));
    dropdownMenu.addEventListener('mouseover', () => dropdownMenu.classList.add('show'));

    // Hide dropdown when mouse leaves
    dropdownToggle.addEventListener('mouseout', () => dropdownMenu.classList.remove('show'));
    dropdownMenu.addEventListener('mouseout', () => dropdownMenu.classList.remove('show'));

    // Collapse menu when any nav link (or dropdown item) is clicked
    [...navLinks, ...dropdownItems].forEach(item => {
        item.addEventListener('click', () => {
            navbarNav.classList.remove("show"); // Collapse the menu
        });
    });

    // Hide dropdown when clicking outside
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
