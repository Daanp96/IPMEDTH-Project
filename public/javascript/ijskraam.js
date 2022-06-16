import {dragDropIjs} from "./functions.js";

const ijsbalie = document.getElementById("js--balie");
const overlay = document.getElementById("js--overlay");
const ijsjes = document.getElementsByClassName("ijs_keuze");
const popup = document.getElementById("js--popup");

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
            let kleur = ijs.getAttribute("data-color");
            bol_img.src = `../images/ijsbar/ijs_${kleur}.png`;
            bol_img.className = `ijsbol_${kleur}`;
            bol_img.classList.add("ijsbol", "button");
            ijs.classList.remove("button");
            bol_img.style.top = `${e.layerY - e.offsetY}px`;
            bol_img.style.left = `${e.layerX - e.offsetX}px`;
            popup.append(bol_img);
            ijs.onclick = null;
            dragDropIjs(bol_img);
        }
    }
}


// dragDropIjs(ijs);