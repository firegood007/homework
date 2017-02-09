define(['handlebars'], function(Handlebars) {
    'use strict';
    var agents = {
          tpl: {
              pageTitle: 'tpl/agentsHead.tpl',
              pageBody: 'tpl/agents.tpl'
          },
          dom: {
              pageTitle: $('.pageTitle'),
              pageBody: $('.pageBody')
          }
    },    
    view = function(){ };
    view.prototype = {
        init: function(data) {
            this.data = data;
            this.showTitle();
        },
        showTitle: function() {
            var self = this,
            path = agents.tpl.pageTitle,
            element = agents.dom.pageTitle;
            this.getHtml(path,element,{agentsHead: true},function(){
                self.showContent(self.data);
            })
        },
        showContent: function(data) {
            var self = this,
            path = agents.tpl.pageBody,
            element = agents.dom.pageBody;
            this.getHtml(path,element,data,function(){
                self.events();
            })
        },
        getHtml: function(path,element,data,callback) {
            $.get(path,function(tpl){
                tpl = Handlebars.compile(tpl);
                tpl = tpl(data);
                element.empty();
                element.html(tpl);
                callback && callback();
            });
        },
        events: function() {
            $('#tabs').tabs('#tabsContent');
            this.del();
            this.add();
        },
        del: function() {
            $('.agentList').find('.source').on('click','i',function(){
                $(this).closest('span').remove();
            })
        },
        add: function(){
            $('.specSour').on('click',function(){
                alert(1);
            })
        }
    }
    return view;
});
