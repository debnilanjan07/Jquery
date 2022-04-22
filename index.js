//question 1- create two buttons one hide and one to show a paragarph using Jquery

$("#show").click(()=>{
    $("#paragraph").show();
});
$("#hide").click(()=>{
    $("#paragraph").hide();
});

//question 2- change the heading of the page using ajax 

$("#changehead").click(()=>{
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type: "GET",
        success:(data)=>{
            document.getElementById("heading").innerText=data.title;
        }
    })
});