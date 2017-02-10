requirejs.config({
    baseUrl: '/',
    paths: {
        jquery      : 'js/tool/jquery.min',
        director    : 'js/tool/director',
        handlebars  : 'js/tool/handlebars-v4.0.5',
        router      : 'js/router',
        common      : 'js/common',
        pageSet     : 'js/pageSet',
        agents      : 'js/module/agents/controller',
        dashboard   : 'js/module/dashboard/controller',
        myCruise    : 'js/module/myCruise/controller',
        help        : 'js/module/help/controller'

    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
    }
});

require(['jquery','router','common'], function($,router) {
    window.$ = $ || jQuery;
    router.init('/agents');
});
