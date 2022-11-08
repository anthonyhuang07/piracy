let elem = document.documentElement;

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
}

function popup(){
    alert("IUHFWIURGHIUGHEUF")
}

document.body.onclick = function(){
    elem.requestFullscreen();
    elem.webkitRequestFullscreen();
    wait(5000);
    popup();
}