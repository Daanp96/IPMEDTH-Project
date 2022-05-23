// import helloWorld from "./functions.js";

// helloWorld("YES");

const musicOn = document.getElementById("js--music-on");
const musicOff = document.getElementById("js--music-off");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");

const speechBubble = document.getElementById("js--speech-bubble");

let startOK = 0;

musicOn.onclick = () =>{
    musicOff.style.visibility = "visible";
    musicOn.style.visibility = "hidden";
};

musicOff.onclick = () =>{
    musicOff.style.visibility = "hidden";
    musicOn.style.visibility = "visible";
};

speakOn.onclick = () =>{
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
};

speakOff.onclick = () =>{
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
};


startOKBtn.onclick = () => {
    console.log(startOK);

    if(startOK == 0 && true){
        startP.innerHTML = "jaja";
        startOK ++;
        return;
    }
    if(startOK == 1 && true){
        speechBubble.style.visibility = "hidden";
        startOK ++;
    }
    if (startOK == 2) {
        startBtn.style.visibility = "visible";
    }
};
