const opennav = document.getElementById("openNav");
const closenav = document.getElementById("closebtn");
const imagens = ["https://awebic.com/wp-content/uploads/2018/09/20180919-livros-autoajuda-2018-1.png",
"https://www.writersafterdark.com/wp-content/uploads/2019/12/WritersAD-42.jpg",
"https://4.bp.blogspot.com/-YAJTIc0y0PU/Vm96JDylwxI/AAAAAAAADjk/zT9tsftTCoc/s1600/hpcapas.jpg",
"https://bookhub.online/sites/default/files/romance-promo.jpg"];

const img = document.getElementById("img");
let contador=0;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
  opennav.addEventListener("click",openNav);
  closenav.addEventListener("click",closeNav);
  setInterval(function(){
    if(contador<4){
        img.setAttribute("src",imagens[contador]);
        contador++;
    }
    else{
        contador =0;
    }
},4000);