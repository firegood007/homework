define(['handlebars'], function(Handlebars) {
    'use strict';
    var view = function(){
      this.container = $('#page');
    }
    view.prototype = {
        init: function(data) {
          this.show(data);
        },
        show: function(data){
          var self = this;
          $.get('tpl/agents.tpl', function(tpl) {
                Handlebars.registerHelper('bgcolor', function (boolean,options) {
                   boolean = (/true/i).test(boolean);
                   boolean = boolean ? 'idle' : 'building';
                   return boolean;
                });
                Handlebars.registerHelper('render', function (boolean,options) {
                   boolean = (/true/i).test(boolean);
                   boolean = boolean ? 'show' : 'hide';
                   return boolean;
                });
                var html = Handlebars.compile(tpl);
                html = html(data);
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
