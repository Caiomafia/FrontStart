
const previosEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');



previosEl.addEventListener('click' , onPreviousClick)

nextEl.addEventListener('click' , onNextClick)




function onPreviousClick (){
    const sliderwidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderwidth;
}
function onNextClick(){

    const sliderwidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft +=sliderwidth
}


function autoScrool(){
    setInterval(() =>{

const sliderwidth = sliderEl.offsetWidth;

const numberOfImages = sliderEl.childElementCount; 

console.log(sliderEl)
console.log(numberOfImages)

//se for a ultima => volta pro 0 
console.log(sliderEl.scrollLeft/sliderwidth)

// senao
    sliderEl.scrollLeft += sliderwidth

    } , 6000)

}


autoScrool()
 