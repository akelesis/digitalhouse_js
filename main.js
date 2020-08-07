const slider = document.getElementById("dh_carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const searchInput = document.getElementById("search_bar");
const sectionShowCase = document.getElementsByClassName("showcase")[0];
const searchBtn = document.getElementById("search_button");
const selectCategory = document.getElementById("category");

function openNav() {
    document.getElementById("my-sidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("my-sidenav").style.width = "0";
}

const bookList = [
    {
        title: "O Senhor dos anéis",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "./img/fantasia01.jpeg",
        value: 0.0,
        genre:"Fantasia"
    },

    {
        title: "O mundo mágico de asterium",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "./img/fantasia02.jpeg",
        value: 0.0,
        genre:"Fantasia"
    },

    {
        title: "As melhores histórias de viagem no tempo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "./img/ficcao01.jpg",
        value: 0.0,
        genre:"Ficção Científica"
    },

    {
        title: "As crônicas de Marte",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "./img/ficcao02.jpg",
        value: 0.0,
        genre:"Ficção Científica"
    },

    {
        title: "A última música",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "./img/romance01.jpg",
        value: 0.0,
        genre:"Romance"
    },

    {
        title: "Intensa paixão",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: "./img/romance02.jpg",
        value: 0.0,
        genre:"Romance"
    }
];

//cria elemento de imagem e coloca na pagina
const initialImgCarosel = document.createElement("img");
initialImgCarosel.setAttribute("src", bookList[0].img);
initialImgCarosel.style.height = "200px";
initialImgCarosel.style.width = "200px";
slider.appendChild(initialImgCarosel);

//botoes do carrossel
let counter = 0;

nextBtn.addEventListener("click", () => {
    counter = counter >= bookList.length - 1 ? bookList.length - 1 : counter + 1;
    initialImgCarosel.setAttribute("src", bookList[counter].img);
});

prevBtn.addEventListener("click", () => {
    counter = counter <= 0 ? 0 : counter - 1;
    initialImgCarosel.setAttribute("src", bookList[counter].img);
});

//filtro por nome
function nameFilter() {

    sectionShowCase.innerHTML = "";

    for(let i = 0; i < bookList.length; i++) {
        if(bookList[i].title === searchInput.value){
            const divCard = document.createElement("div");
            divCard.setAttribute("class", "card");

            const imgLocal = document.createElement("img");
            imgLocal.setAttribute("src", bookList[i].img);
            imgLocal.setAttribute("width", "300px");
            imgLocal.setAttribute("height", "400px");

            const divOverlay = document.createElement("div");
            divOverlay.setAttribute("class", "overlay");

            const title = document.createElement("h2");
            title.textContent = bookList[i].title;

            const description = document.createElement("p");
            description.textContent = bookList[i].description;

            divOverlay.appendChild(title);
            divOverlay.appendChild(description);

            divCard.appendChild(imgLocal);
            divCard.appendChild(divOverlay);

            sectionShowCase.appendChild(divCard);
        }
    }
}

searchBtn.addEventListener("click",  nameFilter);
