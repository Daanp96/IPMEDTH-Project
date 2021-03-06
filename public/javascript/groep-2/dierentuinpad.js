import {reloadSpeech} from "./functions2.js";

const fish = document.getElementById("js--fish");
const elephant = document.getElementById("js--elephant");
const pinguin = document.getElementById("js--pinguin");
const ijswinkel = document.getElementById("js--ijswinkel");
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


const dierentuinpadSpeechBubbleP = document.getElementById("js--speech-bubble-p");
const dierentuinpadSpeechBubble = document.getElementById("js--speech-bubble");
const dierentuinkeeperZookeeper = document.getElementById("js--dierentuinpad-zookeeper");
const eindeButton = document.getElementById("js--pad_btn");

// const apenVerblijf = new Audio("../audio/4-dierentuinpad/2-apenverblijf.mp3");
// const pinguinVerblijf = new Audio("../audio/4-dierentuinpad/3-pinguïn.mp3");
// const uitgang = new Audio("../audio/4-dierentuinpad/4-uitgang.mp3");
// const vissen = document.getElementById("iframeAudio");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const vissen = new Audio("../../audio/Tjalle/4-dierentuinpad/1-vissen.m4a");
const savanne = new Audio("../../audio/Tjalle/4-dierentuinpad/2-savanne.m4a");
const pinguins = new Audio("../../audio/Tjalle/4-dierentuinpad/3-pinguin.m4a");
const ijsje = new Audio("../../audio/Tjalle/4-dierentuinpad/4-ijsje.m4a");
const verblijf = new Audio("../../audio/Tjalle/4-dierentuinpad/5-verblijf.m4a");
const uitgang = new Audio("../../audio/Tjalle/4-dierentuinpad/6-uitgang.m4a");

const speechHerhaal = document.getElementById("js--speech-reload-path");
const audioHerhaal = [vissen, savanne, pinguins, ijsje, verblijf, uitgang];

const max1400 = window.matchMedia("(max-width: 1400px)");
const max1300 = window.matchMedia("(max-width: 1300px)");
const max1200 = window.matchMedia("(max-width: 1200px)");

let countHerhaal = 0;

let groep2Star1;
let groep2Star2;
let groep2Star3;
let groep2Star4;
let groep2Star5;
let groep2Star6;
let groep2Star7;
let groep2Star8;
let groep2Star9;
let groep2Star10;

let x = 0;

