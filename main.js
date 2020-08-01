const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

function showMenu(event){
    menuSection.setAttribute('active', 'true');
}

menuButton.addEventListener('click', showMenu);