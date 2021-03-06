import {dragDropGiraffe, reloadSpeech, hintGlow} from "./functions.js";

const speakOn = document.getElementById("js--speak-on");
const speakOff = document.getElementById("js--speak-off");
const speakOn2 = document.getElementById("js--speak-on-2");
const speakOff2 = document.getElementById("js--speak-off-2");
const hintBtn = document.getElementById("js--hint");
const hintBtnGlow = document.getElementById("js--hint-glow");

// const introBtn = document.getElementById("js--intro-btn");
const startOKBtn = document.getElementById("js--speech-bubble-btn");
const endBtn = document.getElementById("js--end-btn");

const articleIntro = document.getElementById("js--article-intro");
const articleEnclosure = document.getElementById("js--article-enclosure");
// const enclosureField = document.getElementById("js--enclosure-field");

//verschillende sidebars
const sidebar = document.getElementById("js--sidebar");
const treePopup = document.getElementById("js--tree-popup");
const rockPopup = document.getElementById("js--rock-popup");
const pondPopup = document.getElementById("js--pond-popup");

//buttons van begin sidebar
const treeBtn = document.getElementById("js--tree-button");
const rockBtn = document.getElementById("js--rock-button");
const pondBtn = document.getElementById("js--pond-button");

//buttons sidebar tree
const sidebarTree1 = document.getElementById("js--sidebar-tree-1");
const sidebarTree2 = document.getElementById("js--sidebar-tree-2");
const sidebarTree3 = document.getElementById("js--sidebar-tree-3");

//buttons sidebar rock
const sidebarRock1 = document.getElementById("js--sidebar-rock-1");
const sidebarRock2 = document.getElementById("js--sidebar-rock-2");
const sidebarRock3 = document.getElementById("js--sidebar-rock-3");

//buttons sidebar rock
const sidebarPond1 = document.getElementById("js--sidebar-pond-1");
const sidebarPond2 = document.getElementById("js--sidebar-pond-2");

//objecten tree
const tree1 = document.getElementById("js--tree-1");
const tree2 = document.getElementById("js--tree-2");
const tree3 = document.getElementById("js--tree-3");

//objecten rock
const rock1 = document.getElementById("js--rock-1");
const rock2 = document.getElementById("js--rock-2");
const rock3 = document.getElementById("js--rock-3");

//objecten rock
const pond1 = document.getElementById("js--pond-1");
const pond2 = document.getElementById("js--pond-2");

const mapOverlay = document.getElementById("js--map-overlay");
const headZookeeper = document.getElementById("js--head-zookeeper");
const hintBubble = document.getElementById("js--hintBubble");
const hintBubbleBtn = document.getElementById("js--hintBubble-btn");
const hintSpeechBubble_p = document.getElementById("js--speech-bubble-p-hint"); 

// eind gesprek
const endBubble = document.getElementById("js--endBubble");
const endBubbleBtn = document.getElementById("js--endBubble-btn");
const endSpeechBubble_p = document.getElementById("js--speech-bubble-p-end"); 
const endSpeechBubbleDierentuin = document.getElementById("js--endBubble-dierentuin");
const endSpeechBubbleNatuur = document.getElementById("js--endBubble-natuur");

// herhaal knoppen
const herhaalIntro = document.getElementById("js--speech-reload-intro");
const herhaalHint = document.getElementById("js--speech-reload-hint");
const herhaalEnd = document.getElementById("js--speech-reload-end");

//audio
const verblijfAf = new Audio("../audio/Tjalle/9-verblijf/1-verblijfAf.m4a");
const bovenaan = new Audio("../audio/Tjalle/9-verblijf/2-bovenaan.m4a");
const goedIngericht = new Audio("../audio/Tjalle/9-verblijf/3-goedIngericht.m4a");
const vraag = new Audio("../audio/Tjalle/9-verblijf/4-vraag.m4a");
const veelDieren = new Audio("../audio/Tjalle/9-verblijf/5-veelDieren.m4a");
const vrijeRuimte = new Audio("../audio/Tjalle/9-verblijf/6-vrijeRuimte.m4a");
const keuze = new Audio("../audio/Tjalle/9-verblijf/7-keuze.m4a");

