import {reloadSpeech} from "./functions.js";

const puzzelButton = document.getElementById("js--map-btn");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const herhaal = document.getElementById("js--speech-reload");

const mapKapot = new Audio("../audio/Tjalle/2-map/1-kaartkapot.m4a");

mapKapot.play();
mapKapot.onended = () => {
  puzzelButton.style.display = "flex";
  herhaal.style.display = "block";
}

setInterval(() => {
  if (localStorage.getItem("speakOnStorage") == 'hidden') {
      speakOnFunction();
  }
  if (localStorage.getItem("speakOnStorage") == 'visible') {
      speakOffFunction();
  }
}, 100);

function speakOnFunction(){
  speakOff.style.visibility = "visible";
  speakOn.style.visibility = "hidden";
  mapKapot.muted = true;
};

function speakOffFunction(){
  speakOff.style.visibility = "hidden";
  speakOn.style.visibility = "visible";
  mapKapot.muted = false;
};

speakOn.onclick = () => {
  speakOnFunction();
};
speakOff.onclick = () => {
  speakOffFunction();
};

herhaal.onclick = () => {
  reloadSpeech(mapKapot, herhaal);
}

puzzelButton.onclick = () => {
  endMap();
};

function endMap(){
  window.location.href="mappuzzel.html";  
};

// speakOn.onclick = () => {
//   speakOff.style.visibility = "visible";
//   speakOn.style.visibility = "hidden";
//   mapKapot.muted = true;
// };
// speakOff.onclick = () => {
//   speakOff.style.visibility = "hidden";
//   speakOn.style.visibility = "visible";
//   mapKapot.muted = false;
// };



// export {speakBtnMap};