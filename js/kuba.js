/**
 * Created by jakubmatyka on 15.09.15.
 */
function formvalidation(){
    var adres = document.getElementById("email");
    if(adres.value.indexOf("@") < 0) {
        alert("Brak małpy!");
    }
}

$(document).ready(function () {
    $('.thank_you').hide();
    $('.thank_you').show();

    //$('#zapisz_sie').click(clickfcn());
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

$(function() {
    var scrollToAnchor = function( id ) {
       var elem = $(id);
        $('html, body').animate({
            scrollTop: elem.offset().top
        }, 1000 );
    };

    $("a").click(function( event ) {
        if ( $(this).attr("href").match("#") ) {
            event.preventDefault();
            var href = $(this).attr('href');
            scrollToAnchor( href );
        }
    });
});


// Cache selectors
var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
});
