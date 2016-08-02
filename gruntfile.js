module.exports = function (grunt) {
    grunt.initConfig({
      ts: {
	dev: {
	  src: ['src/scripts/**/*.ts'],
	  dest: 'public/js',
	  options: {
	    module: 'amd', //or commonjs
	    target: 'es5', //or es3
	    sourceMap: false,
	    declaration: false
	  }
	}
      },

      uglify: {
        dev: {
          files: {
            'public/portfolio.min.js': [
	      'bower_components/jquery/dist/jquery.min.js',
	      'node_modules/remodal/dist/remodal.min.js',
              'node_modules/rpgui/rpgui.min.js',
	      'bower_components/phaser/build/custom/phaser-arcade-physics.js',
	      'bower_components/ezgui/dist/phaser-compat-2.4.js',
	      'bower_components/ezgui/dist/EZGUI.js',
	      'public/js/gui/gui.js',
	      'public/js/state/preloader.js',
	      'public/js/state/game.js',
	      'public/js/entity/preload-bar.js',
	      'public/js/game.js'
	    ]
          }
        }	
      },

      copy: {
	dev: {
          files: [
	    {
	      expand: true,
	      cwd: 'src',
	      src: [
		'assets/**'
	      ],
	      dest: 'public/'
	    },
	    {
	      src: 'src/index.html',
	      dest: 'public/index.html'
	    },
	    {
	      src: 'src/style.css',
	      dest: 'public/style.css'
	    },
	    {
	      src: 'node_modules/remodal/dist/remodal.css',
	      dest: 'public/remodal.css'
	    },
	    {
	      src: 'node_modules/remodal/dist/remodal-default-theme.css',
	      dest: 'public/remodal-default-theme.css'
	    },
	    {
	      src: 'node_modules/remodal/dist/remodal.min.js',
	      dest: 'public/vendor/remodal/remodal.min.js'
	    },		  		  
	    {
	      src: 'bower_components/jquery/dist/jquery.min.js',
	      dest: 'public/vendor/jquery/jquery.min.js'
	    },
	    {
	      src: 'bower_components/phaser/build/custom/phaser-arcade-physics.js',
	      dest: 'public/vendor/phaser/phaser.js'
	    },
	    {
	      src: 'node_modules/rpgui/rpgui.css',
	      dest: 'public/rpgui.css'
	    },
	    {
	      src: 'node_modules/rpgui/rpgui.min.js',
	      dest: 'public/vendor/rpgui/rpgui.min.js'
	    },
	    {
	      expand: true,
	      cwd: 'node_modules/rpgui',
	      src: [
		'img/**'
	      ],
	      dest: 'public/'
	    },
	    {
	      src: 'bower_components/ezgui/dist/EZGUI.js',
	      dest: 'public/vendor/ezgui/EZGUI.js'
	    },
	    {
	      src: 'bower_components/ezgui/dist/EZGUI.js.map',
	      dest: 'public/vendor/ezgui/EZGUI.js.map'
	    },
	    {
	      src: 'bower_components/ezgui/dist/phaser-compat-2.4.js',
	      dest: 'public/vendor/ezgui/phaser-compat-2.4.js'
	    },
	    {
	      expand: true,
	      cwd: 'bower_components/ezgui',
	      src: [
		'assets/**'
	      ],
	      dest: 'public/'
	    }
	  ]
	}
      },

      clean: {
        dev: ['public/**/*']
      },

      watch: {
        scripts: {
          files: ['src/**/*'],
          tasks: ['dev'],
          options: {
            spawn: false,
            debounceDelay: 250
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dev', [
        'clean:dev',
        'ts:dev',
        'uglify:dev',      
        'copy:dev'
    ]);
};
