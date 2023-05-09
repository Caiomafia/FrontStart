
const previosEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');
let interval = undefined;
let timeout = undefined;



previosEl.addEventListener('click' , onPreviousClick)

nextEl.addEventListener('click' , onNextClick)

autoScrool()


function onPreviousClick (){
    const sliderwidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderwidth;
    handlesUSliderClick()
}
function onNextClick(){

    const sliderwidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft +=sliderwidth
    handlesUSliderClick();

}

function handlesUSliderClick(){
    clearTimeout(timeout)
    clearInterval(interval);
    interval = undefined;
   timeout =  setTimeout(() =>{
        autoScrool()
    } , 10000)

}


function autoScrool(){

  interval  =   setInterval(() =>{

const sliderwidth = sliderEl.offsetWidth;
const numberOfImages = sliderEl.childElementCount; 
const selectedImage = (sliderEl.scrollLeft/sliderwidth) + 1 ; 

console.log(sliderEl)
console.log(numberOfImages)

//se for a ultima => volta pro 0 
if(numberOfImages === selectedImage){
    sliderEl.scrollLeft = 0 ;
    return
}

// senao
    sliderEl.scrollLeft += sliderwidth

    } , 6000)

}



 