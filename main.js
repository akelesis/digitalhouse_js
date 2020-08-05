const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

const filtersInputBookName = document.querySelector('input#search_bar');
const booksFiltersSelects = document.querySelectorAll('select.books_filters');
const filterSelectCategory = booksFiltersSelects[0];
const filterSelectPrice = booksFiltersSelects[1];

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

function clearHtmlElementsTextsContents(){
    
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

function recursiveConcatHtmlElementTextContent(htmlElement, text, control = 0){
    
    return function(){        
    
        if(control !== text.length){
    
            htmlElement.textContent += text[control];
            
            return recursiveConcatHtmlElementTextContent(htmlElement, text, control++);
        }
    }
}

function htmlElementTypingAnimation(htmlElement, text, time){
    
    return setInterval(recursiveConcatHtmlElementTextContent(htmlElement, text), time);
}

function setHtmlElementStyleColor(htmlElement, color){

    htmlElement.style.color = color;
}

function setHtmlElementStyleBgImage(htmlElement, imageSource){

    htmlElement.style.backgroundImage = `url(${imageSource})`;
}

function getHtmlElementStyleAttribute(htmlElement, attribute){

    return htmlElement.style[attribute];
}

/* Módulo do banner principal da página */
function bannerCarousel(){

    /* Elementos HTML do banner */
    const carouselSection = document.querySelector('section#dh_carousel');
    const carouselLabel = document.querySelector('h2.carousel_label');
    const carouselParagraph = document.querySelector('p.carousel_paragraph');
    
    /* Conteúdos do carrossel(backgroundImages/textContents) */
    const carouselContents = [
        {
            imgSrc: "./img/carousel/01_1024px.png",
            textContents: {
                            label: "Lorem it", 
                            paragraph: "A prática cotidiana prova que o surgimento do comércio virtual aponta para a melhoria das diretrizes de desenvolvimento para o futuro.", 
                            color:"white"
            }
        }, 
        {
            imgSrc: "./img/carousel/02_1140px.jpg",
            textContents: {
                            label: "Uti", 
                            paragraph:"As experiências acumuladas demonstram que o entendimento das metas propostas aponta para a melhoria do sistema de participação geral.", 
                            color:"black"
            }
        }
    ];
    
    /* Variável de controle de índices dos conteúdos de carrossel(backgroundImages/textContents) */
    let carouselControl = 0;

    function selectCarouselContents(){
        
        if(carouselControl === carouselContents.length){
            
            carouselControl = 0;
        }

        const selectedContents = carouselContents[carouselControl];
    
        carouselControl++;
        
        return selectedContents;
    }

    function changeBannerContentCarousel(){
    
        const selectedContents = selectCarouselContents();
    
        setHtmlElementStyleColor(carouselSection, selectedContents.textContents.color);
        setHtmlElementStyleBgImage(carouselSection, selectedContents.imgSrc);
        clearHtmlElementsTextsContents(carouselLabel, carouselParagraph);
        htmlElementTypingAnimation(carouselLabel, selectedContents.textContents.label, 300);
        htmlElementTypingAnimation(carouselParagraph, selectedContents.textContents.paragraph, 50);
    }

    return {

        change: changeBannerContentCarousel
    }
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
    
    return productsArray.filter(actionByPriceAndCategory(getPriceRange(), getProductCategory()));
}

function getSelectedBooksPriceRange(){
    
    /* Padrão do valor recebido do select(elemento html) num(início do range)...num(final do range). Ex: "20...40" */

    const myPriceRangeArray = filterSelectPrice.value.split('...').map(num => parseInt(num));

    return {

        initialPrice: myPriceRangeArray[0],
        finalPrice: myPriceRangeArray[1]
    }
}

function getSelectedBookCategory(){

    return filterSelectCategory.value;
}

function getFilteredBooks(){

    return filterProductsByPriceAndCategory(books, getSelectedBooksPriceRange, getSelectedBookCategory);
}

window.addEventListener('load', function(){
    
    const pageBannerCarousel = bannerCarousel();

    setInterval(pageBannerCarousel.change, 10000);

    menuButton.addEventListener('click', toggleHtmlElementAttribute('active', menuSection, {on: 'true', off: 'false'}));
    
    booksFiltersSelects.forEach(select => select.addEventListener('change', getFilteredBooks));
})