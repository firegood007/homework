define(['handlebars'],function(Handlebars){
	'use strict';
	var common = {
		navEvents: function() {
			var navHandle = function(){
				var currentUrl = location.hash.slice(2);
				if(!currentUrl) {
					return;
				}
				$('.navs,.navsMobile').find('li').removeClass('current');
				$('.navs,.navsMobile').find('.'+currentUrl).addClass('current');
			}
			navHandle();
			$(window).on('hashchange',function(){
				navHandle();
			});
		},
		handlebars: function(){
			Handlebars.registerHelper('bgcolor', function (boolean,options) {
		       boolean = (/true/i).test(boolean);
		       boolean = boolean ? 'idle' : 'building';
		       return boolean;
		    });
		    Handlebars.registerHelper('render', function (boolean,options) {
		       boolean = (/true/i).test(boolean);
		       boolean = boolean ? 'show' : 'hide';
		       return boolean;
		    });
		},
		tables: function(){
			$.fn.tabs=function(control){
		    	var element=$(this);
			    control=$(control);
			    element.on('click','[data-tab]',function(){
			        var tabName=$(this).data('tab');
			        element.find('[data-tab]').removeClass('navActive');
			        control.find('[data-tab]').removeClass('navActive');
			        $(this).addClass('navActive');
			        control.find('[data-tab='+tabName+']').addClass('navActive');
			    });    
			    return this;
			};
		}
	}
	for(var handle in common) {
		common[handle]();
	}
	
})
