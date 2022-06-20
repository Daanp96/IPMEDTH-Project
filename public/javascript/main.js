const musicOn = document.getElementById("js--music-on");
const musicOff = document.getElementById("js--music-off");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
// const infoBtn = document.getElementById("js--info-btn");

const speechBubble = document.getElementById("js--speech-bubble");
// const speechBubbleImg = document.getElementById("js--speech-bubble-img");
const speechBubbleP = document.getElementById("js--speech-bubble-p");
const speechBubbleBtn = document.getElementById("js--speech-bubble-btn");

const ratedStar1 = document.getElementById("js--ratedStar1");
const ratedStar2 = document.getElementById("js--ratedStar2");
const ratedStar3 = document.getElementById("js--ratedStar3");
const ratedStar4 = document.getElementById("js--ratedStar4");
const ratedStar5 = document.getElementById("js--ratedStar5");
const ratedStar6 = document.getElementById("js--ratedStar6");
const ratedStar7 = document.getElementById("js--ratedStar7");
const ratedStar8 = document.getElementById("js--ratedStar8");
const ratedStar9 = document.getElementById("js--ratedStar9");

const formRekensomBtn = document.getElementById("js--form-submit");
const rekensomForm = document.getElementById("js--rekensom-form");

const savanneForm = document.getElementById("js--savanne-form");
const formSavanneBtn = document.getElementById("js--form-submitSavanne");

const arcticBtn = document.getElementById("js--arctic-btn");

const reken_correct = 6;
const naam_correct = "aap";
// const terugKaart = new Audio("../audio/5-vissen/4-terugKaart.mp3");

let star1;
let star2;
let star3;
let star4;
let star5;
let star6;
let star7;
let star8;
let star9;
let aantalSecondesRekensom;
let aantalSecondesSavanne;
let aantalSecondesArctic;
let startTime, endTime;

// let infoOk = 0;
let tekst = '';
let image = '';

window.onload = function() {
    start();
}

musicOn.onclick = () =>{
    musicOff.style.visibility = "visible";
    musicOn.style.visibility = "hidden";
};

musicOff.onclick = () =>{
    musicOff.style.visibility = "hidden";
    musicOn.style.visibility = "visible";
};

speakOn.onclick = () =>{
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
};

speakOff.onclick = () =>{
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
};

// infoBtn.onclick = () =>{
    
//     let infoOk = 0;
//     // speechBubbleBtn.classList.remove("hide");
//     // speechBubble.classList.remove("hide");
//     speechBubbleBtn.style.visibility = "visible";
//     speechBubble.style.visibility = "visible";

//     speechBubbleBtn.onclick = () => {
//         console.log("info " + infoOk);
//         switch (infoOk) {
//             case 0: 
//                 speechBubbleImg.classList.remove("hide");
//                 tekst = 'Klik op het lampje voor een hint.';
//                 if(document.URL.includes("index.html")){
//                     image = './images/hint-btn.png';
//                 }else{
//                     image = '../images/hint-btn.png';
//                 }
                
//                 break;
//             case 1: 
//                 tekst = 'Klik op i voor een informatie.';
//                 image = './images/information-btn.png';
//                 break;
//             case 2:
//                 tekst = 'Klik op de muzieknoot om de muziek uit te zetten.';
//                 image = './images/music-on-btn.png'; 
//                 break;  
//             case 3: 
//                 tekst = 'Klik op de oor om mijn geluid uit te zetten.';
//                 image = './images/speak-on-btn.png';
//                 break;
//             case 4: 
//                 speechBubbleImg.classList.add("hide");
//                 speechBubble.style.visibility = "hidden";
//                 speechBubbleBtn.style.visibility = "visible";
//                 break;
//         }
    
//         speechBubbleP.innerHTML = tekst;
//         speechBubbleImg.src = image;
//         infoOk++;
//     };
    
// };

// function info(){
//     speechBubbleBtn.classList.remove("hide");
//     speechBubble.classList.remove("hide");
// }


function start(){
    startTime = new Date();
}

if(document.URL.includes("rekensom.html") ){
    const terugKaart = new Audio("../audio/5-vissen/4-terugKaart.mp3");
    formRekensomBtn.addEventListener("click", function(e){
        
        let form_answer = document.forms["answerForm"]["numberInput"].value;
        
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesRekensom = seconds;

        if(form_answer == reken_correct){
            terugKaart.play();
            if(seconds <= 60){
                try {
                    localStorage.setItem("aantalSecondesRekensom", aantalSecondesRekensom);
                    localStorage.setItem('star1', 0);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 60 && seconds <= 120){
                try {
                    localStorage.setItem('star2', 0);
                    localStorage.setItem("aantalSecondesRekensom", aantalSecondesRekensom);
                } catch (error) {
                    console.log(error);
                }
            }
            if(seconds > 120){
                try {
                    localStorage.setItem('star3', 0);
                    localStorage.setItem("aantalSecondesRekensom", aantalSecondesRekensom);
                } catch (error) {
                    console.log(error);
                }
            }
            document.getElementById("aantalVissen").style.color = "lime";
            setTimeout(() => {
                endRekensomPuzzel();
            }, 1000);
            
        }   
        else{
            rekensomForm.classList.add("shake");
            document.getElementById("aantalVissen").style.color = "red";
            setTimeout(() => {
                rekensomForm.classList.remove("shake");
                document.getElementById("aantalVissen").style.color = "black";
                document.getElementById("aantalVissen").value = '';
            }, 2000);
        }      
        e.preventDefault();

    });
}

if(document.URL.includes("savanne.html")){
    const terugKaart = new Audio("../audio/5-vissen/4-terugKaart.mp3");
    formSavanneBtn.addEventListener("click", function(e){

        let form_answer = document.forms["answerForm"]["textInput"].value;

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanne = seconds;
    
        if(form_answer == naam_correct){
            terugKaart.play();
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
            document.getElementById("naamDier").style.color = "lime";
            setTimeout(() => {
                endSavannePuzzel();
            }, 1000);
            
        }else{
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

if(document.URL.includes("arctic.html")){
    arcticBtn.addEventListener("click", function(e){

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesArctic = seconds;
    
        if(seconds <= 60){
            try {
                localStorage.setItem("aantalSecondesArctic", aantalSecondesArctic);
                localStorage.setItem('star7', 0);
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 60 && seconds <= 120){
            try {
                localStorage.setItem('star8', 0);
                localStorage.setItem("aantalSecondesArctic", aantalSecondesArctic);
            } catch (error) {
                console.log(error);
            }
        }
        if(seconds > 120){
            try {
                localStorage.setItem('star9', 0);
                localStorage.setItem("aantalSecondesArctic", aantalSecondesArctic);
            } catch (error) {
                console.log(error);
            }
        }
        setTimeout(() => {
            endArcticPuzzel();
        }, 700);
            
        e.preventDefault();
    });
}


function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}

function endSavannePuzzel(){
    window.location.href="dierentuinpad.html";  
}
function endArcticPuzzel(){
    window.location.href="dierentuinpad.html";  
}

