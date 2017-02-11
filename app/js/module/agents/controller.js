define(['js/module/agents/model', 'js/module/agents/view'], function(model, view) {
    'use strict';
    var controller = function() {
        this.init();
    }
    controller.prototype = {
        init:function() {
            //从 model 获取数据, promise.then
            var _view = new view();
            model.getData().then(function(data){
                _view.init(data);
            }) 
            return true;  
        },
    }
    return controller;
});