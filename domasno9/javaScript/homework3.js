$(document).ready(function() {
    let myButton=$("#myButton");
   myButton.click(function() {
       $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        success: function (result) { //result is the data coming from the server
            for (let user of result) {
                let myDiv=$("#one");
                myDiv.append(`<h1>The id is : ${user.id}</h1>`);
                myDiv.append(`<h3>The title is : ${user.title}</h3>`);
                console.log(user.id);
                console.log(user.title);
                if(user.completed==true){
                    myDiv.append(`<h6>This is complete : ${user.completed}</h6>`);
                    console.log("This is complete");
                }
                else if(user.completed==false){
                    myDiv.append(`<h6>This is NOT complete : ${user.completed}</h6>`);
                    console.log("This is NOT complete");
                }
            }

        },
        error: function (error) {
        console.log(error);
        }
       })
   })

})