import {dragDropArctic} from "./functions.js";

const fishDrag = document.getElementById("js--fish");
const okBtn = document.getElementById("js--start-ok-btn");
const speech = document.getElementById("js--speech-bubble");
const speechText = document.getElementById("js--start-p");
const arcticBtn = document.getElementById("js--arctic-btn");

okBtn.onclick = () => {
    speech.style.display = "none";
    fishDrag.style.visibility ="visible";
    okBtn.style.display = "none";
}

arcticBtn.onclick = () => {
    window.location.href = "./dierentuinpad.html";
}

dragDropArctic(fishDrag, speech, speechText, arcticBtn);
