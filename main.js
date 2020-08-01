const menuButton = document.querySelector('button#dh_menu_btn');
const menuSection = document.querySelector('section#menu');

const carouselSection = document.querySelector('section#dh_carousel');
const carouselLabel = document.querySelector('h2.carousel_label');
const carouselParagraph = document.querySelector('p.carousel_paragraph');

/* Imagens para 2 padrões de tela */
const carouselImgSources = ["./img/carousel/01_1024px.png", "./img/carousel/02_1140px.jpg"];

const carouselLabels = [{label: "Lorem it", content: "A prática cotidiana prova que o surgimento do comércio virtual aponta para a melhoria das diretrizes de desenvolvimento para o futuro.", color:"white"}, {label: "Uti", content:"As experiências acumuladas demonstram que o entendimento das metas propostas aponta para a melhoria do sistema de participação geral.", color:"black"}, {label: "Mier Lorem", content:"Por outro lado, a determinação clara de objetivos exige a precisão e a definição dos modos de operação convencionais.", color:"black"}];

let carouselControl = 0; // Variável de controle de índices dos conteúdos do carrossel(imagem/label)
let carouselLabelControl = 0;
let carouselParagraphControl = 0;

function showMenu(){

    if(menuSection.getAttribute('active') === 'true'){
        
        return menuSection.setAttribute('active', 'false');
    }

    return menuSection.setAttribute('active', 'true');
}

function selectCarouselContents(){

    let source;
    let label;
    let contents;

    if(carouselControl === carouselImgSources.length){

        carouselControl = 0;
    }

    if(window.innerWidth > 720){

        source = carouselImgSources[carouselControl];
    }

    label = carouselLabels[carouselControl];
    
    contents = {
        // Objeto que contém o caminho de imagem para o bg do carrossel e sua respectiva label
        imgSrc: source,
        labelContent: label 
    };
        
    carouselControl++;

    return contents;
}

const carousel = setInterval(() => {
    
    const contents = selectCarouselContents();
    const label = contents.labelContent.label;
    const paragraph = contents.labelContent.content;

    carouselLabel.textContent = "";
    carouselParagraph.textContent = "";
    carouselSection.style.backgroundImage = `url(${contents.imgSrc})`;
    carouselSection.style.color = contents.labelContent.color;

    const initiateLabel = setInterval(() => {
        
        if(carouselLabelControl !== label.length){
    
            carouselLabel.textContent += label[carouselLabelControl];
            carouselLabelControl++;
        }
        else{
            
            carouselLabelControl = 0;
            clearInterval(initiateLabel);
        }
        
    }, 300);

    const initiateParagraph = setInterval(() => {
        
        if(carouselParagraphControl !== paragraph.length){
    
            carouselParagraph.textContent += paragraph[carouselParagraphControl];
            carouselParagraphControl++;
        }
        else{
            
            carouselParagraphControl = 0;
            clearInterval(initiateParagraph);
        }
        
    }, 50);

}, 10000);

menuButton.addEventListener('click', showMenu);