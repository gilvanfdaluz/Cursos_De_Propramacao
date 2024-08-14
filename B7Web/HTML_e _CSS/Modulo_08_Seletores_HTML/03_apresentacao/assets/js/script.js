document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menuMobile');
    const menu = document.querySelector('.menu ul');

    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
