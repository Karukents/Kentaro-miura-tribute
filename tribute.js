const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

var Guitare = document.getElementById("guitare");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if (Guitare.paused) {
        Guitare.play();
        icon.src = "images/pause-icon.png"
    } else {
        Guitare.pause();
        icon.src = "images/play-icon.png"

    }
}

window.onscroll = function() { myFunction() };
var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}