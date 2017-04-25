import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user', { inverse: 'evaluation' }),
  showInWarning: DS.attr(),
  lastUpdated: DS.attr('date'),
  rating: DS.attr()
});
