define(['js/module/agents/model', 'js/module/agents/view'], function(model, view) {
    'use strict';
    var controller = function() {
        this.init();
    }
    controller.prototype = {
        init:function() {
            view = new view();
            view.init(model);
        }
    }
    return controller;
});