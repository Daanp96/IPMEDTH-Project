const fish = document.getElementById("js--fish");
const monkey = document.getElementById("js--monkey");
const pinguin = document.getElementById("js--pinguin");

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

const dierentuinpadSpeechBubbleP = document.getElementById("js--speech-bubble-p");
const dierentuinpadSpeechBubble = document.getElementById("js--speech-bubble");
const dierentuinkeeperZookeeper = document.getElementById("js--dierentuinpad-zookeeper");
const eindeButton = document.getElementById("js--pad_btn");

const reken_correct = 6;

const apenVerblijf = new Audio("../audio/4-dierentuinpad/2-apenverblijf.mp3");
const pinguinVerblijf = new Audio("../audio/4-dierentuinpad/3-pinguïn.mp3");
const uitgang = new Audio("../audio/4-dierentuinpad/4-uitgang.mp3");
const vissen = document.getElementById("iframeAudio");

eindeButton.classList.add("hide-important");

let star1;
let star2;
let star3;
let star4;
let star5;
let star6;
let star7;
let star8;
let star9;

let x = 0;
// let progress;

if(document.URL.includes("dierentuinpad.html") ){
    x = localStorage.getItem("progress");
    x = parseInt(x);
    console.log(x);

    switch (x) {
        // case 0:
        //     fish.classList.add("dierentuinpad__element");
        //     fish.classList.add("button");
        case 1:
            fish.classList.remove("dierentuinpad__element");
            fish.classList.remove("button");
            monkey.classList.add("dierentuinpad__element");
            monkey.classList.add("button");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble2");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper2");
            vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Zo, zullen we nu maar eens gaan kijken bij het apenverblijf?";
            apenVerblijf.play();

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
            pinguin.classList.add("dierentuinpad__element");
            pinguin.classList.add("button");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble2");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper2");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper3");
            vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Nu is het tijd om bij pinguïns te gaan kijken.";
            pinguinVerblijf.play();

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
            pinguin.classList.remove("dierentuinpad__element");
            pinguin.classList.remove("button");
            eindeButton.classList.remove("hide-important");

            dierentuinpadSpeechBubble.classList.remove("dierentuinpad__speech-bubble2");
            dierentuinkeeperZookeeper.classList.remove("dierentuinpad__zookeeper2");
            dierentuinpadSpeechBubble.classList.add("dierentuinpad__speech-bubble3");
            dierentuinkeeperZookeeper.classList.add("dierentuinpad__zookeeper3");
            vissen.remove();
            dierentuinpadSpeechBubbleP.innerHTML = "Oh, wat gaat de tijd snel, de dierentuin gaat sluiten. Kom, we gaan naar de uitgang.";
            uitgang.play();

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
        startSavannePuzzel();
        e.preventDefault();
    }
    pinguin.onclick = (e) => {
        x = 3;
        // progress = x;
        localStorage.setItem("progress", x);
        startPinguinPuzzel();
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
function startSavannePuzzel(){
    window.location.href="savanne.html";  
};
function startPinguinPuzzel(){
    window.location.href="arctic.html";  
};
function naarEinde(){
    window.location.href = "einde.html";
}