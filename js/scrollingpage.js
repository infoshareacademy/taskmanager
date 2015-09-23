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
    if ($(this).scrollTop() > 550) {
        imageAnimation();
    }
});


var imageAnimation = function() {
    $('.image_text').animate({
            opacity: 1
        }, 'slow'
    );


}
