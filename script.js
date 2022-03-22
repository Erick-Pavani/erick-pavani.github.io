//------------------------ Toggle NavBar ------------------------

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
navLinks.forEach((a) => {
    a.addEventListener('click', function() {if (menuToggle.classList.contains('show')){bsCollapse.toggle();}})
})

//------------------------ End ----------------------------------
