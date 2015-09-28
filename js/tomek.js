var introPic = document.getElementById('introRightBox');
//zajawkapr.addEventListener('click', changePic);

function changePic() {
    if (introPic.className == "introPic-2") {
        introPic.className = "introPic-1";
    }
    else {
        introPic.className = "introPic-2";

    }
}


setInterval(changePic,1500);

$(window).scroll(function () {
    var imageOffset = $(introPic).offset().top - (window.innerHeight - introPic.clientHeight)/2;
    var scroll = $(window).scrollTop();
    introPic.style.backgroundPositionY= (imageOffset - scroll)/2 + 'px';
});