define(['js/module/agents/model', 'js/module/agents/view'], function(model, view) {
    'use strict';
    var controller = function() {
        this.init();
    }
    controller.prototype = {
        init:function() {
            var _view = new view();
            model.getData().then(function(data){
                _view.init(data);
            })   
        },
    }
    return controller;
});