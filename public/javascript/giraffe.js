import {dragDropGiraffe} from "./functions.js";

const introBtn = document.getElementById("js--intro-btn");
const articleIntro = document.getElementById("js--article-intro");
const articleEnclosure = document.getElementById("js--article-enclosure");
// const enclosureField = document.getElementById("js--enclosure-field");

//verschillende sidebars
const sidebar = document.getElementById("js--sidebar");
const treePopup = document.getElementById("js--tree-popup");
const rockPopup = document.getElementById("js--rock-popup");

//buttons van begin sidebar
const treeBtn = document.getElementById("js--tree-button");
const rockBtn = document.getElementById("js--rock-button");

//buttons sidebar tree
const sidebarTree1 = document.getElementById("js--sidebar-tree-1");
const sidebarTree2 = document.getElementById("js--sidebar-tree-2");
const sidebarTree3 = document.getElementById("js--sidebar-tree-3");

//buttons sidebar rock
const sidebarrock1 = document.getElementById("js--sidebar-rock-1");
const sidebarrock2 = document.getElementById("js--sidebar-rock-2");
const sidebarrock3 = document.getElementById("js--sidebar-rock-3");

//objecten tree
const tree1 = document.getElementById("js--tree-1");
const tree2 = document.getElementById("js--tree-2");
const tree3 = document.getElementById("js--tree-3");

//objecten rock
const rock1 = document.getElementById("js--rock-1");
const rock2 = document.getElementById("js--rock-2");
const rock3 = document.getElementById("js--rock-3");


// dragDropGiraffe(tree1, tree2);
const array = [tree1, tree2, tree3, rock1, rock2, rock3];
for (let i = 0; i < array.length; i++) {
    dragDropGiraffe(array[i]);
}

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

sidebarrock1.onclick = () => {
    rock1.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
};
sidebarrock2.onclick = () => {
    rock2.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
};
sidebarrock3.onclick = () => {
    rock3.classList.remove("hide");
    sidebar.style.display = "";
    rockPopup.classList.add("rock-sidebar");
    sidebar.classList.add("slidein-from-left");
};