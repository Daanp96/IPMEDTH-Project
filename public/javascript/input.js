import {dragDrop, dragDropMap, modalView} from "./functions.js";

const modal_view = document.getElementById("js--modal_view");
const modal_title = document.getElementById("js--modal_title");
const modal_text = document.getElementById("js--modal_text");
const modal_button = document.getElementById("js--modal_button");

modalView(modal_view, modal_title, modal_text, modal_button, {
    title_content: "Dit is een title",
    text_content: "Dit is wat tekst",
    button_content: "Dit is button shit"
});
