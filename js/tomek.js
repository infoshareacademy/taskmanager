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

$(function () {
    //$('#lightboxRegister').hide();


    $('#newsletter').on('submit',function (event) {
        var $form = $(this);
        // get all the inputs into an array.
        var $inputs = $form.find(':input');

        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        var $newsletterBox = $('#submit-status');

        $.post('/taskmanager/pp.php', values,function (message) {
           if (!message.match('Error: ')){
               $('#newsletter').hide();
           }
            $newsletterBox.text(message);

        });
        $newsletterBox.text('Checking...');


        return false;
    });
});