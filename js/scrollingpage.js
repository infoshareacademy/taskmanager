////if ($(window).width() <= 549){
////    if($(window).scrollTop() > 689){
////        imageAnimation();
////    }
////} else if ($(window).width() > 549 && $(window).width() <= 991) {
////    if ($(window).scrollTop() > 689) {
////        imageAnimation();
////    }
////} else {
////    if ($(window).scrollTop() > 583) {
////        imageAnimation();
////    }
////}
//
//$(window).scroll(function() {
//   if ($(document).scrollTop() >583) {
//       imageAnimation();
//   }
//})
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        imageAnimation();
    }
});


var imageAnimation = function() {

    $('.image_text').delay(1000).animate({
            opacity: 1
        }, 'slow'
    );


}
