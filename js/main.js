﻿$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();

  //Sticky header
  if ($(window).width() > 768) {
    if (startchange.length) {
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
          $('.navbar-moving').css('background-color', 'rgba(15, 15, 15, 0.9)');
          $('.nav-link, .nav-link__icon, .dropdown-toggle, .dropdown-toggle__icon, .caret.top').css('color', 'white');
          $('.logo-brand').css('width', '80px');
        } else {
          $('.navbar-moving').css('background-color', 'transparent');
          $('.nav-link, .nav-link__icon, .dropdown-toggle, .dropdown-toggle__icon, .caret.top').css('color', '#BDBDBD');
          $('.logo-brand').css('width', '150px')
        }
      });
    }
  } else {
    $('.logo-brand').css('width', '68px');
  }

  const twentytwenty = $(".twentytwenty");
  const btnTwenty = $(".js-btn-twenty")

  btnTwenty && btnTwenty.click(function () {
    setTimeout(function () {
      twentytwenty.twentytwenty({
        // move_slider_on_hover: true,
      });
    }, 200);
  })
});


// Home - Flex panel galery
const panels = document.querySelectorAll('.home-art-panels__panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

$('.selectpicker').selectpicker({
});

//Home Number animation JS control - By Adam at depthdev.com
/*
 Inc v1.0.0
 (c) 2014 Depth Development. http://depthdev.com
 License: Apache 2.0
*/

'use strict';

function Inc(obj) {
  var elem = obj.elem;
  var input = (elem.nodeName.toLowerCase() === 'input') ? true : false;
  var value = parseFloat(elem.getAttribute('data-inc-value')) || 0;
  var duration = parseInt(elem.getAttribute('data-inc-duration')) || 0;
  var delay = parseInt(elem.getAttribute('data-inc-delay')) || 0;
  var decimal = ((obj.decimal > 2) ? 2 : obj.decimal) || 0;
  var currency = obj.currency || '';
  var speed = ((obj.speed < 30) ? 30 : obj.speed) || 30;
  var count = 0;
  var increment = value / (duration / speed);
  var interval = null;
  var regex = /\B(?=(\d{3})+(?!\d))/g;
  var run = function () {
    count += increment;
    if (count < value) {
      (input) ? elem.value = currency + (count).toFixed(decimal).toString().replace(regex, ',') : elem.innerHTML = currency + (count).toFixed(decimal).toString().replace(regex, ',');
    } else {
      clearInterval(interval);
      (input) ? elem.value = currency + (value).toFixed(decimal).toString().replace(regex, ',') : elem.innerHTML = currency + (value).toFixed(decimal).toString().replace(regex, ',');
    }
  };
  setTimeout(function () {
    interval = setInterval(run.bind(this), speed);
  }.bind(this), delay);
  this.reset = function () {
    clearInterval(interval);
    value = parseFloat(elem.getAttribute('data-inc-value')) || 0;
    duration = parseInt(elem.getAttribute('data-inc-duration')) || 0;
    increment = value / (duration / speed);
    delay = parseInt(elem.getAttribute('data-inc-delay')) || 0;
    count = 0;
    interval = setInterval(run, speed);
  }.bind(this);
} // Inc


var elems = $('.home-intro__infographics__holders__holder h1');
var objs = [];

for (var i = 0, l = elems.length; i < l; i++) {
  objs.push(
    new Inc({
      elem: elems[i],
      speed: 60,
      decimal: 0,
      currency: ''
    })
  );
}
if (elems.length > 0) {
  elems[0].addEventListener('click', function () {
    objs[0].reset();
  });
  elems[1].addEventListener('click', function () {
    objs[1].reset();
  });
  elems[2].addEventListener('click', function () {
    objs[2].reset();
  });
}

//End of Number animation control


//Dropdown kickoff

$(document).ready(function () {
  $('.dropdown-toggle').dropdown();
});

$(document).ready(function () {
  $(".selectpicker").selectpicker();
  $(".bootstrap-select").click(function () {
    $(this).addClass("open");
  });
});



// Product-page Carousel function
(function ($) {
  $('#thumbcarousel').carousel(0);
  var $thumbItems = $('#thumbcarousel .item');
  $('#carousel').on('slide.bs.carousel', function (event) {
    var $slide = $(event.relatedTarget);
    var thumbIndex = $slide.data('thumb');
    var curThumbIndex = $thumbItems.index($thumbItems.filter('.active').get(0));
    if (curThumbIndex > thumbIndex) {
      $('#thumbcarousel').one('slid.bs.carousel', function (event) {
        $('#thumbcarousel').carousel(thumbIndex);
      });
      if (curThumbIndex === ($thumbItems.length - 1)) {
        $('#thumbcarousel').carousel('next');
      } else {
        $('#thumbcarousel').carousel(numThumbItems - 1);
      }
    } else {
      $('#thumbcarousel').carousel(thumbIndex);
    }
  });
  $('#carousel').carousel({
    interval: false,
  });
  $('#thumbcarousel').carousel('pause');
})(jQuery);

//Home page - Carousel full screen function
var $item = $('.carousel .full-screen');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel .full-responsive').each(function () {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image': 'url(' + $src + ')',
    'background-color': $color
  });
  $(this).remove();
});

$(window).on('resize', function () {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 8000,
  pause: true,
});

