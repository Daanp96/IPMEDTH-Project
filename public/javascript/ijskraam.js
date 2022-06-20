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

ijsbalie.onclick = (e) => {
    overlay.style.opacity =  "1";
    overlay.style.zIndex = "1";
    popup.style.opacity = "1";
    popup.style.zIndex = "1";
    ijsbalie.classList.remove("ijs_animatie");
    for (let ijs of ijsjes) {
        ijs.style.opacity = "1";
        ijs.style.zIndex = "5";

        ijs.onclick = (e) => {
            let bol_img = document.createElement("img");
            let kleur = ijs.getAttribute("data-kleur");
            bol_img.src = `../images/ijsbar/ijs_${kleur}.png`;
            bol_img.className = `ijsbol_${kleur}`;
            bol_img.dataset.kleur = kleur;
            bol_img.dataset.bol = 'ijs';
            bol_img.classList.add("ijsbol", "button");
            bol_img.style.top = `${e.layerY - e.offsetY}px`;
            bol_img.style.left = `${e.layerX - e.offsetX}px`;
            // ijs.classList.remove("button");
            // ijs.onclick = null;
            popup.append(bol_img);
            dragDropIjs(bol_img, kassa, ijsbol2, ijsbol3);
            // dragDropIjs(bol_img, kassa, ijsbol2, ijsbol3);
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