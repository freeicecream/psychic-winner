import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  isShowingAddContact: false,

  

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    toggleAddContact: function() {
      this.toggleProperty('isShowingAddContact');
    }
  }
});
