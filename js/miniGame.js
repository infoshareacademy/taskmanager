/**
 * Created by ceomarek on 01.10.15.
 */

$(document).ready(function() {

    $('#miniGameMask').hide();

    function play() {

        var licznik = 0;
        var pierwszeUruchomienie = true;
        var counter = 0;
        $('#stopInterval').off('click').click(function () {
            clearInterval(intervalHandler);
            $('.postit').hide();
            $('#miniGameMask').hide();
            alert('Trudno, czas to pieniądz. Jednak i tak Twój wynik to: ' + counter);
            licznik = 0;
            counter = 0;
            document.getElementById('postItCount').innerHTML = counter;
        });

        var intervalHandler = setInterval(function () {
            if (licznik == 0 && pierwszeUruchomienie !== true) {
                clearInterval(intervalHandler);
                alert("Brawo! Twój wynik to: " + counter);
                $('#miniGameMask').hide();
                return;
            }
            pierwszeUruchomienie = false;
            if (licznik < 20) {
                var x = (Math.random() * 600);
                var y = (Math.random() * 800);
                licznik++;
                counter++;
                document.getElementById('postItCount').innerHTML = counter;
                $('<div/>', {
                    class: 'postit'
                }).appendTo('body').css({"top": x + "px", "left": y + "px"}).click(function () {
                    $(this).hide();
                    licznik--;
                });


            }
        }, 1000);
    }




    $('#miniGameStart').click(function () {
        $('#miniGameMask').show();
        play();
        $('#miniGameMask').css("zIndex", "300");
        setTimeout(function(){
            $('#miniGameMask').css("zIndex","250");
        },5000);
        var x = $("#countdown");
        setTimeout(function(){ x.text("3") }, 1000);
        setTimeout(function(){ x.text("2") }, 2000);
        setTimeout(function(){ x.text("1") }, 3000);
        setTimeout(function(){ x.text("Start") }, 4000);
        setTimeout(function(){ x.text(" ") }, 5000);
    });
});





