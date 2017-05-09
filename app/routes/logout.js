import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    this._super(...arguments);
    this.get('session').invalidate();
    this.transitionTo('login');
  }
});
