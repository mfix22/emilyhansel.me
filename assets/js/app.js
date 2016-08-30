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

  $('.menu-button').on('mouseover click', function() {
    $('.menu-item.active').removeClass('active');
    $(this).parent().addClass('active')
  });

  $('.nav-opener').click(function() {
    $(this).toggleClass('active').children().toggleClass('ion-navicon').addClass('ion-close');
    $('.mobile-nav').toggleClass('active');
  })
});

// if (!sessionStorage.seen) {
//   $('.dancing-image').addClass('dance');
//   $('.leftImage').addClass('fadeInLate');
//   $('.body-container').addClass('menu-fade-in');
// } else {
//   delete sessionStorage.seen;
// }
