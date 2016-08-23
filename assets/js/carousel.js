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
      console.log(pos, Math.cos(2* Math.PI * (pos/360)));
      // var left = child.position().left
      var newPos = (50 - 25 * Math.cos(2* Math.PI * (pos/360))) + '%'
      console.log(newPos);
      child.css('left', newPos)
      // if (pos <= 20 )
      //   child.data('inverse', -1)
      // else
      //   child.data('inverse', 1)
      // // var newPos = (left + 10 * event.deltaY) + 'px'
      // // var percent = (left + 10 * event.deltaY) / width
      // pos = pos + event.deltaY * child.data('inverse');
      // child.css('left', pos + '%');
      // if (child.data('inverse') == 1)
      //   var scale = 0.02 * pos;
      // else
      //   var scale= 0.02 * (50 - pos)
      // child.css('transform', 'scale(' + scale + ') translate(-50%, -50%)');

    });
  });
});
