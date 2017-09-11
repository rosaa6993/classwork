submit.onClick = function () {
var submit = 
    document.getElementByID("submit");
var name =
    document.getElementById("name");
var email =
    document.getElementById("email");
var borough =
    document.getElementById("borough");
    var message= document.getElementById("message");
    message.innerText = "Hello" + name.value + " from" + borough.value + ", welcome to my site!";
};