import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  isEvaluated: false,
  isError: false,
  processing: false,

  actions: {
    evaluate: function(ratings, owner) {
      this.toggleProperty('processing');

      //save ratings
      let actor = owner.get('superior');

      let self = this;

      function transitionToPost(post) {
        self.set('isEvaluated', true);
        self.set('processing', false);
      }

      function sendStatus(status, reason) {
        self.set('isError', true);
        self.set('processing', false);
      }

      ratings.forEach(rating => {

        //save evaluation
        let evaluation = this.get('store').createRecord('evaluation', {
          'owner': owner.id,
          'lastUpdated': moment.now(),
          'rating': rating.groupValue,
          'parameter': rating.name,
          'comment': rating.comment
        });

        evaluation.save().then(transitionToPost).catch(sendStatus);

        //save activities
        let activities = this.get('store').createRecord('activity', {
          'actorId': actor.get('id'),
          'createdOn': moment.now(),
          'rating': rating.groupValue,
          'parameter': rating.name,
          'comment': rating.comment,
          'ownerId': owner.id
        });

        activities.save().then(transitionToPost).catch(sendStatus);

      });
    }
  }
});
