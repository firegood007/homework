'use strict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

requirejs.config({
    baseUrl: '/base',
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
        }
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

require(['jquery','router','common'], function($,router) {
    window.$ = $;
    $.ajaxPrefilter(function(options, originalOptions, jqXHR){
        options.url = '/base/'+options.url;
    })
    router.init('/agents');
});
