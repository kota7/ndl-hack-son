'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var options = {
    // Configurable paths
    paths: {
      build: '.tmp',
    },
    pkg: grunt.file.readJSON('package.json'),
  };

  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  /**************************************************/
  /***************  Task Setting    *****************/
  /**************************************************/
  grunt.registerTask('default', 'livereload development', function(target) {
      var tasks = [
        'initialTasks',
        'babel:demo',
        'copy:demo',
        'browserSync:demo',
        'watch:demo',
      ];
      return grunt.task.run(tasks);
    });
  grunt.registerTask('build', 'releace build', function(target) {
      var tasks = [
        'initialTasks',
        'clean:build',
        'babel:demo',
        'copy:demo',
        'cssmin:build',
        'ngtemplates:build',
        'concat:build',
        'uglify:build',
      ];
      return grunt.task.run(tasks);
    });
  grunt.registerTask('test', 'run unit testing', function(target) {
      var tasks = [
        'jscs:src',
        'karma:unit',
      ];
      return grunt.task.run(tasks);
    });

  /**************************************************/
  /*************** Private Commands *****************/
  /**************************************************/

  grunt.registerTask('initialTasks', 'can not used', function(target) {
      var tasks = [
        'clean:tmp',
        'jscs:src',
        'jscs:grunt',
      ];
      return grunt.task.run(tasks);
    });

};
