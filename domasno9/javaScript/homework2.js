$(document).ready(function () {
    let text=$("#one");
    let color=$("#two");

    function newHeader(newText,newColor) {
       $(`h3`).append(`<h1>${newText.val()}</h1>`).css("color",`${newColor.val()}`)
        if(text.val()==""){
            $("h3").text("You dont input text ");
        }
    }

    $("button").on("click",function () {
        newHeader(text,color)
        
    })
})