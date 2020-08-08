const carrossel = document.querySelector("#dh_carousel");
const category = document.querySelector('#category');
const price_range = document.querySelector('#price_range');
const search_bar = document.querySelector('#search_bar');

var rotativo = 0;

var slides = function() {
	rotativo++;
	carrossel.style.backgroundImage = "url('img/carrossel_" + rotativo + ".jpg')";
	carrossel.style.backgroundRepeat = 'no-repeat'; 
	setTimeout(slides, 3000);
	if (rotativo == 3)
		rotativo = 0;
}
slides();

/*
id = string? 
preco = string? 
sem tempo para fazer um código mais elaborado
*/
var livros = [
	{
		id: '1',
		titulo : 'Livro Corrida', 
		tipo: 'Auto Ajuda',
		preco : 'barato',
		texto : 'Livro para amantes de carros de corrida :p'
	},{
		id: '2',
		titulo : 'Livro Brigada', 
		tipo: 'Fantasia',
		preco : 'caro', 
		texto : 'Livro para quem gosta de brigada de nada k'
	},{
		id: '3',
		titulo : 'Sai de Baixoo', 
		tipo: 'Auto Ajuda',
		preco : 'medio', 
		texto : 'Sem ideias para escrever as mensagens ....'
	},{
		id: '4',
		titulo : 'Identando cód',
		tipo: 'Romance',
		preco : 'barato',
		texto : 'Todas as mensagens tem o mesmo tamanho kkk'
	},{
		id: '5',
		titulo : 'Corrigindo ak',
		tipo: 'Ficção Científica',
		preco : 'mais caro',
		texto : 'Algumas descrições não tem nada a ver ....'
	},{
		id: '6',
		titulo : 'Ultimo livro!', 
		tipo: 'Romance',
		preco : 'caro',
		texto : 'Sem ideias para as descrições dos livros k'
	},
]

function buscar_livro() {
	console.log(search_bar.value);
	livros.forEach(livro => {
		if (livro.titulo.toLowerCase().match(search_bar.value.toLowerCase())) {
			$("#card" + livro.id).show();
	   	} else {
			$("#card" + livro.id).hide();
		}	
	});
}

$(document).ready(function() {
	livros.forEach(livro => {
		$(".showcase").append(`<div class="card" id='card`+ livro.id +`'>
			<img src="./img/300x400.png">
			<div class="overlay">
				<h2>`+ livro.titulo + `</h2>
				<p>`+ livro.texto +`</p>
				<p>`+ livro.preco +`</p>
				<p>`+ livro.tipo +`</p>
			</div>
		</div>`);
	});

	category.addEventListener('change', function() {
		var option = this.selectedOptions[0];
	  	var texto = option.textContent;
		
		livros.forEach(livro => {
			if (texto != livro.tipo) {
				$("#card" + livro.id).hide();
		 	 } else {
				$("#card" + livro.id).show();
		  	}	
	  	});
  	});

  	price_range.addEventListener('change', function() {
		var option = this.selectedOptions[0];
  		var texto = option.value;
	
  		livros.forEach(livro => {
	  		if (texto != livro.preco) {
			  	$("#card" + livro.id).hide();
	 		} else {
			  	$("#card" + livro.id).show();
		  	}	
 	 	});
	});
})
