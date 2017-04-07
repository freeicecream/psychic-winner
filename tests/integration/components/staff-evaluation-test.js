import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('staff-evaluation', 'Integration | Component | staff evaluation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{staff-evaluation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#staff-evaluation}}
      template block text
    {{/staff-evaluation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
