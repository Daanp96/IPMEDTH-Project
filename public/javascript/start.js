const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");
const startExplaineBtn = document.getElementById("js--start-explaine-btn");

let intro = new Audio("audio/1-Intro/1-welkom.mp3");
let bezoeker = new Audio("audio/1-Intro/2-gelukkige-bezoeker.mp3");
let raadEens = new Audio("audio/1-Intro/3-raadEens.mp3");
let uitleggen = new Audio("audio/1-Intro/4-uitleggen.mp3");
let hint = new Audio("audio/1-Intro/5-hint.mp3");
let informatie = new Audio("audio/1-Intro/6-informatie.mp3");
let muziek = new Audio("audio/1-Intro/7-muzieknoot.mp3");
let stem = new Audio("audio/1-Intro/8-stem.mp3");
let binnen = new Audio("audio/1-Intro/9-binnen.mp3");

const speechBubble = document.getElementById("js--speech-bubble");

let startOK = 0;
let tekst = '';
let image = '';

localStorage.setItem("progress", 0);

// praat wolk
startOKBtn.onclick = () => {
    
    switch (startOK) {
        case 0: 
            tekst = 'Ik ben Ron en ik zal jullie rondleiden door het park.';
            image = '';
            bezoeker.play();
            break;
        case 1: 
            tekst = "Voordat we naar binnen gaan zal ik uitleggen hoe alles werkt.";
            image = '';
            uitleggen.play();
            break;
        case 2: 
            startExplaineBtn.classList.remove("hide");
            tekst = 'Klik op het lampje voor een hint.';
            image = './images/hint-btn.png';
            hint.play();
            break;
        case 3:
            tekst = 'Klik op i voor extra informatie.';
            image = './images/information-btn.png';
            informatie.play();
            break;
        case 4: 
            tekst = 'Klik op de muzieknoot om de muziek uit te zetten.';
            image = './images/music-on-btn.png'; 
            muziek.play();
            break;  
        case 5:
            tekst = 'Klik op de oor om mijn geluid uit te zetten.';
            image = './images/speak-on-btn.png';
            stem.play();
            break;
        case 6:
            tekst = 'Zo, dan is het nu tijd om naar binnen te gaan!';
            image = '';
            binnen.play();
            break;
        case 7:
            speechBubble.style.visibility = "hidden";
            startBtn.style.visibility = "visible";
    }

    startP.innerHTML = tekst;
    startExplaineBtn.src = image;
    startOK++;
};

startBtn.onclick = () => {
    window.location.href="/pages/map.html";  
};
