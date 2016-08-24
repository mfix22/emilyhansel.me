$(function() {
  var start = 90;
  var images = $('.carousel').children();
  images.each(function(i, value) {
    $(value).data('deg', start);
    setView($(this), start);
    start += 360/(images.length);
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
      setView(child, pos);
    });
  });
});

function setView(elem, deg) {
  var newPos = (50 - 25 * Math.cos(2* Math.PI * (deg/360))) + '%'
  var scale = Math.sin(2* Math.PI * (deg/360)) + 1.1;
  scale = Math.min(scale, 1.7);
  var z = Math.floor(100 * Math.sin(2* Math.PI * (deg/360)));
  console.log(z);
  elem.css({
    display : 'block',
    left: newPos,
    transform: 'translate3d(-50%, -50%, 0px) scale(' + scale + ')',
    'z-index' : z
  });
}
