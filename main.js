// Add event in the dh_menu_btn
document.querySelector("#dh_menu_btn").addEventListener("click", expandirMenuLateral)
let navbar = document.querySelector(".dh_menu_lateral");
let body = document.querySelector("#body");

// start expanded menu
function expandirMenuLateral(){
    let expandedMore = 25 + '%';
    let expandedLess = 0 + '%';

    if (navbar.style.width == 0 || navbar.style.width == 0 + '%'){
        body.style.marginRight = expandedMore;
        navbar.style.width = expandedMore;

        body.style.transition = 0.2+'s';
        navbar.style.transition = 0.2+'s';

    } else {
        body.style.marginRight = expandedLess;
        navbar.style.width = expandedLess;
    }
}
// end expanded menu