define(['handlebars','pageSet'], function(Handlebars,Page) {
    'use strict';
    var view = function(){ }
    view.prototype = {
        init: function(data) {
          this.show(data);
        },
        show: function(data){
          var self = this,
          path = Page.tpl.help.page;
          $.get(path, function(tpl) {
                var html = Handlebars.compile(tpl);
                html = html(data);
                self.clean();
                Page.dom.pageTitle.html(html);
                Page.dom.pageBody.html('Will Develop');
            });
        },
        clean: function(){
            Page.dom.pageTitle.empty();
            Page.dom.pageBody.empty();
        }
    }
    return view;
});
