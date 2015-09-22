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
    console.log(12);
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
        $('#lightbox').hide(function(){
            $(this).animate({
            },2000)
        });
    });
});

$('.registration').hide();
$('#lightbox').hide();

$(document).ready(function(){
    $('#zapisz_header').click(function(){
        $('.registration').show(function(){
            $(this).animate({
            },2000)
        });
        $('#lightbox').show(function(){
            $(this).animate({
            },2000)
        });
    });
});

