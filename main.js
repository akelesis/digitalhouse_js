//menu function

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

const slides = document.querySelector(".carousel_container").children;
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const indicator = document.querySelector(".carousel_counter");
let count = 0;

prev.addEventListener("click", function(){
  prevSlide();
  updateCircleIndicator(); 
  resetTimer();
})

next.addEventListener("click", function(){
  nextSlide(); 
  updateCircleIndicator();
  resetTimer();
})

//circle indicators
function circleIndicator(){
  for(let i = 0; i < slides.length; i++){
    const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick","indicateSlide(this)")
        div.id = i;
        if(i == 0){
            div.className = "active";
        }
        indicator.appendChild(div);
  }
}
circleIndicator();

function indicateSlide(element){
  count = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator(){
   for(let i = 0; i < indicator.children.length; i++){
      indicator.children[i].classList.remove("active");
   }
   indicator.children[count].classList.add("active");
}

function prevSlide(){
  if(count == 0){
    count = slides.length-1;
  } else {
    count--;
  }
   changeSlide();
}

function nextSlide(){
 if(count == slides.length-1) {
  count = 0;
 } else {
  count++;
 }
 changeSlide();
}

function changeSlide(){
  for(let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }
  slides[count].classList.add("active");
}

function resetTimer(){
  // stop timer 
  clearInterval(timer);
  timer = setInterval(autoPlay,4000);
}

function autoPlay(){
 nextSlide();
 updateCircleIndicator();
}

let timer=setInterval(autoPlay,4000);