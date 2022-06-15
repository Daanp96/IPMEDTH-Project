import {dragDropGiraffe} from "./functions.js";

const introBtn = document.getElementById("js--intro-btn");
const articleIntro = document.getElementById("js--article-intro");
const articleEnclosure = document.getElementById("js--article-enclosure");
// const enclosureField = document.getElementById("js--enclosure-field");

//verschillende sidebars
const sidebar = document.getElementById("js--sidebar");
const treePopup = document.getElementById("js--tree-popup");

//buttons van begin sidebar
const treeBtn = document.getElementById("js--tree-button");

//buttons sidebar tree
const sidebarTree1 = document.getElementById("js--sidebar-tree-1");

//objecten
const tree1 = document.getElementById("js--tree-1");

dragDropGiraffe(tree1);

introBtn.onclick = () => {
    articleIntro.style.display = "none";
    articleEnclosure.style.display = "block";
};

treeBtn.onclick = () => {
    treePopup.classList.remove("tree-sidebar");
    treePopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
}

sidebarTree1.onclick = () => {
    tree1.classList.remove("hide");
    sidebar.style.display = "";
    treePopup.classList.add("tree-sidebar");
    sidebar.classList.add("slidein-from-left");
};