function openSlideMenu(){
    document.getElementById('menu').style.transitionDelay = "0s";
    document.getElementById('menu').style.width ="250px";
    document.getElementById('bars').style.transitionDelay = "0s";
    document.getElementById('bars').style.opacity = "0";
    document.getElementById('button').style.opacity = "0.9";
    document.getElementById('button2').style.opacity = "0.9";
    document.getElementById('button3').style.opacity = "0.9";
    document.getElementById('button4').style.opacity = "0.9";
    document.getElementById('button5').style.opacity = "0.9";
}
function closeSlideMenu(){
    document.getElementById('menu').style.transitionDelay = "2s";
    document.getElementById('menu').style.width = "0px";
    document.getElementById('bars').style.transitionDelay = "2.5s";
    document.getElementById('bars').style.opacity = "1";
    document.getElementById('button').style.opacity = "0";
    document.getElementById('button2').style.opacity = "0";
    document.getElementById('button3').style.opacity = "0";
    document.getElementById('button4').style.opacity = "0";
    document.getElementById('button5').style.opacity = "0";
}

function background() {
    var images = ["zdj/1.jpg", "zdj/2.jpg", "zdj/3.jpg", "zdj/4.jpg", "zdj/5.jpg", "zdj/6.jpg", "zdj/7.jpg", "zdj/8.jpg"]
    var imgNumber = Math.floor(Math.random()*images.length +1);
    document.getElementsByClassName("background").style.backgroundImage = 'url('+images[imgNumber]+')';
}
window.onload = background();
