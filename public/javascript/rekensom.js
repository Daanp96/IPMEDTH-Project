
//voor als we 1 html pagina willen en de thema's random willen laten komen
//of voor als we verschillende achtergronden per thema willen
//of alleen random dieren 
//

// const backgrounds = new Array();

// backgrounds[0] = "../images/sea-background.png";
// backgrounds[1] = "../images/start-background.png";

// const randomBackground = Math.floor(Math.random() * backgrounds.length);
// const rekensomBackground = document.getElementById('js--rekensom-background');

// rekensomBackground.style.background = "url("+backgrounds[randomBackground]+")";
// rekensomBackground.style.backgroundSize = "cover";
// rekensomBackground.style.backgroundRepeat = "no-repeat";

//random images neerzetten
//probleem: als bijv. index 2 wordt toegewezen, wordt alleen de indexen daarna nog toegewezen, de rest is undefined

// const seaAnimal1 = document.getElementById("js--sea-animal-1");
// const seaAnimal2 = document.getElementById("js--sea-animal-2");
// const seaAnimal3 = document.getElementById("js--sea-animal-3");
// const seaAnimal4 = document.getElementById("js--sea-animal-4");


// const animals = new Array('../images/fishes-3.png', '../images/arrow-begin.png','../images/hint-btn.png', '../images/music-off-btn.png');

// const randomAnimals = Math.floor(Math.random() * animals.length);
// console.log(randomAnimals);

// // const seaAnimal = document.getElementsByClassName("rekensom--image-animal");
// const x = animals.splice(randomAnimals, 1)[0];
// const xx = animals.splice(randomAnimals, 1)[0];
// const xxx = animals.splice(randomAnimals, 1)[0];
// const xxxx = animals.splice(randomAnimals, 1)[0];

// console.log(x);
// console.log(xx);
// console.log(xxx);
// console.log(xxxx);

// seaAnimal1.src = animals[x];
// seaAnimal2.src = animals[xx];
// seaAnimal3.src = animals[xxx];
// seaAnimal4.src = animals[xxxx];

// console.log(seaAnimal1);
// console.log(seaAnimal2);
// console.log(seaAnimal3);
// console.log(seaAnimal4);

//-------------------------------------------------------------------------------------------------
const nextBtnRight = document.getElementById("js--next-btn-right");
const nextBtnLeft = document.getElementById("js--next-btn-left");
const firstpage = document.getElementById("js--first-page");
const secondpage = document.getElementById("js--second-page");

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");

let count = 0;

let startOK = 0;
let tekst = '';
let image = '';

// praat wolk
startOKBtn.onclick = () => {
    console.log(startOK);
    switch (startOK) {
        case 0: 
            tekst = 'Sinds kort hebben we nieuwe vissen erbij gekregen, alleen weten we nog niet hoeveel.';
            image = '';
            break;
        case 1: 
            tekst = 'Kan jij mij vertellen hoeveel <b>rode vissen</b> er rond zwemmen? Het antwoord mag je invullen op het bord.';
            image = '';
            break;
        case 2:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.visibility = "hidden";
    }

    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    startOK++;
};

nextBtnRight.onclick = () => {    
    secondpage.classList.add("grid-16-9");
    secondpage.classList.remove("hide");
    secondpage.classList.add("slidein-from-right");

    firstpage.classList.remove("grid-16-9");
    firstpage.classList.add("hide");
};

nextBtnLeft.onclick = () => {    
    secondpage.classList.remove("grid-16-9");
    secondpage.classList.add("hide");

    firstpage.classList.add("grid-16-9");
    firstpage.classList.add("slidein-from-left");
    firstpage.classList.remove("hide");
};

// startOKBtn.onclick = () => {
//     speechBubble.style.visibility = "hidden";
// }

hintBtn.onclick = () => {
    console.log("klik");
    speechBubble.style.visibility = "visible";
    explaineBtn.classList.remove("hide");
    explaineBtn.src = '../images/aquarium-board.png';
    speechBubble_p.innerHTML = "Klik op het bord om het juiste getal in te vullen.";
    speechBubble_p.style.visibility = "visible";
    startOKBtn.style.visibility = "visible";

    startOKBtn.onclick = () => {
        speechBubble.style.visibility = "hidden";
        explaineBtn.classList.add("hide");
        speechBubble_p.style.visibility = "hidden";
        startOKBtn.style.visibility = "hidden";
    }
};

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}