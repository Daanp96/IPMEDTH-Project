// import {speakBtnStart} from "./start.js";
// import {speakBtnMap} from "./map.js";
// import {speakBtnMappuzzelFunction} from "./functions.js";
// import {speakBtnMappuzzel} from "./mappuzzel.js";
// import {speakBtnDierentuinpad} from "./dierentuinpad.js";

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
// const infoBtn = document.getElementById("js--info-btn");

const speechBubble = document.getElementById("js--speech-bubble");
// const speechBubbleImg = document.getElementById("js--speech-bubble-img");
const speechBubbleP = document.getElementById("js--speech-bubble-p");
const speechBubbleBtn = document.getElementById("js--speech-bubble-btn");

const formVissenverblijfBtn = document.getElementById("js--vissenverblijf-form-submit");
const formVissenverblijf = document.getElementById("js--vissenverblijf-form");

// const savanneForm = document.getElementById("js--savanne-form");
// const formSavanneBtn = document.getElementById("js--form-submitSavanne");

const pinguinverblijfBtn = document.getElementById("js--pinguinverblijf-btn");
const endSpeechBubbleDierentuin = document.getElementById("js--endBubble-dierentuin");
const endSpeechBubbleNatuur = document.getElementById("js--endBubble-natuur");

const reken_correct = 11;
// const naam_correct = "aap";
const typen_correct = "olifant";

let aantalSecondesVissenverblijf;
// let aantalSecondesSavanne;
let aantalSecondesPinguinverblijf;
let aantalSecondesSavanne;
let aantalSecondesGiraffeverblijf;
let startTime, endTime;

let speakOnStorage;

// let infoOk = 0;
let tekst = '';
let image = '';

window.onload = function() {
    start();
}

setInterval(() => {
    if (speakOn.style.visibility == 'hidden') {
        speakOnStorage = 'hidden';
        localStorage.setItem("speakOnStorage", speakOnStorage);
    }
    if (speakOn.style.visibility == 'visible') {
        speakOnStorage = 'visible';
        localStorage.setItem("speakOnStorage", speakOnStorage);
    }
}, 200);
    

function start(){
    startTime = new Date();
}

