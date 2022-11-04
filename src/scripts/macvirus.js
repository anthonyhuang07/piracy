let elem = document.documentElement;

document.body.onclick = function(){
    elem.requestFullscreen();
    elem.webkitRequestFullscreen();
    elem.msRequestFullscreen();
}