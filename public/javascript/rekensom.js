
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

let countHint = 0;

// const welkomAquarium = new Audio("../audio/5-vissen/1-welkom.mp3");
// const nieuweVissen = new Audio("../audio/5-vissen/2-nieuweVissen.mp3");
// const rodeVissen = new Audio("../audio/5-vissen/3-rodeVissen.mp3");

// const hint1 = new Audio("../audio/5-vissen/hint-1.mp3");
// const hint2 = new Audio("../audio/5-vissen/hint-2.mp3");
// const hint3 = new Audio("../audio/5-vissen/hint-3.mp3");
// const hint4 = new Audio("../audio/5-vissen/hint-4.mp3");

const welkomAquarium = new Audio("../audio/Tjalle/5-vissen/1-welkom.m4a");
const nieuweVissen = new Audio("../audio/Tjalle/5-vissen/2-nieuweVissen.m4a");
const rodeVissen = new Audio("../audio/Tjalle/5-vissen/3-rodeVissen.m4a");

const hint1 = new Audio("../audio/Tjalle/5-vissen/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/5-vissen/hint-2.m4a");
const hint3 = new Audio("../audio/Tjalle/5-vissen/hint-3.m4a");
const hint4 = new Audio("../audio/Tjalle/5-vissen/hint-4.m4a");

let startOK = 0;
let tekst = '';
let image = '';

welkomAquarium.play();
welkomAquarium.onended = () => {
    startOKBtn.style.display = "block";
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
            }
            break;
        case 1: 
            tekst = 'Kan jij mij vertellen hoeveel <b style="color:red;">rode vissen</b> er rond zwemmen?';
            image = '';
            rodeVissen.play();
            rodeVissen.onended = () => {
                startOKBtn.style.display = "block";
            }
            break;
        case 2:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.display = "block";
            speechBubble.style.zIndex = "";
            mapOverlay.style.zIndex = "-1";
            break;
    }

    startOKBtn.style.display = "none";
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    startOK++;
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
    switch (countHint) {
        case 0: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            tekst = 'Loop door het hele aquarium.';
            hint2.play();
            hint2.onended = () => {
                startOKBtn.style.display = "block";
            }
            image = '../images/question-mark.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.display = "none";
                countHint++;
            }
            break;
        case 1: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Klik op het vraagteken.';
            hint1.play();
            hint1.onended = () => {
                startOKBtn.style.display = "block";
            }
            image = '../images/arrow-right.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.display = "none";
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
            }
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.display = "none";
                // startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 3: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Het antwoord is 11.';
            hint4.play();
            hint4.onended = () => {
                startOKBtn.style.display = "block";
            }
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.display = "none";
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

    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    
};

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}