setInterval(() => {
    if (localStorage.getItem("speakOnStorage2") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage2") == 'visible') {
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


if(document.URL.includes("groep-2/dierentuinpad.html") ){
    eindeButton.classList.add("hide-important");
    x = localStorage.getItem("progress2");
    x = parseInt(x);

    if(localStorage.getItem("progress2")) {
        x = localStorage.getItem("progress2");
        x = parseInt(x);
    } else {
        x = 0;
    }

    switch (x) {
        case 0:
            vissen.play();
            vissen.onended = () => {
                fish.classList.add("dierentuinpad__element");
                fish.classList.add("button");
                speechHerhaal.style.display = "block";
                if (max1400.matches) {
                    fish.style.gridColumn = "1 / span 8";
                }
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
                elephant.classList.add("dierentuinpad__element");
                elephant.classList.add("button");
                speechHerhaal.style.display = "block";
                if (max1300.matches) {
                    elephant.style.gridColumn = "8 / span 6";
                }
                if (max1200.matches) {
                    elephant.style.gridColumn = "9/ span 6";
                }
            }
            break;

        case 2:
            elephant.classList.remove("dierentuinpad__element");
            elephant.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper");
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
            break;

        case 3:
            elephant.classList.remove("dierentuinpad__element");
            elephant.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            
            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper3");

            dierentuinpadSpeechBubbleP.innerHTML = "Poeh ik ben nu wel toe aan een pauze. Zullen we even een ijsje gaan halen?";
            ijsje.play();

            ijsje.onended = () => {
                ijswinkel.classList.add("dierentuinpad__element");
                ijswinkel.classList.add("button");
                speechHerhaal.style.display = "block";
            }
            break;

        case 4:
            elephant.classList.remove("dierentuinpad__element");
            elephant.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            pinguin.classList.remove("dierentuinpad__element");
            pinguin.classList.remove("button");
            ijswinkel.classList.remove("dierentuinpad__element");
            ijswinkel.classList.remove("button");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper");
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

            break;
        case 5:
            elephant.classList.remove("dierentuinpad__element");
            elephant.classList.remove("button");
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            pinguin.classList.remove("dierentuinpad__element");
            pinguin.classList.remove("button");
            giraffe.classList.remove("dierentuinpad__element");
            giraffe.classList.remove("button");
            eindeButton.classList.remove("hide-important");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper3");
            // vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Wat vliegt de tijd! De dierentuin gaat sluiten. We gaan naar de uitgang.";
            uitgang.play();

            uitgang.onended = () => {
                speechHerhaal.style.display = "block";
                eindeButton.style.display = "flex";
            }
            
            break;
    }

    groep2Star1 = localStorage.getItem('groep2Star1');
    groep2Star2 = localStorage.getItem('groep2Star2');
    groep2Star3 = localStorage.getItem('groep2Star3');
    groep2Star4 = localStorage.getItem('groep2Star4');
    groep2Star5 = localStorage.getItem('groep2Star5');
    groep2Star6 = localStorage.getItem('groep2Star6');
    groep2Star7 = localStorage.getItem('groep2Star7');
    groep2Star8 = localStorage.getItem('groep2Star8');
    groep2Star9 = localStorage.getItem('groep2Star9');
    groep2Star10 = localStorage.getItem('groep2Star10');
    // star11 = localStorage.getItem('star11');
    // star12 = localStorage.getItem('star12');

    if(groep2Star1 == 0){
        ratedStar1.classList.remove("hidden");
        ratedStar2.classList.remove("hidden");
        ratedStar3.classList.remove("hidden");
    }
    if(groep2Star2 == 0){
        ratedStar1.classList.remove("hidden");
        ratedStar2.classList.remove("hidden");
    }
    if(groep2Star3 == 0){
        ratedStar1.classList.remove("hidden");
    }
    if(groep2Star4 == 0){
        ratedStar4.classList.remove("hidden");
        ratedStar5.classList.remove("hidden");
        ratedStar6.classList.remove("hidden");
    }
    if(groep2Star5 == 0){
        ratedStar4.classList.remove("hidden");
        ratedStar5.classList.remove("hidden");
    }
    if(groep2Star6 == 0){
        ratedStar4.classList.remove("hidden");
    }
    if(groep2Star7 == 0){
        ratedStar7.classList.remove("hidden");
        ratedStar8.classList.remove("hidden");
        ratedStar9.classList.remove("hidden");
    }
    if(groep2Star8 == 0){
        ratedStar7.classList.remove("hidden");
        ratedStar8.classList.remove("hidden");
    }
    if(groep2Star9 == 0){
        ratedStar7.classList.remove("hidden");
    }
    if(groep2Star10 == 0){
        ratedStar10.classList.remove("hidden");
        ratedStar11.classList.remove("hidden");
        ratedStar12.classList.remove("hidden");
    }
    // if(star11 == 0){
    //     ratedStar10.classList.remove("hidden");
    //     ratedStar11.classList.remove("hidden");
    // }
    // if(star12 == 0){
    //     ratedStar10.classList.remove("hidden");
    // }

    fish.onclick = (e) => {
        x = 1;
        // progress = x;
        localStorage.setItem("progress2", x);
        startVissenPuzzel()
        e.preventDefault();
    }
    elephant.onclick = (e) => {
        x = 2;
        // progress = x;
        localStorage.setItem("progress2", x);
        startTypenPuzzel();
        e.preventDefault();
    }
    ijswinkel.onclick = (e) => {
        x = 4;
        localStorage.setItem("progress2", x);
        startIjswinkel();
        e.preventDefault();
    }
    pinguin.onclick = (e) => {
        x = 3;
        // progress = x;
        localStorage.setItem("progress2", x);
        startPinguinPuzzel();
        e.preventDefault();
    }
    giraffe.onclick = (e) => {
        x = 5;
        // progress = x;
        localStorage.setItem("progress2", x);
        startGiraffePuzzel();
        e.preventDefault();
    }
    eindeButton.onclick = (e) => {
        naarEinde();ijswinkel
        e.preventDefault();
    }
}

function startVissenPuzzel(){
    window.location.href="vissenverblijf.html";  
};
function startTypenPuzzel(){
    window.location.href="savanne.html";  
};
function startGiraffePuzzel(){
    window.location.href="giraffeverblijf.html";  
};
function startPinguinPuzzel(){
    window.location.href="pinguinverblijf.html";  
};
function startIjswinkel() {
    window.location.href="ijswinkel.html";  
}
function naarEinde(){
    window.location.href = "einde.html";
}

// export{speakBtnDierentuinpad};