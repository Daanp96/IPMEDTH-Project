import {reloadSpeech} from "./functions.js";

let welkeKlas = new Audio("./audio/Tjalle/0-keuzescherm/1-welkeklas.m4a");

const speechReload = document.getElementById("js--speech-reload");
const beginBtn = document.getElementById("js--begin");
const overlay = document.getElementById("js--begin-overlay");

const groep2 = document.getElementById("js--btn-groep2");
const groep3 = document.getElementById("js--btn-groep3");

groep2.onclick = () =>{
    window.location = "pages/groep-2/start.html"
};
groep3.onclick = () =>{
    window.location = "pages/start.html"
};

beginBtn.onclick = () => {
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-1";
    welkeKlas.play();

    welkeKlas.onended = () => {
        speechReload.style.display = "block";
    }
}

window.localStorage.clear();

speechReload.onclick = () => {
    reloadSpeech(welkeKlas, speechReload);
}
