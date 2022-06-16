import {dragDropGiraffe} from "./functions.js";

let dragObjects = 0;

const introBtn = document.getElementById("js--intro-btn");
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



// dragDropGiraffe(tree1, tree2);
const array = [tree1, tree2, tree3, rock1, rock2, rock3, pond1, pond2];
for (let i = 0; i < array.length; i++) {
    dragDropGiraffe(array[i]);
}

// setInterval(() => {
//     console.log(dragObjects);
//     checkObjecten();
// }, 1000);

introBtn.onclick = () => {
    articleIntro.style.display = "none";
    articleEnclosure.style.display = "block";
};

treeBtn.onclick = () => {
    treePopup.classList.remove("tree-sidebar");
    treePopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
}
rockBtn.onclick = () => {
    rockPopup.classList.remove("rock-sidebar");
    rockPopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
}
pondBtn.onclick = () => {
    pondPopup.classList.remove("pond-sidebar");
    pondPopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
}

sidebarTree1.onclick = () => {
    tree1.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();

};
sidebarTree2.onclick = () => {
    tree2.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();

};
sidebarTree3.onclick = () => {
    tree3.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();

};

sidebarRock1.onclick = () => {
    rock1.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();

};
sidebarRock2.onclick = () => {
    rock2.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();

};
sidebarRock3.onclick = () => {
    rock3.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();

};

sidebarPond1.onclick = () => {
    pond1.classList.remove("hide");
    sidebar.style.display = "";
    pondPopup.classList.add("pond-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();
    
};
sidebarPond2.onclick = () => {
    pond2.classList.remove("hide");
    sidebar.style.display = "";
    pondPopup.classList.add("pond-sidebar");
    sidebar.classList.add("slidein-from-left");
    dragObjects++;
    checkObjecten();
    
};

const checkObjecten = () => {
    console.log(dragObjects);
    if (dragObjects == 5) {    
        endBtn.style.display = 'block';
    }
}
