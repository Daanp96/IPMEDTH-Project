const speechBubble = document.getElementById("js--speech-bubble");
const speechButton = document.getElementById("js--map-ok-btn");
const puzzelButton = document.getElementById("js--map-btn");

speechButton.onclick = () => {
  speechBubble.style.visibility = "hidden";
};

puzzelButton.onclick = () => {
  endMap();
};

function endMap(){
  window.location.href="mappuzzel.html";  
};