import {dragDropMap} from "./functions.js";

const slides = document.getElementsByClassName("drag");
const button = document.getElementById("js--map_btn");
const speech = document.getElementById("js--speech-bubble");
const speechButton = document.getElementById("js--mappuzzle-ok-btn");
const zookeeper = document.getElementById("js--map_zookeeper");

for (let i = 0; i < slides.length; i++) {
    dragDropMap(slides[i], '240px', button, zookeeper, speech);
}

button.onclick = () => {
    window.location.href = "./map.html"; 
}

speechButton.onclick = () => {
    zookeeper.style.opacity = "0";
    zookeeper.style.zIndex = "-1";
    speech.style.opacity = "0";
    speech.style.zIndex = "-1";
}