import Ember from 'ember';

export default Ember.Controller.extend({
  isSent: false,
  isError: false,
  sending: false,

  actions: {
    send: function(subject, from, to, body) {
      this.toggleProperty('sending');

      let self = this;
      
      let post = this.get('store').createRecord('email', {
        subject: subject,
        from: from,
        to: to,
        body: body
      });

      function transitionToPost(post) {
        //need to set model activities
        self.toggleProperty('isSent');
        self.toggleProperty('sending');
      }

      function sendStatus(status, reason) {
        self.toggleProperty('isError');
        self.toggleProperty('sending');
      }

      post.save().then(transitionToPost).catch(status);

      // => POST to '/posts'
      // => transitioning to posts.show route
    }
  }
});
