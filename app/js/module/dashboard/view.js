define(['jquery','handlebars'], function($,Handlebars) {
    'use strict';
    var view = function(){
        this.pageTitle = $('#page').find('.pageTitle');
        this.pageBody = $('#page').find('.pageBody');
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
                self.pageTitle.html(html);
                self.pageBody.html('Will Develop');
            });
        },
        clean: function(){
            this.pageTitle.empty();
            this.pageBody.empty();
        }
    }
    return view;
});
