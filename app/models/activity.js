import DS from 'ember-data';

export default DS.Model.extend({
  createdOn: DS.attr('date'),
  rating: DS.attr(),
  parameter: DS.attr(),
  comment: DS.attr(),
  actor: DS.belongsTo('user'),
  owner: DS.belongsTo('user', { inverse: 'activities' })
});
