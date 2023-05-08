
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


 