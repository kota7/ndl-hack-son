
(function() {
  'use strict';

  module.exports = {
    build: {
      cwd: 'src',
      src: '*.html',
      dest: '.tmp/templates.js',
      options: {
        module: 'app.component.events.directive',
      },
    },
  };
})();
