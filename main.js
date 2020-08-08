const dictionary = [
  'fantasia', 'ajuda', 'ficcao', 'romance',
  'amor', 'odio', 'python', 'javascript',
  'religiao', 'java'
];
let dataset    = [];

const asyncQuery = (query, callback) => {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  dataset = [];

  $.ajax(URL, {
    type: "GET",
    statusCode: {
      200: response => {
        (response.items).map( infoBook => {

          const { title,
                  description,
                  imageLinks: { thumbnail },
                  pageCount: fictitiousPrice } = infoBook.volumeInfo
  
          const currentBook = {
            title,
            description,
            thumbnail,
            fictitiousPrice: fictitiousPrice / 10
          }
  
          if ( fictitiousPrice )
            dataset.push(currentBook);
        })

        callback(dataset);
      }
  
    }
  });
}

const almostRandomWord = (arr) => {
  const size = arr.length - 1;
  const index = Math.trunc( Math.random() * size );

  return arr[index];
}

const renderBooks = (dataset) => {
  const showcaseElement = $('.showcase').empty();
  
  dataset.map( book => {
    showcaseElement.append(`
    <div class="card">
      <img src=${ book.thumbnail } width=300 height=400>
      <div class="overlay">
        <p> R$: ${ book.fictitiousPrice } </p>
      </div>
    </div>
    `)
  })
}

const renderCarousel = (dataset) => {
  const size = dataset.length;
  let ind    = 0;

  return () => {
    const carouselElement = $('#dh_carousel').empty()
    for ( let i = 0; i < 5; ++i ) {
      carouselElement.append(`
      <div class="carousel_item">
        <img src=${ dataset[ (ind + i) % size ].thumbnail } width=200 height=300>
      </div>
      `)
    }

    ind = ( 1 + ind ) % size ;
  }
}

const handleMenu = () => {
  const menuElement =  $("#menu")[0]

  if ( menuElement.className === "opened" ) {
    menuElement.className = "closed";
  } else {
    menuElement.className = "opened";
  } 
}

const handleSearch = () => {
  const query = $("#search_bar")[0].value;
  
  asyncQuery(query, (dataset) => {
    handleSearchPrice();
  })
}

const handleSearchPrice = () => {
  const priceRange = $("#price_range option:selected").val()

  const filtered = dataset.filter(book => {
    if ( priceRange === 'barato' )
      return book.fictitiousPrice >= 1 && book.fictitiousPrice <= 20
    if ( priceRange === 'medio')
      return book.fictitiousPrice > 20 && book.fictitiousPrice <= 40
    if ( priceRange === 'caro')
      return book.fictitiousPrice > 40 && book.fictitiousPrice <= 60
    else if ( priceRange === 'mais caro' )
      return book.fictitiousPrice > 60;
    return true;
  });

  renderBooks(filtered);
}

const initialWord = almostRandomWord(dictionary);

asyncQuery(initialWord, (dataset) => {
  const handleCarousel = renderCarousel(dataset);
  handleCarousel();
  
  setInterval(handleCarousel, 1500);
  renderBooks(dataset);
})

