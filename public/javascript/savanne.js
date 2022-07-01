import {reloadSpeech, hintGlow, reloadHint} from "./functions.js";
const text = "olifant";

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const mapOverlay = document.getElementById("js--map-overlay");
const herhaal = document.getElementById("js--speech-reload");

let startOK = 0;
let countHint = 0;
let tekst = '';
let image = '';
let countHerhaal = 0;

// const hint1 = new Audio("../audio/6-aap/hint-1.mp3");
// const hint2 = new Audio("../audio/6-aap/hint-2.mp3");
// const hint3 = new Audio("../audio/6-aap/hint-3.mp3");
// const hint4 = new Audio("../audio/6-aap/hint-4.mp3");

const savanneVerblijf = new Audio("../audio/Tjalle/6-savanne/1-savanneverblijf.m4a");
const verbeteren = new Audio("../audio/Tjalle/6-savanne/2-verbeteren.m4a");

const hint1 = new Audio("../audio/Tjalle/6-savanne/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/6-savanne/hint-2.m4a");
const hint3 = new Audio("../audio/Tjalle/6-savanne/hint-3.m4a");
const hint4 = new Audio("../audio/Tjalle/6-savanne/hint-4.m4a");

const audioHerhaalSavanne = [savanneVerblijf, verbeteren];
const hintHerhaalSavanne = [hint1, hint2, hint3, hint4];
let isHint = false;
hintBtn.disabled = true;

setInterval(() => {
    if (localStorage.getItem("speakOnStorage") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage") == 'visible') {
        speakOffFunction();
    }
}, 1000);
  
function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    savanneVerblijf.muted = true;
    verbeteren.muted = true;
    hint1.muted = true;
    hint2.muted = true;
    hint3.muted = true;
    hint4.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    savanneVerblijf.muted = false;
    verbeteren.muted = false;
    hint1.muted = false;
    hint2.muted = false;
    hint3.muted = false;
    hint4.muted = false;
};
  
speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};


savanneVerblijf.play();
savanneVerblijf.onended = () => {
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

$(".popup__container-savanne--textbox").on("focus blur", function(){
    $(".popup__container-savanne--wrapper").toggleClass("focused");
});

$(".popup__container-savanne--wrapper").click(function (e) {
    if (e.target == this) {
        var b = $(".popup__container-savanne--textbox", this).focus();
        setEndOfContenteditable(b[0]);
    }
}).trigger("click");

$(".popup__container-savanne--wrapper > .popup__container-savanne--textbox").on("input", function(){
    var ipt = $(this).text().replace(/\u00A0/g, " ");
    //freakin NO-BREAK SPACE needs extra care
    if(text.indexOf(ipt) == 0){
        $(".popup__container-savanne--textbox--gray").text(text.substr(ipt.length, text.length));
    }else{
        $(".popup__container-savanne--textbox--gray").text("");
    }
}).trigger("input");


function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    if (document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
    }
}


startOKBtn.onclick = () => {
    switch(startOK) {
        case 0:
            tekst = 'Maar blijkbaar hebben we de verkeerde naam opgehangen! Kan jij het bord voor ons verbeteren?';
            image = '';
            verbeteren.play();
            verbeteren.onended = () => {
                startOKBtn.style.display = "block";
                herhaal.style.display = "block";
            }
            break;
        case 1: 
            speechBubble.style.visibility = "hidden";
            speechBubble.style.zIndex = "";
            mapOverlay.style.zIndex = "-1";
            hintBtn.disabled = false;
            if(countHint == 0){
                console.log("tellen2");
                hintGlow(60000, hintBtnGlow);
                setTimeout(() => {
                    hintBtnGlow.classList.remove("glow");
                }, 70000);
            } else {
                hintBtnGlow.classList.remove("glow");
            }
            break;
    }
    herhaal.style.display = "none";
    startOKBtn.style.display = "none";
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    startOK++;
    countHerhaal++;

};

hintBtn.onclick = () => {
    isHint = true;
    switch (countHint) {
        case 0: 
            hintBtnGlow.classList.remove("glow");

            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            // startOKBtn.style.visibility = "visible";
            tekst = 'Klik op het bord.';
            hint1.play();
            hint1.onended = () => {
                startOKBtn.style.display = "block";
                herhaal.style.display = "block";
            }

            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                // startOKBtn.style.visibility = "hidden";
                countHint++;
                isHint = false;
            }
            break;
        case 1: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            // startOKBtn.style.visibility = "visible";
            tekst = 'Klik op de foute naam.';
            hint2.play();
            hint2.onended = () => {
                startOKBtn.style.display = "block";
                herhaal.style.display = "block";
            }
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                // startOKBtn.style.visibility = "hidden";
                countHint++;
                isHint = false;
            }
            break;
            case 2: 
            speechBubble.style.visibility = "visible";
            explaineBtn.classList.remove("hide");
            speechBubble_p.style.visibility = "visible";
            // startOKBtn.style.visibility = "visible";
            explaineBtn.style.width = "23vw";
            tekst = 'Je toetsenbord gebruikt blokletters. Dit zijn de kleine letters.';
            hint3.play();
            hint3.onended = () => {
                startOKBtn.style.display = "block";
                herhaal.style.display = "block";
            }
            image = '../images/savanne/keyboard.png';
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                explaineBtn.classList.add("hide");
                speechBubble_p.style.visibility = "hidden";
                isHint = false;
                // startOKBtn.style.visibility = "hidden";
                countHint++;
            }
            break;
        case 3: 
            speechBubble.style.visibility = "visible";
            speechBubble_p.style.visibility = "visible";
            startOKBtn.style.visibility = "visible";
            tekst = 'Het antwoord is olifant';
            hint4.play();
            hint4.onended = () => {
                startOKBtn.style.display = "block";
                herhaal.style.display = "block";
            }
            startOKBtn.onclick = () => {
                speechBubble.style.visibility = "hidden";
                speechBubble_p.style.visibility = "hidden";
                startOKBtn.style.visibility = "hidden";
                isHint = false;
                countHint++;
            }
            break;
        case 4:
            speechBubble.style.visibility = "hidden";
            startOKBtn.style.display = "none";
            // startOKBtn.style.visibility = "hidden";
            countHint++;
            break;
    }
    
    herhaal.style.display = "none";
    startOKBtn.style.display = "none";
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    
};

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}

