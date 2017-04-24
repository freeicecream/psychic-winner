import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  actor: belongsTo('user'),
  owner: belongsTo('user', { inverse: 'activities' })
});
