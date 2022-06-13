const ijskraam = document.getElementById("js--ijs-kraam");
const overlay = document.getElementById("js--overlay");
const ijsjes = document.getElementsByClassName("ijs");

ijskraam.onclick = (e) => {
    overlay.style.opacity =  "1";
    overlay.style.zIndex = "1";
    ijskraam.classList.remove("ijs_animatie");
    for (let ijs of ijsjes) {
        ijs.style.opacity = "1";
        ijs.style.zIndex = "5";
    }
}