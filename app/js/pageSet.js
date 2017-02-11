define(['jquery'],function($){
	'use strict';

	var pages = {
		dom: {
			pageTitle: $('.pageTitle'),
            pageBody: $('.pageBody')
		},
		tpl: {
			agents: {
				pageTitle: 'tpl/agentsHead.html',
              	pageBody: 'tpl/agents.html'
			},
			dashboard: {
				page: 'tpl/dashboard.html',
			},
			help: {
				page: 'tpl/help.html',
			},
			myCruise: {
				page: 'tpl/myCruise.html',
			}
		}
	}
	return pages;
})