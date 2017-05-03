import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
