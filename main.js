const button = document.getElementById("dh_menu_btn");
const menu = document.querySelector(".menu");

button.addEventListener("click", function() {
    menu.classList.toggle("menu_open");
})

