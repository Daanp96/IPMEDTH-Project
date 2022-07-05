import {reloadSpeech, hintGlow, reloadHint} from "./functions2.js";

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const mapOverlay = document.getElementById("js--map-overlay");

let countHint = 0;
let tekst = '';
let image = '';
let startOK = 0;
let countHerhaal = 0;
let isHint = false;
let startTime;

function start(){
    startTime = new Date();
}

// const hint1 = new Audio("../audio/6-aap/hint-1.mp3");
// const hint2 = new Audio("../audio/6-aap/hint-2.mp3");
// const hint3 = new Audio("../audio/6-aap/hint-3.mp3");
// const hint4 = new Audio("../audio/6-aap/hint-4.mp3");

setInterval(() => {
    if (localStorage.getItem("speakOnStorage2") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage2") == 'visible') {
        speakOffFunction();
    }
}, 1000);

function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    // savanneVerblijf.muted = true;
    // verbeteren.muted = true;
    // hint1.muted = true;
    // hint2.muted = true;
    // hint3.muted = true;
    // hint4.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    // savanneVerblijf.muted = false;
    // verbeteren.muted = false;
    // hint1.muted = false;
    // hint2.muted = false;
    // hint3.muted = false;
    // hint4.muted = false;
};

if(document.URL.includes("groep-2/savanne.html") ){
    hintBtn.disabled = true;

    speakOn.onclick = () => {
        speakOnFunction();
    };
    speakOff.onclick = () => {
        speakOffFunction();
    };

    startOKBtn.onclick = () => {
        speechBubble.style.visibility = "hidden";
        speechBubble.style.zIndex = "";
        mapOverlay.style.zIndex = "-1";
        hintBtn.disabled = false;
        start();
        if(countHint == 0){
            hintGlow(60000, hintBtnGlow);
            setTimeout(() => {
                hintBtnGlow.classList.remove("glow");
            }, 70000);
        } else {
            hintBtnGlow.classList.remove("glow");
        }
    };
    
    hintBtn.onclick = () => {
        console.log(countHint);
        switch (countHint) {
            case 0: 
                speechBubble.style.visibility = "visible";
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                tekst = 'Klik op het bord.';
                // hint1.play();
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
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
                // hint2.play();
                image = '../../images/savanne2/question-mark.png';
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
                explaineBtn.classList.remove("hide");
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                explaineBtn.style.width = "23vw";
                tekst = 'Je toetsenbord gebruikt blokletters, dit zijn de kleine letters.';
                // hint3.play();
                image = '../../images/savanne2/Keyboard2.png';
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 3: 
                speechBubble.style.visibility = "visible";
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                tekst = 'Het antwoord is: aap';
                // hint4.play();
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
}

export { countHint, startTime};