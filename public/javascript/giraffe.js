const introBtn = document.getElementById("js--intro-btn");
const sectionIntro = document.getElementById("js--article-intro");
const sectionEnclosure = document.getElementById("js--article-enclosure");

const sidebar = document.getElementById("js--sidebar");
const treePopup = document.getElementById("js--tree-popup");

const treeBtn = document.getElementById("js--tree-button");

introBtn.onclick = () => {
    sectionIntro.style.display = "none";
    sectionEnclosure.style.display = "block";
};

treeBtn.onclick = () => {
    treePopup.classList.remove("tree");
    treePopup.classList.add("slidein-from-left");
    sidebar.style.display = "none";
}