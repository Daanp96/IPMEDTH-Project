const puzzelButton = document.getElementById("js--map-btn");

const mapKapot = new Audio("../audio/Tjalle/2-map/1-kaartkapot.m4a");

mapKapot.play();

puzzelButton.onclick = () => {
  endMap();
};

function endMap(){
  window.location.href="mappuzzel.html";  
};