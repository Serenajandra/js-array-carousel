// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

// ARRAY
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]
console.log(imagesArray);
let imgList = "";
let thisImg = "";
// Inserisco immagini in modo dinamico
// Prima le seleziono e creo i loro contenitori <div>
for(let i = 0; i<imagesArray.length; i++){
    thisImg = imagesArray[i];
    console.log(thisImg)
    imgList += `<div class="img_cell"><img src="${thisImg}" alt=""></div>`;    
    console.log(imgList);
}
// Poi le inserisco nel html
const imgContainer = document.querySelector(".images_container");
imgContainer.innerHTML += imgList;

// Ora devo inserire la classe .active a ciascuna immagine per volta
// Prima setto lo stato active sulla prima img

const imgCell = document.getElementsByClassName("img_cell");
let activeImg = 0;

imgCell[activeImg].classList.add("active");
console.log(imgCell[activeImg]);

// // Navigazione

const nextBtn = document.querySelector(".next_arrow");
nextBtn.addEventListener("click", function(){
    // Tolgo active all'immagine corrente
    imgCell[activeImg].classList.remove("active");

if(activeImg < imgCell.length - 1){
    // Passo alla prossima img
    activeImg++;
} else{
    activeImg = 0;
}
 // Aggiungo active alla prossima immagine
    imgCell[activeImg].classList.add("active");

// // Nascondo bottone quando arrivo all'ultima immagine
// if(activeImg = imgList.length - 1 ){
//     nextBtn.classList.add("btn_d-none")
// }

})

