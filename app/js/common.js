define(['jquery'],function($){
	'use strict';
	var navHandle = function(){
		var currentUrl = location.hash.slice(2);
		$('.navs').find('li').removeClass('current');
		$('.navs').find('.'+currentUrl).addClass('current');
	}
	navHandle();
	$(window).on('hashchange',function(){
		navHandle();
	});
})
