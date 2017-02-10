define([],function(){
	'use strict';

	var pages = {
		dom: {
			pageTitle: $('.pageTitle'),
            pageBody: $('.pageBody')
		},
		tpl: {
			agents: {
				pageTitle: 'tpl/agentsHead.tpl',
              	pageBody: 'tpl/agents.tpl'
			},
			dashboard: {
				page: 'tpl/dashboard.tpl',
			},
			help: {
				page: 'tpl/help.tpl',
			},
			myCruise: {
				page: 'tpl/myCruise.tpl',
			}
		}
	}
	return pages;
})