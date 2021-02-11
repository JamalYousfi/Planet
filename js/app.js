function startsound() {
    var soundPlayer = document.getElementById("sg");
    soundPlayer.play();
}

function stopsound() {
    var soundPlayer = document.getElementById("sg");
    soundPlayer.pause();
    soundPlayer.currentTime = 0;
}

function init() {
    var sf = document.getElementById("fix");
    sf.addEventListener("mouseover", startsound);

    sf.addEventListener("mouseleave", stopsound);
}

document.addEventListener('DOMContentLoaded', init);