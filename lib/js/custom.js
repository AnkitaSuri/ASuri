// I know that the code could be better.
// If you have some tips or improvement, please let me know.

$('img.para').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var deg = img.data('rotation-deg');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      // The next pixel to show on screen      
      var winBottom = winY + winH;
  
      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%) rotate('+ deg +'deg)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });

// POPOUT
$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

      e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

      e.preventDefault();
  });
});

// CLICKING SKILL BOX
$('.skill-box').click(function() {
  $(this).css('border-style', 'inset');
  setTimeout(()=>$(this).css('border-style', 'outset'),50);
});


// when header image is out of frame, will pop up header text
$(window).scroll(function () {
  var element = $(".main-parallax");
	var top_of_element = element.offset().top;
	var bottom_of_element = element.offset().top + element.outerHeight()-79.5;
	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	var top_of_screen = $(window).scrollTop();

	if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
		// The element is visible, do something
		$("header").hide();
	}
	else {
		// The element is not visible, do something else
		$("header").show();
	}
});


//Particles.js
// particlesJS("particles", {
//   "particles": {
//     "number": {
//       "value": 50,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#f28c8c"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 2,
//         "color": "#2d5f73"
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 30,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 4,
//         "size_min": 30,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": false,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": .5,
//       "direction": "top",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": false,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": false,
//         "mode": "remove"
//       },
//       "resize": false
//     },
//     "modes": {
//       "grab": {
//         "distance": 50,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 25,
//         "size": 15,
//         "duration": 1,
//         "opacity": 0,
//         "speed": 6
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });

