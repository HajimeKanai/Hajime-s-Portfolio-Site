// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery_ujs

$(function(){
    $('.top-img').css('display', 'none').fadeIn(2000);
    $('.text').hide().show(3000);

    var pagetop = $('.pagetop');

    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 1000);
        return false; // ←超重要：これがないとアニメーションが一度しか効かない
    });

    $('.perth02').one('mouseover', function(){
        $('#icon').css('display', 'none').slideDown(1000);
    });

    $('.bxslider').bxSlider({
        auto: true,
        pager: true,
    });
    
    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
      })
});

