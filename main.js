//Menu Lateral

dh_menu_btn.onclick = function() {
    var div = document.getElementById('sidebar');
    div.style.display = 'block';
};

dh_closeMenu_btn.onclick = function() {
    var div = document.getElementById('sidebar');
    div.style.display = 'none';
};


//Carousel

const promos = [
    { id: "1", title: "Slide1", promo_banner: "./img/slide1.jpg" },
    { id: "2", title: "Slide2", promo_banner: "./img/slide2.jpg" },
    { id: "3", title: "Slide3", promo_banner: "./img/slide3.jpg" },
];
  
const carouselContainer = document.querySelector(".carousel-container");
const carouselControlsContainer = document.querySelector(
    ".carousel-controls-container"
);
  
for (const { id, title, promo_banner: banner } of promos) {
    const carouselItem = document.createElement("div");
    const carouselItemTitle = document.createElement("h2");
    const carouselNavBtn = document.createElement("a");
  
    carouselItem.className = "carousel-item animated";
    carouselItem.id = id;
    carouselItem.style.backgroundImage = `url(${banner})`;
    carouselItemTitle.textContent = title;
  
    carouselNavBtn.href = `#${id}`;
    carouselNavBtn.className = "carousel-control-btn";
    carouselNavBtn.textContent = "•";
  
    carouselItem.appendChild(carouselItemTitle);
    carouselContainer.appendChild(carouselItem);
  
    carouselControlsContainer.appendChild(carouselNavBtn);
}


//Filtros

const library = {
    books: [
      {
        title: "Poder do Hábito",
        description:
          "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental.",
        img_url:
          "./img/autoajuda.jpg",
        category: "Auto Ajuda",
        price: 19,
        price_range: "barato",
      },
      {
        title: "Harry Potter",
        description:
          "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. No dia de seu aniversário de 11 anos, Harry descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais.",
        img_url:
          "./img/fantasia1.jpg",
        category: "Fantasia",
        price: 70,
        price_range: "mais caro",
      },
      {
        title: "O Espadachim de Carvão",
        description:
          "KURGALA É UM MUNDO abandonado por Quatro Deuses. Adapak é filho de um deles. E agora ele está sendo caçado. Perseguido por um misterioso grupo de assassinos, o jovem de pele cor de carvão se vê obrigado a deixar a ilha sagrada onde cresceu e a desbravar um mundo hostil e repleto de criaturas exóticas. Munido de uma sabedoria ímpar, mas dotado de uma inocência rara, ele agora precisará colocar em prática todo o conhecimento que adquiriu.",
        img_url:
          "./img/fantasia2.jpg",
        category: "Fantasia",
        price: 70,
        price_range: "mais caro",
      },
      {
        title: "Perdido em Marte",
        description:
          "Há seis dias, o astronauta Mark Watney se tornou a décima sétima pessoa a pisar em Marte. E, provavelmente, será a primeira a morrer no planeta vermelho. Depois de uma forte tempestade de areia, a missão Ares 3 é abortada e a tripulação vai embora, certa de que Mark morreu em um terrível acidente. Ao despertar, ele se vê completamente sozinho, ferido e sem ter como avisar às pessoas na Terra que está vivo.",
        img_url:
          "./img/ficcao1.jpg",
        category: "Ficção Científica",
        price: 50,
        price_range: "caro",
      },
      {
        title: "As Melhores histórias de Viagens no Tempo",
        description:
          "Dentre as temáticas do universo scifi- , nenhuma delas é tão popular, envolvente e plural quanto a de viagens no tempo. Esta coletânea reúne, em um único volume e pela primeira vez no Brasil, dezoito contos de alguns dos gigantes da ficção científica, abrangendo cinco décadas, de 1940 a 1990, e incluindo desde (Um Som de Trovão), de Ray Bradbury, que inspirou o nome da famosa teoria do Efeito Borboleta.",
        img_url:
          "./img/ficcao2.jpg",
        category: "Ficção Científica",
        price: 40,
        price_range: "medio",
      },
      {
        title: "A Governanta",
        description:
          "Samantha sempre foi a filha exemplar que obedecia piamente ao pai. Mas, depois de seu noivado forçado com um homem assustador, decidiu dar um basta em seu sofrimento. Sua solução foi fugir para a Inglaterra e trabalhar como a governanta do pequeno Charles em Winterfields.",
        img_url:
          "./img/romance.jpg",
        category: "Romance",
        price: 10,
        price_range: "barato",
      },  
    ],
};

//Aplicação dos filtros
const filters = {
    category: "",
    price_range: "",
    title: "",
};

const categorySelect = document.getElementById("category");

const priceRangeSelect = document.getElementById("price_range");

const searchBar = document.getElementById("search_bar");

const searchButton = document.getElementById("search_button");

// Categoria
categorySelect.addEventListener("change", ({ target: { value } }) => {
    filters.category = value;
    loadBooksOnShowcase();
});
// Preço
priceRangeSelect.addEventListener("change", ({ target: { value } }) => {
    filters.price_range = value;
    loadBooksOnShowcase();
});
// Título
searchButton.addEventListener("click", () => {
    filters.title = searchBar.value;
    loadBooksOnShowcase();
});
  
// Atualização da página mantém filtros
const getPreviousFilters = () => {
    const searchBarValue = searchBar.value;
    const categoryValue = categorySelect.selectedOptions[0].value;
    const priceRangeValue = priceRangeSelect.selectedOptions[0].value;
  
    filters.category = categoryValue;
    filters.price_range = priceRangeValue;
    filters.title = searchBarValue;
};

// Aplicação dos filtros e retorno
const filterBooks = (books = library.books) =>
  books.filter((book) => {
    for (let filter in filters) {
      if (
        filters[filter] !== undefined &&
        filters[filter] !== "" &&
        (book[filter] === undefined ||
            !book[filter].toUpperCase().includes(filters[filter].toUpperCase()))
      ) {
        return false;
      }
    }

    return true;
  });

// Mostrar livros filtrados
const loadBooksOnShowcase = () => {
    
    const filteredBooks = filterBooks();
  
    const showcase = document.querySelector(".showcase");
    showcase.innerHTML = "";
  
    if (!filteredBooks.length) {
      const noBooks = document.createElement("p");
      noBooks.className = "no-books";
      noBooks.textContent = "Nenhum livro com esses critérios.";
      showcase.appendChild(noBooks);
    }
  
    for (const book of filteredBooks) {
      const card = document.createElement("div");
      card.className = "card";
  
      const bookImg = document.createElement("img");
      bookImg.src = book.img_url;
  
      const overlay = document.createElement("div");
      overlay.className = "overlay";
  
      const bookTitle = document.createElement("h2");
      bookTitle.textContent = book.title;
  
      const bookSinopsis = document.createElement("p");
      bookSinopsis.textContent = book.description;
  
      overlay.appendChild(bookTitle);
      overlay.appendChild(bookSinopsis);
  
      card.appendChild(bookImg);
      card.appendChild(overlay);
  
      showcase.appendChild(card);
    }
};
  
// first run to populate showcase
getPreviousFilters();
loadBooksOnShowcase();