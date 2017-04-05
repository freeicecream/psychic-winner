"use strict";



define('ews/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('ews/app', ['exports', 'ember', 'ews/resolver', 'ember-load-initializers', 'ews/config/environment'], function (exports, _ember, _ewsResolver, _emberLoadInitializers, _ewsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ewsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ewsConfigEnvironment['default'].podModulePrefix,
    Resolver: _ewsResolver['default'],
    rootElement: '.page-wrap'
  });

  (0, _emberLoadInitializers['default'])(App, _ewsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ews/components/direct-report', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    displaySubtitle: true
  });
});
define('ews/components/navbar-ews', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ews/components/user-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ews/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('ews/helpers/app-version', ['exports', 'ember', 'ews/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _ewsConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _ewsConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ews/helpers/is-after', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/is-before', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/is-between', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/is-same-or-after', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/is-same-or-before', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/is-same', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-add', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-calendar', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('ews/helpers/moment-format', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-from-now', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-from', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-subtract', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-to-date', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-to-now', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-to', ['exports', 'ember', 'ews/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_ewsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('ews/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('ews/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('ews/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('ews/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ews/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ews/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('ews/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ews/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ewsConfigEnvironment) {
  var _config$APP = _ewsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ews/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ews/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ews/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'ews/config/environment', 'ews/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _emberCliMirageUtilsReadModules, _ewsConfigEnvironment, _ewsMirageConfig, _emberCliMirageServer, _lodashAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_ewsConfigEnvironment['default'].environment, _ewsConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_ewsConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _ewsConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashAssign['default'])(modules, { environment: environment, baseConfig: _ewsMirageConfig['default'], testConfig: _ewsMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('ews/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ews/initializers/export-application-global', ['exports', 'ember', 'ews/config/environment'], function (exports, _ember, _ewsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ewsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _ewsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ewsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ews/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ews/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ews/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ews/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ews/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */

    this.namespace = '/api';

    var users = [{
      type: 'users',
      id: '1',
      attributes: {
        firstName: 'Kamal',
        lastName: 'Narang',
        position: 'Vice President',
        photo: 'https://randomuser.me/api/portraits/lego/0.jpg'
      },
      relationships: {
        subordinates: {
          data: [{
            type: 'users',
            id: 2
          }, {
            type: 'users',
            id: 3
          }]
        }
      }
    }, {
      type: 'users',
      id: '2',
      attributes: {
        firstName: 'Sunil Kumar',
        lastName: 'Gupta',
        position: 'GM - Strat Ops',
        photo: 'https://randomuser.me/api/portraits/lego/1.jpg'
      },
      relationships: {
        superior: {
          data: {
            type: 'users',
            id: 1
          }
        }
      }
    }, {
      type: 'users',
      id: '3',
      attributes: {
        firstName: 'Salman',
        lastName: 'Siddiqui',
        position: 'General Manager',
        photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
      },
      relationships: {
        superior: {
          data: {
            type: 'users',
            id: 1
          }
        }
      }
    }];

    this.get('/users/:id', function (db, request) {
      return {
        data: users.find(function (user) {
          return request.params.id === user.id;
        })
      };
    });
  };
});
define("ews/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
  };
});
define('ews/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('ews/models/user', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    firstName: _emberData['default'].attr(),
    lastName: _emberData['default'].attr(),
    photo: _emberData['default'].attr(),
    position: _emberData['default'].attr(),

    subordinates: _emberData['default'].hasMany('user', { inverse: 'superior' }),
    superior: _emberData['default'].belongsTo('user', { inverse: 'subordinates' }),

    fullName: _ember['default'].computed('firstName', 'lastName', function () {
      return this.get('lastName') + ', ' + this.get('firstName');
    })
  });
});
define('ews/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ews/router', ['exports', 'ember', 'ews/config/environment'], function (exports, _ember, _ewsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ewsConfigEnvironment['default'].locationType,
    rootURL: _ewsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home');
    this.route('notifications');
    this.route('evaluation', function () {
      this.route('staff', { path: ':staffid' });
    });
    this.route('history');
    this.route('dashboard');
  });

  exports['default'] = Router;
});
define('ews/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    authentication: _ember['default'].inject.service(),

    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      this.get('authentication').loadCurrentUser();
    },

    model: function model() {
      return this.get('authentication.currentUser');
    }
  });
});
define('ews/routes/dashboard', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ews/routes/evaluation', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ews/routes/evaluation/staff', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ews/routes/history', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ews/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ews/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      this.replaceWith('home');
    }
  });
});
define('ews/routes/notifications', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ews/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({
    keyForAttribute: function keyForAttribute(key) {
      return key;
    }
  });
});
define('ews/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ews/services/authentication', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    store: _ember['default'].inject.service(),

    currentUser: null,

    loadCurrentUser: function loadCurrentUser() {
      this.set('currentUser', this.get('store').findRecord('user', 1));
    }
  });
});
define('ews/services/moment', ['exports', 'ember', 'ews/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _ewsConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_ewsConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("ews/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pl3Us4xs", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default topbar\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pull-right\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"user-card\"],null,[[\"name\",\"position\",\"photo\"],[[\"get\",[\"model\",\"fullName\"]],[\"get\",[\"model\",\"position\"]],[\"get\",[\"model\",\"photo\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"pull-right date-today hidden-xs\"],[\"flush-element\"],[\"text\",\"\\n      Today is: \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"moment\"],[\"flush-element\"],[\"append\",[\"helper\",[\"moment-format\"],[[\"helper\",[\"now\"],null,null],\"DD MMMM YYYY\"],null],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"topbar-logo\"],[\"static-attr\",\"id\",\"Layer_1\"],[\"static-attr\",\"data-name\",\"Layer 1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"viewBox\",\"0 0 534 147.63\"],[\"flush-element\"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"Logo-EWS\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M90.26,75C165.88,47,235,45.28,244.53,71.15c4,10.83-3.05,24.78-18.16,39.4C252.29,91.19,266,71.66,260.76,57.48c-9.57-25.87-78.66-24.15-154.28,3.82C62.52,77.58,26,99.14,5,119.43,26.41,103.47,56.08,87.62,90.26,75Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M66.13,44.57c37.64-16,72.61-18.61,78.1-5.73,2.3,5.39-.94,12.64-8.24,20.41,12.66-10.45,19.13-20.68,16.12-27.74C146.62,18.64,111.65,21.2,74,37.25c-21.88,9.32-39.85,21.15-50,32C34.47,60.58,49.12,51.82,66.13,44.57Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M88.68,34.53l-8-18.85c-3.12.66-6.1,1.53-8,4l3.21,18.47L64.49,42.5,60.22,30.44c-1.25,0-2.6.32-4.74,2.15l1.73,14.17Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M0,141c38.78,7.69,76.64.57,113.14-28.18,28.55,18.61,56.69,18.4,84.11-15.37,24.14,27.36,54.42,37.54,95.64,17.08,29.46,22.85,68.31,24.55,111.43,16.65-30,6.7-67.5,15.75-111.3-9.29-30.82,18.81-68.23,18.27-96.08-8-26.93,27.68-52.67,27.94-83,7.8C79.91,153.25,29.22,151,0,141Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"static-attr\",\"fill-rule\",\"evenodd\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M301.52,103.39V19.86h53.7V32.15H313.93V52.56h24V64.84h-24V91.1H357v12.29Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M359.66,106h-60.8V17.2h59v17.6H316.59V49.9h24V67.5h-24V88.44h43.08Zm-55.49-5.31h50.17v-7H311.27V62.19h24v-7h-24V29.49h41.29v-7H304.18Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M442.8,103.39H430.15l-13-53.94-.6-2.69-.72-3.22q-.36-1.61-.66-3t-.42-2.15q-.12.72-.42,2.15t-.66,3L413,46.77l-.6,2.69-13.6,53.94H386.36L369.3,19.86h12.65L392,72.6c.08.64.22,1.43.42,2.39s.4,2,.6,3,.38,2,.54,3,.28,1.85.36,2.57q.12-1.07.42-2.51t.66-3q.36-1.55.66-3c.2-1,.38-1.75.54-2.39l13.36-52.86h10.74l13.6,54.05q.48,1.67,1.07,4.53t1,5.13q.48-2.39,1-5.31t.72-4.47l10.14-53.94h12.17Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M393.91,107.68l-.18-1.63h-9.54L366,17.2h18.1l10,52.6,13.3-52.6h14.88l13.26,52.7,9.91-52.7h17.63L445,106H428.06L414.75,50.87,400.84,106h-6.75Zm38.34-6.95h8.39l16-78.21H449.9l-9.74,51.77c-.15,1-.39,2.45-.7,4.41s-.64,3.76-1,5.4l-2.91,14.62L433.25,84c-.23-1.45-.54-3.13-.93-5s-.73-3.3-1-4.35L418.18,22.52h-3.33l2.53,15.41c.07.45.21,1.13.4,2s.41,1.95.65,3l1.31,5.9Zm-37.58,0h2L410,48l1.12-5q.36-1.6.65-3c.19-.91.32-1.59.4-2l2.57-15.4h-3.13L398.72,73.37q-.23.91-.51,2.28t-.67,3q-.35,1.52-.64,2.92c-.18.87-.31,1.63-.38,2.26Zm-6.14,0h4.6l-1.89-16.85q-.12-1-.34-2.45c-.16-1-.33-2-.52-3s-.39-2-.59-2.94-.35-1.83-.44-2.51l-9.6-50.5h-7.19Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M531.34,79.4a27.55,27.55,0,0,1-1.85,10.26,20.88,20.88,0,0,1-5.61,8,26.08,26.08,0,0,1-9.61,5.19,46.13,46.13,0,0,1-13.84,1.85,38.22,38.22,0,0,1-16.76-3.64,39.54,39.54,0,0,1-12.95-9.84l9-8.71a31.24,31.24,0,0,0,10,7.22,27.67,27.67,0,0,0,11.75,2.68q17.3,0,17.3-12.17a9.48,9.48,0,0,0-1-4.3,9.87,9.87,0,0,0-3.22-3.52,28.41,28.41,0,0,0-5.85-3q-3.58-1.43-8.83-3a107.54,107.54,0,0,1-11.57-3.94,31.35,31.35,0,0,1-8.11-4.71,16.92,16.92,0,0,1-4.83-6.5,24.29,24.29,0,0,1-1.61-9.43,21.42,21.42,0,0,1,8-17.06,26.65,26.65,0,0,1,8.77-4.59,35.45,35.45,0,0,1,10.8-1.61,36.31,36.31,0,0,1,15.15,3,43.84,43.84,0,0,1,12.17,8.35l-8.83,9a26.21,26.21,0,0,0-8.59-6,27.71,27.71,0,0,0-10.86-2q-7.4,0-10.68,3.1a9.71,9.71,0,0,0-3.28,7.28,8.8,8.8,0,0,0,.84,3.88,8.9,8.9,0,0,0,2.86,3.22,25.71,25.71,0,0,0,5.61,2.92q3.58,1.43,9,3,6.2,1.91,11.16,3.94a32.32,32.32,0,0,1,8.41,4.89,19.55,19.55,0,0,1,5.31,6.8A22.34,22.34,0,0,1,531.34,79.4Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M500.44,107.36a41,41,0,0,1-17.92-3.9A42.37,42.37,0,0,1,468.71,93l-1.64-1.9,12.7-12.37,1.85,2a28.77,28.77,0,0,0,9.13,6.61,25.17,25.17,0,0,0,10.64,2.44C516,89.75,516,82.84,516,80.24a6.8,6.8,0,0,0-.67-3.11A7.33,7.33,0,0,0,513,74.59a26,26,0,0,0-5.29-2.74c-2.29-.91-5.18-1.89-8.6-2.9a110.65,110.65,0,0,1-11.84-4,34.12,34.12,0,0,1-8.8-5.13,19.63,19.63,0,0,1-5.58-7.51A27,27,0,0,1,471,41.82a24.08,24.08,0,0,1,9-19.13,29.42,29.42,0,0,1,9.63-5.06,38.25,38.25,0,0,1,11.6-1.74,39.1,39.1,0,0,1,16.25,3.22A46.7,46.7,0,0,1,530.44,28l1.95,1.87-12.63,12.8-1.89-1.95a23.67,23.67,0,0,0-7.72-5.43,25.2,25.2,0,0,0-9.82-1.76c-4.21,0-7.19.8-8.85,2.38A7.09,7.09,0,0,0,489,41.22a6.13,6.13,0,0,0,.57,2.72,6.37,6.37,0,0,0,2,2.24,23.3,23.3,0,0,0,5,2.6c2.31.92,5.23,1.9,8.7,2.9,4.24,1.31,8.07,2.66,11.43,4a35.11,35.11,0,0,1,9.1,5.3,22.3,22.3,0,0,1,6,7.72A25.08,25.08,0,0,1,534,79.4a30.33,30.33,0,0,1-2,11.24,23.6,23.6,0,0,1-6.31,9,28.8,28.8,0,0,1-10.57,5.74A49,49,0,0,1,500.44,107.36Zm-26-16a37.32,37.32,0,0,0,10.39,7.35A35.76,35.76,0,0,0,500.44,102a43.74,43.74,0,0,0,13-1.73,23.57,23.57,0,0,0,8.64-4.64,18.34,18.34,0,0,0,4.91-7,25.06,25.06,0,0,0,1.66-9.28,19.87,19.87,0,0,0-1.6-8.42,17,17,0,0,0-4.6-5.88,29.82,29.82,0,0,0-7.73-4.48c-3.21-1.31-6.88-2.61-10.93-3.86-3.59-1-6.69-2.07-9.15-3.06a28,28,0,0,1-6.2-3.25,10.78,10.78,0,0,1-4.78-9.24A12.31,12.31,0,0,1,487.81,32c2.73-2.58,6.82-3.83,12.51-3.83a30.43,30.43,0,0,1,11.89,2.18,27.92,27.92,0,0,1,7.49,4.75L524.76,30a40.47,40.47,0,0,0-9.43-6,33.85,33.85,0,0,0-14.05-2.75,33,33,0,0,0-10,1.49,24.12,24.12,0,0,0-7.91,4.13,18.76,18.76,0,0,0-7,15,21.82,21.82,0,0,0,1.4,8.39,14.18,14.18,0,0,0,4.09,5.5,28.88,28.88,0,0,0,7.43,4.3,105.52,105.52,0,0,0,11.29,3.84c3.6,1.06,6.65,2.09,9.09,3.07a31.13,31.13,0,0,1,6.4,3.34,12.51,12.51,0,0,1,4.06,4.5,12.15,12.15,0,0,1,1.24,5.49c0,6.76-3.46,14.83-20,14.83a30.44,30.44,0,0,1-12.87-2.93,34.41,34.41,0,0,1-8.87-5.9Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"_Group_\"],[\"static-attr\",\"data-name\",\"<Group>\"],[\"flush-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Path_\"],[\"static-attr\",\"data-name\",\"<Path>\"],[\"static-attr\",\"d\",\"M168.32,7.45a5.88,5.88,0,0,0-.72-3.65,4.16,4.16,0,0,0-2.81-1.06c-2.66,0-3.69,1.6-3.8,1.94s-.72.91-.72,5.21V16.6c0,6.16,2,6.88,4.48,6.88,1,0,4-.34,4-5.24H172c.15,7.94-5.47,7.94-7.11,7.94-3.12,0-7.94-.23-7.94-10V9.12C157,2,160.12,0,165.06,0s6.92,2.58,6.57,7.45Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Compound_Path_\"],[\"static-attr\",\"data-name\",\"<Compound Path>\"],[\"static-attr\",\"d\",\"M174.78,17.14c0-5.17.61-9.39,6.69-9.39s6.69,4.26,6.69,9.39c0,7.75-3,8.89-6.69,8.89s-6.69-1.14-6.69-8.89m10.37-1.22c0-4.83-1.48-5.85-3.69-5.85s-3.69,1-3.69,5.85c0,5.7.72,7.75,3.69,7.75s3.69-2.05,3.69-7.75\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Compound_Path_2\"],[\"static-attr\",\"data-name\",\"<Compound Path>\"],[\"static-attr\",\"d\",\"M201,8.09h2.85V27.43c0,4-2.62,4.86-6.5,4.86-2.93,0-5.59-1.48-5.32-4.71h3.19a2.45,2.45,0,0,0,2.7,2.55,2.83,2.83,0,0,0,3.08-3V23.44h-.11a4.36,4.36,0,0,1-3.88,2.2c-4.79,0-5.7-4.1-5.7-9.35,0-8.09,4.07-8.59,5.51-8.59a4.21,4.21,0,0,1,4.1,2.51H201Zm-3.34,2c-3.23,0-3.34,3.91-3.34,6.23,0,5.66,1.29,7,3.42,7,3.46,0,3.34-4.07,3.34-6.5,0-2.62.19-6.69-3.42-6.69\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Path_2\"],[\"static-attr\",\"data-name\",\"<Path>\"],[\"static-attr\",\"d\",\"M218,25.69V13.49c0-1.9-.65-3.42-3.12-3.42-3.15,0-3.57,2.77-3.57,5.17V25.65h-2.85V11.7c0-1.22-.08-2.43-.19-3.65h3v2.28h.15c1.1-2,2.43-2.62,4.71-2.62,3.76,0,4.71,2.28,4.71,5.74v12.2H218Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Compound_Path_3\"],[\"static-attr\",\"data-name\",\"<Compound Path>\"],[\"static-attr\",\"d\",\"M225.89.53h3.19V3.61h-3.19Zm3,25.15h-2.85V8.09h2.85Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"polygon\",[]],[\"static-attr\",\"id\",\"_Path_3\"],[\"static-attr\",\"data-name\",\"<Path>\"],[\"static-attr\",\"points\",\"244.13 10.71 236.38 23.33 244.39 23.33 244.39 25.69 233.26 25.69 233.26 22.99 240.93 10.49 240.93 10.41 233.64 10.41 233.64 8.09 244.13 8.09 244.13 10.71\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Compound_Path_4\"],[\"static-attr\",\"data-name\",\"<Compound Path>\"],[\"static-attr\",\"d\",\"M256.78,23.14h-.08A4.32,4.32,0,0,1,252.3,26c-3.72,0-4.79-2.39-4.79-5.78,0-5.32,5.21-5.59,9.23-5.47.08-2.32.11-4.86-3-4.86A2.59,2.59,0,0,0,251,13h-3.12c.15-4,2.24-5.28,6-5.28,4.52,0,5.7,2.32,5.7,5.28v8.47a30.5,30.5,0,0,0,.34,4.18h-3.15V23.14Zm-6.46-2.7c0,1.71.84,3.23,2.74,3.23,1.75,0,3.91-1.06,3.61-6.76-2.66.08-6.35-.19-6.35,3.53\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Path_4\"],[\"static-attr\",\"data-name\",\"<Path>\"],[\"static-attr\",\"d\",\"M273.73,25.69V13.49c0-1.9-.65-3.42-3.08-3.42-3.15,0-3.57,2.77-3.57,5.17V25.65h-2.85V11.7c0-1.22-.08-2.43-.19-3.65h3v2.28h.15c1.1-2,2.43-2.62,4.71-2.62,3.76,0,4.71,2.28,4.71,5.74v12.2h-2.93Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"path\",[]],[\"static-attr\",\"id\",\"_Path_5\"],[\"static-attr\",\"data-name\",\"<Path>\"],[\"static-attr\",\"d\",\"M282.24,8.09V4.71l2.85-1.29V8.09h3.84v2.17h-3.84V21c0,1.1,0,2.55,2.62,2.55.23,0,.65-.08,1.29-.15v2.2c-.95.08-1.86.27-2.81.27-2.7,0-4-1.1-4-3.12V10.26h-2.89V8.09Z\"],[\"static-attr\",\"fill\",\"#fff\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/application.hbs" } });
});
define("ews/templates/components/direct-report", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wW/O30fn", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default panel-ews\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" Default panel contents \"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n    Your Direct Report\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"hidden-xs\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"if\"],[[\"get\",[\"displaySubtitle\"]],\"Click the staff name or status to update attrition evaluation\"],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"comment\",\" Table \"],[\"text\",\"\\n  \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"col-sm-1\"],[\"flush-element\"],[\"text\",\"Pic\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"col-sm-3\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"col-sm-4\"],[\"flush-element\"],[\"text\",\"Position\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"col-sm-2\"],[\"flush-element\"],[\"text\",\"Last Evaluated\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"th\",[]],[\"static-attr\",\"class\",\"col-sm-2\"],[\"flush-element\"],[\"text\",\"Status\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"reports\"]]],null,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"report\",\"fullName\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"report\",\"photo\"]],null],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"evaluation.staff\",[\"get\",[\"report\",\"id\"]]],null,0],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"report\",\"position\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"moment-format\"],[[\"helper\",[\"now\"],null,null],\"DD MMMM YYYY\"],null],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"Overdue\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"report\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/components/direct-report.hbs" } });
});
define("ews/templates/components/navbar-ews", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "R9elGesc", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default navbar-ews\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"comment\",\" Brand and toggle get grouped for better mobile display \"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#ews-navbar-collapse\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"comment\",\" Collect the nav links, forms, and other content for toggling \"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse row\"],[\"static-attr\",\"id\",\"ews-navbar-collapse\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"active col-sm-2-4\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"home\"],null,4],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-sm-2-4\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"notifications\"],null,3],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-sm-2-4\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"evaluation\"],null,2],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-sm-2-4\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"history\"],null,1],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"col-sm-2-4\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"dashboard\"],null,0],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n          \\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.container \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"center-block\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"viewBox\",\"0 0 512 415.17\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"nav-mydashboard\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_2\"],[\"static-attr\",\"data-name\",\"Layer 2\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_1-2\"],[\"static-attr\",\"data-name\",\"Layer 1\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M479.38,0H142.64A32.66,32.66,0,0,0,110,32.62V132.75a44.06,44.06,0,0,0-35.39,46.1L76,200.11l3.24,49.66a55.09,55.09,0,0,0,94,35.28H479.38A32.66,32.66,0,0,0,512,252.43V32.62A32.66,32.66,0,0,0,479.38,0Zm-378,159.78a23.47,23.47,0,0,1,17.29-7.5h26.29l-5.68,15.16c-1.56,2.37-12.21,16.66-43.55,20.88l-.7-10.8A23.46,23.46,0,0,1,101.33,159.78Zm63.39-2.23a24.14,24.14,0,0,1,2.4,2.23,23.46,23.46,0,0,1,6.35,17.74l-.13,2a59.94,59.94,0,0,1-10.49-3.74,20.28,20.28,0,0,1-4-2.57Zm-13.78,119A34.7,34.7,0,0,1,99.6,248.44L97,208.71c24.8-3.11,40.26-11.85,49.33-19.43a42.07,42.07,0,0,0,7.15,4.58c4.09,2.11,10.19,4.22,18.5,6.39l-3.14,48.19A34.53,34.53,0,0,1,150.95,276.59ZM451.69,249a10.2,10.2,0,1,0,0-20.4H440.61V60.48a10.2,10.2,0,0,0-10.2-10.2H381.16A10.2,10.2,0,0,0,371,60.48V228.6H358.28v-73a10.2,10.2,0,0,0-10.2-10.2H298.84a10.2,10.2,0,0,0-10.2,10.2v73H276.69v-128a10.2,10.2,0,0,0-10.2-10.2H217.24a10.2,10.2,0,0,0-10.2,10.2v128H190.58L192.91,193l.92-14.18a44.27,44.27,0,0,0-10.24-31.23V46.76a10.2,10.2,0,0,0-20.4,0V134a44,44,0,0,0-13.36-2.09H130.42V32.62A12.23,12.23,0,0,1,142.64,20.4H479.38A12.23,12.23,0,0,1,491.6,32.62V252.43a12.23,12.23,0,0,1-12.22,12.22H186.13a55.4,55.4,0,0,0,3.07-14.88l0-.77H451.69Zm-195.4-20.4H227.44V110.77h28.85Zm81.59,0H309V165.83h28.85Zm82.32,0H391.36V70.68h28.85Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M267.9,374.63a84.16,84.16,0,0,0-82.83-69.18H169.5a10.2,10.2,0,0,0-7.21,3L134.23,336.5l-28.06-28.06a10.2,10.2,0,0,0-7.21-3H83.39A84.16,84.16,0,0,0,.56,374.63a34.41,34.41,0,0,0,33.86,40.54H234a34.41,34.41,0,0,0,33.86-40.54Zm-23.1,15.11a14,14,0,0,1-10.75,5H34.41a14,14,0,0,1-13.79-16.51,63.76,63.76,0,0,1,62.76-52.41H94.73L127,358.14a10.2,10.2,0,0,0,14.42,0l32.29-32.29h11.34a63.76,63.76,0,0,1,62.76,52.41h0A14,14,0,0,1,244.79,389.74Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M472.22,30A10.2,10.2,0,0,0,462,40.19V78.94a10.2,10.2,0,0,0,20.4,0V40.19A10.2,10.2,0,0,0,472.22,30Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M472.22,101.38a10.2,10.2,0,0,0-10.2,10.2v5.1a10.2,10.2,0,1,0,20.4,0v-5.1A10.2,10.2,0,0,0,472.22,101.38Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"My Dashboard\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"center-block\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"viewBox\",\"0 0 47.93 44.8\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"nav-history\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_2\"],[\"static-attr\",\"data-name\",\"Layer 2\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_1-2\"],[\"static-attr\",\"data-name\",\"Layer 1\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M47.68,17.16a1,1,0,0,0-.77-.36H44.8V5.41A1.42,1.42,0,0,0,43.39,4H18.85l-2-3.31A1.41,1.41,0,0,0,15.65,0h-11A1.42,1.42,0,0,0,3.2,1.41V16.8H1A1,1,0,0,0,0,18l3.93,26a1,1,0,0,0,1,.87H43a1,1,0,0,0,1-.87l3.93-26a1,1,0,0,0-.23-.82ZM4.8,1.6H15.55l2,3.31a1.43,1.43,0,0,0,1.21.69H43.2V16.8h-.8V13.6h-.8V11.2h-.8V8.8H7.2v2.4H6.4v2.4H5.6v3.2H4.8ZM7.2,15.2H40.8v1.6H7.2ZM8,12.8H40v.8H8Zm31.2-1.6H8.8v-.8H39.2Zm3.28,32h-37L1.7,18.4H46.23Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"History\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"center-block\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"viewBox\",\"0 0 288 376\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"nav=staffeval\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_2\"],[\"static-attr\",\"data-name\",\"Layer 2\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_1-2\"],[\"static-attr\",\"data-name\",\"Layer 1\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M286.72,297.69c.09-.12.18-.23.27-.35l.06-.1c.09-.13.17-.26.24-.4l0-.08a4.81,4.81,0,0,0,.21-.45l0-.06a5.22,5.22,0,0,0,.18-.5s0,0,0-.06.09-.34.13-.51,0-.09,0-.14.05-.29.07-.44,0-.4,0-.6V6a6,6,0,0,0-6-6H6A6,6,0,0,0,0,6V370a6,6,0,0,0,6,6H206c.2,0,.4,0,.6,0l.44-.07.14,0,.5-.12.07,0a5,5,0,0,0,.48-.17l.07,0,.44-.21.09,0,.38-.23.12-.07.34-.25.13-.1.39-.35,0,0,76-76,0,0,.36-.4.09-.12ZM12,12H276V288H206a6,6,0,0,0-6,6v70H12ZM267.52,300,212,355.52V300Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M119,76H234a6,6,0,1,0,0-12H119a6,6,0,0,0,0,12Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M65.76,90.24a6,6,0,0,0,8.48,0l32-32a6,6,0,1,0-8.48-8.48L70,77.52l-7.76-7.76a6,6,0,1,0-8.48,8.48Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M104,126a6,6,0,0,0,6,6H234a6,6,0,1,0,0-12H110a6,6,0,0,0-6,6Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M86,104H54a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H86a6,6,0,0,0,6-6V110a6,6,0,0,0-6-6Zm-6,32H60V116H80Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M234,176H110a6,6,0,0,0,0,12H234a6,6,0,0,0,0-12Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M86,160H54a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H86a6,6,0,0,0,6-6V166a6,6,0,0,0-6-6Zm-6,32H60V172H80Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M234,232H110a6,6,0,1,0,0,12H234a6,6,0,1,0,0-12Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M86,216H54a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H86a6,6,0,0,0,6-6V222a6,6,0,0,0-6-6Zm-6,32H60V228H80Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M182,288H110a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M86,272H54a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H86a6,6,0,0,0,6-6V278a6,6,0,0,0-6-6Zm-6,32H60V284H80Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"Staff Evaluation\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"center-block\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"viewBox\",\"0 0 512 366.65\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"nav-notification\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_2\"],[\"static-attr\",\"data-name\",\"Layer 2\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_1-2\"],[\"static-attr\",\"data-name\",\"Layer 1\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M478.33,111.14H300.8a153.64,153.64,0,0,0-45.13-72C222.75,9.62,180.22-3.92,135.92,1,64.87,8.84,8,66.19.81,137.35a153.43,153.43,0,0,0,120.11,166l37.84,37.84a16.57,16.57,0,0,0,28.28-11.72v-26.5a153.77,153.77,0,0,0,18.17-5.26v1a33.71,33.71,0,0,0,33.67,33.67h56.54l30.12,30.12a14,14,0,0,0,24-9.93V332.41h128.8A33.71,33.71,0,0,0,512,298.74V144.81A33.71,33.71,0,0,0,478.33,111.14ZM177.63,288.49a8,8,0,0,0-6.61,7.89v33.06a.54.54,0,0,1-.91.38l-39.54-39.54a8,8,0,0,0-4.11-2.19A137.4,137.4,0,0,1,137.68,16.92,144.33,144.33,0,0,1,153.57,16,135.79,135.79,0,0,1,245,51a137.27,137.27,0,0,1-67.35,237.44ZM496,298.74a17.66,17.66,0,0,1-17.64,17.64H341.51a8,8,0,0,0-8,8v23.4l-29.07-29.07a8,8,0,0,0-5.67-2.35H238.89a17.66,17.66,0,0,1-17.64-17.64v-7.82a153.16,153.16,0,0,0,83.23-163.74H478.33A17.66,17.66,0,0,1,496,144.81Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M438.46,173.35l-79.84,79.84-37.07-37.07a8,8,0,0,0-11.34,11.34l42.74,42.74a8,8,0,0,0,11.34,0l85.51-85.51a8,8,0,1,0-11.34-11.34Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M153.38,213.79h0a8,8,0,0,0-8,8h0a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8h0A8,8,0,0,0,153.38,213.79Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M153.37,77a50.83,50.83,0,0,0-50.77,50.77,8,8,0,0,0,16,0A34.78,34.78,0,0,1,153.38,93a35.4,35.4,0,0,1,34.74,34.74A35,35,0,0,1,163.38,161a25,25,0,0,0-18,24v2.55a8,8,0,0,0,16,0v-2.55a9.06,9.06,0,0,1,6.59-8.67,51.09,51.09,0,0,0,36.17-48.64A51.43,51.43,0,0,0,153.37,77Z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"Notification\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"class\",\"center-block\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"viewBox\",\"0 0 48 46.69\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"title\",[]],[\"flush-element\"],[\"text\",\"nav-home\"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_2\"],[\"static-attr\",\"data-name\",\"Layer 2\"],[\"flush-element\"],[\"text\",\"\\n                    \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"id\",\"Layer_1-2\"],[\"static-attr\",\"data-name\",\"Layer 1\"],[\"flush-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11.2,28.29H22.4v-8H11.2Zm1.6-1.6v-2.4h8v2.4Zm8-4.8v.8h-8v-.8Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M11.2,31.49v9.6H22.4v-9.6Zm4.8,1.6v2.4H12.8v-2.4Zm-3.2,4H16v2.4H12.8Zm4.8,2.4v-2.4h3.2v2.4Zm3.2-4H17.6v-2.4h3.2Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M25.6,28.29H36.8v-8H25.6Zm1.6-1.6v-.8h8v.8Zm8-4.8v2.4h-8v-2.4Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"d\",\"M47.2,37.89a.8.8,0,0,0-.8.8v.8h-.8v-.8a.8.8,0,0,0-1.6,0v.8h-.8V23.33a3.15,3.15,0,0,0,3.64-.74,3.2,3.2,0,0,0-.37-4.7L26.18,2,24,0,21.88,2,1.53,17.89a3.19,3.19,0,0,0-.37,4.7,3.17,3.17,0,0,0,3.64.74V39.49H4v-.8a.8.8,0,0,0-1.6,0v.8H1.6v-.8a.8.8,0,0,0-1.6,0v7.2a.8.8,0,0,0,1.6,0v-.8h.8v.8a.8.8,0,0,0,1.6,0v-.8h.8v1.6H43.2v-1.6H44v.8a.8.8,0,0,0,1.6,0v-.8h.8v.8a.8.8,0,0,0,1.6,0v-7.2a.8.8,0,0,0-.8-.8ZM2.33,21.5a1.59,1.59,0,0,1,.19-2.34l20.39-16,1.09-1,1.14,1.05L45.48,19.16a1.59,1.59,0,0,1,.19,2.34,1.59,1.59,0,0,1-2.15.18l-.32-.25L24,6.63,5.11,21.19h0l-.63.49a1.59,1.59,0,0,1-2.15-.18Zm-.73,22v-2.4h.8v2.4Zm2.4,0v-2.4h.8v2.4Zm23.2,1.6v-12h8v12Zm14.4,0H36.8V31.49H25.6v13.6H6.4V22.22L24,8.65,41.6,22.22Zm1.6-1.6v-2.4H44v2.4Zm2.4,0v-2.4h.8v2.4Zm0,0\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                    \"],[\"close-element\"],[\"text\",\"\\n                  \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"Home\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/components/navbar-ews.hbs" } });
});
define("ews/templates/components/user-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KADetExw", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-card\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"photo\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"arrow-down pull-right\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-triangle-bottom\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-summary pull-right\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-position\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"position\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/components/user-card.hbs" } });
});
define("ews/templates/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+lDRG7HZ", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"navbar-ews\"]],false],[\"text\",\"\\n\\nDASHBOARD PAGE CONTENT\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/dashboard.hbs" } });
});
define("ews/templates/evaluation", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uZDjdWG9", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"navbar-ews\"]],false],[\"text\",\"\\n\\nEVALUATION PAGE CONTENT\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/evaluation.hbs" } });
});
define("ews/templates/evaluation/staff", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JynHh5sw", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/evaluation/staff.hbs" } });
});
define("ews/templates/history", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oaRRNdtY", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"navbar-ews\"]],false],[\"text\",\"\\n\\nHISTORY PAGE CONTENT\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/history.hbs" } });
});
define("ews/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6UMoSljm", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"navbar-ews\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"direct-report\"],null,[[\"reports\"],[[\"get\",[\"model\",\"subordinates\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/home.hbs" } });
});
define("ews/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nIR8Hbbb", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/index.hbs" } });
});
define("ews/templates/notifications", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "HVBxgk3n", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"navbar-ews\"]],false],[\"text\",\"\\n\\nNOTIFICATION PAGE CONTENT\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ews/templates/notifications.hbs" } });
});
define('ews/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/config.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint.\n');
  });
});
define('ews/tests/mirage/mirage/scenarios/default.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/scenarios/default.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint.\n');
  });
});
define('ews/tests/mirage/mirage/serializers/application.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/serializers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint.\n');
  });
});


define('ews/config/environment', ['ember'], function(Ember) {
  var prefix = 'ews';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ews/app")["default"].create({"name":"ews","version":"0.0.0+7dd43fb7"});
}
//# sourceMappingURL=ews.map
