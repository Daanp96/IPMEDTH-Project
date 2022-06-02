const musicOn = document.getElementById("js--music-on");
const musicOff = document.getElementById("js--music-off");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

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

const reken_correct = 6;
const naam_correct = "aap";

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
// let aantalSecondesSavanneDragnDrop;
let startTime, endTime;

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

function start(){
    startTime = new Date();
}

if(document.URL.includes("rekensom.html") ){
    
    formRekensomBtn.addEventListener("click", function(e){
        
        let form_answer = document.forms["answerForm"]["numberInput"].value;
        
        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesRekensom = seconds;

        if(form_answer == reken_correct){
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
            }, 700);
            
        }   
        else{
            rekensomForm.classList.add("shake");
            document.getElementById("aantalVissen").style.color = "red";
            setTimeout(() => {
                rekensomForm.classList.remove("shake");
                document.getElementById("aantalVissen").style.color = "black";
                document.getElementById("aantalVissen").value = '';
            }, 500);
        }      
        e.preventDefault();

    });
}

if(document.URL.includes("savanne.html")){
    formSavanneBtn.addEventListener("click", function(e){

        let form_answer = document.forms["answerForm"]["textInput"].value;

        endTime = new Date();
        var timeDiff = endTime - startTime; //ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        aantalSecondesSavanne = seconds;
    
        if(form_answer == naam_correct){
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
            }, 700);
            
        }else{
            savanneForm.classList.add("shake");
            document.getElementById("naamDier").style.color = "red";
            setTimeout(() => {
                savanneForm.classList.remove("shake");
                document.getElementById("naamDier").style.color = "black";
                document.getElementById("naamDier").value = '';
            }, 500);
        }
        e.preventDefault();
    });
}

function endRekensomPuzzel(){
    window.location.href="dierentuinpad.html";  
}

function endSavannePuzzel(){
    window.location.href="dierentuinpad.html";  
}