const hint1 = new Audio("../audio/Tjalle/9-verblijf/hint-1.m4a");
const hint2 = new Audio("../audio/Tjalle/9-verblijf/hint-2.m4a");

const giraffeImage = document.getElementById("js--enclosure-giraffe");

const endHerhaal = [goedIngericht, vraag, veelDieren, vrijeRuimte, keuze];
const hintHerhaal = [bovenaan, hint1, hint2];

let countHerhaal = 0;
let countHint = 0;
let countEnd = 0;
let tekst = '';
let speakOnStorage;
let isHint = false;
let countGlow = 0;

setInterval(() => {
    if (speakOn2.style.visibility == 'hidden') {
        speakOnStorage = 'hidden';
        localStorage.setItem("speakOnStorage", speakOnStorage);
    }
    if (speakOn2.style.visibility == 'visible') {
        speakOnStorage = 'visible';
        localStorage.setItem("speakOnStorage", speakOnStorage);
    }
}, 200);

setInterval(() => {
    if (localStorage.getItem("speakOnStorage") == 'hidden') {
        speakOnFunction();
    }
    if (localStorage.getItem("speakOnStorage") == 'visible') {
        speakOffFunction();
    } 
    if (localStorage.getItem("speakOnStorage") == 'hidden' && articleIntro.style.display == "none") {
        speakOnFunction2();
    }
    if (localStorage.getItem("speakOnStorage") == 'visible' && articleIntro.style.display == "none") {
        speakOffFunction2();
    }
}, 1000);
  
function speakOnFunction(){
    speakOff.style.visibility = "visible";
    speakOn.style.visibility = "hidden";
    verblijfAf.muted = true;
};
  
function speakOffFunction(){
    speakOff.style.visibility = "hidden";
    speakOn.style.visibility = "visible";
    verblijfAf.muted = false;
};

function speakOnFunction2(){
    speakOff2.style.visibility = "visible";
    speakOn2.style.visibility = "hidden";
    bovenaan.muted = true;
    goedIngericht.muted = true;
    vraag.muted = true;
    veelDieren.muted = true;
    vrijeRuimte.muted = true;
    keuze.muted = true;
    hint1.muted = true;
    hint2.muted = true;
};
  
function speakOffFunction2(){
    speakOff2.style.visibility = "hidden";
    speakOn2.style.visibility = "visible";
    bovenaan.muted = false;
    goedIngericht.muted = false;
    vraag.muted = false;
    veelDieren.muted = false;
    vrijeRuimte.muted = false;
    keuze.muted = false;
    hint1.muted = false;
    hint2.muted = false;
};
  
speakOn.onclick = () => {
    speakOnFunction();
};
speakOff.onclick = () => {
    speakOffFunction();
};
speakOn2.onclick = () => {
    speakOnFunction2();
};
speakOff2.onclick = () => {
    speakOffFunction2();
};

herhaalIntro.onclick = () => {
    reloadSpeech(verblijfAf, herhaalIntro);
}

herhaalHint.onclick = () => {
    reloadSpeech(hintHerhaal[countHerhaal], herhaalHint);
}

herhaalEnd.onclick = () => {
    reloadSpeech(endHerhaal[countEnd], herhaalEnd);
}

hintBtn.disabled = true;
verblijfAf.play();

verblijfAf.onended = () => {
    startOKBtn.style.display = "flex";
    herhaalIntro.style.display = "block";
}

hintBubbleBtn.onclick = () => {
    mapOverlay.classList.add("hide");
    headZookeeper.classList.add("hide");
    hintBubble.classList.add("hide");
    hintBtn.disabled = false;
    setTimeout(() => {
        hintGlow(countGlow, hintBtnGlow);
        setTimeout(() => {
            hintBtnGlow.classList.remove("glow");
        }, 70000);
    }, 60000);
    countHerhaal++;
}

