define(['js/module/dashboard/model', 'js/module/dashboard/view'], function(model, view) {
    'use strict';
    var controller = function() {
        this.init();
    }
    controller.prototype = {
        init:function() {
            var _view = new view();
            _view.init(model);
        }
    }
    return controller;
});
