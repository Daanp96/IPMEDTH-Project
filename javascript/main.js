
// import dragDrop from "./functions.js";

// const drag = document.getElementById("js--drag");

const musicOn = document.getElementById("js--music-on");
const musicOff = document.getElementById("js--music-off");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

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
