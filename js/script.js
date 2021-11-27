// Consegna: Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news, creare un carosello come nella foto allegata.
// MILESTONE 1 Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2 Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3 Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// titolo e
// testo. Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

// BONUS: Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"


// Popolazione dinamica dello slider

const imageArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

console.log(imageArray);

// const itemsContainer = document.querySelector(".item-container");

let itemsContent ='';
let elementsContent ='';

for(let i = 0; i < imageArray.length; i++){
    itemsContent += `
    <div class="item">
        <img src="${imageArray[i]}" alt="slider">
        <div class ="descrizione">
            <h1 class="title">${title[i]}</h1>
            <p class="text">${text[i]}</p>
        </div>
    </div>`;

    elementsContent += `
    <div class="element">
        <img src="${imageArray[i]}" alt="slider">
    </div>`;
}

console.log(itemsContent);
console.log(elementsContent);

const itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = itemsContent;

const itemsContainerDestra = document.querySelector('.items-container-destra');
itemsContainerDestra.innerHTML += elementsContent;


// const item = document.querySelector('.item');
// console.log(item);
// item.className = "item active";

// versione diversa cambio active


const item = document.getElementsByClassName('item');
console.log(item[0]);
let activeItem = 0;
item[activeItem].classList.add('active');

const element = document.getElementsByClassName('element');
console.log(element[0]);
element[activeItem].classList.add('active');


// active frecce
// const circle = document.getElementsByClassName('pallino');


const prev = document.querySelector('.precedente');
const next = document.querySelector('.successiva');

next.addEventListener("click", function(){

    item[activeItem].classList.remove('active');
    element[activeItem].classList.remove('active');

    if(activeItem < imageArray.length-1){
        // circle[activeItem].classList.remove('active');
        activeItem++;

        item[activeItem].classList.add('active');
        element[activeItem].classList.add('active');
        // circle[activeItem].classList.add('active');
    }else{
        activeItem = 0;
        item[activeItem].classList.add('active');
        element[activeItem].classList.add('active');
    }
});

prev.addEventListener("click", function(){

    item[activeItem].classList.remove('active');
    element[activeItem].classList.remove('active');

    if(activeItem > 0){
       // circle[activeItem].classList.remove('active');
        activeItem--;

        item[activeItem].classList.add('active');
        element[activeItem].classList.add('active');
        // circle[activeItem].classList.add('active');
    }else if(activeItem == 0){
        activeItem = imageArray.length-1;
        item[activeItem].classList.add('active');
        element[activeItem].classList.add('active');
    }
});