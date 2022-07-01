let welkeKlas = new Audio("./audio/Tjalle/0-keuzescherm/1-welkeklas.m4a");

const speechBubble = document.getElementById("js--speech-bubble");
const startExplaineBtn = document.getElementById("js--speech-bubble-img");
const startP = document.getElementById("js--speech-bubble-p");
const mouthMove = document.getElementById("js--mouth");

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
    // startOKBtn.style.display = "block";
    // speechReload.style.display = "block";
}

groep3.onclick = () =>{
    window.location = "pages/start.html"
};

window.localStorage.clear();

// speechReload.onclick = () => {
//     reloadSpeech(audioHerhaal[countHerhaal], speechReload);
// }


