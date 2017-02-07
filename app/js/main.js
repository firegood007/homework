requirejs.config({  
    baseUrl: '',
    paths: {
        jquery      : 'js/tool/jquery.min',
        director    : 'js/tool/director',
        handlebars  : 'js/tool/handlebars-v4.0.5',
        router      : 'js/router',
        agents      : 'js/module/agents/controller'
    },
    shim: {
        handlebars: {  
            exports: 'Handlebars'  
        },
    }    
});

require(['router'], function(router) {
    router.init('/');
});