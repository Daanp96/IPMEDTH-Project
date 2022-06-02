const startBtn = document.getElementById("js--start-btn")

const speechBubble = document.getElementById("js--speech-bubble");
const startExplaineBtn = document.getElementById("js--speech-bubble-img");
const startP = document.getElementById("js--speech-bubble-p");
const startOKBtn = document.getElementById("js--speech-bubble-btn");

let startOK = 0;
let tekst = '';
let image = '';

// praat wolk
startOKBtn.onclick = () => {
    console.log(startOK);
    switch (startOK) {
        case 0: 
            tekst = 'Je hebt ook wel een goede dag gekozen om te komen, want vandaag nemen we een gelukkige bezoeker mee om ons in de dierentuin te helpen.';
            image = '';
            break;
        case 1: 
            tekst = 'En raad eens… dat ben jij! Dus waar wachten we nog op, laten we naar binnen gaan!';
            image = '';
            break;
        case 2: 
            tekst = 'Maar, voordat we naar binnen gaan zal ik nog even uitleggen hoe alles werkt.';
            image = '';
            break;
        case 3: 
            startExplaineBtn.classList.remove("hide");
            tekst = 'Klik op het lampje voor een hint.';
            image = './images/hint-btn.png';
            break;
        case 4: 
            tekst = 'Klik op i voor een informatie.';
            image = './images/information-btn.png';
            break;
        case 5:
            tekst = 'Klik op de muzieknoot om de muziek uit te zetten.';
            image = './images/music-on-btn.png'; 
            break;  
        case 6: 
            tekst = 'Klik op de oor om mijn geluid uit te zetten.';
            image = './images/speak-on-btn.png';
            break;
        case 7: 
            startExplaineBtn.classList.add("hide");
            tekst = 'Oke, nu alles uitgelegd is, kunnen we nu echt naar binnen gaan. Laten we gaan!';
            image = '';
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
    window.location.href="/public/pages/map.html";  
};
