import {dragDrop, dragDropMap} from "./functions.js";

const slide = document.getElementsByClassName("drag");
const map = document.getElementsByClassName("droppable");

for (let i = 0; i < slide.length; i++) {

    dragDropMap(slide[i], '240px', map);

    // if(sources == map_sources) {
    //     console.log("yes");
    // }
}
