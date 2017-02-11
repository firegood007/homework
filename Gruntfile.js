module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);
  	require('time-grunt')(grunt);
    var config = {
  		app: 'app',
  		dist: 'dist'
  	};
    grunt.initConfig({
        config: config,
        less: {
            main: {
                src: 'app/less/main.less',
                dest: 'app/css/main.css',

            }

        },
        watch: {
            copy: {
                files: 'app/**/*.less',
                tasks: ['less:main']
            }
        },
        connect: {
          server: {
             options: {
                 open: true,
                 protocol: 'http',
                 port: 8000,
                 hostname: '*',
                 keepalive: true,
                 base: ['app/']
             }
          }
       }
    });
    grunt.registerTask('dev','develop',function(){
        grunt.task.run(['less','connect'])
    })
    grunt.registerTask('watchs','watch files',function(){
        grunt.task.run(['less','watch:copy'])
    })
	grunt.registerTask('default','build',function(){
        grunt.task.run(['less'])
    })
}
