define(['handlebars','pageSet'], function(Handlebars,Page) {
    'use strict'; 
    var view = function(){ };
    view.prototype = {
        init: function(data) {
            this.data = data;
            this.showTitle();
        },
        showTitle: function() {
            var self = this,
            path = Page.tpl.agents.pageTitle,
            element = Page.dom.pageTitle;
            this.getHtml(path,element,{agentsHead: true},function(){
                self.showContent(self.data);
            })
        },
        showContent: function(data) {
            var self = this,
            path = Page.tpl.agents.pageBody,
            element = Page.dom.pageBody;
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
        add: function() {
            var self = this;
            $('.specSour').bind('click',function(e){
                if($(this).is('.specSour')) {
                    self.pop($(this));
                }
            })
        },
        pop: function(addSource) {
            var pop = {
                create: function(){
                    var $html = $('<div />',{class: 'pop'})
                        .append(
                            $('<div />',{class: 'popHead',html: '(separate multiple resources name with commas)'})
                        ).append(
                            $('<input />',{class: 'popText',type: 'text'})
                        ).append(
                            $('<div />',{class: 'btnGroup'})
                            .append (
                                $('<button />',{class: 'confirm',html:'Add reSources'})
                            ).append(
                                $('<button />',{class: 'closePop',html:'Close'})
                            ).append(
                                $('<span />',{class: 'errorMes hide',html:''})
                            )
                        ).append(
                            $('<div />',{class: 'arrowPoint'})
                        );
                    return $html;
                },
                resize: function($mask) {
                    var setWidth = function(){
                        var width = $mask.closest('.agentList ').width();
                        $mask.width(width*0.75);
                    };
                    setWidth();
                    $(window).resize(function(){
                        setWidth();
                    });
                },
                mask: {
                    open: function() {
                        var self = this,
                        $mask = pop.create();
                        $('.maskAgent').removeClass('hide');
                        if(addSource.find('.pop').length){
                            $mask = addSource.find('.pop');
                            pop.resize($mask);
                            $mask.fadeIn(300);
                        } else {
                            addSource.append($mask);
                            pop.resize($mask);
                            $mask.fadeIn(300);
                        }
                        $mask.off('click').on('click',function(e){
                            e.preventDefault();
                            e.stopPropagation();
                        }).on('click','.closePop',function(e){
                            self.close($mask);
                        }).on('click','.confirm',function(e){
                            self.confirm($mask);
                        }).on('input','.popText',function(e){
                            var text = $(this).val();
                            text && $mask.find('.errorMes').addClass('hide');
                        });
                    },
                    close: function($mask) {
                        $mask.find('.popText').val('');
                        $mask.fadeOut(200,function(){
                            $mask.find('.errorMes').addClass('hide');
                            $('.maskAgent').addClass('hide');
                        }); 
                    },
                    confirm: function($mask){
                        var $input = $mask.find('.popText');
                        var reset = function(message){
                            $input.focus();
                            $mask.find('.errorMes').html(message).removeClass('hide');
                        }
                        var mes = {
                          noMes: '* Please input content.',
                          xss: '*Special characters are not allowed.',
                          lengths: 'Limit 20 characters.'
                        }
                        if($input.val()) {
                            if((/\<.*>/).test($input.val())){
                                reset(mes.xss);
                            }else if($input.val().length > 20) {
                                reset(mes.lengths);
                            } else {
                                $mask.closest('.inforContent').find('.source').append(
                                    $('<span />',{html:$input.val()}).append(
                                        $('<i />',{class: 'fa fa-times-circle-o'})
                                    )
                                )
                                this.close($mask);
                            }    
                        } else {
                            reset(mes.noMes);
                        }   
                    }
                }
            }
            pop.mask.open();
        }
    }
    return view;
});
