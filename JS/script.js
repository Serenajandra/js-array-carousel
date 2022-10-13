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


//inizializzo le mie variabili
const imagesContainer = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg", 
    "img/04.jpg", 
    "img/05.jpg"
]
// console.log (imagesContainer);

// Creo ciclo for
for (let i = 0; i < imagesContainer.length; i++){
    console.log(i);
    //creo corrispondenza tra elemento [i] e le immagini
    const thisImg = imagesContainer[i];
    // console.log(thisImg);
    // Inserisco le immagini nel file html
    const element = `<div class="img_cell"><img src="${thisImg}" alt=""></div>`;
    // collego .images_Container al file js 
    const imagesContainerHtml = document.querySelector(".images_container");
    console.log(imagesContainerHtml);
    imagesContainerHtml.innerHTML += element;
    console.log(element);

    // Impostare stato iniziale slider
    const sliderImg = document.getElementsByClassName("img_cell");
    let activeImg = 0;
    sliderImg[activeImg].classList.add("active");
    console.log(sliderImg);

    // Navigazione
    const prevBtn = document.querySelector(".prev_arrow");
    prevBtn.addEventListener("click", function () {
        // tolgo active dall'img corrente
        sliderImg[activeImg].classList.remove("active");
        if(activeImg < sliderImg.length - 1) {
        // Incremento sliderImg position
        sliderImg++;
    } else{
        activeImg = 0
    }
    // Aggiungo active alla prossima immagine
    sliderImg[activeImg].classList.add("active");
    })
}

// Aggiungere spostamento al click
