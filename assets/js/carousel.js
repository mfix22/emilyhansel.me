$(function() {
  $('.carousel').children().each(function(i, value) {
    $(value).data('deg', 90);
  });
  $('.carousel').on('mousewheel', function(event) {
    event.preventDefault();
    var children = $(this).children('img');
    var width = $(this).width();
    children.each(function(i, value) {
      var child = $(value);
      var pos = child.data('deg') + 5 * event.deltaY
      child.data('deg', pos);
      // console.log(pos, Math.cos(2* Math.PI * (pos/360)));
      var newPos = (50 - 25 * Math.cos(2* Math.PI * (pos/360))) + '%'
      child.css('left', newPos);
      console.log(Math.max(0.25, Math.abs(Math.sin(2* Math.PI * (pos/360)))));
    });
  });
});
