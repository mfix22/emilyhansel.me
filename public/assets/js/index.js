$(function () {
  $('.contact').click(function (e) {
    e.stopPropagation()
    e.preventDefault()
    $('.mobile-nav').removeClass('active')
    $('.nav-opener')
      .toggleClass('active')
      .children()
      .toggleClass('ion-navicon')
      .addClass('ion-navicon')
    $('.contact-form').fadeIn(300)
  })
  $('.contact-form > span').click(function (e) {
    $('.contact-form').fadeOut(300)
    e.stopPropagation()
  })
  // $('.contact-form').click(function (e) {
  //   e.stopPropagation()
  //   return false
  // })
  // $('body').click(function () {
  //   $('.contact-form').fadeOut(300)
  // })
  $(document).keyup(function (e) {
    if (e.keyCode === 27) $('.contact-form').fadeOut(200)
  })

  $('.nav-opener').click(function () {
    $(this).toggleClass('active').children().toggleClass('ion-navicon').addClass('ion-close')
    $('.mobile-nav').toggleClass('active')
  })
})
