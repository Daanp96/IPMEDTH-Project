// import helloWorld from "./functions.js";

// helloWorld("YES");

const musicOn = document.getElementById("js--music-on");
const musicOff = document.getElementById("js--music-off");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");
const startExplaneBtn = document.getElementById("js--start-explane-btn");

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

// praat wolk
startOKBtn.onclick = () => {
    console.log(startOK);

    if(startOK == 0 && true){
        startP.innerHTML = "jaja";
        startOK ++;
        return;
    }
    if(startOK == 1 && true){
        startExplaneBtn.classList.remove("hide");
        startExplaneBtn.src = './images/hint-btn.png';
        startP.innerHTML = 'Klik op het lampje voor een hint.';
        startOK ++;
        return;
    }
    if(startOK == 2 && true){
        startExplaneBtn.src = './images/information-btn.png';
        startP.innerHTML = 'Klik op i voor een informatie.';
        startOK ++;
        return;
    }
    if(startOK == 3 && true){
        startExplaneBtn.src = './images/music-on-btn.png';
        startP.innerHTML = 'Klik op de muzieknoot om de muziek uit te zetten.';
        startOK ++;
        return;
    }
    if(startOK == 4 && true){
        startExplaneBtn.src = './images/speak-on-btn.png';
        startP.innerHTML = 'Klik op de oor om mijn geluid uit te zetten.';
        startOK ++;
        return;
    }
    if(startOK == 5 && true){
        speechBubble.style.visibility = "hidden";
        startOK ++;
    }
    if (startOK == 6) {
        startBtn.style.visibility = "visible";
    }
};
