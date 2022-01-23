$(document).ready(function () {
    let first=$("#first");
    let second=$("#second");
    let third=$("#third");

    function average(num1,num2,num3) {
        let sum=0;
        sum=(num1.val()+num2.val()+num3.val())/3;
        if(sum>=10){
            $(`h1`).append(`<h4>The average is :${sum}</h4>`).css("color","green");
        }
        else if(sum<10){
            $(`h1`).append(`<h4>The average is :${sum}</h4>`).css("color","red");
        }
    }
    $("button").on("click",function() {
        average(first,second,third)
    })
})