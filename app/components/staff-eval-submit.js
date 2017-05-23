import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  summary: null,
  ratings: [],

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
      // if(criteria) {
      //   let summary = '';
      //   let err = false;
      //   // criteria.forEach(criterion => {
      //   //   if (criterion.groupValue) {
      //   //     let comment = '';
      //   //     if(criterion.groupValue > 2) {
      //   //       //find id in comments
      //   //       if(comments.hasOwnProperty(criterion.id)) {
      //   //         comment = ' - ' + comments[criterion.id];
      //   //         criterion.comment = comments[criterion.id];
      //   //       } else {
      //   //         err = true;
      //   //         alert('Comments are required for ratings higher than 2.');
      //   //       }
      //   //     }
      //   //     summary = summary + 'Rated ' + criterion.groupValue + ' in ' + criterion.name + comment + '\n ';
      //   //   }
      //   // });
      //   if(/*summary &&*/ !err) {
      //     this.set('summary', summary);
      //     this.set('ratings', criteria);
      //     this.toggleProperty('isShowingModal');
      //   } else {
      //     if(!err) {
      //        alert('Please evaluate first.');
      //      }
      //    }
      // } else {
      //   this.toggleProperty('isShowingModal');
      // }
    }
  }
});
