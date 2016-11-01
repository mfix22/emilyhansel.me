$(function() {
  $('.menu-button').on('mouseover click', function() {
    $('.menu-item.active').removeClass('active');
    $(this).parent().addClass('active')
  });
});

// animation does not work in Firefox
if (!sessionStorage.seen && (navigator.userAgent.toLowerCase().indexOf('firefox') <= -1)) {
  $('.dancing-image').addClass('dance');
  $('.leftImage').addClass('fadeInLate');
  $('.body-container').addClass('menu-fade-in');
} else {
  delete sessionStorage.seen;
}
