document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.getElementById("navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const cancelButton = document.querySelector(".cancel-btn");

    function toggleNavbar() {
        if (navbarNav.classList.contains("show")) {
            navbarNav.classList.remove("show");
            cancelButton.style.display = "none";
            navbarToggler.style.display = "block";
        } else {
            navbarNav.classList.add("show");
            cancelButton.style.display = "block";
            navbarToggler.style.display = "none";
        }
    }

    navbarToggler.addEventListener("click", toggleNavbar);
    cancelButton.addEventListener("click", toggleNavbar);

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navbarNav.classList.contains("show")) {
                toggleNavbar();
            }
        });
    });

    // Hide navbar when clicking outside
    document.addEventListener("click", (event) => {
        if (!navbarNav.contains(event.target) && !navbarToggler.contains(event.target) && !cancelButton.contains(event.target)) {
            navbarNav.classList.remove("show");
            cancelButton.style.display = "none";
            navbarToggler.style.display = "block";
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
function toggleOtherField() {
    var subject = document.getElementById("subject").value;
    var otherField = document.getElementById("otherSubjectField");
    
    if (subject === "Other") {
        otherField.style.display = "block";
        document.getElementById("otherSubject").setAttribute("required", "true");
    } else {
        otherField.style.display = "none";
        document.getElementById("otherSubject").removeAttribute("required");
    }
}