const bedankt = new Audio("../audio/Tjalle/10-uitgang/1-bedankt.m4a");

const overlay = document.getElementById("js--end-overlay");
const overlayTitle = document.getElementById("js--overlay-title");

const againBtn = document.getElementById("js--btn-again");
const stopBtn = document.getElementById("js--btn-stop");

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");

setInterval(() => {
    if (localStorage.getItem("speakOnStorage") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage") == 'visible') {
        speakOffFunction();
    }
}, 1000);
  
function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    bedankt.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    bedankt.muted = false;
};
  
speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};

bedankt.play();
bedankt.onended = () => {
    overlay.style.opacity = "1";
    overlayTitle.style.opacity = "1";
    againBtn.style.opacity = "1";
    stopBtn.style.opacity = "1"; 
}

againBtn.onclick = () => {
    toStart();
}

stopBtn.onclick = () => {
    closeWindow();
}

const toStart = () => {
    window.location = "/";
}

const closeWindow = () => {
    window.open("https://www.lessonup.com/nl/channel/futurenl/series/509ed9706731b2ae88e13ca2", '_self');
}