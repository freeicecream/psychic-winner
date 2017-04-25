import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  currentUser: null,

  loadCurrentUser() {
    this.set('currentUser', this.get('store').findRecord('user', 8));
  }
});