hintBtn.onclick = () => {
    countGlow = 1;
    hintGlow(countGlow, hintBtnGlow);
    switch (countHint) {
        case 0: 
            hintBtnGlow.classList.remove("glow");
            hintBubbleBtn.style.display = "none";
            mapOverlay.classList.remove("hide");
            headZookeeper.classList.remove("hide");
            hintBubble.classList.remove("hide");
            tekst = 'Klik op de gekleurde vlakken.';
            hint1.play();

            hint1.onended = () => {
                hintBubbleBtn.style.display = "flex";
                herhaalHint.style.display = "block";
            }
            hintBubbleBtn.onclick = () => {
                mapOverlay.classList.add("hide");
                headZookeeper.classList.add("hide");
                hintBubble.classList.add("hide");
                hintBubbleBtn.style.display = "none";
                countHint++;
                countHerhaal++;
            }
            break;
        case 1: 
            mapOverlay.classList.remove("hide");
            headZookeeper.classList.remove("hide");
            hintBubble.classList.remove("hide");
            tekst = 'Sleep de sticker naar een mooie plek.';
            hint2.play();

            hint2.onended = () => {
                hintBubbleBtn.style.display = "flex";
                herhaalHint.style.display = "block";
            }
            hintBubbleBtn.onclick = () => {
                mapOverlay.classList.add("hide");
                headZookeeper.classList.add("hide");
                hintBubble.classList.add("hide");
                hintBubbleBtn.style.display = "none";
                countHint++;
                countHerhaal++;
            }
            break;
        case 2:
            mapOverlay.classList.add("hide");
            headZookeeper.classList.add("hide");
            hintBubble.classList.add("hide");
            break;
    }

    herhaalHint.style.display = "none";
    hintSpeechBubble_p.innerHTML = tekst;
};

// dragDropGiraffe(tree1, tree2);
const array = [tree1, tree2, tree3, rock1, rock2, rock3, pond1, pond2];
for (let i = 0; i < array.length; i++) {
    dragDropGiraffe(array[i], endBtn, giraffeImage);
};

// praat wolk
startOKBtn.onclick = () => {
    articleIntro.style.display = "none";
    articleEnclosure.style.display = "grid";
    mapOverlay.classList.remove("hide");
    headZookeeper.classList.remove("hide");
    hintBubble.classList.remove("hide");
    hintBtn.style.zIndex = 70;
    speakOn2.style.zIndex = 70;
    speakOff2.style.zIndex = 70;
    hintSpeechBubble_p.innerHTML = 'Bovenaan zie je een lijstje wat ze nodig hebben.';
    bovenaan.play();

    bovenaan.onended = () => {
        hintBubbleBtn.style.display = "flex";
        herhaalHint.style.display = "block";
    }

};

// introBtn.onclick = () => {
//     articleIntro.style.display = "none";
//     articleEnclosure.style.display = "grid";
// };

treeBtn.onclick = () => {
    treePopup.classList.remove("tree-sidebar");
    treePopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
};
rockBtn.onclick = () => {
    rockPopup.classList.remove("rock-sidebar");
    rockPopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
};
pondBtn.onclick = () => {
    pondPopup.classList.remove("pond-sidebar");
    pondPopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
};

sidebarTree1.onclick = () => {
    tree1.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarTree1.innerHTML = "&#10006;";
    sidebarTree1.style.fontSize = "8rem";
};
sidebarTree2.onclick = () => {
    tree2.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarTree2.innerHTML = "&#10006;";
    sidebarTree2.style.fontSize = "8rem";
};
sidebarTree3.onclick = () => {
    tree3.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarTree3.innerHTML = "&#10006;";
    sidebarTree3.style.fontSize = "8rem";
};

