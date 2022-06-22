import {dragDropArctic} from "./functions.js";

const fishDrag = document.getElementById("js--fish");
const arcticBtn = document.getElementById("js--arctic-btn");

const mapOverlay = document.getElementById("js--map-overlay");

const speechBubble = document.getElementById("js--speech-bubble");
const explaineBtn = document.getElementById("js--speech-bubble-img");
const speechBubble_p = document.getElementById("js--arctic-p");
const startOKBtn = document.getElementById("js--arctic-ok-btn");
const hintBtn = document.getElementById("js--hint");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

let countHint = 0;
let tekst = '';
let image = '';

const hint1 = new Audio("../audio/7-pinguïn/hint-1.mp3");
const hint2 = new Audio("../audio/7-pinguïn/hint-2.mp3");

startOKBtn.onclick = () => {
    speechBubble.style.visibility = "hidden";
    fishDrag.style.visibility ="visible";
    startOKBtn.style.visibility = "hidden";
    speechBubble.style.zIndex = "";
    mapOverlay.style.zIndex = "-1";
}

speakOn.onclick = () => {
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    hint1.muted = true;
    hint2.muted = true;
};

speakOff.onclick = () => {
    console.log("klik");
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    hint1.muted = false;
    hint2.muted = false;
};

arcticBtn.onclick = () => {
    window.location.href = "./dierentuinpad.html";
}

dragDropArctic(fishDrag, speechBubble, speechBubble_p, arcticBtn, startOKBtn);

hintBtn.onclick = () => {
    console.log(countHint);
    switch (countHint) {
        case 0: 
            speechBubble.style.visibility = "visible";
            // explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Alle pinguïns moeten gevoerd worden.';
            hint1.play();
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
            tekst = 'Beweeg je muis naar de emmer met vissen en doe dit:';
            hint2.play();
            image = '../images/gif/klik_zijkant.gif';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
    }

    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    
};