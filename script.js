
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMain = document.querySelector('.navbar-main');


function toggleNav() {
    navbarMain.classList.toggle('show');
}


navbarToggle.addEventListener('click', toggleNav);