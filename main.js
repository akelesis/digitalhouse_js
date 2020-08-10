const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

function htmlUtils(){

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

    const exports = {

        clearTextsContents: clearHtmlElementsTextsContents,
        toggleAttribute: toggleHtmlElementAttribute,
        recursiveConcatTextContent: recursiveConcatHtmlElementTextContent,
        typingAnimation: htmlElementTypingAnimation
    }

    return exports;
}


/* Módulo do banner principal da página */
function bannerCarousel(){
    
    const _utils = htmlUtils();

    /* Elementos HTML do banner */
    const carouselSection = document.querySelector('section#dh_carousel');
    const carouselLabel = document.querySelector('h2.carousel_label');
    const carouselParagraph = document.querySelector('p.carousel_paragraph');
    
    /* Conteúdos do carrossel(backgroundImages/textContents) */
    const _carouselContents = [
        {
            banner: "first-switch",
            textContents: {
                label: "Lorem it", 
                paragraph: "A prática cotidiana prova que o surgimento do comércio virtual aponta para a melhoria das diretrizes de desenvolvimento para o futuro.", 
                color:"white"
            }
        }, 
        {
            banner: "second-switch",
            textContents: {
                label: "Uti", 
                paragraph:"As experiências acumuladas demonstram que o entendimento das metas propostas aponta para a melhoria do sistema de participação geral.", 
                color:"black"
            }
        }
    ];
    
    /* Variável de controle de índices dos conteúdos de carrossel(backgroundImages/textContents) */
    let _carouselControl = 0;
    
    function _selectCarouselContents(){
        
        if(_carouselControl === _carouselContents.length){
            
            _carouselControl = 0;
        }
        
        const selectedContents = _carouselContents[_carouselControl];
        
        _carouselControl++;
        
        return selectedContents;
    }
    
    function changeBannerContentCarousel(){
        
        const selectedContents = _selectCarouselContents();
        
        carouselSection.setAttribute('banner', selectedContents.banner);
        
        _utils.clearTextsContents(carouselLabel, carouselParagraph);
        _utils.typingAnimation(carouselLabel, selectedContents.textContents.label, 300);
        _utils.typingAnimation(carouselParagraph, selectedContents.textContents.paragraph, 50);
    }
    
    const exports = {
        elements:{
            section: carouselSection,
            label: carouselLabel,
            paragraph: carouselParagraph
        },
        change: changeBannerContentCarousel
    }

    return exports;
}

/* Módulo de produtos */
function product(){
    
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
    
    const exports = {
        
        actionByPriceAndCategory: actionByPriceAndCategory,
        filterByPriceAndCategory: filterProductsByPriceAndCategory
    }

    return exports;
}

/* Módulo de livros */
function books(){
    
    const _bookProduct = product();
    
    /* Elementos html pertencentes */
    const filtersInputBookName = document.querySelector('input#search_bar');
    const booksFiltersSelects = document.querySelectorAll('select.books_filters');
    const filterSelectCategory = booksFiltersSelects[0];
    const filterSelectPrice = booksFiltersSelects[1];
    
    const _books = [
        {name: "Alooo", price: 30.50, category: "Auto Ajuda"},
        {name: "Olaaaa", price: 22.50, category: "Romance"},
        {name: "Helloooo", price: 42.50, category: "Auto Ajuda"},
        {name: "b", price: 25.50, category: "Auto Ajuda"},
        {name: "c", price: 70.50, category: "Romance"},
        {name: "d", price: 13.50, category: "Ficção Científica"},
        {name: "e", price: 37.50, category: "Fantasia"},
    ];

    function _getSelectedBooksPriceRange(){
        
        /* Padrão do valor recebido do select(elemento html) num(início do range)...num(final do range). Ex: "20...40" */
        
        const myPriceRangeArray = filterSelectPrice.value.split('...').map(num => parseInt(num));
        
        return {
            
            initialPrice: myPriceRangeArray[0],
            finalPrice: myPriceRangeArray[1]
        }
    }
    
    function _getSelectedBookCategory(){
        
        return filterSelectCategory.value;
    }
    
    function getFilteredBooks(){
        
        console.log(_bookProduct.filterByPriceAndCategory(_books, _getSelectedBooksPriceRange, _getSelectedBookCategory));
    }
    
    const exports = {
        elements: {
            filtersInputName: filtersInputBookName,
            filtersSelects: booksFiltersSelects,
            filterSelectCategory: filterSelectCategory,
            filterSelectPrice: filterSelectCategory
        },
        getFiltered: getFilteredBooks
    }

    return exports;
}

/* MAIN */
function main(dom, win){
    
    return function(){

        const utils = htmlUtils();
        const pageBannerCarousel = bannerCarousel();
        const pageBooks = books();
        
        setInterval(pageBannerCarousel.change, 10000);
        
        menuButton.addEventListener('click', utils.toggleAttribute('active', menuSection, {on: 'true', off: 'false'}));
        
        pageBooks.elements.filtersSelects.forEach(select => select.addEventListener('change', pageBooks.getFiltered));
    }
}

window.addEventListener('load', main(document, window));