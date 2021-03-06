import {reloadSpeech, hintGlow, reloadHint} from "./functions2.js";

const nextBtnRight = document.getElementById("js--next-btn-right");
const nextBtnLeft = document.getElementById("js--next-btn-left");
const firstpage = document.getElementById("js--first-page");
const secondpage = document.getElementById("js--second-page");

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const mapOverlay = document.getElementById("js--map-overlay");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const herhaal = document.getElementById("js--speech-reload");

let countHint = 0;
let countHerhaal = 0;

const welkomVissenverblijf = new Audio("../../audio/Tjalle/5-vissen/1-welkom.m4a");
const nieuweVissen = new Audio("../../audio/Tjalle/5-vissen/2-nieuweVissen.m4a");
const rodeVissen = new Audio("../../audio/Tjalle/5-vissen/3-rodeVissen.m4a");

const hint1 = new Audio("../../audio/Tjalle/5-vissen/hint-1.m4a");
const hint2 = new Audio("../../audio/Tjalle/5-vissen/hint-2.m4a");
const hint3 = new Audio("../../audio/Tjalle/5-vissen/hint-3.m4a");
const hint4 = new Audio("../../audio/Tjalle/5-vissen/hint-4.m4a");

const audioHerhaalVissen = [welkomVissenverblijf, nieuweVissen, rodeVissen];
const hintHerhaalVissen = [hint1, hint2, hint3, hint4];
let isHint = false;

let startOK = 0;
let tekst = '';
let image = '';
let startTime;
let countGlow = 0;

function start(){
    startTime = new Date();
}

function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    welkomVissenverblijf.muted = true;
    nieuweVissen.muted = true;
    rodeVissen.muted = true;
    hint1.muted = true;
    hint2.muted = true;
    hint3.muted = true;
    hint4.muted = true;
};

function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    welkomVissenverblijf.muted = false;
    nieuweVissen.muted = false;
    rodeVissen.muted = false;
    hint1.muted = false;
    hint2.muted = false;
    hint3.muted = false;
    hint4.muted = false;
}

setInterval(() => {
    if (localStorage.getItem("speakOnStorage2") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage2") == 'visible') {
        speakOffFunction();
    }
}, 1000);

if(document.URL.includes("vissenverblijf.html") ){
    speakOn.onclick = () => {
        speakOnFunction();
    };
    
    speakOff.onclick = () => {
        speakOffFunction();
    };
    
    hintBtn.disabled = true;
    welkomVissenverblijf.play();

    welkomVissenverblijf.onended = () => {
        startOKBtn.style.display = "block";
        herhaal.style.display = "block";
    }
    
    herhaal.onclick = () => {
        if(isHint) {
            reloadHint(hintHerhaalVissen[countHint], herhaal);
        } else {
            reloadSpeech(audioHerhaalVissen[countHerhaal], herhaal);
        }
    }
    
    // praat wolk
    startOKBtn.onclick = () => {
        switch (startOK) {
            case 0: 
                tekst = 'We hebben nieuwe vissen gekregen. Alleen weten we nog niet hoeveel.';
                image = '';
                nieuweVissen.play();

                nieuweVissen.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                break;
            case 1: 
                tekst = 'Kan jij mij vertellen hoeveel <b style="color:red;">rode vissen</b> er rond zwemmen?';
                image = '';
                rodeVissen.play();

                rodeVissen.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                break;
            case 2:
                speechBubble.style.visibility = "hidden";
                startOKBtn.style.display = "block";
                speechBubble.style.zIndex = "";
                mapOverlay.style.zIndex = "-1";
                hintBtn.disabled = false;
                start();
                setTimeout(() => {
                    hintGlow(countGlow, hintBtnGlow);
                    setTimeout(() => {
                        hintBtnGlow.classList.remove("glow");
                    }, 70000);
                }, 60000);
                break;
        }
    
        herhaal.style.display = "none";
        startOKBtn.style.display = "none";
        speechBubble_p.innerHTML = tekst;
        explaineBtn.src = image;
        startOK++;
        countHerhaal++;
    
    };
    
    nextBtnRight.onclick = () => {    
        secondpage.classList.add("grid-16-9");
        secondpage.classList.remove("hide");
        secondpage.classList.add("slidein-from-right");
    
        firstpage.classList.remove("grid-16-9");
        firstpage.classList.add("hide");
    };
    
    nextBtnLeft.onclick = () => {    
        secondpage.classList.remove("grid-16-9");
        secondpage.classList.add("hide");
    
        firstpage.classList.add("grid-16-9");
        firstpage.classList.add("slidein-from-left");
        firstpage.classList.remove("hide");
    };
    
    hintBtn.onclick = () => {
        isHint = true;
        countGlow = 1;
        hintGlow(countGlow, hintBtnGlow);
        switch (countHint) {
            case 0: 
                hintBtnGlow.classList.remove("glow");
    
                speechBubble.style.visibility = "visible";
                explaineBtn.classList.remove("hide");
                speechBubble_p.style.visibility = "visible";
                
                tekst = 'Loop door het hele aquarium.';
                hint1.play();

                hint1.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                image = '../../images/vissenverblijf/arrow-right.png';
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.display = "none";
                    isHint = false;
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
                image = '../../images/vissenverblijf/question-mark.png';
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    explaineBtn.classList.add("hide");
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.display = "none";
                    isHint = false;
                    // startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 2: 
                speechBubble.style.visibility = "visible";
                speechBubble_p.style.visibility = "visible";
                // startOKBtn.style.visibility = "visible";
                tekst = 'Vul het antwoord in via je toetsenbord.';
                hint3.play();

                hint3.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.display = "none";
                    isHint = false;
                    // startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 3: 
                speechBubble.style.visibility = "visible";
                speechBubble_p.style.visibility = "visible";
                startOKBtn.style.visibility = "visible";
                tekst = 'Het antwoord is 8.';
                hint4.play();

                hint4.onended = () => {
                    startOKBtn.style.display = "block";
                    herhaal.style.display = "block";
                }
                startOKBtn.onclick = () => {
                    speechBubble.style.visibility = "hidden";
                    speechBubble_p.style.visibility = "hidden";
                    startOKBtn.style.display = "none";
                    isHint = false;
                    // startOKBtn.style.visibility = "hidden";
                    countHint++;
                }
                break;
            case 4:
                speechBubble.style.visibility = "hidden";
                // startOKBtn.style.visibility = "hidden";
                countHint++;
                break;
        }
    
        herhaal.style.display = "none";
        speechBubble_p.innerHTML = tekst;
        explaineBtn.src = image;
        
    };
};

export { countHint, startTime};