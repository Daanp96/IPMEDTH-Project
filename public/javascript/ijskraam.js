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

const goedemiddag = new Audio("../audio/Tjalle/8-ijsbar/1-goedemiddag.m4a");
const bolletjes = new Audio("../audio/Tjalle/8-ijsbar/2-bolletjes.m4a");
const betalen = new Audio("../audio/Tjalle/8-ijsbar/3-betalen.m4a");
const dankje = new Audio("../audio/Tjalle/8-ijsbar/4-dankje.m4a");
const kleuren = new Audio("../audio/Tjalle/8-ijsbar/5-kleuren.m4a");
const slepen = new Audio("../audio/Tjalle/8-ijsbar/6-slepen.m4a");
const velden = new Audio("../audio/Tjalle/8-ijsbar/7-velden.m4a");
const ijsjeKlaar = new Audio("../audio/Tjalle/8-ijsbar/8-ijsjeKlaar.m4a");
const bedrag = new Audio("../audio/Tjalle/8-ijsbar/9-bedrag.m4a");

goedemiddag.play();

ijsbalie.onclick = () => {
    kleuren.play();
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
            slepen.play();
            slepen.onended = () => {
                slepen.src = '';
            };
            let bol_img = document.createElement("img");
            let kleur = ijs.getAttribute("data-kleur");
            bol_img.src = `../images/ijsbar/ijs_${kleur}.png`;
            bol_img.className = `ijsbol_${kleur}`;
            bol_img.dataset.kleur = kleur;
            bol_img.dataset.bol = 'ijs';
            bol_img.classList.add("ijsbol", "button");
            bol_img.style.top = `${e.clientY - e.offsetY - 180}px`;
            bol_img.style.left = `${e.clientX - e.offsetX - 250}px`;
            speechBubble.innerHTML = "Sleep jouw bolletje naar de ijshoorn toe.";
            popup.append(bol_img);
            dragDropIjs(bol_img, kassa, ijsbol2, ijsbol3, ijsjes, speechBubble, ijsjeKlaar);
        }
    }
}

for(let munt of munten) {
    dragDropGeld(munt, kassa, ijsBtn, speechBubble, dankje);
}

ijsBtn.onclick = () => {
    toDierentuinPad();
}

const toDierentuinPad = () => {
    window.location = "dierentuinpad.html";
}