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

const reken_correct = 6;

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
            dierentuinpadSpeechBubbleP.innerHTML = "Zo, zullen we nu maar eens gaan kijken bij het apenverblijf?";

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
            dierentuinpadSpeechBubbleP.innerHTML = "Nu is het tijd om bij pinguïns te gaan kijken.";

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
        startSavannePuzzel()
        e.preventDefault();
    }
    pinguin.onclick = (e) => {
        x = 3;
        // progress = x;
        localStorage.setItem("progress", x);
        startRekensomPuzzel()
        e.preventDefault();
    }
}

function startRekensomPuzzel(){
    window.location.href="rekensom.html";  
};
function startSavannePuzzel(){
    window.location.href="savanne.html";  
};

