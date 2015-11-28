
(function() {
  'use strict';

  module.exports = {
    options: {
      sourceMap: true,
    },
    demo: {
      files: [{
        cwd: 'src/',
        expand: true,
        src: ['*.html','*.css'],
        dest: '.tmp/src/',
        filter: 'isFile',
      },],
    },
  };
})();

