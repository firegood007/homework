define(['jquery','handlebars'], function($,Handlebars) {
    'use strict';
    var view = function(){
      this.container = $('#page');
    }
    view.prototype = {
        init: function(data) {
          this.show();
        },
        show: function(){
          var self = this;
          $.get('tpl/dashboard.tpl', function(tpl) {
                var html = Handlebars.compile(tpl);
                html = html({dashboard: true});
                self.clean();
                self.container.html(html);
            });
        },
        clean: function(){
            this.container.empty();
        }
    }
    return view;
});
