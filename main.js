const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

function showMenu(){

    if(menuSection.getAttribute('active') === 'true'){
        
        return menuSection.setAttribute('active', 'false');
    }

    return menuSection.setAttribute('active', 'true');
}

menuButton.addEventListener('click', showMenu);