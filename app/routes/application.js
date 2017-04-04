import Ember from 'ember';

export default Ember.Route.extend({

  authentication: Ember.inject.service(),

  beforeModel() {
    this._super(...arguments);
    this.get('authentication').loadCurrentUser();
  },

  model() {
    return this.get('authentication.currentUser');
  }
});
