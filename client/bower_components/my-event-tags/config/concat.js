
(function() {
  'use strict';

  module.exports = {
    build: {
      files: [
        {
          dest: '.tmp/bin/index.js',
          src: [
            '.tmp/src/*.js',
            '.tmp/templates.js',
          ],
        },
      ],
    },
  };
})();

