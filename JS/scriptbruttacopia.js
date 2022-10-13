
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
    // const sliderImg = document.getElementsByClassName("images_container");
    let activeImg = 0;
    imagesContainerHtml[activeImg].classList.add("active");

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