if(document.URL.includes("vissenverblijf.html") ){
    
    formVissenverblijfBtn.addEventListener("click", function(e){
        
        let form_answer = document.forms["answerForm"]["numberInput"].value;
        
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesVissenverblijf = seconds;

        if(form_answer == reken_correct){
            if(seconds <= 60){
                try {
                    localStorage.setItem("aantalSecondesVissenverblijf", aantalSecondesVissenverblijf);
                    localStorage.setItem('star1', 0);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 60 && seconds <= 120){
                try {
                    localStorage.setItem('star2', 0);
                    localStorage.setItem("aantalSecondesVissenverblijf", aantalSecondesVissenverblijf);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 120){
                try {
                    localStorage.setItem('star3', 0);
                    localStorage.setItem("aantalSecondesVissenverblijf", aantalSecondesVissenverblijf);
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

// if(document.URL.includes("savanne.html")){
//     const terugKaart = new Audio("../audio/5-vissen/4-terugKaart.mp3");
//     formSavanneBtn.addEventListener("click", function(e){

//         let form_answer = document.forms["answerForm"]["textInput"].value;

//         endTime = new Date();
//         var timeDiff = endTime - startTime; //ms
//         timeDiff /= 1000;
//         let seconds = Math.round(timeDiff);
//         aantalSecondesSavanne = seconds;
    
//         if(form_answer == naam_correct){
//             terugKaart.play();
//             if(seconds <= 60){
//                 try {
//                     localStorage.setItem("aantalSecondesSavanne", aantalSecondesSavanne);
//                     localStorage.setItem('star4', 0);
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//             if(seconds > 60 && seconds <= 120){
//                 try {
//                     localStorage.setItem('star5', 0);
//                     localStorage.setItem("aantalSecondesSavanne", aantalSecondesSavanne);
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//             if(seconds > 120){
//                 try {
//                     localStorage.setItem('star6', 0);
//                     localStorage.setItem("aantalSecondesSavanne", aantalSecondesSavanne);
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//             document.getElementById("naamDier").style.color = "lime";
//             setTimeout(() => {
//                 endSavannePuzzel();
//             }, 1000);
            
//         }else{
//             savanneForm.classList.add("shake");
//             document.getElementById("naamDier").style.color = "red";
//             setTimeout(() => {
//                 savanneForm.classList.remove("shake");
//                 document.getElementById("naamDier").style.color = "black";
//                 document.getElementById("naamDier").value = '';
//             }, 2000);
//         }
//         e.preventDefault();
//     });
// }

if(document.URL.includes("pinguinverblijf.html")){
    pinguinverblijfBtn.addEventListener("click", function(e){

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesPinguinverblijf = seconds;
    
        if(seconds <= 60){
            try {
                localStorage.setItem("aantalSecondesPinguinverblijf", aantalSecondesPinguinverblijf);
                localStorage.setItem('star7', 0);
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 60 && seconds <= 120){
            try {
                localStorage.setItem('star8', 0);
                localStorage.setItem("aantalSecondesPinguinverblijf", aantalSecondesPinguinverblijf);
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 120){
            try {
                localStorage.setItem('star9', 0);
                localStorage.setItem("aantalSecondesPinguinverblijf", aantalSecondesPinguinverblijf);
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

const spanTypen = document.getElementById("js--typen-form");
const spanTypenBtn = document.getElementById("js--form-submitTypen");

if(document.URL.includes("savanne.html")){
    spanTypenBtn.addEventListener("click", function(e){
        console.log(spanTypen.innerText);

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanne = seconds;

        if(spanTypen.innerText == typen_correct){
            if(seconds <= 60){
                try {
                    localStorage.setItem("aantalSecondesSavanne", aantalSecondesSavanne);
                    localStorage.setItem('star4', 0);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 60 && seconds <= 120){
                try {
                    localStorage.setItem('star5', 0);
                    localStorage.setItem("aantalSecondesSavanne", aantalSecondesSavanne);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 120){
                try {
                    localStorage.setItem('star6', 0);
                    localStorage.setItem("aantalSecondesSavanne", aantalSecondesSavanne);
                } catch (error) {
                    console.log(error);
                }
            }
            document.getElementById("js--typen-form").style.color = "lime";
            setTimeout(() => {
                endSavannePuzzel();
            }, 1000);

        }
        else{
            document.getElementById("js--typen-form").classList.add("shake");
            document.getElementById("js--typen-form").style.color = "red";
            setTimeout(() => {
                document.getElementById("js--typen-form").classList.remove("shake");
                document.getElementById("js--typen-form").style.color = "white";
                document.getElementById("js--typen-form").value = '';
            }, 2000);
        }
            
        e.preventDefault();
    });
}

if(document.URL.includes("giraffeverblijf.html")){
    endSpeechBubbleDierentuin.addEventListener("click", function(e){

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesGiraffeverblijf = seconds;
    
        try {
            localStorage.setItem("aantalSecondesGiraffeverblijf", aantalSecondesGiraffeverblijf);
            localStorage.setItem('star10', 0);
        } catch (error) {
            console.log(error);
        }
        
        endGiraffeverblijfPuzzel();
            
        e.preventDefault();
    });

    endSpeechBubbleNatuur.addEventListener("click", function(e){

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesGiraffeverblijf = seconds;
    
        try {
            localStorage.setItem("aantalSecondesGiraffeverblijf", aantalSecondesGiraffeverblijf);
            localStorage.setItem('star10', 0);
        } catch (error) {
            console.log(error);
        }
        
        endGiraffeverblijfPuzzel();
            
        e.preventDefault();
    });
}

function endVissenverblijfPuzzel(){
    window.location.href="dierentuinpad.html";  
}

function endSavannePuzzel(){
    window.location.href="dierentuinpad.html";  
}
function endPinguinverblijfPuzzel(){
    window.location.href="dierentuinpad.html";  
}

function endGiraffeverblijfPuzzel(){
    window.location.href="dierentuinpad.html";  
}
