
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMain = document.querySelector('.navbar-main');


function toggleNav() {
    navbarMain.classList.toggle('show');
}

// replace hover effect for click for touch devices
document.addEventListener("touchstart", function() {}, true);


navbarToggle.addEventListener('click', toggleNav);