sidebarRock1.onclick = () => {
    rock1.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarRock1.innerHTML = "&#10006;";
    sidebarRock1.style.fontSize = "8rem";
};
sidebarRock2.onclick = () => {
    rock2.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarRock2.innerHTML = "&#10006;";
    sidebarRock2.style.fontSize = "8rem";
};
sidebarRock3.onclick = () => {
    rock3.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarRock3.innerHTML = "&#10006;";
    sidebarRock3.style.fontSize = "8rem";
};

sidebarPond1.onclick = () => {
    pond1.classList.remove("hide");
    sidebar.style.display = "";
    pondPopup.classList.add("pond-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarPond1.innerHTML = "&#10006;";
    sidebarPond1.style.fontSize = "8rem";
};
sidebarPond2.onclick = () => {
    pond2.classList.remove("hide");
    sidebar.style.display = "";
    pondPopup.classList.add("pond-sidebar");
    sidebar.classList.add("slidein-from-left");
    sidebarPond2.innerHTML = "&#10006;";
    sidebarPond2.style.fontSize = "8rem";
};

endBtn.onclick = () => {
    hintGlow(countGlow, hintBtnGlow);
    mapOverlay.classList.remove("hide");
    headZookeeper.classList.remove("hide");
    endBubble.classList.remove("hide");
    hintBtn.disabled = true;
    hintBtnGlow.classList.remove("glow");
    goedIngericht.play();

    goedIngericht.onended = () => {
        endBubbleBtn.style.display = "flex";
        herhaalEnd.style.display = "block";
    }
};

const naarPad = () => {
    window.location.href =  "./dierentuinpad.html";
}

// function endTalk(){
//     countEnd = 0;
// }

endSpeechBubbleDierentuin.onclick = () =>{
    countEnd++;
    mapOverlay.classList.add("hide");
    headZookeeper.classList.add("hide");
    endBubble.classList.add("hide");
    naarPad();
};

endSpeechBubbleNatuur.onclick = () =>{
    countEnd++;
    mapOverlay.classList.add("hide");
    headZookeeper.classList.add("hide");
    endBubble.classList.add("hide");
    naarPad();
};

endBubbleBtn.onclick = () => {
    switch (countEnd) {
        case 0: 
            endBubbleBtn.style.display = "none";
            tekst = 'Voordat we verder gaan heb ik een vraag voor jou.';
            vraag.play();

            vraag.onended = () => {
                endBubbleBtn.style.display = "flex";
                herhaalEnd.style.display = "block";
            }
            countEnd++;
            break;
        case 1: 
            endBubbleBtn.style.display = "none";
            tekst = 'Veel dieren hier komen niet voor in Nederland, maar we kunnen ze zien dankzij dierentuinen.';
            veelDieren.play();

            veelDieren.onended = () => {
                endBubbleBtn.style.display = "flex";
                herhaalEnd.style.display = "block";
            }
            countEnd++;
            break;
        case 2: 
            endBubbleBtn.style.display = "none";
            tekst = 'Alleen in dierentuinen hebben dieren minder vrije ruimte dan als ze vrij zijn.';
            vrijeRuimte.play();

            vrijeRuimte.onended = () => {
                endBubbleBtn.style.display = "flex";
                herhaalEnd.style.display = "block";
            }
            countEnd++;
            break;
        case 3: 
            document.getElementById("js--speech-bubble-div").classList.add("hide-important");
            tekst = 'Vind je het goed dat de dierentuinen er zijn? Kies dan ???Dierentuin???. <br>Of wil je liever dat alle dieren los in de natuur lopen? Kies dan ???Natuur???.';
            keuze.play();

            keuze.onended = () => {
                document.getElementById("js--speech-bubble-div-2").classList.remove("hide-important");
                herhaalEnd.style.display = "block";
            }
            countEnd++;
            break;
    }
    herhaalEnd.style.display = "none";
    endSpeechBubble_p.innerHTML = tekst;
};
