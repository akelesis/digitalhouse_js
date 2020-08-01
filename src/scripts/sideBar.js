const sideBarButton = document.querySelector('header #dh_menu_btn');

const fade = document.querySelector('.fade');

const body = document.querySelector('body');

const sideBar = document.querySelector('.sidebar');

const className = sideBar.className;

const showSideBar = () => {
    body.style.overflow = 'hidden';

    sideBar.className = 'sidebar active';

    fade.className = 'fade in';
}

const hideSideBar = () => {
    body.style.overflow = 'auto';

    sideBar.className = 'sidebar';

    fade.className = 'fade out';
}

sideBarButton.addEventListener('click', () => {
    if (className === 'sidebar') showSideBar();
    else if (className === 'sidebar active') hideSideBar();
    else throw new Error(`Invalid className: ${className}`);
})

fade.addEventListener('click', hideSideBar);