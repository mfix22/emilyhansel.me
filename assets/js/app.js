$(function() {
  $('.contact').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.mobile-nav').removeClass('active');
    $('.contact-form').fadeIn(300);
  });
  $('form').click(function(e) {
    e.stopPropagation();
    return false;
  });
  $('body').click(function() {
    $('.contact-form').fadeOut(300);
  });

  $('.menu-button').hover(function() {
    $('.site-link.active').removeClass('active');
    $(this).siblings().find('.site-link').addClass('active')
  });

  $('.nav-opener').click(function() {
    $(this).toggleClass('active').children().toggleClass('ion-navicon').addClass('ion-close');
    $('.mobile-nav').toggleClass('active');
  })
});

if (!sessionStorage.seen) {
  $('.dancing-image').addClass('dance');
  $('.leftImage').addClass('fadeInLate');
  sessionStorage.seen = true;
}
