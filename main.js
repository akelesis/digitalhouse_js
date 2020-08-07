document.addEventListener("DOMContentLoaded", async () => {
  // Carousel
  const carouselItems = document.querySelectorAll('.carousel_item');
  const left = document.getElementById('left');
  const right = document.getElementById('right');

  let activeItem = 0;

  setInterval(() => {
    carouselItems.forEach(item => item.setAttribute('hidden', 'hidden'))
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].setAttribute('hidden', 'hidden')
    }
    activeItem < carouselItems.length - 1 ? activeItem++ : activeItem = 0;
    carouselItems[activeItem].removeAttribute('hidden')
  }, 3000)

  left.addEventListener('click', () => {
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].setAttribute('hidden', 'hidden')
    }
    activeItem === 0 ? activeItem = carouselItems.length - 1 : activeItem--;
    carouselItems[activeItem].removeAttribute('hidden')
  })

  right.addEventListener('click', () => {
    carouselItems.forEach(item => item.setAttribute('hidden', 'hidden'))
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].setAttribute('hidden', 'hidden')
    }
    activeItem < carouselItems.length - 1 ? activeItem++ : activeItem = 0;
    carouselItems[activeItem].removeAttribute('hidden')
  })

  // Sidenav

  const sidenavBtn = document.getElementById('dh_menu_btn');
  const sidenav = document.getElementById('side_nav');
  let open = false;
  sidenavBtn.addEventListener('click', () => {
    if (open) {
      sidenav.style.transform = "translateX(100%)"
      sidenavBtn.style.position = "relative";
      sidenavBtn.style.right = "0";
    } else {
      sidenav.style.transform = "translateX(0)"
      sidenavBtn.style.position = "fixed";
      sidenavBtn.style.right = "20px";
    }
    open = !open;
  })

  // Books

  const showcase = document.getElementById('showcase');
  const books = await fetch('books.json')
    .then(res => res.json())

  function loadBooks(books) {
    while (showcase.firstChild) {
      showcase.removeChild(showcase.lastChild);
    }
    books.forEach(book => {
      let card = document.createElement('div');
      card.classList.add('card');
      let cardImg = document.createElement('img');
      cardImg.setAttribute('src', `./${book.img}`)
      let overlay = document.createElement('div');
      overlay.classList.add('overlay');
      let title = document.createElement('h2');
      title.appendChild(document.createTextNode(book.title));
      let description = document.createElement('p');
      description.appendChild(document.createTextNode(book.description));

      card.appendChild(cardImg);
      overlay.append(title, description);
      card.appendChild(overlay);

      showcase.append(card);
    })
  }
  loadBooks(books)

  // Search and filter

  let search = document.getElementById('search_bar');
  const searchBtn = document.getElementById('search_button');
  const category = document.getElementById('category');
  const price = document.getElementById('price_range');

  price.onchange = (e) => {
    e.target.value === '' ?
      loadBooks(books)
      :
      loadBooks(books.filter(book => {
        switch (e.target.value) {
          case 'cheap':
            return book.price >= 1 && book.price <= 20
          case 'average':
            return book.price >= 21 && book.price <= 40
          case 'expensive':
            return book.price >= 41 && book.price <= 60
          default:
            return book.price >= 61
        }
      }))
  }

  category.onchange = (e) => {
    e.target.value === '' ?
      loadBooks(books)
      :
      loadBooks(books.filter(book => book.category === e.target.value))
  }

  searchBtn.onclick = () => {
    search.value === '' ?
      loadBooks(books)
      :
      loadBooks(books.filter(book => book.title.toLowerCase().search(search.value) >= 0))
  }


});

