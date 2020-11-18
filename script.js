
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMain = document.querySelector('.navbar-main');


function toggleNav() {
    navbarMain.classList.toggle('show');
}

// replace hover effect for click for touch devices
// option 1
document.addEventListener("touchstart", function() {}, true);


navbarToggle.addEventListener('click', toggleNav);