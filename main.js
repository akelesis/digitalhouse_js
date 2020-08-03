window.addEventListener('load', (event) => {
  // Menu
  const buttonMenu = document.querySelector('#dh_menu_btn');
  const menu = document.querySelector('#menu');
  menu.style.right = '-240px';

  buttonMenu.addEventListener('click', () => {
    menu.style.right === '-240px' ? menu.style.right = '0px' : menu.style.right = '-240px';
  });

  // Carousel
  const imgs = [
    {
      src: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/21873492/2707_tv_especial_hp_aniversario.png?v=637314681892770000',
      alt: 'Comemore o aniversário do bruxo mais famoso aproveitando descontos',
    },
    {
      src: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/21923920/2707_tv_dia-dos-pais-livros.png?v=637316228911430000',
      alt: 'Dia dos pais, presentes e descontos para pais e filhos com até 50%',
    },
    {
      src: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/21561311/2407_tv_queridinhos.png?v=637312219345530000',
      alt: 'Os queridinhos dos leitores com até 60% de desconto',
    },
  ];

  const carousel = document.querySelector('#dh_carousel');
  
  carouselControl(1);
  
  function carouselControl(i) {
    const nextImg = document.createElement('img');
    nextImg.setAttribute('src', imgs[i].src);
    nextImg.setAttribute('alt', imgs[i].alt);
    nextImg.setAttribute('id', `img_carousel_${i}`);
    carousel.appendChild(nextImg);

    setTimeout(() => {
      carousel.scrollBy(carousel.clientWidth, 0);
    }, 4000 );

    setTimeout(() => {
      carousel.removeChild(document.querySelector('#dh_carousel img'));
      carousel.scrollBy(0, 0);
      i === imgs.length - 1 ?carouselControl(0) : carouselControl(i + 1);
    }, 5000);
  }

  // Books
  const books = [
    {
      title: 'Harry Potter e O Prisioneiro De Azkaban',
      description: 'As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria...',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41kT95iZ81L._SX346_BO1,204,203,200_.jpg',
      price: '49,90',
      priceRange: 'caro',
      category: 'Fantasia'
    },
    {
      title: 'Harry Potter e A Ordem da Fênix',
      description: 'Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranha família no mundo dos trouxas. Também continua contando com Rony Weasley e Hermione Granger...',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41SknlxiqHL._SX346_BO1,204,203,200_.jpg',
      price: '49,90',
      priceRange: 'caro',
      category: 'Fantasia'
    },
    {
      title: 'Harry Potter e O Cálice De Fogo',
      description: 'Nesta aventura, o feiticeiro cresceu e está com 14 anos. O início do ano letivo de Harry Potter reserva muitas emoções, mágicas, e acontecimentos inesperados, além de um novo torneio...',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81nTLN-kz7L.jpg',
      price: '39,90',
      priceRange: 'medio',
      category: 'Fantasia'
    },
    {
      title: 'Star Wars - A Resistência Renasce',
      description: 'Batalhas serão travadas, alianças serão forjadas e a Resistência renascerá. Nesta história que se passa entre os filmes Star Wars: Os Últimos Jedi (2017) e o aguardado Star Wars: A Ascensão...',
      img: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12117902/1009199683.jpg?v=637142280337700000',
      price: '64,90',
      priceRange: 'mais caro',
      category: 'Ficção Científica'
    },
    {
      title: 'Contra Todas As Probabilidades Do Amor',
      description: 'Sejam bem-vindos ao acampamento Pádua. Um retiro de verão para adolescentes problemáticos. Mas não se tratam de problemas comuns...',
      img: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12111630/1006545610.jpg?v=637142257832070000',
      price: '1,00',
      priceRange: 'barato',
      category: 'Romance'
    },
    {
      title: 'A Sutil Arte De Ligar O Foda-Se',
      description: 'Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo. Chega de se sentir inferior por não ver o lado bom...',
      img: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/3241025/1008449071.jpg?v=637034105101630000',
      price: '2,90',
      priceRange: 'barato',
      category: 'Auto Ajuda'
    },
  ];

  const showcase = document.querySelector('.showcase');

  showBooks(books);

  // Search
  const searchButton = document.getElementById('search_button');
  const searchBar = document.getElementById('search_bar');

  searchButton.addEventListener('click', () => {
    if(searchBar.value) {
      const foundBooks = books.filter(book => book.title.toLowerCase().includes(searchBar.value.toLowerCase()));

      searchBar.value = '';

      showBooks(foundBooks);
    } else {
      showBooks(books);
    }
  });

  searchBar.addEventListener('keyup', (event) => {
    const key = event.keyCode;

    if(key === 13) {
      const foundBooks = books.filter(book => book.title.toLowerCase().includes(searchBar.value.toLowerCase()));

      searchBar.value = '';

      showBooks(foundBooks);
    }
  });

  // Filter by category
  const selectCategory = document.getElementById('category');

  selectCategory.addEventListener('change', () => {
    const foundBooks = books.filter(book => book.category === selectCategory.value);

    selectCategory.value = '';
    
    showBooks(foundBooks);
  });

  // Filter by price
  const selectPrice = document.getElementById('price_range');

  selectPrice.addEventListener('change', () => {
    const foundBooks = books.filter(book => book.priceRange === selectPrice.value);

    selectPrice.value = '';
    
    showBooks(foundBooks);
  });

  function showBooks(booksList) {
    showcase.innerHTML = '';

    booksList.map(book => {
      const newBook = document.createElement('div');
      
      newBook.setAttribute('class', 'card');
      
      newBook.innerHTML = `
        <img src="${book.img}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>${book.description}</p>
        <span>R$ ${book.price}</span>
      `;
  
      showcase.appendChild(newBook);
    });
  }
});