$(function() {
  $('.contact').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.mobile-nav').removeClass('active');
    $('.nav-opener').toggleClass('active').children().toggleClass('ion-navicon').addClass('ion-navicon');
    $('.contact-form').fadeIn(300);
  });
  $('form').click(function(e) {
    e.stopPropagation();
    return false;
  });
  $('body').click(function() {
    $('.contact-form').fadeOut(300);
  });

  $('.nav-opener').click(function() {
    $(this).toggleClass('active').children().toggleClass('ion-navicon').addClass('ion-close');
    $('.mobile-nav').toggleClass('active');
  });
})
