module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      copy: {
        files: 'src/index.html',
        tasks: ['copy']
      },
      sass: {
        files: 'src/**/*.scss',
        tasks: ['sass']
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist/',
      }
    },
    sass: {
  		options: {
  			outputStlye: 'compressed'
  		},
  		dist: {
  			files: {
  				'dist/css/styles.css': 'src/sass/main.scss'
  			}
  		}
  	},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'dist/css/*.css',
            'dist/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './dist'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('dev', ['copy', 'sass', 'browserSync', 'watch']);
  grunt.registerTask('watchFile', ['copy', 'sass', 'watch']);
}
