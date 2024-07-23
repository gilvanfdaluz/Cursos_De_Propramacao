document.addEventListener("scroll", function() {
    var menu = document.querySelector(".navegacao");
    if (window.scrollY > 50) {
        menu.classList.add("sombra");
    } else {
        menu.classList.remove("sombra");
    }
});