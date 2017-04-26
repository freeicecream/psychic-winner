import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user', { inverse: 'notifications' }),
  subject: DS.belongsTo('user', { inverse: 'topics' }),
  isOpen: false
});
