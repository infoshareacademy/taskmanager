/**
 * Created by ceomarek on 01.10.15.
 */

$(document).ready(function() {

    $('#miniGameMask').hide();

    function play() {

        var licznik = 0;
        var pierwszeUruchomienie = true;
        var counter = 0;
        $('#stopInterval').click(function () {
            clearInterval(intervalHandler);
            $('#endGame').hide();
            $('.postit').hide();
            $('#miniGameMask').hide();
            alert('Trudno, czas to pieniądz. Jednak i tak Twój wynik to: ' + counter);
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
        
    });
});





