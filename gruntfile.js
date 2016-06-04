module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        files: {
            './dist' : ["app.ts","**/*.ts", "!node_modules/**"]
        }, 
        options : {
            module : 'commonjs',
            sourceMap:true
        }
      }
    },
    browserify: {
        dist: {
            files: {
            './dist/out.js': ['dist/app.js']
            },
            options: {
                
                require: [
                    "./app.ts",
                    "./ctrl.ts"
                ], 
                
              browserifyOptions: {
                debug:true,  
                plugin: [
                    [
                        'tsify', {
                            target: 'ES5'
                        }
                    ]
                ]
              }
            }
        }
    },
    exec: {
        message:"echo 'compiling typescript and browserify'",
        scripting: 'browserify app.ts -p tsify --debug > bundle.js',
        copy : 'copy bundle.js dist'
    }
  });
    grunt.loadNpmTasks( "grunt-ts" );
    grunt.loadNpmTasks( "grunt-browserify" );
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask( "default", [ "exec:message","exec:scripting","exec:copy","then" ] );
    grunt.registerTask('then', function(){
       console.log('then');
    })
};