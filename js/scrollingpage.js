$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        imageanmation();
    }

    if($(this).scrollTop() > 600) {
        imageanmation2();
    }
});


//var textanimation = function () {
//    $('.image_text , .image_text_lewy').each(
//        function () {
//            $(this).delay(500).animate({
//                opacity: 1,
//                height: 'auto',
//                width: '500'
//            }, 2000);
//        }
//    );
//};


var imageanmation = function() {
    $('.image').delay(500).animate({
        opacity: 1
    }, '400');

    $('.image_text').delay(500).animate({
        opacity: 1
    }, '2000')

};

var imageanmation2 = function() {
    $('.image , .image_text_lewy').delay(500).animate({
        opacity: 1
    }, 'slow')};
