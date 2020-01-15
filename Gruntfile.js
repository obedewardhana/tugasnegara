const sass = require('node-sass');

module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      options: {
        style: 'compressed',
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.min.css': ['scss/style.scss']
        }
      }
    },
    cssmin: {
      sitecss: {
        options: {
          banner: '/* My minified plugin css file */',
          sourceMap: true
        },
        files: {
          'css/plugin.min.css': [
              'css/plugins/owl.carousel.min.css',
              'css/plugins/select2.min.css'
            ]
        }
      }
    },
    uglify: {
      options: {
          compress: true,
          sourceMap: true
      },
      build: {
        files: {
          'js/app.min.js': ['js/app.js'],
          'js/plugin.min.js': [ 'js/plugins/jquery.min.js','js/plugins/bootstrap.min.js', 'js/plugins/owl.carousel.js', 'js/plugins/select2.min.js', 'js/plugins/isotope.pkgd.min.js']
        }
      }
    },
    codekit: {
      files: {
        src: ['assets/kit/**/*.kit'],
        dest: ''
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      cssmin: {
        files: ['css/**/*'],
        tasks: ['cssmin'],
        options: { livereload: true },
      },
      scss: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: { livereload: true },
      },
      uglify: {
        files: ['js/**/*'],
        tasks: ['uglify'],
        options: { livereload: true },
      },
      codekit: {
        files: ['assets/kit/**/*'],
        tasks: ['codekit'],
        options: { livereload: true },
      },
      html: {
            files: ['index.html','**/*.html'],
            options: {
                livereload: true,
            }
        },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true
        }
      }
    },
    copy: {
      files: {
        cwd: 'assets/css',  // set working folder / root to copy
        src: '**/*',           // copy all files and subfolders
        dest: 'wp-content/themes/FEtask1/assets/css',    // destination folder
        expand: true           // required when using cwd
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect','watch']);
  require('load-grunt-tasks')(grunt);
}
