import {dragDropMap, hintGlow} from "./functions.js";

const slides = document.getElementsByClassName("drag");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const hintBtn = document.getElementById("js--hint");

const button = document.getElementById("js--map-btn");
const speech = document.getElementById("js--speech-bubble");
const speechP = document.getElementById("js--speech-bubble-p");
const speechImage = document.getElementById("js--speech-bubble-img");
const speechButton = document.getElementById("js--speech-bubble-btn");

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
}

let countHint = 0;

for (let slide of slides) {
    dragDropMap(slide, button, zookeeper, speech, kaartHeel);
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
// speakOn.onclick = () => {
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

// speakOn.onclick = () => {
//     speakOff.style.visibility = "visible";
//     speakOn.style.visibility = "hidden";
//     mapUitleg.muted = true;
//     hint.muted = true;
//     kaartHeel.muted = true;
// };
// speakOff.onclick = () => {
//     speakOff.style.visibility = "hidden";
//     speakOn.style.visibility = "visible";
//     mapUitleg.muted = false;
//     hint.muted = false;
//     kaartHeel.muted = false;
// };

button.onclick = () => {
    window.location.href = "./dierentuinpad.html"; 
}

speechButton.onclick = () => {
    zookeeper.style.visibility = "hidden";
    zookeeper.style.zIndex = "-1";
    speech.style.visibility = "hidden";
    speech.style.zIndex = "-1";
    mapOverlay.style.zIndex = "-1";
    hintBtn.disabled = false;
    hintGlow(5000, hintBtn);
}

hintBtn.onclick = () => {
    console.log(countHint);
    switch (countHint) {
        case 0: 
            zookeeper.style.visibility = "visible";
            zookeeper.style.zIndex = "4";
            speech.style.visibility = "visible";
            speech.style.zIndex = "2";
            mapOverlay.style.zIndex = "1";
            speechImage.classList.remove("hide");
            speechP.innerHTML = "Beweeg de muis naar een puzzelstukje en doe dan dit:";
            hint.play();
            hint.onended = () => {
                speechButton.style.display = "flex";
            }

            speechButton.onclick = () => {
                zookeeper.style.visibility = "hidden";
                zookeeper.style.zIndex = "-1";
                speech.style.visibility = "hidden";
                speech.style.zIndex = "-1";
                mapOverlay.style.zIndex = "-1";
                speechImage.classList.add("hide");
                hintBtn.muted = true;
                countHint++;
            }
            break;
    }
    speechButton.style.display = "none";
}
