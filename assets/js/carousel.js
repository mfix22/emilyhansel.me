$(function() {
  var start = 90;
  var images = $('.carousel').children();
  var topImage = images.first();
  $('.caption').html(topImage.data('caption'));
  images.each(function(i, value) {
    $(value).data('deg', start);
    setView($(this), start);
    start += 360/(images.length);
  });
  $('.carousel').on('mousewheel', function(event) {
    event.preventDefault();
    var children = $(this).children();
    var width = $(this).width();
    children.each(function(i, value) {
      var child = $(value);
      var pos = child.data('deg') + 5 * event.deltaY
      child.data('deg', pos);
      setView(child, pos);
    });
  });

  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        images.each(function(i, value) {
          var child = $(value);
          child.data('deg', child.data('deg') - 5);
          debounce(setView(child, child.data('deg')), 250) ;
        });
        e.preventDefault();
      break;

      case 39: // right
        images.each(function(i, value) {
          var child = $(value);
          child.data('deg', child.data('deg') + 5);
          debounce(setView(child, child.data('deg')), 250) ;
        });
        e.preventDefault();
      break;
    } // prevent the default action (scroll / move caret)
  });

  function setView(elem, deg) {
    var newPos = (50 - 25 * Math.cos(2* Math.PI * (deg/360))) + '%'
    var scale = Math.sin(2* Math.PI * (deg/360)) + 1.1;
    scale = Math.min(scale, 1.5);
    var z = Math.floor(999 * Math.sin(2* Math.PI * (deg/360)));
    // console.log(z);
    elem.css({
      display : 'block',
      left: newPos,
      transform: 'translate3d(-50%, -50%, 0px) scale(' + scale + ')',
      'z-index' : z
    });
    if (parseInt(elem.css('z-index')) > parseInt(topImage.css('z-index'))) {
      topImage = elem;
      $('.caption').html(elem.data('caption'));
    }
  }

});


function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
