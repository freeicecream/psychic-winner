import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  owner: DS.belongsTo('user', { inverse: 'evaluation' }),
  lastUpdated: DS.attr('date'),
  rating: DS.attr(),
  parameter: DS.attr(),
  comment: DS.attr(),
  ratingValues: DS.attr(),

  isOverdue: Ember.computed('lastUpdated', function() {
    if (this.get('lastUpdated')) {
      let now = moment();
      if (now.diff(moment(this.get('lastUpdated')), 'days') > 14) {
        return true;
      }
      return false;
    }
    return true;
  }),

  rating: Ember.computed('ratingValues.@each.rating', function() {
    if (this.get('ratingValues.length')) {
      return this.get('ratingValues').reduce(function(prev, curr) {
        return prev > curr.rating ? prev : curr.rating; 
      }, 0);
    } else {
      return null;
    }
  }),

  ratedParameter: Ember.computed('rating', 'parameter', function() {
    if (!this.get('rating')) {
      return 'Not Rated';
    } else {
      return `Rated ${this.get('rating')} - ${this.get('parameter')}`;
    }
  })
});
