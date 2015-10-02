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

$(document).ready(function(){
    var parallaxImage = document.getElementById('parallaxBackground');
    


    $(window).scroll(function () {
        var imageOffset = $(parallaxImage).offset().top - (window.innerHeight - parallaxImage.clientHeight)/2;
        var scroll = $(window).scrollTop();
        parallaxImage.style.backgroundPositionY= -300 + (imageOffset - scroll)/4 + 'px';
    });

});