import dragDrop from "./functions.js";

const slide = document.getElementsByClassName("drag")

for (let i = 0; i < slide.length; i++) {
    dragDrop(slide[i], '290px');
}
