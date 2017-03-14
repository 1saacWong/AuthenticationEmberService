/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'my-auth-test',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
    apiKey: 'AIzaSyCeZReLAoX0dBOZ79TJ2cYdUGoQbhS8AOk',
    authDomain: 'my-test-login-f588c.firebaseapp.com',
    databaseURL: 'https://my-test-login-f588c.firebaseio.com',
    storageBucket: 'my-test-login-f588c.appspot.com',
    messagingSenderId: "902199650701"
      },
      torii: {
      sessionServiceName: 'session'
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
