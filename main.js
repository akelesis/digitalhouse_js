const dataset    = [];
const dictionary = [
  'fantasia', 'ajuda', 'ficcao', 'romance',
  'amor', 'odio', 'python', 'javascript',
  'religiao', 'java'
];

const almostRandomWord = ( arr ) => {
  const size = arr.length - 1;
  const index = Math.trunc( Math.random() * size );
  console.log(arr[index])
  return arr[index];
}

const URL = `https://www.googleapis.com/books/v1/volumes?q=${ almostRandomWord( dictionary ) }`

const renderBooks = ( dataset ) => {
  const showcaseElement = $('.showcase').empty()

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
const renderCarousel = ( dataset ) => {
  const size = dataset.length;
  let ind    = 0;

  return () => {
    const carouselElement = $('#dh_carousel').empty()
    for ( let i = 0; i < 5; ++i ) {
      carouselElement.append(`
      <div class="carousel_item">
        <img src=${ dataset[ (ind + i) % size ].thumbnail } width=250 height=350>
      </div>
      `)
    }

    ind = ( 1 + ind ) % size ;
  }
}

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
          dataset.push( currentBook );
      })

      const handleCarousel = renderCarousel( dataset );
      handleCarousel();
      setInterval( handleCarousel, 1500 );

      renderBooks( dataset );
    }

  }
});

