import {reloadSpeech} from "./functions.js";

const fish = document.getElementById("js--fish");
const monkey = document.getElementById("js--monkey");
const pinguin = document.getElementById("js--pinguin");
const ijskar = document.getElementById("js--ijskar");
const giraffe = document.getElementById("js--giraffe");

const ratedStar1 = document.getElementById("js--ratedStar1");
const ratedStar2 = document.getElementById("js--ratedStar2");
const ratedStar3 = document.getElementById("js--ratedStar3");
const ratedStar4 = document.getElementById("js--ratedStar4");
const ratedStar5 = document.getElementById("js--ratedStar5");
const ratedStar6 = document.getElementById("js--ratedStar6");
const ratedStar7 = document.getElementById("js--ratedStar7");
const ratedStar8 = document.getElementById("js--ratedStar8");
const ratedStar9 = document.getElementById("js--ratedStar9");
const ratedStar10 = document.getElementById("js--ratedStar10");
const ratedStar11 = document.getElementById("js--ratedStar11");
const ratedStar12 = document.getElementById("js--ratedStar12");

const formRekensomBtn = document.getElementById("js--form-submit");
const rekensomForm = document.getElementById("js--rekensom-form");

const dierentuinpadSpeechBubbleP = document.getElementById("js--speech-bubble-p");
const dierentuinpadSpeechBubble = document.getElementById("js--speech-bubble");
const dierentuinkeeperZookeeper = document.getElementById("js--dierentuinpad-zookeeper");
const eindeButton = document.getElementById("js--pad_btn");

const reken_correct = 6;

// const apenVerblijf = new Audio("../audio/4-dierentuinpad/2-apenverblijf.mp3");
// const pinguinVerblijf = new Audio("../audio/4-dierentuinpad/3-pinguïn.mp3");
// const uitgang = new Audio("../audio/4-dierentuinpad/4-uitgang.mp3");
// const vissen = document.getElementById("iframeAudio");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const vissen = new Audio("../audio/Tjalle/4-dierentuinpad/1-vissen.m4a");
const savanne = new Audio("../audio/Tjalle/4-dierentuinpad/2-savanne.m4a");
const pinguins = new Audio("../audio/Tjalle/4-dierentuinpad/3-pinguin.m4a");
const ijsje = new Audio("../audio/Tjalle/4-dierentuinpad/4-ijsje.m4a");
const verblijf = new Audio("../audio/Tjalle/4-dierentuinpad/5-verblijf.m4a");
const uitgang = new Audio("../audio/Tjalle/4-dierentuinpad/6-uitgang.m4a");

const speechHerhaal = document.getElementById("js--speech-reload-path");
const audioHerhaal = [vissen, savanne, pinguins, ijsje, verblijf, uitgang];
let countHerhaal = 0;

let star1;
let star2;
let star3;
let star4;
let star5;
let star6;
let star7;
let star8;
let star9;
let star10;
let star11;
let star12;

let x = 0;
// let progress;

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
    vissen.muted = true;
    savanne.muted = true;
    pinguins.muted = true;
    ijsje.muted = true;
    verblijf.muted = true;
    uitgang.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    vissen.muted = false;
    savanne.muted = false;
    pinguins.muted = false;
    ijsje.muted = false;
    verblijf.muted = false;
    uitgang.muted = false;
};
  
speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};

speechHerhaal.onclick = () => {
    reloadSpeech(audioHerhaal[x], speechHerhaal);
}

// speakOn.onclick = () => {
//     speakOff.style.visibility = "visible";
//     speakOn.style.visibility = "hidden";
//     vissen.muted = true;
//     savanne.muted = true;
//     pinguins.muted = true;
//     ijsje.muted = true;
//     verblijf.muted = true;
//     uitgang.muted = true;
// };
// speakOff.onclick = () => {
//     speakOff.style.visibility = "hidden";
//     speakOn.style.visibility = "visible";
//     vissen.muted = false;
//     savanne.muted = false;
//     pinguins.muted = false;
//     ijsje.muted = false;
//     verblijf.muted = false;
//     uitgang.muted = false;
// };


