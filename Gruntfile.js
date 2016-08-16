module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  connect: {
    server: {
      options: {
        port: 3000,
        base: {
          path: 'www-root',
          options: {
            index: 'index.html'
          }
        }
      }
    }
  },
    watch: { 
      files: ['src/*'],
      tasks: ['uglify','less'],
      livereload: { 
        options: { livereload: true },
        files: ['src/*'],
      },    
    },
 
  less: {
  development: {
    options: {
      paths: ['src']
    },
    files: {
      'www-root/build/style.css': 'src/style.less'
    }
  }
  },
    uglify: {
      options: {
        banner: '/*! Last build of <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/script.js',
        dest: 'www-root/build/script.min.js'
      }
    }
    //add more plugin here
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['uglify','connect','watch','less']);

};
