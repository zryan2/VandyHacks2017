//alert("Lets make some memes!")
var meme_num = Math.floor((Math.random() * 80) + 1);
var meme = "memes/%20(" + meme_num + ").jpg";

 var button = getElementById("makeMeme");

 function f1() {
    alert("f1 called");
    //form validation that recalls the page showing with supplied inputs.    
}
window.onload = function() {
    document.getElementById("makeMeme").onclick = function fun() {
        alert("hello");
        f1();
        //validation code to see State field is mandatory.  
    }
}

//alert(meme);
function img_find() {
    "use strict";
    
    $(document).delay(3000).ready(function () {
        var count = $('body img').length;
    
        for (var i = 0; i <= count; i++){
            var img_elem = $('img').get(i);
            var meme_num = Math.floor((Math.random() * 86) + 1);
            var meme = "memes/%20(" + meme_num + ").jpg";
            $(img_elem).attr('src', chrome.extension.getURL(meme))
        }
    });

}
img_find();




