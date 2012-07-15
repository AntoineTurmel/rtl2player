// Player JS
var playing = false
var nectaaudio = new Audio("http://ais.rtl.fr:80/rtl2-1-48-128.ogg");

function playradio() {
		nectaaudio.load();
		nectaaudio.play();
    playing = true;
    document.getElementById('pause').style.visibility='visible';
    document.getElementById('pause').style.display='block';
    document.getElementById('play').style.visibility='hidden';
    document.getElementById('play').style.display='none';

    if (navigator.mozNotification) {
      document.body.classList.add("notification");
      notification = navigator.mozNotification.createNotification("RTL2 Player", "Lecture en cours", "images/favicon.png");
    }    
}

function pauseradio() {
    nectaaudio.pause();
    playing = false;
    document.getElementById('play').style.visibility='visible';
    document.getElementById('play').style.display='block';
    document.getElementById('pause').style.visibility='hidden';
    document.getElementById('pause').style.display='none';
}
