document.getElementById("search-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

function toggleMainMenu() {
  const mainMenu = document.getElementById("main-menu");
  const mainMenuCurrentClasses = mainMenu.getAttribute("class");
  console.log(mainMenuCurrentClasses);
  let newClasses = "";
  if (mainMenuCurrentClasses.includes("menu-hidden")) {
    newClasses = mainMenuCurrentClasses.replace("menu-hidden", "menu-shown");
  } else if (mainMenuCurrentClasses.includes("menu-shown")) {
    newClasses = mainMenuCurrentClasses.replace("menu-shown", "menu-hidden");
  }

  replaceClasses(mainMenu, newClasses);
}
