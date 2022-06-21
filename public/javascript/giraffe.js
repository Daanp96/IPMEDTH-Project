import {dragDropGiraffe} from "./functions.js";

const speakOn2 = document.getElementById("js--speak-on-2");
const speakOff2 = document.getElementById("js--speak-off-2");
const hintBtn = document.getElementById("js--hint");

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

let countText = 0;
let countHint = 0;
let countEnd = 0;
let tekst = '';
let image = '';

speakOn2.onclick = () =>{
    speakOff2.style.visibility = "visible";
    speakOn2.style.visibility = "hidden";
};

speakOff2.onclick = () =>{
    speakOff2.style.visibility = "hidden";
    speakOn2.style.visibility = "visible";
};


switch (countText) {
    case 0: 
        mapOverlay.classList.remove("hide");
        headZookeeper.classList.remove("hide");
        hintBubble.classList.remove("hide");
        hintSpeechBubble_p.innerHTML = 'Kan jij het verblijf leuk maken voor de giraffen? Bovenaan zie je een lijstje wat de dieren nodig hebben.';
        hintBubbleBtn.onclick = () => {
            mapOverlay.classList.add("hide");
            headZookeeper.classList.add("hide");
            hintBubble.classList.add("hide");
            countText++;
        }
        break;
}


hintBtn.onclick = () => {
    console.log(countHint);
    switch (countHint) {
        case 0: 
            mapOverlay.classList.remove("hide");
            headZookeeper.classList.remove("hide");
            hintBubble.classList.remove("hide");
            tekst = 'Klik op de gekleurde vlakken.';
            hintBubbleBtn.onclick = () => {
                mapOverlay.classList.add("hide");
                headZookeeper.classList.add("hide");
                hintBubble.classList.add("hide");
                countHint++;
            }
            break;
        case 1: 
            mapOverlay.classList.remove("hide");
            headZookeeper.classList.remove("hide");
            hintBubble.classList.remove("hide");
            tekst = 'Sleep de sticker naar een mooie plek.';
            hintBubbleBtn.onclick = () => {
                mapOverlay.classList.add("hide");
                headZookeeper.classList.add("hide");
                hintBubble.classList.add("hide");
                countHint++;
            }
            break;
        case 2:
            mapOverlay.classList.add("hide");
            headZookeeper.classList.add("hide");
            hintBubble.classList.add("hide");
            break;
    }

    hintSpeechBubble_p.innerHTML = tekst;
};

// dragDropGiraffe(tree1, tree2);
const array = [tree1, tree2, tree3, rock1, rock2, rock3, pond1, pond2];
for (let i = 0; i < array.length; i++) {
    dragDropGiraffe(array[i], endBtn);
};

// praat wolk
startOKBtn.onclick = () => {
    articleIntro.style.display = "none";
    articleEnclosure.style.display = "grid";
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
};
sidebarTree2.onclick = () => {
    tree2.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
};
sidebarTree3.onclick = () => {
    tree3.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
};

sidebarRock1.onclick = () => {
    rock1.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
};
sidebarRock2.onclick = () => {
    rock2.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
};
sidebarRock3.onclick = () => {
    rock3.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
};

sidebarPond1.onclick = () => {
    pond1.classList.remove("hide");
    sidebar.style.display = "";
    pondPopup.classList.add("pond-sidebar");
    sidebar.classList.add("slidein-from-left");
};
sidebarPond2.onclick = () => {
    pond2.classList.remove("hide");
    sidebar.style.display = "";
    pondPopup.classList.add("pond-sidebar");
    sidebar.classList.add("slidein-from-left");
};

endBtn.onclick = () => {
    
    // endTalk();
    // countEnd = 1;
    console.log(countEnd);
    mapOverlay.classList.remove("hide");
    headZookeeper.classList.remove("hide");
    endBubble.classList.remove("hide");
};

// function endTalk(){
//     countEnd = 0;
// }

endSpeechBubbleDierentuin.onclick = () =>{
    console.log(countEnd);
    countEnd++;
    mapOverlay.classList.add("hide");
    headZookeeper.classList.add("hide");
    endBubble.classList.add("hide");
};

endSpeechBubbleNatuur.onclick = () =>{
    console.log(countEnd);
    countEnd++;
    mapOverlay.classList.add("hide");
    headZookeeper.classList.add("hide");
    endBubble.classList.add("hide");
};

endBubbleBtn.onclick = () => {
    console.log(countEnd);
    switch (countEnd) {
        case 0: 
            tekst = 'Voordat we verder gaan heb ik een vraag voor jou.';
            countEnd++;
            break;
        case 1: 
            tekst = 'Veel dieren hier komen niet voor in Nederland, maar we kunnen ze zien dankzij dierentuinen.';
            countEnd++;
            break;
        case 2: 
            tekst = 'Alleen in dierentuinen hebben de dieren minder vrije ruimte dan als ze vrij zijn.';
            countEnd++;
            break;
        case 3: 
            document.getElementById("js--speech-bubble-div").classList.add("hide-important");
            document.getElementById("js--speech-bubble-div-2").classList.remove("hide-important");
            tekst = 'Vind je het goed dat de dierentuinen er zijn? kies dan “dierentuin”. <br>Of wil je liever dat alle dieren los in de natuur lopen? kies dan “natuur”.';
            break;
    }
    endSpeechBubble_p.innerHTML = tekst;
};
