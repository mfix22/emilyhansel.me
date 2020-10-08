$(function () {
  $('img').click(function () {
    $('.full-screen-caption').html($(this).data('caption'))
  })

  /**
   * Relayout masonry after every image load
   *
   * IDEA: use imagesloaded as demonstrated:
   *  - https://masonry.desandro.com/layout.html
   *  - https://imagesloaded.desandro.com/
   */
  const grid = $('.grid')
  grid.find('img').each(() => {
    $(this).on('load', () => {
      grid.masonry('layout')
    })
  })
})
