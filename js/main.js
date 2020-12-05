(function(){
    'use strict';

    const navigateTopArrowEl = document.querySelector('.navigate__top');
    const menuButtonEl = document.querySelector('.menu__button');
    const closeMenuButtonEl = document.querySelector('.navigation__menu_close_button');

    
    function scrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    function showMenu(e) {
        e.preventDefault();
        const navigationMenuEl = document.querySelector('.header__navigation_menu');
        navigationMenuEl.style.transform = 'translateX(0)';
    }

    function closeMenu(e) {
        e.preventDefault();
        const navigationMenuEl = document.querySelector('.header__navigation_menu');
        navigationMenuEl.style.transform = 'translateX(-120%)'
    }

    navigateTopArrowEl.addEventListener('click', scrollTop);
    menuButtonEl.addEventListener('click', showMenu);
    closeMenuButtonEl.addEventListener('click', closeMenu);
})()