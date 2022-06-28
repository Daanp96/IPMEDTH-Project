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

const pinguinVerblijf = new Audio("../audio/Tjalle/7-pinguins/1-pinguïnverblijf.m4a");

const hint1 = new Audio("../audio/Tjalle/7-pinguins/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/7-pinguins/hint-2.m4a");

hintBtn.disabled = true;
pinguinVerblijf.play();
pinguinVerblijf.onended = () => {
    startOKBtn.style.display = "flex";
}

startOKBtn.onclick = () => {
    speechBubble.style.visibility = "hidden";
    fishDrag.style.visibility ="visible";
    // startOKBtn.style.visibility = "hidden";
    speechBubble.style.zIndex = "";
    mapOverlay.style.zIndex = "-1";
    hintBtn.disabled = false;
}

setInterval(() => {
    if (localStorage.getItem("speakOnStorage") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage") == 'visible') {
        speakOffFunction();
    }
}, 1000);
  
function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    pinguinVerblijf.muted = true;
    hint1.muted = true;
    hint2.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    pinguinVerblijf.muted = false;
    hint1.muted = false;
    hint2.muted = false;
};
  
speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};

// speakOn.onclick = () => {
//     speakOff.style.visibility = "visible";
//     speakOn.style.visibility = "hidden";
//     hint1.muted = true;
//     hint2.muted = true;
// };

// speakOff.onclick = () => {
//     console.log("klik");
//     speakOff.style.visibility = "hidden";
//     speakOn.style.visibility = "visible";
//     hint1.muted = false;
//     hint2.muted = false;
// };

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
            // startOKBtn.style.visibility = "visible";
            tekst = 'Alle pinguïns moeten gevoerd worden.';
            hint1.play();
            hint1.onended = () => {
                startOKBtn.style.display = "flex";
            }
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                // startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 1: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            // startOKBtn.style.visibility = "visible";
            tekst = 'Beweeg je muis naar de emmer met de vis en doe dit:';
            hint2.play();
            hint2.onended = () => {
                startOKBtn.style.display = "flex";
            }
            image = '../images/gif/klik_zijkant.gif';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 2:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.display = "none";
            speechBubble.style.zIndex = "";
            mapOverlay.style.zIndex = "-1";
            break;
    }

    startOKBtn.style.display = "none";
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    
};