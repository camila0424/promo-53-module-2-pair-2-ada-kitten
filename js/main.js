'use strict';
console.log('los gatos');

const moreBtn = document.querySelector('.js-btn-add');
const newFormElement = document.querySelector('.js-new-form');
const cancelBtn = document.querySelector ('.js-cancel-btn');
const formAdd = document.querySelector ('.js-form-add')
const searchButton = document.querySelector ('.js_button-search')
const searchDesc = document.querySelector ('.js_in_search_desc')


const catList = document.querySelector ('.js-list');

/* const kittenData_1 = {} */
const kittenUrl1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = "Siamés";


const kittenUrl2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 =  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = "Sphynx";


const kittenUrl3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = "Maine Coon";

cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log ('pulsa btn cerrar');
  newFormElement.classList.add ('collapsed');
  formAdd.reset()
})

const filterKitten = (event) => {
  const descrSearchText = searchDesc.value;
  catList.innerHTML = '';
if (kittenDesc1.includes(descrSearchText)) {
  renderKitten(kittenUrl1, kittenDesc1, kittenName1, kittenRace1)
}
if (kittenDesc2.includes(descrSearchText)){
  renderKitten(kittenUrl2, kittenDesc2, kittenName2, kittenRace2)
}
if (kittenDesc3.includes(descrSearchText)){
  renderKitten(kittenUrl3, kittenDesc3, kittenName3, kittenRace3)
}
else {}
};

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  filterKitten(); 
  }) 


 const handleClickNewForm = (ev) => {
    // Código lo mismo que hace el toggle
    if (newFormElement.classList.contains("collapsed")) {
      showNewCatForm();
    } else {hideNewCatForm();
    }
  }
  
  moreBtn.addEventListener("click", handleClickNewForm)
  
  function showNewCatForm() {
    newFormElement.classList.remove("collapsed");
  }
  function hideNewCatForm() {
    newFormElement.classList.add("collapsed");
  }


  function renderKitten(url, desc, name, race) {
    catList.innerHTML += `
    <li class="card">
     <img class="card_img" src="${url}" alt="Foto del gatito ${name}" />
    <p class="card_description"> ${desc} </p>
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race"> ${race} </h4>
    `
  };

  renderKitten(kittenUrl1, kittenDesc1, kittenName1, kittenRace1);
  renderKitten(kittenUrl2 , kittenDesc2, kittenName2 ,kittenRace2);
  renderKitten(kittenUrl3, kittenDesc3, kittenName3, kittenRace3);

  