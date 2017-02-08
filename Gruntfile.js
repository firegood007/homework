module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
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

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default',['less','watch']);
}