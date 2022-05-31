import {dragDropMap} from "./functions.js";

const slides = document.getElementsByClassName("drag");
const button = document.getElementById("js--map_btn");
const zookeeper = document.getElementById("js--map_zookeeper");

for (let i = 0; i < slides.length; i++) {
    dragDropMap(slides[i], '240px', button, zookeeper);
}

button.onclick = () => {
    window.location.href = "./map.html"; 
}