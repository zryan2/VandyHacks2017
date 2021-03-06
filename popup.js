

$(document).ready(function () {
    
    var saved_option = localStorage["save_option"];
    if (saved_option == 'off'){
        var isOn = true;
        $("#onOff").text("Turn On");
    }else{
        var isOn = false    ;
        $("#onOff").text("Turn Off");
    }

    
    $("#makeMeme").click(function () {
        // Communicate with Background.js
        var port = chrome.extension.connect({
            name: "Memeify "
        });
            port.postMessage("memeify");
            port.onMessage.addListener(function (msg) {
        });
    });
    
    // Click Turn on/off switch
    $("#onOff").click(function () {
        // Change button text on and off.
        // Calls background.js with specific messages
        if (!isOn) {
            $(this).text('Turn Off');
            isOn = true;
            $("#onOffLabel").text("ON").css('color', 'green');
            localStorage["save_option"] = "on";
            var port = chrome.extension.connect({
               name: "Meme On" 
            });
            port.postMessage("memeOn");
            port.onMessage.addListener(function (msg) {
            });
        } else {
            $(this).text('Turn On');
            $("#onOffLabel").text("OFF").css('color', 'red');
            isOn = false;
            localStorage["save_option"] = "off";
            var port = chrome.extension.connect({
                name: "Meme Off"
            });
            port.postMessage("memeOff");
            port.onMessage.addListener(function(msg) {
            });
        }
    });
});

