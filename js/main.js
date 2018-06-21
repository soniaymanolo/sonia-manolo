'use strict';

// MENÚ DE NAVEGACIÓN

var toggleMenu = function () {
  var menu = document.querySelector('.nav-small');
   menu.classList.toggle('hide');
};

var button = document.querySelector('.btn-menu');
button.addEventListener('click', toggleMenu);




// EFECTO PARALLAX

// $(document).ready(function(){
//
// 	$(window).scroll(function(){
// 		var barra = $(window).scrollTop();
// 		var posicion =  (barra * 0.4);
//
// 		$('body').css({
// 			'background-position': '0 -' + posicion + 'px'
// 		});
//
// 	});
//
// });

// http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
