const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__links');
const main = document.querySelector('.main')
    
burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    });
    
main.addEventListener('click',()=>{
        nav.classList.toggle('nav-active',false);
        burger.classList.toggle('toggle',false);
        menuContent.classList.toggle('menu-active', false);

    
})

const btnMenu = document.querySelector('#menu'),
    menuContent = document.querySelector('.menu-content');


btnMenu.addEventListener('click', ()=>{
    menuContent.classList.toggle('menu-active');
})

const menu = document.querySelector('.nav');
window.addEventListener('scroll',()=>{
    let windowPosition = window.scrollY > 0;
    menu.classList.toggle('scroll-active', windowPosition);
})

window.sr = ScrollReveal();

    sr.reveal('.animation', {
        duration: 1600,
        easing:'cubic-bezier(.63,1.99,.82,.88)',
        origin: 'bottom',
        distance: '-150px'
    })
    sr.reveal('.animation-2', {
        duration: 2000,
        easing:'cubic-bezier(.63,1.99,.82,.88)',
        origin: 'left',
        distance: '-200px'
    })
    sr.reveal('.animation-3', {
        duration: 1500,
        origin: 'bottom',
        distance: '-150px'
    })


