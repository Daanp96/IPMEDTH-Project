import {countHint as countHintVis, startTime as startTimeVis} from "./vissenverblijf.js";
import {countHint as countHintSavanne, startTime as startTimeSavanne} from "./savanne.js";
// import {countHint as countHintPinguin,startTime as startTimePinguin} from "./pinguinverblijf.js";

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
// const infoBtn = document.getElementById("js--info-btn");

const speechBubble = document.getElementById("js--speech-bubble");
// const speechBubbleImg = document.getElementById("js--speech-bubble-img");
const speechBubbleP = document.getElementById("js--speech-bubble-p");
const speechBubbleBtn = document.getElementById("js--speech-bubble-btn");

const formVissenverblijfBtn = document.getElementById("js--vissenverblijf-form-submit");
const formVissenverblijf = document.getElementById("js--vissenverblijf-form");

const savanneForm = document.getElementById("js--savanne-form");
const formSavanneBtn = document.getElementById("js--form-submitSavanne");

const pinguinverblijfBtn = document.getElementById("js--pinguinverblijf-btn");
const endSpeechBubbleDierentuin = document.getElementById("js--endBubble-dierentuin");
const endSpeechBubbleNatuur = document.getElementById("js--endBubble-natuur");

const reken_correct = 8;
// const naam_correct = "aap";
const typen_correct = "aap";

let aantalSecondesVissenverblijf2;
let aantalSecondesPinguinverblijf2;
let aantalSecondesSavanne2;
// let startTime, endTime;
let endTime;

let speakOnStorage2;
// let countHint;
// let infoOk = 0;
let tekst = '';
let image = '';

// window.onload = function() {
//     start();
// }

setInterval(() => {
    if (speakOn.style.visibility == 'hidden') {
        speakOnStorage2 = 'hidden';
        localStorage.setItem("speakOnStorage2", speakOnStorage2);
    }
    if (speakOn.style.visibility == 'visible') {
        speakOnStorage2 = 'visible';
        localStorage.setItem("speakOnStorage2", speakOnStorage2);
    }
}, 200);
    

// function start(){
//     startTime = new Date();
// }

