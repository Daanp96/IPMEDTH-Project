const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");
const startExplaineBtn = document.getElementById("js--start-explaine-btn");

const speechBubble = document.getElementById("js--speech-bubble");

let startOK = 0;
let tekst = '';
let image = '';

// praat wolk
startOKBtn.onclick = () => {
    startOK++;

    console.log(startOK);

    switch (startOK) {
        case 1: 
            tekst = 'jaja';
            image = '';
            break;
        case 2: 
            startExplaineBtn.classList.remove("hide");
            tekst = 'Klik op het lampje voor een hint.';
            image = './images/hint-btn.png';
            break;
        case 3: 
            tekst = 'Klik op i voor een informatie.';
            image = './images/information-btn.png';
            break;
        case 4:
            tekst = 'Klik op de muzieknoot om de muziek uit te zetten.';
            image = './images/music-on-btn.png'; 
            break;  
        case 5: 
            tekst = 'Klik op de oor om mijn geluid uit te zetten.';
            image = './images/speak-on-btn.png';
            break;
        case 6:
            speechBubble.style.visibility = "hidden";
            startBtn.style.visibility = "visible";
    }

    startP.innerHTML = tekst;
    startExplaineBtn.src = image;
};

startBtn.onclick = () => {
    window.location.href="/pages/map.html";  
};
