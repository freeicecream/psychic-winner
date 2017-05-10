import Ember from 'ember';

export default Ember.Component.extend({
  photo: null,
  name: null,
  position: null,
  dropdown: false,

  actions: {
    toggleDropdown() {
      this.toggleProperty('dropdown');
    }
  }
});
