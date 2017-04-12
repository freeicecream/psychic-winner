import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('warning-subordinates-notification', 'Integration | Component | warning subordinates notification', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{warning-subordinates-notification}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#warning-subordinates-notification}}
      template block text
    {{/warning-subordinates-notification}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
