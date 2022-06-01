const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");
const startExplaneBtn = document.getElementById("js--start-explane-btn");

const speechBubble = document.getElementById("js--speech-bubble");

let startOK = 0;

// praat wolk
startOKBtn.onclick = () => {
    console.log(startOK);

    if(startOK == 0 && true){
        startP.innerHTML = "Ik ben Ron en ik zal jullie rondleiden door het park.";
        startOK ++;
        return;
    }
    if(startOK == 1 && true){
        startP.innerHTML = "Voordat we naar binnen gaan zal ik uitleggen hoe alles werkt.";
        startOK ++;
        return;
    }
    if(startOK == 2 && true){
        startExplaneBtn.classList.remove("hide");
        startExplaneBtn.src = './images/hint-btn.png';
        startP.innerHTML = 'Klik op het lampje voor een hint.';
        startOK ++;
        return;
    }
    if(startOK == 3 && true){
        startExplaneBtn.src = './images/information-btn.png';
        startP.innerHTML = 'Klik op i als je deze uitleg nog een keer wilt krijgen.';
        startOK ++;
        return;
    }
    if(startOK == 4 && true){
        startExplaneBtn.src = './images/music-on-btn.png';
        startP.innerHTML = 'Klik op de muzieknoot om de muziek uit of aan te zetten.';
        startOK ++;
        return;
    }
    if(startOK == 5 && true){
        startExplaneBtn.src = './images/speak-on-btn.png';
        startP.innerHTML = 'Klik op het oor om mijn stem uit of aan te zetten.';
        startOK ++;
        return;
    }
    if(startOK == 6 && true){
        speechBubble.style.visibility = "hidden";
        startOK ++;
    }
    if (startOK == 7) {
        startBtn.style.visibility = "visible";
    }
};