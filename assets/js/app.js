$(function() {
  $('.menu-button').on('mouseover click', function() {
    $('.menu-item.active').removeClass('active');
    $(this).parent().addClass('active')
  });
});

if (!sessionStorage.seen) {
  $('.dancing-image').addClass('dance');
  $('.leftImage').addClass('fadeInLate');
  $('.body-container').addClass('menu-fade-in');
} else {
  delete sessionStorage.seen;
}
