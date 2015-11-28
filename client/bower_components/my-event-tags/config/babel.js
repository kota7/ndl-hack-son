
(function() {
  'use strict';

  module.exports = {
    options: {
      sourceMap: true,
    },
    demo: {
      files: [
        'directive',
        'service',
        'factory',
      ].map(function(service) {
        return {
          expand: true,
          cwd: 'src',
          src: [
            '**/*.' + service + '.js',
            '!**/*.' + service + '.spec.js',
          ],
          dest: '.tmp/src',
          ext: '.' + service + '.js',
        };
      }),
    },
  };
})();

