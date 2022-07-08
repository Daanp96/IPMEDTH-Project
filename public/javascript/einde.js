const bedankt = new Audio("../audio/Tjalle/10-uitgang/1-bedankt.m4a");
// const opnieuwSpelen = new Audio("../audio/Tjalle/10-uitgang/2-opnieuw_spelen.m4a");

const overlay = document.getElementById("js--end-overlay");
const diploma = document.getElementById("js--diploma");
const diplomaInput = document.getElementById("js--diploma-input");
const diplomaBtn = document.getElementById("js--diploma-button");
const eindeTekst = document.getElementById("js--einde_tekst");
// const overlayTitle = document.getElementById("js--overlay-title");

const keuzes = document.getElementById("js--keuzes");
const opnieuw = document.getElementById("js--opnieuw");
const afsluiten = document.getElementById("js--afsluiten");

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

diplomaBtn.onclick = () => {
    diplomaBtn.style.display = "none";
    window.print();
    diploma.style.display = "none";
    opnieuw.style.display = "inline";
    afsluiten.style.display = "inline";
    eindeTekst.style.display = "block";
    // opnieuwSpelen.play();
};

bedankt.play();

bedankt.onended = () => {
    overlay.style.opacity = "1";
    diploma.style.opacity = "1";
    diplomaBtn.classList.add("button");
    diplomaInput.classList.add("button");
}

opnieuw.onclick = () => {
    toStart();
}

afsluiten.onclick = () => {
    closeWindow();
}

const toStart = () => {
    window.location = "/";
}

const closeWindow = () => {
    window.open("https://www.lessonup.com/nl/channel/futurenl/series/509ed9706731b2ae88e13ca2", '_self');
}