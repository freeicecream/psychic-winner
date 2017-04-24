import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  subordinates: hasMany('user', { inverse: 'superior' }),
  superior: belongsTo('user', { inverse: 'subordinates' }),
  evaluation: belongsTo('evaluation', { inverse: 'owner' }),
  activities: hasMany('activity', { inverse: 'owner' })
});
