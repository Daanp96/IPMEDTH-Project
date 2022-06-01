const speechBubble = document.getElementById("js--speech-bubble");
const speechButton = document.getElementById("js--map-ok-btn");

speechButton.onclick = () => {
  speechBubble.style.visibility = "hidden";
}