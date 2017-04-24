'use strict';

define('ews/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('ews/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('ews/tests/components/direct-report.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/direct-report.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/direct-report.js should pass ESLint.\n');
  });
});
define('ews/tests/components/hierarchy-item.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/hierarchy-item.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hierarchy-item.js should pass ESLint.\n');
  });
});
define('ews/tests/components/history-hierarchy.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/history-hierarchy.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/history-hierarchy.js should pass ESLint.\n');
  });
});
define('ews/tests/components/navbar-ews.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/navbar-ews.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navbar-ews.js should pass ESLint.\n');
  });
});
define('ews/tests/components/staff-evaluation.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/staff-evaluation.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/staff-evaluation.js should pass ESLint.\n');
  });
});
define('ews/tests/components/staff-history.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/staff-history.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/staff-history.js should pass ESLint.\n');
  });
});
define('ews/tests/components/user-card.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/user-card.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-card.js should pass ESLint.\n');
  });
});
define('ews/tests/components/warning-info-report.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/warning-info-report.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/warning-info-report.js should pass ESLint.\n');
  });
});
define('ews/tests/components/warning-info.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/warning-info.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/warning-info.js should pass ESLint.\n');
  });
});
define('ews/tests/components/warning-subordinates-notification.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/warning-subordinates-notification.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/warning-subordinates-notification.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/collection-delimiter.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/collection-delimiter.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/collection-delimiter.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('ews/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/greater-than.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/greater-than.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/greater-than.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/is-even.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/is-even.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/is-even.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ews/tests/helpers/start-app', 'ews/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _ewsTestsHelpersStartApp, _ewsTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _ewsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _ewsTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ews/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/or.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/or.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/or.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/resolver', ['exports', 'ews/resolver', 'ews/config/environment'], function (exports, _ewsResolver, _ewsConfigEnvironment) {

  var resolver = _ewsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _ewsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ewsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ews/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('ews/tests/helpers/start-app', ['exports', 'ember', 'ews/app', 'ews/config/environment'], function (exports, _ember, _ewsApp, _ewsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _ewsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _ewsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ews/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/direct-report-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('direct-report', 'Integration | Component | direct report', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'yDRKsR05',
      'block': '{"statements":[["append",["unknown",["direct-report"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'QRJ9sM0h',
      'block': '{"statements":[["text","\\n"],["block",["direct-report"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/direct-report-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/direct-report-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/direct-report-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/hierarchy-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('hierarchy-item', 'Integration | Component | hierarchy item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'SND52WPE',
      'block': '{"statements":[["append",["unknown",["hierarchy-item"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '2sdwwu1K',
      'block': '{"statements":[["text","\\n"],["block",["hierarchy-item"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/hierarchy-item-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/hierarchy-item-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hierarchy-item-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/history-hierarchy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('history-hierarchy', 'Integration | Component | history hierarchy', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'IcTIgxO/',
      'block': '{"statements":[["append",["unknown",["history-hierarchy"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'AmjdiKrO',
      'block': '{"statements":[["text","\\n"],["block",["history-hierarchy"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/history-hierarchy-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/history-hierarchy-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/history-hierarchy-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/navbar-ews-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('navbar-ews', 'Integration | Component | navbar ews', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '1F5VKrZa',
      'block': '{"statements":[["append",["unknown",["navbar-ews"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '34GfiOZQ',
      'block': '{"statements":[["text","\\n"],["block",["navbar-ews"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/navbar-ews-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/navbar-ews-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/navbar-ews-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/staff-evaluation-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('staff-evaluation', 'Integration | Component | staff evaluation', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'aJKE9YK+',
      'block': '{"statements":[["append",["unknown",["staff-evaluation"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'kL5+bLSK',
      'block': '{"statements":[["text","\\n"],["block",["staff-evaluation"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/staff-evaluation-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/staff-evaluation-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/staff-evaluation-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/staff-history-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('staff-history', 'Integration | Component | staff history', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'hYlbVjCp',
      'block': '{"statements":[["append",["unknown",["staff-history"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'ah1XP6Zx',
      'block': '{"statements":[["text","\\n"],["block",["staff-history"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/staff-history-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/staff-history-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/staff-history-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/user-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('user-card', 'Integration | Component | user card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'WPWngb3C',
      'block': '{"statements":[["append",["unknown",["user-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'X2UPIis3',
      'block': '{"statements":[["text","\\n"],["block",["user-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/user-card-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/user-card-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user-card-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/warning-info-report-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('warning-info-report', 'Integration | Component | warning info report', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'Txgfbd2E',
      'block': '{"statements":[["append",["unknown",["warning-info-report"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'tVaMhlWP',
      'block': '{"statements":[["text","\\n"],["block",["warning-info-report"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/warning-info-report-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/warning-info-report-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/warning-info-report-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/warning-info-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('warning-info', 'Integration | Component | warning info', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'hGbI+YdD',
      'block': '{"statements":[["append",["unknown",["warning-info"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'c4lbCz16',
      'block': '{"statements":[["text","\\n"],["block",["warning-info"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/warning-info-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/warning-info-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/warning-info-test.js should pass ESLint.\n');
  });
});
define('ews/tests/integration/components/warning-subordinates-notification-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('warning-subordinates-notification', 'Integration | Component | warning subordinates notification', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'K053Wy+x',
      'block': '{"statements":[["append",["unknown",["warning-subordinates-notification"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'oy3hdhR+',
      'block': '{"statements":[["text","\\n"],["block",["warning-subordinates-notification"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ews/tests/integration/components/warning-subordinates-notification-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/warning-subordinates-notification-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/warning-subordinates-notification-test.js should pass ESLint.\n');
  });
});
define('ews/tests/models/activity.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/activity.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/activity.js should pass ESLint.\n');
  });
});
define('ews/tests/models/evaluation.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/evaluation.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/evaluation.js should pass ESLint.\n');
  });
});
define('ews/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/user.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint.\n');
  });
});
define('ews/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('ews/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/dashboard.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/dashboard.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/evaluation.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/evaluation.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/evaluation.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/evaluation/staff-evaluation.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/evaluation/staff-evaluation.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/evaluation/staff-evaluation.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/history.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/history.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/history.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/history/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/history/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/history/index.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/history/staff-history.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/history/staff-history.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/history/staff-history.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/home.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/home.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint.\n');
  });
});
define('ews/tests/routes/notifications.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/notifications.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/notifications.js should pass ESLint.\n');
  });
});
define('ews/tests/serializers/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint.\n');
  });
});
define('ews/tests/services/authentication.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/authentication.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/authentication.js should pass ESLint.\n');
  });
});
define('ews/tests/test-helper', ['exports', 'ews/tests/helpers/resolver', 'ember-qunit'], function (exports, _ewsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_ewsTestsHelpersResolver['default']);
});
define('ews/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ews/tests/unit/adapters/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/collection-delimiter-test', ['exports', 'ews/helpers/collection-delimiter', 'qunit'], function (exports, _ewsHelpersCollectionDelimiter, _qunit) {

  (0, _qunit.module)('Unit | Helper | collection delimiter');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersCollectionDelimiter.collectionDelimiter)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/collection-delimiter-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/collection-delimiter-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/collection-delimiter-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/find-warning-subordinates-test', ['exports', 'ews/helpers/find-warning-subordinates', 'qunit'], function (exports, _ewsHelpersFindWarningSubordinates, _qunit) {

  (0, _qunit.module)('Unit | Helper | find warning subordinates');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersFindWarningSubordinates.findWarningSubordinates)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/find-warning-subordinates-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/find-warning-subordinates-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/find-warning-subordinates-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/greater-than-test', ['exports', 'ews/helpers/greater-than', 'qunit'], function (exports, _ewsHelpersGreaterThan, _qunit) {

  (0, _qunit.module)('Unit | Helper | greater than');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersGreaterThan.greaterThan)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/greater-than-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/greater-than-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/greater-than-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/is-even-test', ['exports', 'ews/helpers/is-even', 'qunit'], function (exports, _ewsHelpersIsEven, _qunit) {

  (0, _qunit.module)('Unit | Helper | is even');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersIsEven.isEven)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/is-even-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/is-even-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-even-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/last-index-test', ['exports', 'ews/helpers/last-index', 'qunit'], function (exports, _ewsHelpersLastIndex, _qunit) {

  (0, _qunit.module)('Unit | Helper | last index');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersLastIndex.lastIndex)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/last-index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/last-index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/last-index-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/or-test', ['exports', 'ews/helpers/or', 'qunit'], function (exports, _ewsHelpersOr, _qunit) {

  (0, _qunit.module)('Unit | Helper | or');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersOr.or)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/or-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/or-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/or-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/panel-open-state-test', ['exports', 'ews/helpers/panel-open-state', 'qunit'], function (exports, _ewsHelpersPanelOpenState, _qunit) {

  (0, _qunit.module)('Unit | Helper | panel open state');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersPanelOpenState.panelOpenState)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/panel-open-state-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/panel-open-state-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/panel-open-state-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/helpers/warning-subordinates-notification-test', ['exports', 'ews/helpers/warning-subordinates-notification', 'qunit'], function (exports, _ewsHelpersWarningSubordinatesNotification, _qunit) {

  (0, _qunit.module)('Unit | Helper | warning subordinates notification');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _ewsHelpersWarningSubordinatesNotification.warningSubordinatesNotification)([42]);
    assert.ok(result);
  });
});
define('ews/tests/unit/helpers/warning-subordinates-notification-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/warning-subordinates-notification-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/warning-subordinates-notification-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/models/activity-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('activity', 'Unit | Model | activity', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ews/tests/unit/models/activity-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/activity-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/activity-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/models/evaluation-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('evaluation', 'Unit | Model | evaluation', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ews/tests/unit/models/evaluation-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/evaluation-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/evaluation-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ews/tests/unit/models/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/user-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/dashboard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/dashboard-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/dashboard-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/evaluation-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:evaluation', 'Unit | Route | evaluation', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/evaluation-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/evaluation-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/evaluation-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/evaluation/staff-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:evaluation/staff', 'Unit | Route | evaluation/staff', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/evaluation/staff-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/evaluation/staff-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/evaluation/staff-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/history-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:history', 'Unit | Route | history', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/history-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/history-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/history-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/history/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:history/index', 'Unit | Route | history/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/history/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/history/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/history/index-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/history/staff-history-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:history/staff-history', 'Unit | Route | history/staff history', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/history/staff-history-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/history/staff-history-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/history/staff-history-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/home-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/home-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/routes/notification-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:notification', 'Unit | Route | notification', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ews/tests/unit/routes/notification-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/notification-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/notification-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ews/tests/unit/serializers/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint.\n');
  });
});
define('ews/tests/unit/services/authentication-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:authentication', 'Unit | Service | authentication', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ews/tests/unit/services/authentication-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/authentication-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/authentication-test.js should pass ESLint.\n');
  });
});
require('ews/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
