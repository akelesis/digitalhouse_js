// menu lateral
const btnMenu = document.getElementById("dh_menu_btn");
const lateral = document.getElementById("lateral");

btnMenu.addEventListener("click", () => {
  const { style } = lateral;

  if (style.overflowY) {
    style.overflowY = "";
  } else {
    style.overflowY = "scroll";
  }

  if (style.transform === "translateX(-370px)") {
    style.transform = "translateX(370px)";
  } else {
    style.transform = "translateX(-370px)";
  }
});
