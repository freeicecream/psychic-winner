import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  beforeModel(transition) {
    this._super(...arguments);
    if (transition.targetName === 'evaluation.index') {
      if (!this.get('currentUser.user').hasMany('talents').ids().shift()) {
        this.transitionTo('evaluation.staff-evaluation', this.get('currentUser.user').hasMany('subordinates').ids().shift());
      }
    } 
  }
});
