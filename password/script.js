submit.onclick = function() {
    var keyword = document.getElementById("keyword").value;
    var length = document.getElementById("length").value;
    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var suffix="";
    var str="";
    
   
    for (var i = 0; i<= keyword.length-1; i++){
        if (i%2 == 0){
           str += keyword.charAt(i).toLowerCase(); // change odd numbers characters of keyword to upper case
        
        }
        else {
           str +=  keyword.charAt(i).toUpperCase(); // change even numbers characters of keyword to lower case
           
        }
    }
    for (var i = 0; i<= Number(length) - keyword.length-1; i++){
        var a = Math.floor(Math.random() * chars.length);
        suffix += chars[a];
    }
    password.innerText =str + suffix;
};