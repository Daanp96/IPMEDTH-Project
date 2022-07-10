import {dragDropArctic, reloadSpeech, reloadHint, hintGlow} from "./functions.js";

const fishDrag = document.getElementById("js--fish");
const pinguinverblijfBtn = document.getElementById("js--pinguinverblijf-btn");

const mapOverlay = document.getElementById("js--map-overlay");

const speechBubble = document.getElementById("js--speech-bubble");
const explaineBtn = document.getElementById("js--speech-bubble-img");
const speechBubble_p = document.getElementById("js--speech-bubble-p");
const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const herhaal = document.getElementById("js--speech-reload");

let countHint = 0;
let tekst = '';
let image = '';
let countGlow = 0;

const pinguinVerblijf = new Audio("../audio/Tjalle/7-pinguins/1-pinguïnverblijf.m4a");

const goedGedaan = new Audio("../audio/Tjalle/7-pinguins/2-goedGedaan.m4a");
const hint1 = new Audio("../audio/Tjalle/7-pinguins/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/7-pinguins/hint-2.m4a");

const hintHerhaalArctic = [hint1, hint2];
let isHint = false;
let startTime;

function start(){
    startTime = new Date();
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
    goedGedaan.muted = true;
    hint1.muted = true;
    hint2.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    pinguinVerblijf.muted = false;
    goedGedaan.muted = false;
    hint1.muted = false;
    hint2.muted = false;
};

if(document.URL.includes("pinguinverblijf.html") ){
    dragDropArctic(fishDrag, speechBubble, speechBubble_p, pinguinverblijfBtn, startOKBtn, goedGedaan, herhaal, hintBtn);

    hintBtn.disabled = true;
    pinguinVerblijf.play();

    pinguinVerblijf.onended = () => {
        startOKBtn.style.display = "flex";
        herhaal.style.display = "block";
    }
    
    startOKBtn.onclick = () => {
        speechBubble.style.visibility = "hidden";
        fishDrag.style.visibility ="visible";
        // startOKBtn.style.visibility = "hidden";
        speechBubble.style.zIndex = "";
        mapOverlay.style.zIndex = "-1";
        hintBtn.disabled = false;
        herhaal.style.display = "none";

        start();
        setTimeout(() => {
            hintGlow(countGlow, hintBtnGlow);
            setTimeout(() => {
                hintBtnGlow.classList.remove("glow");
            }, 70000);
        }, 60000);
    }

    speakOn.onclick = () => {
        speakOnFunction();
    };
    speakOff.onclick = () => {
        speakOffFunction();
    };

    herhaal.onclick = () => {
        if(isHint) {
            reloadHint(hintHerhaalArctic[countHint], herhaal);
        } else {
            reloadSpeech(pinguinVerblijf, herhaal);
        }
    }
    
    pinguinverblijfBtn.onclick = () => {
        window.location.href = "./dierentuinpad.html";
    }
        
    hintBtn.onclick = () => {
        isHint = true;
        countGlow = 1;
        hintGlow(countGlow, hintBtnGlow);
        switch (countHint) {
            case 0: 
                speechBubble.style.visibility = "visible";
                // explaineBtn.classList.remove("hide");
                speechBubble_p.style.visibility = "visible";
                // startOKBtn.style.visibility = "visible";
                tekst = 'Alle pinguïns moeten gevoed worden.';
                hint1.play();

                hint1.onended = () => {
                    startOKBtn.style.display = "flex";
                    herhaal.style.display = "block";
                }
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    isHint = false;
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
                    herhaal.style.display = "block";
                }
                image = '../images/gif/klik_zijkant.gif';
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.visibility = "hidden";
                    isHint = false;
                    countHint++;
                }
                break;
            case 2:
                speechBubble.style.visibility = "hidden";
                startOKBtn.style.display = "none";
                speechBubble.style.zIndex = "";
                mapOverlay.style.zIndex = "-1";
                // tekst = '';
                hintBtn.disabled = true;
                break;
        }
        herhaal.style.display = "none";
        startOKBtn.style.display = "none";
        speechBubble_p.innerHTML = tekst;
        explaineBtn.src = image;        
    };
}
  
export { countHint, startTime};