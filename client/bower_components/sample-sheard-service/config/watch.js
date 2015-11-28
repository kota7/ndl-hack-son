(function() {
  'use strict';

  module.exports = {
    demo: {
      files: ['src/**/*.js','src/**/*.html'],
      tasks: ['jscs:src', 'babel:demo', 'copy:demo'],
      options: {
        interrupt: true,
      },
    },
  };
})();
