let elem = document.documentElement;

function fullscreen(){
    document.getElementById("fullscreenDiv").style.visibility = "hidden";
    elem.requestFullscreen();
    elem.webkitRequestFullscreen();
    elem.msRequestFullscreen();
    alert("h")
}
