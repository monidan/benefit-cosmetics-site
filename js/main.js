(function(){
    'use strict';

    const navigateTopArrowEl = document.querySelector('.navigate__top');
    
    function scrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    navigateTopArrowEl.addEventListener('click', scrollTop);
})()