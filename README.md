
#首先安装,来到/homework 根目录。
# install dependencies (安装插件)
1 npm install

# grunt cli  (安装grunt命令)
2 npm install grunt-cli -g

# karma cli (安装karma命令)
3 npm install karma-cli -g

#启动服务，启动完以后，浏览器会自动打开。
4 grunt dev

#auto unit test（自动化单元测试，来到homework/app 目录下）
5 cd app
  karma start


技术要点说明:

设计模式       :    MVC模式
模块管理       :    requirejs
自动化构建     :    grunt
单元测试       :    karma + jasmine
响应式设计     :    bootstrap 
生成样式       :    less 
模板           :    handlebarsjs
路由           :    directorjs
异步编程       :    jquery 的 Deferred \ promise 对象
图标文件       :    fontawesome


homework/app/js/moudle/      :  存放每一个page的模块
homework/app/js/tool/        :  存放第三方库文件
homework/app/js/common.js    :  页面的初始化处理
homework/app/js/router.js    :  配置页面路由
homework/app/js/pageSet.js   :  存放每一个page的相关信息。
homework/app/js/main.js      :  requirejs 的配置

github地址                   :  https://github.com/firegood007/homework