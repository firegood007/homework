
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


技术要点说明：

模块管理       :    requirejs
自动化构建     :    grunt
单元测试       :    karma + jasmine
响应式设计     :    bootstrap 
生成样式       :    less 
模板           :    handlebarsjs
路由           :    directorjs
异步编程       :    jquery 的 Deferred \ promise 对象
图标文件       :    fontawesome


