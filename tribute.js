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
        icon.src = "https://i.imgur.com/7db1dl2.png"
    } else {
        Guitare.pause();
        icon.src = "https://i.imgur.com/x6mcHt4.png"

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