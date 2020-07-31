function openMenu() {
    let buttonMenu = document.getElementById("dh_menu_btn");
    if(buttonMenu.className == 'side-menu-off') openNav();
    else closeNav();
    
    /* Set the width of the side navigation to 250px */
    function openNav() {
        buttonMenu.className = 'side-menu-on';
        buttonMenu.style.position = "fixed";
        buttonMenu.style.top = "15px";
        buttonMenu.style.right = "20px";

        verifyIcon();
        
        document.getElementById("mySidenav").style.width = "250px";
    }
      
    /* Set the width of the side navigation to 0 */
    function closeNav() {
        buttonMenu.className= 'side-menu-off';
        buttonMenu.removeAttribute('style', 'position');

        verifyIcon();

        document.getElementById("mySidenav").style.width = "0";
    }

    function verifyIcon() {
        let buttonMenuIcon = document.getElementById("btnMenu");
        (buttonMenuIcon.className == "fa fa-bars")? 
            buttonMenuIcon.className = "fa fa-times" : buttonMenuIcon.className = "fa fa-bars";
    }
}



