import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  owner: belongsTo('user', { inverse: 'notifications' }),
  subject: belongsTo('user', { inverse: 'topics' })
});
