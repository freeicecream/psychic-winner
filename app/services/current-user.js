import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  load() {
    let userId = this.get('session.data.authenticated.user_id');
    if (userId) {
      return this.get('store').findRecord('user', userId).then((user) => {
        this.set('user', user);
      }, (error) => {
        console.log(error);
      });
    } else {
      return Ember.RSVP.resolve();
    }
  }
});
