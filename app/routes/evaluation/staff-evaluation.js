import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.staffid);
  },

  actions: {
    willTransition(transition) {
      if (transition.targetName === 'evaluation.index') {
        transition.abort();
      } 
    }
  }
});
