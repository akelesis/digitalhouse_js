const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

const carouselSection = document.querySelector('section#dh_carousel');
const carouselLabel = document.querySelector('h2.carousel_label');
const carouselParagraph = document.querySelector('p.carousel_paragraph');

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
    
    [...arguments].forEach(elm => elm.textContent = "");
}

function swapAttribute(attr, elm, states){
    
    return function(){

        if(elm.getAttribute(attr) === states.on){
            
            return elm.setAttribute(attr, states.off);
        }
        
        return elm.setAttribute(attr, states.on);
    }
}

function typing(box, text, control = 0){

    return function(){

        if(control !== text.length){
            
            box.textContent += text[control];

            return typing(box, text, control++);
        }
    }
}

function typingAnimation(box, text, time){

    return setInterval(typing(box, text), time);
}

function setCarouselStyleSection(color, imageSource){
    
    carouselSection.style.color = color;
    carouselSection.style.backgroundImage = `url(${imageSource})`;
    
    return carouselSection.style;
}

function initCarousel(){

    return setInterval(() => {

                const selectedContents = selectCarouselContents();

                setCarouselStyleSection(selectedContents.textContents.color, selectedContents.imgSrc);
                clearElemsTextsContents(carouselLabel, carouselParagraph);
                typingAnimation(carouselLabel, selectedContents.textContents.label, 300);
                typingAnimation(carouselParagraph, selectedContents.textContents.paragraph, 50);
            
            }, 10000);
}

window.addEventListener('load', function(){
        
    menuButton.addEventListener('click', swapAttribute('active', menuSection, {on: 'true', off: 'false'}));

    initCarousel();
})