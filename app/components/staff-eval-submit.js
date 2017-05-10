import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  summary: null,
  ratings: [],

  actions: {
    toggleModal: function(criteria, comments) {
      if(criteria) {
        let summary = '';
        criteria.forEach(criterion => {
          if (criterion.groupValue) {
            let comment = '';
            if(criterion.groupValue > 2) {
              //find id in comments
              if(comments.hasOwnProperty(criterion.id)) {
                comment = ' - ' + comments[criterion.id];
                criterion.comment = comments[criterion.id];
              }
            }
            summary = summary + 'Rated ' + criterion.groupValue + ' in ' + criterion.name + comment + '\n ';
          }
        });
        if(summary) {
          this.set('summary', summary);
          this.set('ratings', criteria);
          this.toggleProperty('isShowingModal');
        } else {
           alert('Please evaluate first.');
         }
      } else {
        this.toggleProperty('isShowingModal');
      }
    }
  }
});
