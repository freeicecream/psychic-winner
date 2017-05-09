import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  isEvaluated: false,
  isError: false,
  processing: false,

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    evaluate: function() {
      this.toggleProperty('processing');
      Ember.run.later(this, function() {
        this.toggleProperty('isEvaluated');
        this.toggleProperty('processing');
      }, 1000);
    }
  }
});