if(document.URL.includes("dierentuinpad.html") ){
    eindeButton.classList.add("hide-important");
    x = localStorage.getItem("progress");
    x = parseInt(x);

    if(localStorage.getItem("progress")) {
        x = localStorage.getItem("progress");
        x = parseInt(x);
    } else {
        x = 0;
    }
    console.log(x);

    switch (x) {
        case 0:
            vissen.play();
            vissen.onended = () => {
                fish.classList.add("dierentuinpad__element");
                fish.classList.add("button");
                speechHerhaal.style.display = "block";
            }
            
            break;
        case 1:
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble2");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper2");
            // // vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Goed gedaan! Zullen we gaan kijken bij de savanne dieren?";
            savanne.play();
            savanne.onended = () => {
                monkey.classList.add("dierentuinpad__element");
                monkey.classList.add("button");
                speechHerhaal.style.display = "block";
            }

            star1 = localStorage.getItem('star1');
            star2 = localStorage.getItem('star2');
            star3 = localStorage.getItem('star3');
            if(star1 == 0){
                console.log(star1);
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
                ratedStar3.style.visibility = "visible";
            }
            if(star2 == 0){
                console.log(star2);
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
            }
            if(star3 == 0){
                console.log(star3);
                ratedStar1.style.visibility = "visible";
            }
            break;

        case 2:
            monkey.classList.remove("dierentuinpad__element");
            monkey.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble2");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper2");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper3");
            // // vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Goedzo! Het is nu tijd om de pinguïns eten te geven.";
            pinguins.play();
            pinguins.onended = () => {
                pinguin.classList.add("dierentuinpad__element");
                pinguin.classList.add("button");
                speechHerhaal.style.display = "block";
            }

            star1 = localStorage.getItem('star1');
            star2 = localStorage.getItem('star2');
            star3 = localStorage.getItem('star3');
            star4 = localStorage.getItem('star4');
            star5 = localStorage.getItem('star5');
            star6 = localStorage.getItem('star6');

            if(star1 == 0){
                console.log(star1);
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
                ratedStar3.style.visibility = "visible";
            }
            if(star2 == 0){
                console.log(star2);
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
            }
            if(star3 == 0){
                console.log(star3);
                ratedStar1.style.visibility = "visible";
            }
            if(star4 == 0){
                console.log(star4);
                ratedStar4.style.visibility = "visible";
                ratedStar5.style.visibility = "visible";
                ratedStar6.style.visibility = "visible";
            }
            if(star5 == 0){
                console.log(star5);
                ratedStar4.style.visibility = "visible";
                ratedStar5.style.visibility = "visible";
            }
            if(star6 == 0){
                console.log(star6);
                ratedStar4.style.visibility = "visible";
            }
            break;

        case 3:
            monkey.classList.remove("dierentuinpad__element");
            monkey.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            // ijskar.style.display = "block";
            // // vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Poeh ik ben nu wel toe aan een pauze. Zullen we even een ijsje gaan halen?";
            ijsje.play();
            ijsje.onended = () => {
                ijskar.classList.add("dierentuinpad__element");
                ijskar.classList.add("button");
                speechHerhaal.style.display = "block";
            }
            break;

        case 4:
            monkey.classList.remove("dierentuinpad__element");
            monkey.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            pinguin.classList.remove("dierentuinpad__element");
            pinguin.classList.remove("button");
            ijskar.classList.remove("dierentuinpad__element");
            ijskar.classList.remove("button");

            // eindeButton.classList.remove("hide-important");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper3");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble4");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper4");
            // // vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Dat was lekker! Kom we gaan nu naar ons nieuwste verblijf.";
            verblijf.play();
            verblijf.onended = () => {
                giraffe.classList.add("dierentuinpad__element");
                giraffe.classList.add("button");
                speechHerhaal.style.display = "block";
            }

            star1 = localStorage.getItem('star1');
            star2 = localStorage.getItem('star2');
            star3 = localStorage.getItem('star3');
            star4 = localStorage.getItem('star4');
            star5 = localStorage.getItem('star5');
            star6 = localStorage.getItem('star6');
            star7 = localStorage.getItem('star7');
            star8 = localStorage.getItem('star8');
            star9 = localStorage.getItem('star9');

            if(star1 == 0){
                console.log(star1);
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
                ratedStar3.style.visibility = "visible";
            }
            if(star2 == 0){
                console.log(star2);
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
            }
            if(star3 == 0){
                console.log(star3);
                ratedStar1.style.visibility = "visible";
            }
            if(star4 == 0){
                console.log(star4);
                ratedStar4.style.visibility = "visible";
                ratedStar5.style.visibility = "visible";
                ratedStar6.style.visibility = "visible";
            }
            if(star5 == 0){
                console.log(star5);
                ratedStar4.style.visibility = "visible";
                ratedStar5.style.visibility = "visible";
            }
            if(star6 == 0){
                console.log(star6);
                ratedStar4.style.visibility = "visible";
            }
            if(star7 == 0){
                console.log(star4);
                ratedStar7.style.visibility = "visible";
                ratedStar8.style.visibility = "visible";
                ratedStar9.style.visibility = "visible";
            }
            if(star8 == 0){
                console.log(star5);
                ratedStar7.style.visibility = "visible";
                ratedStar8.style.visibility = "visible";
            }
            if(star9 == 0){
                console.log(star6);
                ratedStar7.style.visibility = "visible";
            }
            break;
        case 5:
            monkey.classList.remove("dierentuinpad__element");
            monkey.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            pinguin.classList.remove("dierentuinpad__element");
            pinguin.classList.remove("button");
            giraffe.classList.remove("dierentuinpad__element");
            giraffe.classList.remove("button");
            eindeButton.classList.remove("hide-important");

            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper3");
            // vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Wat vliegt de tijd! De dierentuin gaat sluiten. We gaan naar de uitgang.";
            uitgang.play();
            uitgang.onended = () => {
                speechHerhaal.style.display = "block";
                eindeButton.style.display = "flex";
            }

            star1 = localStorage.getItem('star1');
            star2 = localStorage.getItem('star2');
            star3 = localStorage.getItem('star3');
            star4 = localStorage.getItem('star4');
            star5 = localStorage.getItem('star5');
            star6 = localStorage.getItem('star6');
            star7 = localStorage.getItem('star7');
            star8 = localStorage.getItem('star8');
            star9 = localStorage.getItem('star9');
            star10 = localStorage.getItem('star10');
            star11 = localStorage.getItem('star11');
            star12 = localStorage.getItem('star12');

            if(star1 == 0){
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
                ratedStar3.style.visibility = "visible";
            }
            if(star2 == 0){
                ratedStar1.style.visibility = "visible";
                ratedStar2.style.visibility = "visible";
            }
            if(star3 == 0){
                ratedStar1.style.visibility = "visible";
            }
            if(star4 == 0){
                ratedStar4.style.visibility = "visible";
                ratedStar5.style.visibility = "visible";
                ratedStar6.style.visibility = "visible";
            }
            if(star5 == 0){
                ratedStar4.style.visibility = "visible";
                ratedStar5.style.visibility = "visible";
            }
            if(star6 == 0){
                ratedStar4.style.visibility = "visible";
            }
            if(star7 == 0){
                ratedStar7.style.visibility = "visible";
                ratedStar8.style.visibility = "visible";
                ratedStar9.style.visibility = "visible";
            }
            if(star8 == 0){
                ratedStar7.style.visibility = "visible";
                ratedStar8.style.visibility = "visible";
            }
            if(star9 == 0){
                ratedStar7.style.visibility = "visible";
            }
            if(star10 == 0){
                ratedStar10.style.visibility = "visible";
                ratedStar11.style.visibility = "visible";
                ratedStar12.style.visibility = "visible";
            }
            if(star11 == 0){
                ratedStar10.style.visibility = "visible";
                ratedStar11.style.visibility = "visible";
            }
            if(star12 == 0){
                ratedStar10.style.visibility = "visible";
            }
            break;
    }


    fish.onclick = (e) => {
        x = 1;
        // progress = x;
        localStorage.setItem("progress", x);
        startRekensomPuzzel()
        e.preventDefault();
    }
    monkey.onclick = (e) => {
        x = 2;
        // progress = x;
        localStorage.setItem("progress", x);
        startTypenPuzzel();
        e.preventDefault();
    }
    ijskar.onclick = (e) => {
        x = 4;
        localStorage.setItem("progress", x);
        startIjskar();
        e.preventDefault();
    }
    pinguin.onclick = (e) => {
        x = 3;
        // progress = x;
        localStorage.setItem("progress", x);
        startPinguinPuzzel();
        e.preventDefault();
    }
    giraffe.onclick = (e) => {
        x = 5;
        // progress = x;
        localStorage.setItem("progress", x);
        startGiraffePuzzel();
        e.preventDefault();
    }
    eindeButton.onclick = (e) => {
        naarEinde();
        e.preventDefault();
    }
}

function startRekensomPuzzel(){
    window.location.href="rekensom.html";  
};
function startTypenPuzzel(){
    window.location.href="typen.html";  
};
function startGiraffePuzzel(){
    window.location.href="giraffe.html";  
};
function startPinguinPuzzel(){
    window.location.href="arctic.html";  
};
function startIjskar() {
    window.location.href="ijsco.html";  
}
function naarEinde(){
    window.location.href = "einde.html";
}

// export{speakBtnDierentuinpad};