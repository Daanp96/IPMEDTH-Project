import {dragDrop, dragDropMap} from "./functions.js";

const slide = document.getElementsByClassName("drag");

for (let i = 0; i < slide.length; i++) {

    dragDropMap(slide[i], '240px');
}
