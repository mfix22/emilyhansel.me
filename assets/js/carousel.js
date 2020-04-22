$(function () {
  $('img').click(function () {
    $('.full-screen-caption').html($(this).data('caption'))
  })
})
