const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");
const startExplaineBtn = document.getElementById("js--start-explaine-btn");

const speechBubble = document.getElementById("js--speech-bubble");

let startOK = 0;

// praat wolk
startOKBtn.onclick = () => {
    console.log(startOK);

    if(startOK == 0 && true){
        startP.innerHTML = "jaja";
        startOK ++;
        return;
    }
    if(startOK == 1 && true){
        startExplaineBtn.classList.remove("hide");
        startExplaineBtn.src = './images/hint-btn.png';
        startP.innerHTML = 'Klik op het lampje voor een hint.';
        startOK ++;
        return;
    }
    if(startOK == 2 && true){
        startExplaineBtn.src = './images/information-btn.png';
        startP.innerHTML = 'Klik op i voor een informatie.';
        startOK ++;
        return;
    }
    if(startOK == 3 && true){
        startExplaineBtn.src = './images/music-on-btn.png';
        startP.innerHTML = 'Klik op de muzieknoot om de muziek uit te zetten.';
        startOK ++;
        return;
    }
    if(startOK == 4 && true){
        startExplaineBtn.src = './images/speak-on-btn.png';
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

startBtn.onclick = () => {
    window.location.href="/pages/mappuzzel.html";  
};