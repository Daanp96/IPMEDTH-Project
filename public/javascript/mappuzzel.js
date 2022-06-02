import {dragDropMap} from "./functions.js";

const slides = document.getElementsByClassName("drag");
const button = document.getElementById("js--map_btn");
const speech = document.getElementById("js--speech-bubble");
const speechButton = document.getElementById("js--speech-bubble-btn");
const zookeeper = document.getElementById("js--map_zookeeper");
const mapOverlay = document.getElementById("js--map-overlay");

for (let i = 0; i < slides.length; i++) {
    dragDropMap(slides[i], '240px', button, zookeeper, speech);
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