define(['director','jquery'], function(Router,$) {
    'use strict';
    var pages = ['agents','dashboard','myCruise','help'], // 模块名称
        pageRegister = { };    // 模块注册 形如{  }
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
                '/dashboard' : pageRegister.dashboard,
                '/myCruise'  : pageRegister.myCruise,
                '/agents'    : pageRegister.agents,
                '/help'      : pageRegister.help
            });
})
