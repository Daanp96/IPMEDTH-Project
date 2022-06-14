const ijsbalie = document.getElementById("js--balie");
const overlay = document.getElementById("js--overlay");
const ijsjes = document.getElementsByClassName("ijs");

ijsbalie.onclick = (e) => {
    overlay.style.opacity =  "1";
    overlay.style.zIndex = "1";
    ijsbalie.classList.remove("ijs_animatie");
    for (let ijs of ijsjes) {
        ijs.style.opacity = "1";
        ijs.style.zIndex = "5";
    }
}