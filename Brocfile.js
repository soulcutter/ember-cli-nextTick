/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var isProductionLikeBuild = ['production', 'staging'].indexOf(process.env.EMBER_ENV) > -1;

var app = new EmberApp({
  wrapInEval: !isProductionLikeBuild,
  autoprefixer: {
    browsers: [
      'last 5 versions',
      'Firefox >= 25',
      'Android >= 4',
      'Explorer >= 9',
      'Opera >= 12',
      'OperaMini >= 7'
    ],
    cascade: false,
    sourcemap: false
  },
  fingerprint: {
    enabled: isProductionLikeBuild
  },
  minifyCSS: {
    enabled: false
  },
  minifyJS: {
    enabled: false
  },
  compassOptions: {
    importPath: [
      'app/styles',
      'bower_components/scut/dist',
      'bower_components/susy/sass'
    ]
  },
  tests: !isProductionLikeBuild,
  hinting: !isProductionLikeBuild,
  vendorFiles: {
    'handlebars.js': {
      production: 'bower_components/handlebars/handlebars.js',
      staging: 'bower_components/handlebars/handlebars.js'
    },
    'ember.js': {
      staging:  'bower_components/ember/ember.prod.js'
    }
  }
});

app.import('bower_components/ember-easy-form/index.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
