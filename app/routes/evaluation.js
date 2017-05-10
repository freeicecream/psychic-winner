import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
