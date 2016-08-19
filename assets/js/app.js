$(function() {
  $('#contact').click(function(e) {
    e.preventDefault();
    $('.contact-form').fadeIn(300);
  });
  $('form').click(function(e) {
    e.stopPropagation();
    return false;
  })
  $('.contact-form').click(function() {
    $('.contact-form').fadeOut(300);
  })
})
