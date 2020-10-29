const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__items');
    const navLinks = document.querySelectorAll('.nav__items li');

    //Toggle nav
    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 5 + .3}s`
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });
};


navSlide();

$(document).ready(function(){
    $.cookieBar();
});
