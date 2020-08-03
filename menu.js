const mainMenu = document.getElementById("main-menu");

function openMainMenu() {
  replaceClasses(mainMenu, "side-menu-wrapper menu-shown");
}

function closeMainMenu() {
  replaceClasses(mainMenu, "side-menu-wrapper menu-hidden");
}
