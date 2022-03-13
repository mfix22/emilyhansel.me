$(function () {
  $('.menu-item.active').removeClass('active')
  function handler() {
    $('.menu-item.active').removeClass('active')
    $(this).parent().addClass('active')
  }
  $('.menu-button').on('mouseover click', handler)
  $('.menu-button').on('focus', handler)
})

// animation does not work in Firefox
if (!sessionStorage.seen && navigator.userAgent.toLowerCase().indexOf('firefox') <= -1) {
  $('.dancing-image').addClass('dance')
  $('.leftImage').addClass('fadeInLate')
  $('.body-container').addClass('menu-fade-in')
} else {
  delete sessionStorage.seen
}
