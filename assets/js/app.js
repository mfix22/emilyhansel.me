$(function() {
  $('#contact').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('.contact-form').fadeIn(300);
  });
  $('form').click(function(e) {
    e.stopPropagation();
    return false;
  })
  $('body').click(function() {
    $('.contact-form').fadeOut(300);
  })
})
