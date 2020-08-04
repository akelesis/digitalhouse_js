
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const amount = document.querySelectorAll('.caroussel_banner li');
let position = 0;

function carousselBanner(value) {

	let active = document.querySelector('.active');

	if (value > 0) {
		active.removeAttribute('class');
		amount[value].setAttribute('class','active');
	} else {
		active.removeAttribute('class');
		amount[value].setAttribute('class','active');
	}

}

btnLeft.addEventListener('click',()=> {	
	position--;

	if (position < 0) {
		position = 2;
		carousselBanner(position);
	} else {
		carousselBanner(position);
	}
	
});

btnRight.addEventListener('click',()=> {
	autoCarousel();
});

function autoCarousel() {
	position++;

	if (position < amount.length) {
		carousselBanner(position);
	} else {
		position = 0;
		carousselBanner(position);
	}	
}


const time = setInterval(function(){ autoCarousel()}, 5000);

//ajax
const listings = 'listagens.json';
const showcase = document.querySelector('.showcase');

fetch(listings, {method:'GET'})
  .then(response => response.json())
  .then(json => {
  	let card = '';
  	for (let i in json) {

  		card +=`<div class="card">
                	<img src="./img/${json[i].images}">
                	<div class="overlay">
                	</div>
            	</div>`;
  	}

  	showcase.innerHTML = card;

  });

//filter
const category = document.querySelector('#category');

category.addEventListener('change', ()=>{

	if (category.value !== '') {
		
		fetch(listings,{method:'GET'})
		  .then(response => response.json())
		  .then(json => {
		  	let card = '';
			  	for (let i in json) {

			  		if (json[i].name === category.value) {
				  		card +=`<div class="card">
				  		<img src="./img/${json[i].images}">
				  		<div class="overlay">
				  		</div>
				  		</div>`;
			  		}
			  	}

			  	showcase.innerHTML = card;
		});
	}		  
});

const price_range = document.querySelector('#price_range');

price_range.addEventListener('change', ()=>{

	if (price_range.value !== '') {
		
		fetch(listings,{method:'GET'})
		  .then(response => response.json())
		  .then(json => {
		  	let card = '';
			  	for (let i in json) {

			  		if (json[i].type === price_range.value) {
				  		card +=`<div class="card">
				  		<img src="./img/${json[i].images}">
				  		<div class="overlay">
				  		</div>
				  		</div>`;
			  		}
			  	}

			  	showcase.innerHTML = card;
		});
	}		  
});


function search() {
	let search_bar = document.querySelector('#search_bar');

	if (search_bar.value !== '') {

		fetch(listings,{method:'GET'})
		  .then(response => response.json())
		  .then(json => {
		  	let card = '';
			  	for (let i in json) {

			  		if (json[i].book === search_bar.value) {
				  		card +=`<div class="card">
				  		<img src="./img/${json[i].images}">
				  		<div class="overlay">
				  		</div>
				  		</div>`;
			  		}
			  	}

			  	showcase.innerHTML = card;
		});
	}  
}
	


