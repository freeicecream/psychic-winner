import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  authentication: Ember.inject.service(),

  beforeModel() {
    this._super(...arguments);
    this.get('authentication').loadCurrentUser();
  },

  model() {
    return this.get('authentication.currentUser');
  }
});
