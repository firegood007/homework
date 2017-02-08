define(['director','jquery'], function(Router,$) {
    'use strict';
    var pages = ['agents'], // 模块名称
        pageRegister = {     // 模块注册 形如{  }
            willDevelop: function(){   //未开发
                var html = ['<h1>will develop</h1>','<div>Thanks for your browsing</div>'].join('');
                $('#page').html(html)
            }
        }; 
        /**
         * [description] 使用闭包生成动态生成 pageRegister
         */
        pages.forEach(function(val) {
            pageRegister[val] = (function(){
                return function(){
                            require([val], function(page) {
                               new page();
                            })
                        }
            })()
        });
        // 返回一个router实例。
    return  Router({
                '/'          : pageRegister.agents,
                '/dashboard' : pageRegister.willDevelop,
                '/myCruise'  : pageRegister.willDevelop,
                '/agents'    : pageRegister.agents,
                '/help'      : pageRegister.willDevelop
            });
})