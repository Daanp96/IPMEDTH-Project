import {reloadSpeech} from "./functions.js";

let welkeKlas = new Audio("./audio/Tjalle/0-keuzescherm/1-welkeklas.m4a");

const mouthMove = document.getElementById("js--mouth");
const speechReload = document.getElementById("js--speech-reload");

const groep2 = document.getElementById("js--btn-groep2");
const groep3 = document.getElementById("js--btn-groep3");

welkeKlas.play();
welkeKlas.onplaying = () => {
    mouthMove.style.display = "block";
    mouthMove.classList.add("mouth_move_wave");
}
welkeKlas.onended = () => {
    mouthMove.style.display = "none";
    speechReload.style.display = "block";
}
groep2.onclick = () =>{
    window.location = "pages/groep-2/start.html"
};
groep3.onclick = () =>{
    window.location = "pages/start.html"
};

window.localStorage.clear();

speechReload.onclick = () => {
    reloadSpeech(welkeKlas, speechReload, mouthMove);
}
