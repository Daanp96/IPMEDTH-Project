import {addAnimate, removeAnimate, reloadSpeech} from "./functions.js"; 

const startBtn = document.getElementById("js--start-btn");

let intro = new Audio("../audio/Tjalle/1-intro/1-welkom.m4a");
let bezoeker = new Audio("../audio/Tjalle/1-intro/2-bezoekerHelpen.m4a");
let uitleggen = new Audio("../audio/Tjalle/1-intro/3-uitleg.m4a");
let hint = new Audio("../audio/Tjalle/1-intro/4-hints.m4a");
let stem = new Audio("../audio/Tjalle/1-intro/5-stem.m4a");
let herhaal = new Audio("../audio/Tjalle/1-intro/6-herhaal.m4a");
let binnen = new Audio("../audio/Tjalle/1-intro/7-binnen.m4a");

const speechBubble = document.getElementById("js--speech-bubble");
const startExplaineBtn = document.getElementById("js--speech-bubble-img");
const startP = document.getElementById("js--speech-bubble-p");
const startOKBtn = document.getElementById("js--speech-bubble-btn");
const startOverlay = document.getElementById("js--start-overlay");
const beginBtn = document.getElementById("js--btn-overlay");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const title = document.getElementById("js--overlay-title");
const speechReload = document.getElementById("js--speech-reload");

let startOK = 0;
let tekst = '';
let image = '';
let audioHerhaal = [intro, bezoeker, uitleggen, hint, stem, herhaal, binnen];
let countHerhaal = 0;

window.localStorage.clear();

speechReload.onclick = () => {
    reloadSpeech(audioHerhaal[countHerhaal], speechReload);
}

intro.play();
intro.onended = () => {
    startOKBtn.style.display = "block";
    speechReload.style.display = "block";
}

// beginBtn.onclick = () => {
//     startOverlay.style.opacity = "0";
//     startOverlay.style.zIndex = "-1";
//     beginBtn.style.display = "none";
//     title.style.opacity = "0";
//     title.style.zIndex = "-1";
// }

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
    intro.muted = true;
    bezoeker.muted = true;
    uitleggen.muted = true;
    hint.muted = true;
    stem.muted = true;
    binnen.muted = true;
};

function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    intro.muted = false;
    bezoeker.muted = false;
    uitleggen.muted = false;
    hint.muted = false;
    stem.muted = false;
    binnen.muted = false;
};

speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};

// praat wolk
startOKBtn.onclick = () => {
    switch (startOK) {
        case 0: 
            tekst = 'Vandaag nemen we een bezoeker mee om ons te helpen in de dierentuin. En raad eens... dat ben jij!';
            image = '';
            bezoeker.play();
            bezoeker.onended = () => {
                startOKBtn.style.display = "block";
                speechReload.style.display = "block";
            }
            break;
        case 1: 
            tekst = 'Voordat we naar binnen gaan leg ik uit hoe alles werkt.';
            image = '';
            uitleggen.play();
            uitleggen.onended = () => {
                startOKBtn.style.display = "block";
                speechReload.style.display = "block";
            }
            break;
        case 2: 
            startExplaineBtn.classList.remove("hide");
            tekst = 'Het lampje geeft hints. Klik hier op als je vastloopt.';
            image = '../images/hint-btn.png';
            hint.play();
            hint.onended = () => {
                startOKBtn.style.display = "block";
                speechReload.style.display = "block";
            }
            break;
        case 3: 
            tekst = 'Het oortje is mijn stem. Klik hierop dan kan je mijn stem aan en uit zetten.';
            image = '../images/speak-on-btn.png';
            stem.play();
            stem.onended = () => {
                startOKBtn.style.display = "block";
                speechReload.style.display = "block";
            }
            break;
        case 4: 
            startExplaineBtn.classList.add("hide");
            tekst = 'Klik op de knop met de pijl. Dan herhaal ik het.';
            image = '';
            herhaal.play();
            herhaal.onended = () => {
                startOKBtn.style.display = "block";
                speechReload.style.display = "block";
            }
            break;
        case 5: 
            tekst = 'Nu is alles uitgelegd. Dus laten we naar binnen gaan!';
            image = '';
            binnen.play();
            binnen.onended = () => {
                startOKBtn.style.display = "block";
                speechReload.style.display = "block";
            }
            break;
        // case 5: 
        //     tekst = 'Klik op het oortje om mijn stem uit te zetten.';
        //     image = './images/speak-on-btn.png';
        //     stem.play();
        //     stem.onended = () => {
        //         startOKBtn.style.display = "block";
        //     }
        //     break;
        // case 6: 
        //     startExplaineBtn.classList.add("hide");
        //     tekst = 'Oke, nu alles uitgelegd is, kunnen we nu echt naar binnen gaan. Laten we gaan!';
        //     image = '';
        //     binnen.play();
        //     binnen.onended = () => {
        //         startOKBtn.style.display = "block";
        //     }
        //     break;
        default:
            speechBubble.style.visibility = "hidden";
            startBtn.style.visibility = "visible";
            tekst = 'Ik herhaal nog even waar de knoppen voor staan.';
            image = '';
            break;

    }
    speechReload.style.display = "none";
    startOKBtn.style.display = "none";
    startP.innerHTML = tekst;
    startExplaineBtn.src = image;
    startOK++;
    countHerhaal++;
};

startBtn.onclick = () => {
    window.location.href="./map.html";  
};

// export {speakBtnStart};