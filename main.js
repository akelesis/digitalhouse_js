const btnOpen = document.getElementById("dh_menu_btn");
const lista = document.getElementById("menu-opt");

btnOpen.addEventListener("mouseover", () => {
    lista.style.width = "250px";
})

lista.addEventListener("mouseleave", () => {
    lista.style.width = "0px";
})

function slide1(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/ctc.jpg')";
    setTimeout("slide2()", 5000)
    }
    
function slide2(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/jv.jpg')";
    setTimeout("slide3()", 5000)
    }
    
function slide3(){
    document.getElementById('dh_carousel').style.backgroundImage = "url('img/sda.jpg')";
    setTimeout("slide1()", 5000)
    }

document.getElementById('img01').src = "./img/image001.jpg";
document.getElementById('img02').src = "./img/image002.jpg";
document.getElementById('img03').src = "./img/image003.jpg";
document.getElementById('img04').src = "./img/image004.jpg";
document.getElementById('img05').src = "./img/image005.jpg";
document.getElementById('img06').src = "./img/image006.jpg";

/* function filterItems(query) {
    return name_movie.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
 */

function teste ()
{
    const filter = {
        nameBook:   document.getElementById("search_bar").value.toLowerCase(),
        category:   document.getElementById("category").value,
        price_range:document.getElementById("price_range").value
    };
 
    const result= books.filter(function(item) {
        for (var key in filter) {
            if (filter[key] != ""){
                if (item[key] != filter[key])
                return false;         
            }  
        }
        return true;
    });
    console.log(result) 
}

let books = [
    {
        nameBook: "um",
        category: "Romance",
        price:    19.50,
        price_range: "barato"
    },
    {
        nameBook: "dois",
        category: "Auto Ajuda",
        price:    30.10,
        price_range: "medio"
    },
    {
        nameBook: "tres",
        category: "Fantasia",
        price:    17.50,
        price_range: "barato"
    },
    {
        nameBook: "quatro",
        category: "Fantasia",
        price:    19.99,
        price_range: "barato"
    },
    {
        nameBook: "cinco",
        category: "Ficção Científica",
        price:    50.80,
        price_range: "caro"
    },
    {
        nameBook: "seis",
        category: "Romance",
        price:    62.50,
        price_range: "mais caro"
    }
];