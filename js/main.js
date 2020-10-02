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