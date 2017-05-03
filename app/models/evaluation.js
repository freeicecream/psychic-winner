import DS from 'ember-data';
import Ember from 'ember'

export default DS.Model.extend({
  owner: DS.belongsTo('user', { inverse: 'evaluation' }),
  lastUpdated: DS.attr('date'),
  rating: DS.attr(),
  parameter: DS.attr(),

  ratedParameter: Ember.computed('rating', 'parameter', function() {
    if(this.get('rating') == undefined) {
      return 'Not Rated';
    } else {
      let parameter = (parameter == undefined?'':` - ${this.get('parameter')}`);
      return `Rated ${this.get('rating')}${parameter}`;
    }
  })
});
