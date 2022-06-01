const fish = document.getElementById("js--fish");
const monkey = document.getElementById("js--monkey");
const pinguin = document.getElementById("js--pinguin");

let x = 0;
// let progress;

if(document.URL.includes("dierentuinpad.html") ){
    x = localStorage.getItem("progress");
    x = parseInt(x);
    console.log(x);

    switch (x) {
        case 1:
            fish.classList.remove("dierentuinpad__element");
            monkey.classList.add("dierentuinpad__element");
            break;
        case 2:
            monkey.classList.remove("dierentuinpad__element");
            fish.classList.remove("dierentuinpad__element");
            pinguin.classList.add("dierentuinpad__element");
            break;

    }
}


fish.onclick = (e) => {
    x = 1;
    // progress = x;
    localStorage.setItem("progress", x);
    startRekensomPuzzel()
    e.preventDefault();
}
monkey.onclick = (e) => {
    x = 2;
    // progress = x;
    localStorage.setItem("progress", x);
    startRekensomPuzzel()
    e.preventDefault();
}
pinguin.onclick = (e) => {
    x = 3;
    // progress = x;
    localStorage.setItem("progress", x);
    startRekensomPuzzel()
    e.preventDefault();
}

function startRekensomPuzzel(){
    window.location.href="rekensom.html";  
};