const images=Array.from(document.querySelectorAll(".box img"));
const sliderBody = document.getElementById("sliderBody");
const sliderImg= document.getElementById("sliderImg")
const close = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentIndex=0;

images.forEach(function(img){
    img.addEventListener("click",function(){
        let currentSrc= img.getAttribute('src');
        sliderBody.classList.remove("d-none");
        sliderImg.style.backgroundImage= `url("${currentSrc}")`;
        currentIndex= images.indexOf(img)
        console.log(currentIndex)
    })
})


close.addEventListener('click',closeSlider)

next.addEventListener('click', nextSlider)

prev.addEventListener('click', prevSlider)


document.addEventListener('keydown',(e)=>{
    let key = e.key
    if (key== "ArrowRight"){
        nextSlider()
    } else if(key=='ArrowLeft'){
        prevSlider()
    } else if(key=='Escape'){
        closeSlider()
    }
})


function nextSlider(){
    currentIndex++;
    if (currentIndex==images.length){
        currentIndex=0}
    let Src = images[currentIndex].getAttribute('src')
    sliderImg.style.backgroundImage= `url("${Src}")`;
}

function prevSlider(){
    currentIndex--; 
    if (currentIndex<0){
        currentIndex=images.length-1}
    let Src = images[currentIndex].getAttribute('src')
    sliderImg.style.backgroundImage= `url("${Src}")`;
}

function closeSlider(){
    sliderBody.classList.add("d-none");
}
