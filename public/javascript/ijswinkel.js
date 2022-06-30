import {dragDropIjs, dragDropGeld} from "./functions.js";

const ijsbalie = document.getElementById("js--balie");
const overlay = document.getElementById("js--overlay");
const ijsjes = document.getElementsByClassName("ijs_keuze");
const popup = document.getElementById("js--popup");
const kassa = document.getElementById("js--kassa");
const munten = document.getElementsByClassName("geld");

// const ijsbol1 = document.getElementById("js--bol1");
const ijsbol2 = document.getElementById("js--bol2");
const ijsbol3 = document.getElementById("js--bol3");
const ijsBtn = document.getElementById("js--btn-ijs");
const speechBubble = document.getElementById("js--speech-bubble");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const hintBtn = document.getElementById("js--hint");

//hint popup
const headIjsco = document.getElementById("js--head-ijsco");
const hintBubble = document.getElementById("js--hintBubble");
const hintBubbleP = document.getElementById("js--speech-bubble-p-hint");
const hintBubbleBtn = document.getElementById("js--hintBubble-btn");
const mapOverlay = document.getElementById("js--map-overlay");
const ijswinkelSpeechBubble = document.getElementById("js--ijswinkel-speech-bubble");
const ijswinkelHead = document.getElementById("js--ijswinkel-head");

//audio
const goedemiddag = new Audio("../audio/Tjalle/8-ijsbar/1-goedemiddag.m4a");
const bolletjes = new Audio("../audio/Tjalle/8-ijsbar/2-bolletjes.m4a");
const betalen = new Audio("../audio/Tjalle/8-ijsbar/3-betalen.m4a");
const dankje = new Audio("../audio/Tjalle/8-ijsbar/4-dankje.m4a");
// const kleuren = new Audio("../audio/Tjalle/8-ijsbar/5-kleuren.m4a");
// const slepen = new Audio("../audio/Tjalle/8-ijsbar/6-slepen.m4a");
// const velden = new Audio("../audio/Tjalle/8-ijsbar/7-velden.m4a");
const ijsjeKlaar = new Audio("../audio/Tjalle/8-ijsbar/8-ijsjeKlaar.m4a");
// const bedrag = new Audio("../audio/Tjalle/8-ijsbar/9-bedrag.m4a");
const kaching = new Audio("../audio/ijsbar/kassa_fix.mp3");

const hint1 = new Audio("../audio/Tjalle/8-ijsbar/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/8-ijsbar/hint-2.m4a");

let countHint = 0;
let tekst = '';

goedemiddag.play();
hintBtn.disabled = true;

setInterval(() => {
    if (localStorage.getItem("speakOnStorage") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage") == 'visible') {
        speakOffFunction();
    }
}, 100);
  
function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    goedemiddag.muted = true;
    bolletjes.muted = true;
    betalen.muted = true;
    // kleuren.muted = true;
    // slepen.muted = true;
    kaching.muted = true;
    ijsjeKlaar.muted = true;
    dankje.muted = true;
    hint1.muted = true;
    hint2.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    goedemiddag.muted = false;
    bolletjes.muted = false;
    betalen.muted = false;
    // kleuren.muted = false;
    // slepen.muted = false;
    kaching.muted = false;
    ijsjeKlaar.muted = false;
    dankje.muted = false;
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
//     goedemiddag.muted = true;
//     bolletjes.muted = true;
//     betalen.muted = true;
//     kleuren.muted = true;
//     slepen.muted = true;
//     ijsjeKlaar.muted = true;
//     dankje.muted = true;
//     hint1.muted = true;
//     hint2.muted = true;

// };

// speakOff.onclick = () => {
//     speakOff.style.visibility = "hidden";
//     speakOn.style.visibility = "visible";
//     goedemiddag.muted = false;
//     bolletjes.muted = false;
//     betalen.muted = false;
//     kleuren.muted = false;
//     slepen.muted = false;
//     ijsjeKlaar.muted = false;
//     dankje.muted = false;
//     hint1.muted = false;
//     hint2.muted = false;
// };

ijsbalie.onclick = () => {
    hintBtn.disabled = false;
    // kleuren.play();
    overlay.style.opacity =  "1";
    overlay.style.zIndex = "1";
    popup.style.opacity = "1";
    popup.style.zIndex = "1";
    ijswinkelSpeechBubble.style.zIndex = "1";
    ijswinkelSpeechBubble.style.opacity = "1";
    ijswinkelHead.style.opacity = "1";
    ijswinkelHead.style.zIndex = "1";
    ijsbalie.classList.remove("ijs_animatie");

    for (let ijs of ijsjes) {

        ijs.style.opacity = "1";
        ijs.style.zIndex = "5";
        // ijs.firstElementChild.style.pointerEvents = "none";
        ijs.onclick = (e) => {
            // slepen.play();
            // slepen.onended = () => {
            //     slepen.src = '';
            // };
            let bol_img = document.createElement("img");
            let kleur = ijs.getAttribute("data-kleur");
            bol_img.src = `../images/ijswinkel/ijs_${kleur}.png`;
            bol_img.className = `ijsbol_${kleur}`;
            bol_img.dataset.kleur = kleur;
            bol_img.dataset.bol = 'ijs';
            bol_img.classList.add("ijswinkel-popup__bol", "button");
            bol_img.style.top = `${e.clientY - e.offsetY - 25}px`;
            bol_img.style.left = `${e.clientX - e.offsetX - 25}px`;
            // speechBubble.innerHTML = "Sleep jouw bolletje naar de ijshoorn toe.";
            popup.append(bol_img);
            dragDropIjs(bol_img, kassa, ijsbol2, ijsbol3, ijsjes, speechBubble, ijsjeKlaar);
        }
    }
}

for(let munt of munten) {
    dragDropGeld(munt, kassa, ijsBtn, speechBubble, dankje, kaching);
}

hintBtn.onclick = () => {
    switch (countHint) {
        case 0:
            hintBubbleBtn.style.display = "none";
            mapOverlay.classList.remove("hide");
            headIjsco.classList.remove("hide");
            hintBubble.classList.remove("hide");
            tekst = "Klik op een kleur om een bolletje ijs te pakken.";
            hint1.play();
            hint1.onended = () => {
                hintBubbleBtn.style.display = "flex";
            }
            hintBubbleBtn.onclick = () => {
                mapOverlay.classList.add("hide");
                headIjsco.classList.add("hide");
                hintBubble.classList.add("hide");
                hintBubbleBtn.style.display = "none";
                countHint++;
            }
            break;
        case 1:
            hintBubbleBtn.style.display = "none";
            mapOverlay.classList.remove("hide");
            headIjsco.classList.remove("hide");
            hintBubble.classList.remove("hide");
            tekst = "Sleep jou bolletje naar de ijshoorn toe.";
            hint2.play();
            hint2.onended = () => {
                hintBubbleBtn.style.display = "flex";
            }
            hintBubbleBtn.onclick = () => {
                mapOverlay.classList.add("hide");
                headIjsco.classList.add("hide");
                hintBubble.classList.add("hide");
                hintBubbleBtn.style.display = "none";
                countHint++;
            }
            break;
    }
    hintBubbleP.innerHTML = tekst;
};

ijsBtn.onclick = () => {
    toDierentuinPad();
}

const toDierentuinPad = () => {
    window.location = "dierentuinpad.html";
}