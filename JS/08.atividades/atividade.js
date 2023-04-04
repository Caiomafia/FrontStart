
/* const serviceText = document.querySelector(".serviceText") ;
const contactText = document.querySelector(".contactText");
const infoText = document.querySelector(".Infotex");

const  items = Array.from(document.getElementsByClassName('item'));



items.forEach(item => {
    item.addEventListener('click' , onItemClick);

})


function onItemClick(event){
    const selectedAttribute = event.target.getAttribute('data');
    addOrRemove(selectedAttribute);
    hideOrShowTextdiv(selectedAttribute);
}

function hideOrShowTextdiv(selectedAttribute){
if(selectedAttribute === 'contact') {
    contactText.style.display = 'block';
}

if(selectedAttribute === 'service') {
    serviceText.style.display = 'block';
}

}


function addOrRemove(selectedAttribute){
    items.forEach(item => {
        const itemAttribute  = item.getAttribute('data');
        if(itemAttribute  == selectedAttribute){
         item.classList.add('active');
         return;
        }
        
         item.classList.remove('active')
        
     
     });
}


 function hideTextElements (){
    serviceText.style.display ='none';
    infoText.style.display ='none';
    contactText.style.display ='none';
}
*/

const serviceText = document.getElementById("serviceText");
const contactText = document.getElementById("contactText");
const infoText = document.getElementById("infoText");
const items = Array.from(document.getElementsByClassName("item"));

hideOrShowTextDiv("service");

items.forEach((item) => {
  item.addEventListener("click", onItemClick);
});

function onItemClick(event) {
  const selectedAttribute = event.target.getAttribute("data");
  addOrRemoveActive(selectedAttribute);
  hideOrShowTextDiv(selectedAttribute);
}

function hideOrShowTextDiv(selectedAttribute) {
  hideTextElements();

  if (selectedAttribute === "contact") {
    contactText.style.display = "block";
  }

  if (selectedAttribute === "service") {
    serviceText.style.display = "block";
  }

  if (selectedAttribute === "info") {
    infoText.style.display = "block";
  }
}

function addOrRemoveActive(selectedAttribute) {
  items.forEach((item) => {
    const itemAttribute = item.getAttribute("data");
    if (itemAttribute === selectedAttribute) {
      item.classList.add("active");
      return;
    }

    item.classList.remove("active");
  });
}

function hideTextElements() {
  serviceText.style.display = "none";
  contactText.style.display = "none";
  infoText.style.display = "none";
}