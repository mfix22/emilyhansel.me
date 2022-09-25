$(function () {
  $('img').click(function () {
    $('.full-screen-caption').html($(this).data('caption'))
  })

  /**
   * Relayout masonry after every image load
   */
  const grid = $('.grid').masonry({
    initlayout: false,
    itemSelector: '.grid-item',
    columnWidth: 316,
    fitWidth: true,
  })
  grid.imagesLoaded().progress(function () {
    grid.masonry('layout')
  })
})
