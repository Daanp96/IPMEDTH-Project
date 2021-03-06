import {dragDropMap, hintGlow, reloadSpeech, reloadHint} from "./functions.js";

const slides = document.getElementsByClassName("drag");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");


const button = document.getElementById("js--map-btn");
const speech = document.getElementById("js--speech-bubble");
const speechP = document.getElementById("js--speech-bubble-p");
const speechImage = document.getElementById("js--speech-bubble-img");
const speechButton = document.getElementById("js--speech-bubble-btn");
const herhaal = document.getElementById("js--speech-reload");

const zookeeper = document.getElementById("js--map_zookeeper");
const mapOverlay = document.getElementById("js--map-overlay");

// const mapUitleg = new Audio("../audio/3-Mappuzzel/1-kaartInElkaar.mp3");
const mapUitleg = new Audio("../audio/Tjalle/3-mappuzzel/1-kaartInElkaar.m4a");
const hint = new Audio("../audio/Tjalle/3-mappuzzel/hint-1.m4a");
const kaartHeel = new Audio("../audio/Tjalle/3-mappuzzel/2-kaartKlaar.m4a");

hintBtn.disabled = true;

mapUitleg.play();

mapUitleg.onended = () => {
    speechButton.style.display = "flex";
    herhaal.style.display = "block";
}

let countHint = 0;
let isHint = false;
let countHerhaal = 0;
let audioHerhaal = [mapUitleg, kaartHeel];
let countGlow = 0;

herhaal.onclick = () => {
    if(isHint) {
        reloadHint(hint, herhaal);
    } else {
        reloadSpeech(audioHerhaal[countHerhaal], herhaal);
    }
}

for (let slide of slides) {
    dragDropMap(slide, button, zookeeper, speech, speechP, kaartHeel, herhaal, speechButton, mapOverlay, hintBtn);
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
    mapUitleg.muted = true;
    hint.muted = true;
    kaartHeel.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    mapUitleg.muted = false;
    hint.muted = false;
    kaartHeel.muted = false;
};
  
speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};


button.onclick = () => {
    window.location.href = "./dierentuinpad.html"; 
}

speechButton.onclick = () => {
    speechButton.style.display = "none";
    zookeeper.style.visibility = "hidden";
    zookeeper.style.zIndex = "-1";
    speech.style.visibility = "hidden";
    speech.style.zIndex = "-1";
    mapOverlay.style.zIndex = "-1";
    hintBtn.disabled = false;
    herhaal.style.display = "none";
    speechButton.style.display = "none";
    countHerhaal++;
    
    setTimeout(() => {
        hintGlow(countGlow, hintBtnGlow);
        setTimeout(() => {
            hintBtnGlow.classList.remove("glow");
        }, 70000);
    }, 60000);
}

hintBtn.onclick = () => {
    isHint = true;
    countGlow = 1;
    hintGlow(countGlow, hintBtnGlow);
    switch (countHint) {
        case 0: 
            hintBtnGlow.classList.remove("glow");
            zookeeper.style.visibility = "visible";
            zookeeper.style.zIndex = "6";
            speech.style.visibility = "visible";
            speech.style.zIndex = "6";
            mapOverlay.style.zIndex = "4";
            speechImage.classList.remove("hide");
            herhaal.style.display = "none";
            speechP.innerHTML = "Beweeg de muis naar een puzzelstukje en doe dan dit:";
            hint.play();

            hint.onended = () => {
                speechButton.style.display = "flex";
                herhaal.style.display = "block";
            }

            speechButton.onclick = () => {
                zookeeper.style.visibility = "hidden";
                zookeeper.style.zIndex = "-1";
                speech.style.visibility = "hidden";
                speech.style.zIndex = "-1";
                mapOverlay.style.zIndex = "-1";
                speechImage.classList.add("hide");
                herhaal.style.display = "none";
                hintBtn.muted = true;
                isHint = false;
                countHint++;
            }
            break;
    }
    // isHint = false;
    speechButton.style.display = "none";
}