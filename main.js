const opennav = document.getElementById("openNav");
const closenav = document.getElementById("closebtn");
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  opennav.addEventListener("click",openNav);
  closenav.addEventListener("click",closeNav);