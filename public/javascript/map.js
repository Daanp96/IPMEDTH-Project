const puzzelButton = document.getElementById("js--map-btn");
const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

const mapKapot = new Audio("../audio/Tjalle/2-map/1-kaartkapot.m4a");

mapKapot.play();

puzzelButton.onclick = () => {
  endMap();
};

function endMap(){
  window.location.href="mappuzzel.html";  
};

speakOn.onclick = () => {
  speakOff.style.visibility = "visible";
  speakOn.style.visibility = "hidden";
  mapKapot.muted = true;
};
speakOff.onclick = () => {
  speakOff.style.visibility = "hidden";
  speakOn.style.visibility = "visible";
  mapKapot.muted = false;
};



// export {speakBtnMap};