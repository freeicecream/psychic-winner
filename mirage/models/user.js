import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  subordinates: hasMany('user', { inverse: 'superior' }),
  superior: belongsTo('user', { inverse: 'subordinates' }),
  talents: hasMany('user', { inverse: 'talentmanager' }),
  talentmanager: belongsTo('user', { inverse: 'talents' }),
  evaluation: belongsTo('evaluation', { inverse: 'owner' }),
  activities: hasMany('activity', { inverse: 'owner' })
});
