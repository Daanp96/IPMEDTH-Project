const speech = document.getElementById("js--speech-bubble");
const speechButton = document.getElementById("js--map-ok-btn");
const zookeeper = document.getElementById("js--map_zookeeper");
const map = document.getElementById("js--map");

const animate = map.animate([
    // keyframes
    { transform: 'scale(1.5) scale(0.5)' },
    { transform: 'scale(0.5) scale(1.5)' }
  ], {
    // timing options
    duration: 1000,
    iterations: Infinity
  });

speechButton.onclick = () => {
    // zookeeper.style.opacity = "0";
    // zookeeper.style.zIndex = "-1";
    speech.style.opacity = "0";
    speech.style.zIndex = "-1";
}

map.onclick = () => {
    animate.cancel();
    map.style.width = "40vw";
}