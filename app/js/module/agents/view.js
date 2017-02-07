define(['jquery'], function($) {
    'use strict';
    
    var view = function(){
      
    }
    view.prototype = {
        init: function(data) {
            $('#page').html('<h1>'+data.title+'</h1><div>'+data.content+'</dv>')
        },
      
    }
    return view;
});