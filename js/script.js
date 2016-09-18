$(document).ready(function (){
    $('.show_menu').click(function(){
       $('.menu_overlay').show();
       $('.head_menu').show();
    });
    $('.menu_overlay').click(function(){
       $('.menu_overlay').hide();
       $('.head_menu').hide();
    });
    $(window).resize(function(){
        if($(this).width() > 753) {
            $('.head_menu').show();
        } else {
            $('.head_menu').hide();
        }
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1
    });
});