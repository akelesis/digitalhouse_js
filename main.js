const btnOpen = document.getElementById("dh_menu_btn");
const btnClose = document.getElementById("btnclose");
const lista = document.getElementById("menu-opt");

btnOpen.addEventListener("click", () => {
    lista.style.width = "250px";
})

btnClose.addEventListener("click", () => {
    lista.style.width = "0";
})
