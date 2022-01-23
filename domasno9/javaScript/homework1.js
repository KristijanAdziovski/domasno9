$(document).ready(function () {
   let first =$("#input");
   
   function fName(name) {
       $(`div`).append(`<p> Hello there ${name.val()} !</p>`);
   }

   $("button").on("click",function () {
       fName(first)
   })
});