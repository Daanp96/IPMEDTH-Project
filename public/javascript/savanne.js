const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");

const mapOverlay = document.getElementById("js--map-overlay");

let countHint = 0;
let tekst = '';
let image = '';

const hint1 = new Audio("../audio/6-aap/hint-1.mp3");
const hint2 = new Audio("../audio/6-aap/hint-2.mp3");
const hint3 = new Audio("../audio/6-aap/hint-3.mp3");
const hint4 = new Audio("../audio/6-aap/hint-4.mp3");

startOKBtn.onclick = () => {
    speechBubble.style.visibility = "hidden";
    speechBubble.style.zIndex = "";
    mapOverlay.style.zIndex = "-1";
};

hintBtn.onclick = () => {
    console.log(countHint);
    switch (countHint) {
        case 0: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Klik op het bord.';
            hint1.play();
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
            }
            break;
        case 1: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Klik op het vraagteken.';
            hint2.play();
            image = '../images/question-mark.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
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
            image = '../images/keyboard.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
            }
            break;
        case 3: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Het antwoord is AAP';
            hint4.play();
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
            }
            break;
        case 4:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.visibility = "hidden";
            break;
    }
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    countHint++;
};

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}
