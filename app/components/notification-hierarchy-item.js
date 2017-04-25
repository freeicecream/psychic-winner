import Ember from 'ember';

export default Ember.Component.extend({
  item: null,

  name: Ember.computed('item', function() {
    return 'panelNotification' + this.get('item.id');
  })
});
