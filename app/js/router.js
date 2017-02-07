define(['director','jquery'], function(Router,$) {
    'use strict';
    var pages = ['agents'], // 模块名称
        pageRegister = {     // 模块注册 形如{  }
            noDevelop: function(){   //未开发
                var html = ['<h1>No development</h1>','<div>Stay tuned for</div>'].join('');
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
                '/dashboard' : pageRegister.noDevelop,
                '/myCruise'  : pageRegister.noDevelop,
                '/agents'    : pageRegister.agents,
                '/help'      : pageRegister.noDevelop
            });
})