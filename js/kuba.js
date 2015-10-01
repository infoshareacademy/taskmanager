/**
 * Created by jakubmatyka on 15.09.15.
 */
function formvalidation(){
    var adres = document.getElementById("email");
    if(adres.value.indexOf("@") < 0) {
        alert("Brak małpy!");
    }
}

    function clickfcn(){
        //console.log(12);
        $('.thank_you').show();
        $('#newsletter').submit();
    }

$(document).ready(function () {
    $('.thank_you').hide();
    $('#zapisz_sie').click(clickfcn());
});

$(document).ready(function(){
    $('#icancel').click(function(){
        $('#formularz').hide(function(){
            $(this).animate({
            },2000)
        });
    });
});

$(document).ready(function(){
    $('#cancel').click(function(){
        $('.registration').hide(function(){
            $(this).animate({
            },2000)
        });
        $('#lightboxRegister').hide(function(){
            $(this).animate({
            },2000)
        });
    });
});

$('.registration').hide();
$('#lightboxRegister').hide();

$(document).ready(function(){
    $('#buttonHeader').click(function(){
        $('.registration').show(function(){
            $(this).animate({
            },2000)
        });
        $('#lightboxRegister').show(function(){
            $(this).animate({
            },2000)
        });
    });
});

/*funkcja do przewijania menu*/

$("#menu").find("a").click(function(){
    var NavId = $(this).attr("href");
    $("body").animate({scrollTop: $(NavId).offset().top}, "slow");
});
