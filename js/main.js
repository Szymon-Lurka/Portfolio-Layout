const menuButton = document.querySelector('.menuButton');
const nav = document.querySelector('.nav');
const listItem = [...document.querySelectorAll('.nav__listItem')]
const body = document.body;
let menuOpen = false;
let isThrottled = false;
burger = () => {
    //Protection against multiple times of clicking
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(() => {
        isThrottled = false;
    }, 500);
    if (window.innerWidth < 1024) {
        if (!menuOpen) {
            menuOpen = true;
            menuButton.classList.add('open');
            nav.classList.add('active');
            nav.classList.remove('close');
        } else {
            menuOpen = false;
            menuButton.classList.remove('open');
            nav.classList.remove('active');
            nav.classList.add('close');
        }
    } else return;

}
menuButton.addEventListener('click', burger);

const menuArray = [document.querySelector('.header '), document.querySelector('.aboutUs'), document.querySelector('.exp'), document.querySelector('.portfolio'), document.querySelector('.contact')];

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', () => {
        setTimeout(() => {
            menuArray[i].scrollIntoView({
                behavior: 'smooth'
            })
        }, 300);


        menuOpen = false;
        nav.classList.remove('active');
        nav.classList.add('close');
        menuButton.classList.remove('open');
    })
};

const buttonSrc = document.getElementById('changeSrc');
const navImage = document.querySelector('.nav__background');
window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        buttonSrc.src = 'svg/webDesign.svg';
        navImage.classList.remove('img-none')
    } else {
        buttonSrc.src = 'svg/webDesign-white.svg';
        navImage.classList.add('img-none')
    }
})

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 1023) {

        navImage.classList.add('img-none');
        buttonSrc.src = 'svg/webDesign-white.svg'

    }
})

const portfolioImages = [...document.querySelectorAll('.portfolio__container-wrapper')];

portfolioImages.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        setTimeout(() => {
            item.classList.remove('active');
        }, 4000)
    })
})

setTimeout(function () {
    $('.loader__bg').fadeToggle()
}, 2500);