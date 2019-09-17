function openSlideMenu(){
    document.getElementById('menu').style.transitionDelay = "0s";
    document.getElementById('menu').style.width ="250px";
    document.getElementById('menu').style.transitionDelay = "0s";
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