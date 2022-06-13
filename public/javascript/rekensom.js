
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

const mapOverlay = document.getElementById("js--map-overlay");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");

let countHint = 0;

const nieuweVissen = new Audio("../audio/5-vissen/2-nieuweVissen.mp3");
const rodeVissen = new Audio("../audio/5-vissen/3-rodeVissen.mp3");

const hint1 = new Audio("../audio/5-vissen/hint-1.mp3");
const hint2 = new Audio("../audio/5-vissen/hint-2.mp3");
const hint3 = new Audio("../audio/5-vissen/hint-3.mp3");
const hint4 = new Audio("../audio/5-vissen/hint-4.mp3");

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
            nieuweVissen.play();
            break;
        case 1: 
            tekst = 'Kan jij mij vertellen hoeveel <b>rode vissen</b> er rond zwemmen? Het antwoord mag je invullen op het bord.';
            image = '';
            rodeVissen.play();
            break;
        case 2:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.visibility = "hidden";
            speechBubble.style.zIndex = "";
            mapOverlay.style.zIndex = "-1";
            break;
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

// hintBtn.onclick = () => {
//     console.log("klik");
//     speechBubble.style.visibility = "visible";
//     explaineBtn.classList.remove("hide");
//     explaineBtn.src = '../images/arrow-right.png';
//     speechBubble_p.innerHTML = "Loop door het hele aquarium";
//     speechBubble_p.style.visibility = "visible";
//     startOKBtn.style.visibility = "visible";

//     startOKBtn.onclick = () => {
//         speechBubble.style.visibility = "hidden";
//         explaineBtn.classList.add("hide");
//         speechBubble_p.style.visibility = "hidden";
//         startOKBtn.style.visibility = "hidden";
//     }
// };

hintBtn.onclick = () => {
    console.log(countHint);
    switch (countHint) {
        case 0: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Loop door het hele aquarium.';
            hint1.play();
            image = '../images/arrow-right.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 1: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Klik op het vraagteken.';
            hint2.play();
            image = '../images/question-mark.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 2: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Kies een getal van de nummers op je toetsenbord.';
            hint3.play();
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 3: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Het antwoord is 6.';
            hint4.play();
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 4:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.visibility = "hidden";
            countHint++;
            break;
    }

    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    
};

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}