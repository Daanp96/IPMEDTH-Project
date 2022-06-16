const text = "olifant";

$(".textbox").on("focus blur", function(){
    $(".wrapper").toggleClass("focused");
});

$(".wrapper").click(function (e) {
    if (e.target == this) {
        let b = $(".textbox", this).focus();
        setEndOfContenteditable(b[0]);
    }
}).trigger("click");

$(".textbox").on("input", function(){
    let ipt = $(this).text().replace(/\u00A0/g, " ");
    //freakin NO-BREAK SPACE needs extra care
    if(text.indexOf(ipt) == 0){
        $(".gray").text(text.substring(ipt.length, text.length));
    }else{
        $(".gray").text("");
    }
}).trigger("input");


function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    if (document.createRange) {
        range = document.createRange();
        range.selectNodeContents(contentEditableElement);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(contentEditableElement);
        range.collapse(false);
        range.select();
    }
}