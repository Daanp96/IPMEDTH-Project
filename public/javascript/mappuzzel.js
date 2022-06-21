import {dragDropMap} from "./functions.js";

const slides = document.getElementsByClassName("drag");

const button = document.getElementById("js--map_btn");
const speech = document.getElementById("js--speech-bubble");
const speechP = document.getElementById("js--speech-bubble-p");
const speechImage = document.getElementById("js--speech-bubble-img");
const speechButton = document.getElementById("js--speech-bubble-btn");

const zookeeper = document.getElementById("js--map_zookeeper");
const mapOverlay = document.getElementById("js--map-overlay");

const mapUitleg = new Audio("../audio/3-Mappuzzel/1-kaartInElkaar.mp3");

mapUitleg.play();
mapUitleg.onended = () => {
    speechButton.style.display = "flex";
}
const hintBtn = document.getElementById("js--hint");

let countHint = 0;

for (let i = 0; i < slides.length; i++) {
    dragDropMap(slides[i], button, zookeeper, speech);
}

button.onclick = () => {
    window.location.href = "./dierentuinpad.html"; 
}

speechButton.onclick = () => {
    zookeeper.style.visibility = "hidden";
    zookeeper.style.zIndex = "-1";
    speech.style.visibility = "hidden";
    speech.style.zIndex = "-1";
    mapOverlay.style.zIndex = "-1";
}

hintBtn.onclick = () => {
    console.log(countHint);
    switch (countHint) {
        case 0: 
            zookeeper.style.visibility = "visible";
            zookeeper.style.zIndex = "2";
            speech.style.visibility = "visible";
            speech.style.zIndex = "2";
            mapOverlay.style.zIndex = "1";
            speechImage.classList.remove("hide");
            speechP.innerHTML = "Beweeg de muis naar een puzzelstukje en doe dan dit:";

            speechButton.onclick = () => {
                zookeeper.style.visibility = "hidden";
                zookeeper.style.zIndex = "-1";
                speech.style.visibility = "hidden";
                speech.style.zIndex = "-1";
                mapOverlay.style.zIndex = "-1";
                speechImage.classList.add("hide");
                countHint++;
            }
            break;
    }
}