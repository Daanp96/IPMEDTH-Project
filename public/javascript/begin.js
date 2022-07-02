import {reloadSpeech} from "./functions.js";

let welkeKlas = new Audio("./audio/Tjalle/0-keuzescherm/1-welkeklas.m4a");

const mouthMove = document.getElementById("js--mouth");
const speechReload = document.getElementById("js--speech-reload");

const groep3 = document.getElementById("js--btn-groep3");

let audioHerhaal = [welkeKlas];
let countHerhaal = 0;

welkeKlas.play();
welkeKlas.onplaying = () => {
    mouthMove.style.display = "block";
    mouthMove.classList.add("mouth_move_wave");
}
welkeKlas.onended = () => {
    mouthMove.style.display = "none";
    speechReload.style.display = "block";
}

groep3.onclick = () =>{
    window.location = "pages/start.html"
};

window.localStorage.clear();

speechReload.onclick = () => {
    reloadSpeech(audioHerhaal[countHerhaal], speechReload);
}