const startBtn = document.getElementById("js--start-btn")

let intro = new Audio("audio/1-intro/1-welkom.mp3");
let bezoeker = new Audio("audio/1-intro/2-gelukkige-bezoeker.mp3");
let raadEens = new Audio("audio/1-intro/3-raadEens.mp3");
let uitleggen = new Audio("audio/1-intro/4-uitleggen.mp3");
let hint = new Audio("audio/1-intro/5-hint.mp3");
let informatie = new Audio("audio/1-intro/6-informatie.mp3");
let muziek = new Audio("audio/1-intro/7-muzieknoot.mp3");
let stem = new Audio("audio/1-intro/8-stem.mp3");
let binnen = new Audio("audio/1-intro/9-binnen.mp3");

const speechBubble = document.getElementById("js--speech-bubble");
const startExplaineBtn = document.getElementById("js--speech-bubble-img");
const startP = document.getElementById("js--speech-bubble-p");
const startOKBtn = document.getElementById("js--speech-bubble-btn");

let startOK = 0;
let tekst = '';
let image = '';

localStorage.setItem("progress", 0);

// praat wolk
startOKBtn.onclick = () => {
    console.log(startOK);
    switch (startOK) {
        case 0: 
            tekst = 'Je hebt ook wel een goede dag gekozen om te komen, want vandaag nemen we een gelukkige bezoeker mee om ons in de dierentuin te helpen.';
            image = '';
            bezoeker.play();
            break;
        case 1: 
            tekst = 'En raad eens… dat ben jij! Dus waar wachten we nog op, laten we naar binnen gaan!';
            image = '';
            raadEens.play();
            break;
        case 2: 
            tekst = 'Maar, voordat we naar binnen gaan zal ik nog even uitleggen hoe alles werkt.';
            image = '';
            uitleggen.play();
            break;
        case 3: 
            startExplaineBtn.classList.remove("hide");
            tekst = 'Klik op het lampje voor een hint.';
            image = './images/hint-btn.png';
            hint.play();
            break;
        case 4: 
            tekst = 'Klik op deii voor informatie.';
            image = './images/information-btn.png';
            informatie.play();
            break;
        case 5:
            tekst = 'Klik op de muzieknoot om de muziek uit te zetten.';
            image = './images/music-on-btn.png'; 
            muziek.play();
            break;  
        case 6: 
            tekst = 'Klik op het oortje om mijn stem uit te zetten.';
            image = './images/speak-on-btn.png';
            stem.play();
            break;
        case 7: 
            startExplaineBtn.classList.add("hide");
            tekst = 'Oke, nu alles uitgelegd is, kunnen we nu echt naar binnen gaan. Laten we gaan!';
            image = '';
            binnen.play();
            break;
        default:
            speechBubble.style.visibility = "hidden";
            startBtn.style.visibility = "visible";
            tekst = 'Ik herhaal nog even waar de knoppen voor staan.';
            image = '';
            break;

    }

    startP.innerHTML = tekst;
    startExplaineBtn.src = image;
    startOK++;
};

startBtn.onclick = () => {
    window.location.href="./pages/map.html";  
};
