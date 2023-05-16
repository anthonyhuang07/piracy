// if you're reading this, Ip loggers, microphone/camera permissions are not used harmfully. You can check the code for yourself.

let elem = document.documentElement;
let clickEnabled = true; // checks if you're able to click to start the process
let click2 = true; // checks if you're able to trigger the jumpscare

function getLocalStream() { //asks for vid and mic perms (does nothing)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
    }).catch((err) => {
        console.error(`ERROR GETTING LOCALSTREAM: ${err}`)
    });
}

window.onbeforeunload = function () { // asks before leaving page
    return "";
};

function ipLogger() { // DON'T WORRY, THIS WON'T BE SAVED, just a funny troll
    $.getJSON('https://ipapi.co/json/', function (data) {
        document.getElementById('ip').innerHTML = `Local Authorities have located you!<br><br>IP: ${data.ip}<br>Country: ${data.country_name}<br>State/Province: ${data.region}<br>Town/City: ${data.city}<br>Zip/Postal: ${data.postal}<br>Coordinates: ${data.latitude}, ${data.longitude}`;
    });
}

document.body.addEventListener('click', function (event) {
    if (!clickEnabled) return
    clickEnabled = false;
    alert("You will now be starting the call process. If you leave the site right now, data collected by GitHub, Inc. & Microsoft Corporation will be used for a Bruteforce SSH on your network. This will allow local authorities to collect your information and your location. DO NOT LEAVE THIS SITE.");
    document.body.style.cursor = 'none';
    let countdown = 25;
    // ongoing call counters (start when startCountdown() is called)
    let ongoing = 0;
    let ongoingm = 0;

    function startCountdown() { //the call countdown (7 sec: jumpscare, 15 sec: jumpscare 2, 22 sec: april fools text)
        if (ongoing === 60) {
            ongoing = 0;
            ongoingm++;
        } else if (ongoing === 9) { // adding this line marks my 444th github commit! I BETTER GET RID OF IT, THIS COMMENT SHOULD DO IT!
            document.getElementById('blood').style.visibility = 'visible';
        } else if (ongoing === 7) {
            if (!click2) return;
            document.getElementById('JUMPSCARE').innerHTML = `<img src="https://img.wattpad.com/4009de212dd674200c2f899cfcf4ccf2969b60e3/687474703a2f2f342e62702e626c6f6773706f742e636f6d2f2d7061747570314a6d6973302f557734483534476a5465492f41414141414141414259552f7832595a745752664655772f73313630302f6d617872657364656661756c742e6a7067?s=fit&h=360&w=360&q=80" width="500px" id="JUMPIMAGE"/>`;
            var audio = new Audio('/trollage/assets/audio/jump.mp3');
            audio.play();
            click2 = false;
        } else if (ongoing === 15) {
            document.getElementById('JUMPSCARE').innerHTML = `<img src="https://i.ytimg.com/vi/tdXgl8QtU-I/mqdefault.jpg" width="500px" id="JUMPIMAGE"/>`;
            var superLuigi = new Audio('/trollage/assets/audio/superLuigi.mp3');
            superLuigi.play();
        } else if (ongoing === 22) {
            document.getElementById('JUMPSCARE').innerHTML = `<h1 id="JUMPIMAGE" style="color: rgb(119, 7, 7);">Open the door please...</h1>`;
        }

        // replaces single digit numbers with double digits in the call timer
        switch (ongoing) {
            case 0:
                ongoing = "00"
                break;
            case 1:
                ongoing = "01"
                break;
            case 2:
                ongoing = "02"
                break;
            case 3:
                ongoing = "03"
                break;
            case 4:
                ongoing = "04"
                break;
            case 5:
                ongoing = "05"
                break;
            case 6:
                ongoing = "06"
                break;
            case 7:
                ongoing = "07"
                break;
            case 8:
                ongoing = "08"
                break;
            case 9:
                ongoing = "09"
                break;
        }

        document.getElementById('yourmom').innerHTML = `Connected. Please follow the instructions below.<br>Ongoing Call: ${ongoingm}:${ongoing}`;
        ongoing++
        setTimeout(startCountdown, 1000)
    }

    function reduceCountdown3() { //countdown no3 (access point found)
        if (countdown == 0) {
            startCountdown();
            document.getElementById("ip").innerHTML = ``
            return
        }
        countdown--;
        setTimeout(reduceCountdown3, 1000)
    }

    function reduceCountdown2() { //countdown no2 (bruteforce init)
        if (countdown == 0) {
            document.getElementById('yourmom').innerHTML = `Access Point Found. Connecting... Please wait for local authorities to pick up the line and follow the instructions below.`;
            countdown = 14;
            reduceCountdown3();
            return
        }
        countdown--;
        setTimeout(reduceCountdown2, 1000)
    }

    function reduceCountdown() { //countdown no1 (process start)
        if (countdown == 0) {
            document.getElementById('yourmom').innerHTML = `The connection tone has started. Initializing bruteforce...`;
            document.getElementById("ip").innerHTML = `<img src="https://i.stack.imgur.com/kOnzy.gif" width="25px"/>`

            countdown = 20;
            reduceCountdown2();
            return
        } else if (countdown == 20) {
            getLocalStream(); // activates camera/mic perms
        } else if (countdown == 17) {
            /*window.open("/trollage/assets/AmongUs.exe.vbs"); // downloads a vbscript file (if you open it, it's harmless anyways- feel free to use task manager to kill the process) */
        } else if (countdown == 15) {
            ipLogger();
        } else if (countdown == 5) {
            document.getElementById("ip").innerHTML = ""
        }
        countdown--;
        document.getElementById('yourmom').innerHTML = `The process has started. You have ${countdown} seconds until the connection tone starts.`;
        setTimeout(reduceCountdown, 1000)
    }

    reduceCountdown();
    // the background audio (Credit: Joey Perleoni for the nintendo anti-piracy screens)
    var audio = new Audio('/trollage/assets/audio/piracy.mp3');
    audio.play();
    // fullscreen requests
    elem.requestFullscreen();
    elem.webkitRequestFullscreen();
    elem.msRequestFullscreen();
});



