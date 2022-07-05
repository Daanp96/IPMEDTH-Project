import {reloadSpeech, hintGlow, reloadHint} from "./functions2.js";

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const herhaal = document.getElementById("js--speech-reload");

const mapOverlay = document.getElementById("js--map-overlay");

let countHint = 0;
let tekst = '';
let image = '';
let startOK = 0;
let countHerhaal = 0;
let isHint = false;
let startTime;

function start(){
    startTime = new Date();
}

//andere audio files -> let op ../../
const savanne = new Audio("../../audio/Tjalle/groep-2/6-aap/1-savanne.m4a");
const verschillende = new Audio("../../audio/Tjalle/groep-2/6-aap/2-verschillendeDieren.m4a");
const vergeten = new Audio("../../audio/Tjalle/groep-2/6-aap/3-vergeten.m4a");
const invullen = new Audio("../../audio/Tjalle/groep-2/6-aap/4-invullen.m4a");

const hint1 = new Audio("../../audio/Tjalle/groep-2/6-aap/hint-1.m4a");
const hint2 = new Audio("../../audio/Tjalle/groep-2/6-aap/hint-2.m4a");
const hint3 = new Audio("../../audio/Tjalle/groep-2/6-aap/hint-3.m4a");
const hint4 = new Audio("../../audio/Tjalle/groep-2/6-aap/hint-4.m4a");



setInterval(() => {
    if (localStorage.getItem("speakOnStorage2") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage2") == 'visible') {
        speakOffFunction();
    }
}, 1000);

function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    savanne.muted = true;
    verschillende.muted = true;
    vergeten.muted = true;
    invullen.muted = true;
    hint1.muted = true;
    hint2.muted = true;
    hint3.muted = true;
    hint4.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    savanne.muted = false;
    verschillende.muted = false;
    vergeten.muted = false;
    invullen.muted = false;
    hint1.muted = false;
    hint2.muted = false;
    hint3.muted = false;
    hint4.muted = false;
};

if(document.URL.includes("groep-2/savanne.html") ){
    hintBtn.disabled = true;

    speakOn.onclick = () => {
        speakOnFunction();
    };
    speakOff.onclick = () => {
        speakOffFunction();
    };

    // eerste audio die in de html staat
    savanne.play();
    savanne.onended = () => {
        startOKBtn.style.display = "block";
        herhaal.style.display = "block";
    }

    herhaal.onclick = () => {
        if(isHint) {
            reloadHint(hintHerhaalSavanne[countHint], herhaal);
        } else {
            reloadSpeech(audioHerhaalSavanne[countHerhaal], herhaal);
        }
    } 

    startOKBtn.onclick = () => {
        hintBtn.disabled = false;

        switch(startOK) {
            case 0:
                tekst = 'Hier verblijven allemaal verschillende dieren.';
                verschillende.play();
                verschillende.onplaying = () => {
                    //andere image
                }
                verschillende.onended = () => {
                    //andere image
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                break;
            case 1:
                tekst = 'Maar blijkbaar zijn we vergeten voor één dier een bord op te hangen!';
                vergeten.play();
                vergeten.onplaying = () => {
                    //andere image
                }
                vergeten.onended = () => {
                    //andere image
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                break;
            case 2:
                tekst = 'Kan jij het bord voor ons invullen?';
                invullen.play();
                invullen.onplaying = () => {
                    //andere image
                }
                invullen.onended = () => {
                    //andere image
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                break;
            case 3: 
                speechBubble.style.visibility = "hidden";
                speechBubble.style.zIndex = "";
                mapOverlay.style.zIndex = "-1";
                hintBtn.disabled = false;
                start();
                if(countHint == 0){
                    hintGlow(60000, hintBtnGlow);
                    setTimeout(() => {
                        hintBtnGlow.classList.remove("glow");
                    }, 70000);
                } else {
                    hintBtnGlow.classList.remove("glow");
                }
                break;
        }
        // herhaal.style.display = "none";
        // startOKBtn.style.display = "none";
        speechBubble_p.innerHTML = tekst;
        startOK++;
        countHerhaal++;
    };
    
    hintBtn.onclick = () => {
        isHint = true;
        console.log(countHint);
        switch (countHint) {
            case 0: 
                speechBubble.style.visibility = "visible";
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                tekst = 'Klik op het bord.';
                hint1.play();
                hint1.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 1: 
                speechBubble.style.visibility = "visible";
                explaineBtn.classList.remove("hide");
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                tekst = 'Klik op het vraagteken.';
                hint2.play();
                hint2.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                image = '../../images/savanne2/question-mark.png';
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 2: 
                speechBubble.style.visibility = "visible";
                explaineBtn.classList.remove("hide");
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                explaineBtn.style.width = "23vw";
                tekst = 'Je toetsenbord gebruikt blokletters, dit zijn de kleine letters.';
                hint3.play();
                hint3.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                image = '../../images/savanne2/Keyboard2.png';
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 3: 
                speechBubble.style.visibility = "visible";
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                tekst = 'Het antwoord is: aap';
                hint4.play();
                hint4.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 4:
                speechBubble.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                countHint++;
                break;
        }
        herhaal.style.display = "none";
        speechBubble_p.innerHTML = tekst;
        explaineBtn.src = image;
        startOKBtn.style.display = "none";
    };
}

export { countHint, startTime};