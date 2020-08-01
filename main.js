function openNav() {
    document.getElementById("menu").style.width = "250px";
  }

function closeNav() {
    document.getElementById("menu").style.width = "0px";
}

$('#dh_carousel').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true
  });