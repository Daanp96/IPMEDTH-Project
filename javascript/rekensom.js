
//voor als we 1 html pagina willen en de thema's random willen laten komen
//of voor als we verschillende achtergronden per thema willen
//of alleen random dieren 
//

// const backgrounds = new Array();

// backgrounds[0] = "../images/sea-background.png";
// backgrounds[1] = "../images/start-background.png";

// const randomBackground = Math.floor(Math.random() * backgrounds.length);
// const rekensomBackground = document.getElementById('js--rekensom-background');

// rekensomBackground.style.background = "url("+backgrounds[randomBackground]+")";
// rekensomBackground.style.backgroundSize = "cover";
// rekensomBackground.style.backgroundRepeat = "no-repeat";

//random images neerzetten
//probleem: als bijv. index 2 wordt toegewezen, wordt alleen de indexen daarna nog toegewezen, de rest is undefined

// const seaAnimal1 = document.getElementById("js--sea-animal-1");
// const seaAnimal2 = document.getElementById("js--sea-animal-2");
// const seaAnimal3 = document.getElementById("js--sea-animal-3");
// const seaAnimal4 = document.getElementById("js--sea-animal-4");


// const animals = new Array('../images/fishes-3.png', '../images/arrow-begin.png','../images/hint-btn.png', '../images/music-off-btn.png');

// const randomAnimals = Math.floor(Math.random() * animals.length);
// console.log(randomAnimals);

// // const seaAnimal = document.getElementsByClassName("rekensom--image-animal");
// const x = animals.splice(randomAnimals, 1)[0];
// const xx = animals.splice(randomAnimals, 1)[0];
// const xxx = animals.splice(randomAnimals, 1)[0];
// const xxxx = animals.splice(randomAnimals, 1)[0];

// console.log(x);
// console.log(xx);
// console.log(xxx);
// console.log(xxxx);

// seaAnimal1.src = animals[x];
// seaAnimal2.src = animals[xx];
// seaAnimal3.src = animals[xxx];
// seaAnimal4.src = animals[xxxx];

// console.log(seaAnimal1);
// console.log(seaAnimal2);
// console.log(seaAnimal3);
// console.log(seaAnimal4);

//-------------------------------------------------------------------------------------------------
const nextBtnRight = document.getElementById("js--next-btn-right");
const nextBtnLeft = document.getElementById("js--next-btn-left");
const firstpage = document.getElementById("js--first-page");
const secondpage = document.getElementById("js--second-page");

const speechBubble = document.getElementById("js--speech-bubble");
const speechBubble_p = document.getElementById("js--speech-bubble-p"); 
const explaineBtn = document.getElementById("js--explaine-btn");

const startOKBtn = document.getElementById("js--start-ok-btn");
const formBtn = document.getElementById("js--form-submit");
const hintBtn = document.getElementById("js--hint");

const rekensomForm = document.getElementById("js--rekensom-form");


//antwoorden
const reken_correct = 6;

formBtn.addEventListener("click", function(e){

    let form_answer = document.forms["answerForm"]["numberInput"].value;

    if(form_answer == reken_correct){
        console.log("jaaa");
        document.getElementById("aantalVissen").style.color = "lime";
        setTimeout(() => {
            endRekensomPuzzel();
        }, 700);
        
    }else{
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

nextBtnRight.onclick = () => {    
    secondpage.classList.add("grid-16-9");
    secondpage.classList.remove("hide");
    secondpage.classList.add("slidein-from-right");

    firstpage.classList.remove("grid-16-9");
    firstpage.classList.add("hide");
};

nextBtnLeft.onclick = () => {    
    secondpage.classList.remove("grid-16-9");
    secondpage.classList.add("hide");

    firstpage.classList.add("grid-16-9");
    firstpage.classList.add("slidein-from-left");
    firstpage.classList.remove("hide");
};

startOKBtn.onclick = () => {
    speechBubble.style.visibility = "hidden";
}

hintBtn.onclick = () => {
    console.log("klik");
    speechBubble.style.visibility = "visible";
    explaineBtn.classList.remove("hide");
    explaineBtn.src = '../images/aquarium-board.png';
    speechBubble_p.innerHTML = "Klik op het bord om het juiste getal in te vullen."
};

function endRekensomPuzzel(){
    window.location.href="mappuzzel.html";  
}