// Open or close the side menu
btnMenu.onclick = function() {
    let btnMenu = document.getElementById("dh_menu_btn");
    // Check the status of side menu through your class name 
    (btnMenu.className == 'side-menu-off')? openNav() : closeNav();

    // Set the css attributtes when the side menu is opened
    function openNav() {
        btnMenu.className = 'side-menu-on';
        btnMenu.style.position = "fixed";
        btnMenu.style.top = "15px";
        btnMenu.style.right = "20px";

        verifyIcon();
        
        document.getElementById("mySidenav").style.width = "250px"; //not responsive
    }
      
    // Set the css attributtes when the side menu is closed
    function closeNav() {
        btnMenu.className= 'side-menu-off';
        btnMenu.removeAttribute('style', 'position');

        verifyIcon();

        document.getElementById("mySidenav").style.width = "0";
    }

    // Change the icon bars to "X" or the reverse
    function verifyIcon() {
        let btnMenuIcon = document.getElementById("btnMenu");
        (btnMenuIcon.className == "fa fa-bars")? 
            btnMenuIcon.className = "fa fa-times" : btnMenuIcon.className = "fa fa-bars";
    }
};

// Making a carousel
let imgSlider = function() {
    let srcCaroulselImg = document.getElementById("dh_carousel_img");

    let arrayCarouselImages = [
        'https://scalingupnutrition.org/wp-content/uploads/2018/09/berkman-library-banner.jpg',
        'https://en.ricest.ac.ir/wp-content/uploads/2018/02/library-banner.jpg',
        'https://faculdade.uneouro.edu.br/wp-content/uploads/2019/09/library-banner.jpg',
        'https://www.wenhammuseum.org/wp-content/uploads/2014/08/library-banner-1024x450.jpg'
    ];

    let i = 0;

    // Change the image of carousel only when the interval() pass the counter "i"
    let changeImg = function(array, i) {
        srcCaroulselImg.setAttribute('src', `${arrayCarouselImages[i]}`);
    };

    // Call the function changeImg() every 5 seconds
    let interval = setInterval(function() {
            // When the changeImg() shows the image, the counter is incremented
            changeImg(arrayCarouselImages, i);
            i++;

            // If the counter is greater than arrayCarouselImages.lenght, clears the interval and restart
            if (i == arrayCarouselImages.length) {
                clearInterval(interval);
                imgSlider();
            }
        },5000);
    
};

// Show the carousel only when the page finishes loading
window.onload = imgSlider();



