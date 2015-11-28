// Karma configuration
// Generated on Thu Sep 24 2015 12:26:44 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.html',
      'src/**/*.js',
    ],

    exclude: [
    ],

    preprocessors: {
      'src/**/*.js': ['babel'],
      'src/**/*.html': 'ng-html2js',
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    ngHtml2JsPreprocessor: {
        stripPrefix: 'src/',
        moduleName: 'ngTemplates'
    },
  })
}
