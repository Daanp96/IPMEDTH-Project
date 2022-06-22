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

//audio
const goedemiddag = new Audio("../audio/Tjalle/8-ijsbar/1-goedemiddag.m4a");
const bolletjes = new Audio("../audio/Tjalle/8-ijsbar/2-bolletjes.m4a");
const betalen = new Audio("../audio/Tjalle/8-ijsbar/3-betalen.m4a");
const dankje = new Audio("../audio/Tjalle/8-ijsbar/4-dankje.m4a");

const hint1 = new Audio("../audio/Tjalle/8-ijsbar/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/8-ijsbar/hint-2.m4a");

goedemiddag.play();

speakOn.onclick = () => {
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    goedemiddag.muted = true;
    bolletjes.muted = true;
    betalen.muted = true;
    dankje.muted = true;
    hint1.muted = true;
    hint2.muted = true;
};

speakOff.onclick = () => {
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    goedemiddag.muted = false;
    bolletjes.muted = false;
    betalen.muted = false;
    dankje.muted = false;
    hint1.muted = false;
    hint2.muted = false;
};


ijsbalie.onclick = () => {
    goedemiddag.play();
    overlay.style.opacity =  "1";
    overlay.style.zIndex = "1";
    popup.style.opacity = "1";
    popup.style.zIndex = "1";
    ijsbalie.classList.remove("ijs_animatie");
    for (let ijs of ijsjes) {
        ijs.style.opacity = "1";
        ijs.style.zIndex = "5";
        ijs.firstElementChild.style.pointerEvents = "none";

        ijs.onclick = (e) => {
            let bol_img = document.createElement("img");
            let kleur = ijs.getAttribute("data-kleur");
            bol_img.src = `../images/ijsbar/ijs_${kleur}.png`;
            bol_img.className = `ijsbol_${kleur}`;
            bol_img.dataset.kleur = kleur;
            bol_img.dataset.bol = 'ijs';
            bol_img.classList.add("ijsbol", "button");
            bol_img.style.top = `${e.clientY - e.offsetY - 180}px`;
            bol_img.style.left = `${e.clientX - e.offsetX - 250}px`;
            speechBubble.innerHTML = "Sleep jouw bolletje naar de ijshoorn toe."
            popup.append(bol_img);
            dragDropIjs(bol_img, kassa, ijsbol2, ijsbol3, ijsjes, speechBubble);
        }
    }
}

for(let munt of munten) {
    dragDropGeld(munt, kassa, ijsBtn);
}

ijsBtn.onclick = () => {
    toDierentuinPad();
}

const toDierentuinPad = () => {
    window.location = "dierentuinpad.html";
}