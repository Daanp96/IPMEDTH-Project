const startBtn = document.getElementById("js--start-btn")
const startOKBtn = document.getElementById("js--start-ok-btn");
const startP = document.getElementById("js--start-p");
const startExplaneBtn = document.getElementById("js--start-explane-btn");

const speechBubble = document.getElementById("js--speech-bubble");

let startOK = 0;

const bubbleText = {
    0: {
        tekst: 'jaja',
        image: ''
    },
    1: {
        tekst: 'Klik op het lampje voor een hint.',
        image: './images/hint-btn.png'
    },
    2: {
        tekst: 'Klik op i voor een informatie.',
        image: './images/information-btn.png'
    }, 
    3: {
        tekst: 'Klik op de muzieknoot om de muziek uit te zetten.',
        image: './images/music-on-btn.png'
    }, 
    4: {
        tekst: 'Klik op de oor om mijn geluid uit te zetten.',
        image: './images/speak-on-btn.png'
    }
}

// praat wolk
startOKBtn.onclick = () => {

    // for (const [count, content] of Object.entries(bubbleText)) {
    //    if(count == startOK){
    //     startP.innerHTML = content.tekst;
    //     startExplaneBtn.src = content.image;
    //    }
    // }

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

startBtn.onclick = () => {
    window.location.href="./pages/mappuzzel.html";  
}