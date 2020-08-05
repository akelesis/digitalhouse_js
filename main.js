const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

const carouselSection = document.querySelector('section#dh_carousel');
const carouselLabel = document.querySelector('h2.carousel_label');
const carouselParagraph = document.querySelector('p.carousel_paragraph');

const filtersInputBookName = document.querySelector('input#search_bar');
const filtersSelectCategory = document.querySelector('select#category');
const filtersSelectPrice = document.querySelector('select#price_range');

/* Conteúdos do carrossel */
const carouselImgSources = ["./img/carousel/01_1024px.png", "./img/carousel/02_1140px.jpg"];
const carouselTextContents = [
    {
        label: "Lorem it", 
        paragraph: "A prática cotidiana prova que o surgimento do comércio virtual aponta para a melhoria das diretrizes de desenvolvimento para o futuro.", 
        color:"white"
    },
    {
        label: "Uti", 
        paragraph:"As experiências acumuladas demonstram que o entendimento das metas propostas aponta para a melhoria do sistema de participação geral.", 
        color:"black"
    }
];

/* Variáveis de controle de índices dos conteúdos de carrossel(imagem/label) */
let carouselControl = 0;

/* Conteúdos da sessão de produtos */
const books = [
    {name: "Alooo", price: 30.50, category: "Auto Ajuda"},
    {name: "Olaaaa", price: 22.50, category: "Romance"},
    {name: "Helloooo", price: 42.50, category: "Auto Ajuda"},
    {name: "b", price: 25.50, category: "Auto Ajuda"},
    {name: "c", price: 70.50, category: "Romance"},
    {name: "d", price: 13.50, category: "Ficção Científica"},
    {name: "e", price: 37.50, category: "Fantasia"},
];

function selectCarouselContents(){
    
    if(carouselControl === carouselImgSources.length){
        
        carouselControl = 0;
    }
    const selectedContents = {   
        
        imgSrc: carouselImgSources[carouselControl],
        textContents: carouselTextContents[carouselControl]
    };

    carouselControl++;

    return selectedContents;
}

function clearElemsTextsContents(){
    
    [...arguments].forEach(htmlElement => htmlElement.textContent = "");
}
   
function toggleHtmlElementAttribute(attr, htmlElement, {on, off}){
    
    return function(){
    
        if(htmlElement.getAttribute(attr) === on){
            
            return htmlElement.setAttribute(attr, off);
        }
        
        return htmlElement.setAttribute(attr, on);
    }
}

function recursiveAddCharToTextContent(htmlElement, text, control = 0){
    
    return function(){        
    
        if(control !== text.length){
    
            htmlElement.textContent += text[control];
            
            return recursiveAddCharToTextContent(htmlElement, text, control++);
        }
    }
}

function typingAnimation(htmlElement, text, time){
    
    return setInterval(recursiveAddCharToTextContent(htmlElement, text), time);
}

function setCarouselStyleSection(color, imageSource){
    
    carouselSection.style.color = color;
    carouselSection.style.backgroundImage = `url(${imageSource})`;
    
    return carouselSection.style;
}

function carousel(){

    const selectedContents = selectCarouselContents();

    setCarouselStyleSection(selectedContents.textContents.color, selectedContents.imgSrc);
    clearElemsTextsContents(carouselLabel, carouselParagraph);~
    typingAnimation(carouselLabel, selectedContents.textContents.label, 300);
    typingAnimation(carouselParagraph, selectedContents.textContents.paragraph, 50);
}
        
function actionByPriceAndCategory({initialPrice, finalPrice}, productCategory){

    if(productCategory){

        return function(product){
    
            return (product.price > initialPrice && product.price < finalPrice) && (product.category === productCategory);
        }
    }
    else{

        return function(product){
    
            return (product.price > initialPrice && product.price < finalPrice);
        }
    }
}

function filterProductsByPriceAndCategory(productsArray, getPriceRange, getProductCategory){

    return function(){

        const filtered = productsArray.filter(actionByPriceAndCategory(getPriceRange(), getProductCategory()));

        console.log(filtered);

        return filtered;
    }
}

function getSelectedBooksPriceRange(){
    
    const myPriceRangeArray = filtersSelectPrice.value.split('?');

    return {

        initialPrice: parseInt(myPriceRangeArray[0]),
        finalPrice: parseInt(myPriceRangeArray[1])
    }
}

function getSelectedBookCategory(){

    return filtersSelectCategory.value;
}

window.addEventListener('load', function(){
    
    setInterval(carousel, 10000);

    menuButton.addEventListener('click', toggleHtmlElementAttribute('active', menuSection, {on: 'true', off: 'false'}));
    
    filtersSelectCategory.addEventListener('change', filterProductsByPriceAndCategory(books, getSelectedBooksPriceRange, getSelectedBookCategory));
    
    filtersSelectPrice.addEventListener('change', filterProductsByPriceAndCategory(books, getSelectedBooksPriceRange, getSelectedBookCategory));
    
})