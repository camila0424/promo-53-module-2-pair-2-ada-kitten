'use strict';
console.log('los gatos');
const catList = document.querySelector ('.js-list');

const moreBtn = document.querySelector('.js-btn-add');
const formJsNew = document.querySelector('.js-new-form');
const cancelBtn = document.querySelector ('.js-cancel-btn');
const formAdd = document.querySelector ('.js-form-add')
const searchButton = document.querySelector ('.js_button-search')
const searchDesc = document.querySelector ('.js_in_search_desc')


const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = "Siamés";


const kitternImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 =  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = "Sphynx";


const kitternImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = "Maine Coon";

const kittenOne  = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage1}"
    alt="siames-cat"/>
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description js_kittenDesc1">${kittenDesc1}
  </p>
</article>
</li>`;
const kittentwo = `
<li class="card">
<img
  class="card_img"
  src="${kitternImage2}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description js_kittenDesc2">${kittenDesc2}
</p>
</li>`;
const kittenThree = `
<li class="card">
<img
  class="card_img"
  src="${kitternImage3}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenName3 }</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description js_kittenDesc3">${kittenDesc3}
</p>
</li>`;

catList.innerHTML = kittenOne + kittentwo + kittenThree;



function showNewCatForm() {
  newForm.classList.remove("collapsed");
}
function hideNewCatForm() {
  newForm.classList.add("collapsed");
}


moreBtn.addEventListener ('click', (event) => {  event.preventDefault();
  console.log ('gatos');
  /* formJsNew.classList.toggle ('collapsed');  */
}) 

cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log ('pulsa btn cerrar');
  formJsNew.classList.add ('collapsed');
  formAdd.reset()
})

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = searchDesc.value; 
  if (kittenDesc1.includes(descrSearchText)) {
    catList.innerHTML = kittenOne 
  }
  if (kittenDesc2.includes(descrSearchText)) {
    catList.innerHTML = kittentwo 
  }
  if (kittenDesc3.includes(descrSearchText)) {
    catList.innerHTML = kittenThree 
  }
  else {}
  })



