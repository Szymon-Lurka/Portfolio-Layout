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
            body.classList.add('active');
            nav.classList.add('active');
            nav.classList.remove('close');
            listItem.forEach(list => {
                list.classList.add('active');
            })
        } else {
            menuOpen = false;
            menuButton.classList.remove('open');
            body.classList.remove('active');
            nav.classList.remove('active');
            nav.classList.add('close');

            listItem.forEach(list => {
                list.classList.remove('active');
            })
            listItem.forEach(list => {
                list.classList.add('close');
            })
        }
    } else return;

}
menuButton.addEventListener('click', burger);

const menuArray = [document.querySelector('.header '), document.querySelector('.aboutUs'), document.querySelector('.exp'), document.querySelector('.portfolio'), document.querySelector('.contact')];
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', () => {
        menuArray[i].scrollIntoView({
            behavior: 'smooth'
        })
        setTimeout(() => {
            menuOpen = false;
            nav.classList.remove('active');
            body.classList.remove('active');
            menuButton.classList.remove('open');
            listItem.forEach(list => {
                list.classList.remove('active');
            })
        }, 600)
    })
}

const buttonSrc = document.getElementById('changeSrc');
window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        buttonSrc.src = 'svg/webDesign.svg';
    } else {
        buttonSrc.src = 'svg/webDesign-white.svg';
    }
})