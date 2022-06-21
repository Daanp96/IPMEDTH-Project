const text = "olifant";

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--speech-bubble-img");

const startOKBtn = document.getElementById("js--speech-bubble-btn");
const hintBtn = document.getElementById("js--hint");

const mapOverlay = document.getElementById("js--map-overlay");

let startOK = 0;
let countHint = 0;
let tekst = '';
let image = '';

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

savanneVerblijf.play();
savanneVerblijf.onended = () => {
    startOKBtn.style.display = "block";
}

$(".popup__container-typen--textbox").on("focus blur", function(){
    $(".popup__container-typen--wrapper").toggleClass("focused");
});

$(".popup__container-typen--wrapper").click(function (e) {
    if (e.target == this) {
        var b = $(".popup__container-typen--textbox", this).focus();
        setEndOfContenteditable(b[0]);
    }
}).trigger("click");

$(".popup__container-typen--wrapper > .popup__container-typen--textbox").on("input", function(){
    var ipt = $(this).text().replace(/\u00A0/g, " ");
    //freakin NO-BREAK SPACE needs extra care
    if(text.indexOf(ipt) == 0){
        $(".popup__container-typen--textbox--gray").text(text.substr(ipt.length, text.length));
    }else{
        $(".popup__container-typen--textbox--gray").text("");
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
            }
            break;
        case 1: 
            speechBubble.style.visibility = "hidden";
            speechBubble.style.zIndex = "";
            mapOverlay.style.zIndex = "-1";
            break;
    }

    startOKBtn.style.display = "none";
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    startOK++;
    // speechBubble.style.visibility = "hidden";
    // speechBubble.style.zIndex = "";
    // mapOverlay.style.zIndex = "-1";
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
            image = '../images/question-mark.png';
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
            image = '../images/keyboard.png';
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
            tekst = 'Het antwoord is AAP';
            hint4.play();
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
    speechBubble_p.innerHTML = tekst;
    explaineBtn.src = image;
    
};

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}