if(document.URL.includes("groep-2/vissenverblijf.html") ){
    
    formVissenverblijfBtn.addEventListener("click", function(e){
        
        let form_answer = document.forms["answerForm"]["numberInput"].value;
        
        if(form_answer == reken_correct){

            endTime = new Date();
            var timeDiff = endTime - startTimeVis; //ms
            timeDiff /= 1000;
            let seconds = Math.round(timeDiff);
            aantalSecondesVissenverblijf2 = seconds;
            // hintCountPlusSeconds(countHint);
            // console.log(aantalSecondesVissenverblijf);
            // countHint = hintCountPlusSeconds(countHint);
            console.log(startTimeVis);
            console.log(countHintVis);
    
            if(countHintVis == 1){
                aantalSecondesVissenverblijf2 += 10;
                console.log(aantalSecondesVissenverblijf2);
            }
            if(countHintVis == 2){
                aantalSecondesVissenverblijf2 += 20;
                console.log(aantalSecondesVissenverblijf2);
            }
            if(countHintVis == 3){
                aantalSecondesVissenverblijf2 += 30;
                console.log(aantalSecondesVissenverblijf2);
            }
            if(countHintVis == 4){
                aantalSecondesVissenverblijf2 += 40;
                console.log(aantalSecondesVissenverblijf2);
            }

            if(seconds <= 90){
                try {
                    localStorage.setItem("aantalSecondesVissenverblijf2", aantalSecondesVissenverblijf2);
                    localStorage.setItem('star1', 0);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 90 && seconds <= 150){
                try {
                    localStorage.setItem('star2', 0);
                    localStorage.setItem("aantalSecondesVissenverblijf2", aantalSecondesVissenverblijf2);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 150){
                try {
                    localStorage.setItem('star3', 0);
                    localStorage.setItem("aantalSecondesVissenverblijf2", aantalSecondesVissenverblijf2);
                } catch (error) {
                    console.log(error);
                }
            }
            document.getElementById("aantalVissen").style.color = "lime";
            setTimeout(() => {
                endVissenverblijfPuzzel();
            }, 1000);
            
        }   
        else{
            formVissenverblijf.classList.add("shake");
            document.getElementById("aantalVissen").style.color = "red";
            setTimeout(() => {
                formVissenverblijf.classList.remove("shake");
                document.getElementById("aantalVissen").style.color = "black";
                document.getElementById("aantalVissen").value = '';
            }, 2000);
        }      
        e.preventDefault();

    });
}

if(document.URL.includes("groep-2/pinguinverblijf.html")){
    pinguinverblijfBtn.addEventListener("click", function(e){
        
        endTime = new Date();
        var timeDiff = endTime - startTimePinguin; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesPinguinverblijf2 = seconds;

        console.log(startTimePinguin);
        console.log(countHintPinguin);

        if(countHintPinguin == 1){
            aantalSecondesPinguinverblijf2 += 10;
            console.log(aantalSecondesPinguinverblijf2);
        }
        if(countHintPinguin == 2){
            aantalSecondesPinguinverblijf2 += 20;
            console.log(aantalSecondesPinguinverblijf2);
        }
    
        if(seconds <= 90){
            try {
                localStorage.setItem("aantalSecondesPinguinverblijf2", aantalSecondesPinguinverblijf2);
                localStorage.setItem('star7', 0);
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 90 && seconds <= 150){
            try {
                localStorage.setItem('star8', 0);
                localStorage.setItem("aantalSecondesPinguinverblijf2", aantalSecondesPinguinverblijf2);
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 150){
            try {
                localStorage.setItem('star9', 0);
                localStorage.setItem("aantalSecondesPinguinverblijf2", aantalSecondesPinguinverblijf2);
            } catch (error) {
                console.log(error);
            }
        }
        
        setTimeout(() => {
            endPinguinverblijfPuzzel();
        }, 700);
            
        e.preventDefault();
    });
}

// const spanTypen = document.getElementById("js--typen-form");
// const spanTypenBtn = document.getElementById("js--form-submitTypen");

if(document.URL.includes("groep-2/savanne.html")){
    formSavanneBtn.addEventListener("click", function(e){
        // console.log(spanTypen.innerText);

        let form_answer = document.forms["answerForm"]["textInput"].value;

        if(form_answer == typen_correct){
            endTime = new Date();
            var timeDiff = endTime - startTimeSavanne; //ms
            timeDiff /= 1000;
            let seconds = Math.round(timeDiff);
            aantalSecondesSavanne2 = seconds;

            console.log(startTimeSavanne);
            console.log(countHintSavanne);
    
            if(countHintSavanne == 1){
                aantalSecondesSavanne2 += 10;
                console.log(aantalSecondesSavanne2);
            }
            if(countHintSavanne == 2){
                aantalSecondesSavanne2 += 20;
                console.log(aantalSecondesSavanne2);
            }
            if(countHintSavanne == 3){
                aantalSecondesSavanne2 += 30;
                console.log(aantalSecondesSavanne2);
            }
            if(countHintSavanne == 4){
                aantalSecondesSavanne2 += 40;
                console.log(aantalSecondesSavanne2);
            }

            if(seconds <= 90){
                try {
                    localStorage.setItem("aantalSecondesSavanne2", aantalSecondesSavanne2);
                    localStorage.setItem('star4', 0);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 90 && seconds <= 150){
                try {
                    localStorage.setItem('star5', 0);
                    localStorage.setItem("aantalSecondesSavanne2", aantalSecondesSavanne2);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 150){
                try {
                    localStorage.setItem('star6', 0);
                    localStorage.setItem("aantalSecondesSavanne2", aantalSecondesSavanne2);
                } catch (error) {
                    console.log(error);
                }
            }
            document.getElementById("naamDier").style.color = "lime";
            setTimeout(() => {
                endSavannePuzzel();
            }, 1000);

        }
        else{
            savanneForm.classList.add("shake");
            document.getElementById("naamDier").style.color = "red";
            setTimeout(() => {
                savanneForm.classList.remove("shake");
                document.getElementById("naamDier").style.color = "black";
                document.getElementById("naamDier").value = '';
            }, 2000);
        }
            
        e.preventDefault();
    });
}

if(document.URL.includes("groep-2/giraffeverblijf.html")){
    endSpeechBubbleDierentuin.addEventListener("click", function(e){
    
        try {
            localStorage.setItem('star10', 0);

        } catch (error) {
            console.log(error);
        }
        
        endGiraffeverblijfPuzzel();
            
        e.preventDefault();
    });

    endSpeechBubbleNatuur.addEventListener("click", function(e){

        try {
            localStorage.setItem('star10', 0);
        } catch (error) {
            console.log(error);
        }
        
        endGiraffeverblijfPuzzel();
            
        e.preventDefault();
    });
}

function endVissenverblijfPuzzel(){
    window.location.href="./dierentuinpad.html";  
}

function endSavannePuzzel(){
    window.location.href="./dierentuinpad.html";  
}
function endPinguinverblijfPuzzel(){
    window.location.href="./dierentuinpad.html";  
}

function endGiraffeverblijfPuzzel(){
    window.location.href="./dierentuinpad.html";  
}
