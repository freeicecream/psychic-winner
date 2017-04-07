import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    this._super(...arguments);
    if (transition.targetName === 'evaluation.index') {
      this.transitionTo('evaluation.staff-evaluation', this.modelFor('application').hasMany('subordinates').ids().shift());
    } 
  }
});
