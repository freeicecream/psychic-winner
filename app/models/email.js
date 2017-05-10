import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  from: DS.attr(),
  to: DS.attr(),
  body: DS.attr(),
});
