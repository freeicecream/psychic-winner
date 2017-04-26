import DS from 'ember-data';
import Ember from 'ember'

export default DS.Model.extend({
  owner: DS.belongsTo('user', { inverse: 'evaluation' }),
  lastUpdated: DS.attr('date'),
  rating: DS.attr(),
  parameter: DS.attr(),

  ratedParameter: Ember.computed('rating', 'parameter', function() {
    return `Rated ${this.get('rating')} - ${this.get('parameter')}`;
  })
});
