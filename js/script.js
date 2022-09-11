window.onload = function() { 
    document.getElementById("loading").style.display = "none";
    setTimeout(() => {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 5);
}

const mobile = document.getElementById('menu');

function setMenu(e) {
    e.classList.toggle('on');
    menu = document.getElementsByClassName('mobileMenu');
    menu[0].classList.toggle('appear');
}

document.addEventListener('click', function(event) {
    if (mobile.classList.contains('on') && !mobile.contains(event.target)) {
        setMenu(mobile);
    }
});

window.addEventListener("scroll", () => {
    if (mobile.classList.contains("on"))
    {
        setMenu(mobile);    
    }
});

// typing animation

var typed = new Typed(".typing", {
    strings: ["Front-End Dev", "Back-End Dev", "Full-Stack Dev", "Web Developer", "Freelancer", "RPA Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

window.addEventListener("resize", function () {
    this.location.reload(true);
}) 
