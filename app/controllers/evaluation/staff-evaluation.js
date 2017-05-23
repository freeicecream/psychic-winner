import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  isEvaluated: false,
  isError: false,
  processing: false,
  saved: false,
  status: ['incomplete', 'completed'],

  actions: {
    evaluate: function(criteria) {
      this.toggleProperty('processing');

      let ratingValues = criteria.map(function(item) {
        return {
          rating: item.groupValue,
          comment: item.comment
        };
      });

      let evaluation = this.get('store').createRecord('evaluation', {
        owner: this.get('model'),
        lastUpdated: new Date(),
        ratingValues: ratingValues
      });
      
      evaluation.save().then((evaluation) => {
        this.get('model').set('evaluation', evaluation);
        this.get('model').save();
        this.toggleProperty('processing');
      }, (error) => {
        console.log(error);
      });

      // //save ratings
      // let actor = owner.get('superior');
      // let self = this;
      // let status = 1;
      // if(later) {
      //   status = 0;
      // }

      // function transitionToPost(post) {
      //   self.set('isEvaluated', true);
      //   self.set('processing', false);
      // }

      // function sendStatus(status, reason) {
      //   self.set('isError', true);
      //   self.set('processing', false);
      // }

      // ratings.forEach(rating => {
      //   //save evaluation
      //   let evaluation = this.get('store').createRecord('evaluation', {
      //     'owner': owner.id,
      //     'lastUpdated': moment.now(),
      //     'rating': rating.groupValue,
      //     'parameter': rating.name,
      //     'comment': rating.comment,
      //     'status': this.status[status]
      //   });

      //   evaluation.save().then(transitionToPost).catch(sendStatus);

      //   if(this.status[status] == 'completed') {
      //     //save activities
      //     let activities = this.get('store').createRecord('activity', {
      //       'actorId': actor.get('id'),
      //       'createdOn': moment.now(),
      //       'rating': rating.groupValue,
      //       'parameter': rating.name,
      //       'comment': rating.comment,
      //       'ownerId': owner.id
      //     });

      //     activities.save().then(transitionToPost).catch(sendStatus);
      //   } else {
      //     this.set('saved', true);
      //     let self = this;
      //     Ember.run.later((function() {
      //       self.set('saved', false);
      //       self.set('isEvaluated', false);
      //       self.set('processing', false);
      //     }), 1500);
      //   }
      // });
    }
  }
});
