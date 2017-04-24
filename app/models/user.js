import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  photo: DS.attr(),
  position: DS.attr(),
  employeeId: DS.attr(),

  subordinates: DS.hasMany('user', { inverse: 'superior' }),
  superior: DS.belongsTo('user', { inverse: 'subordinates' }),
  evaluation: DS.belongsTo('evaluation', { inverse: 'owner' }),
  activities: DS.hasMany('activity', { inverse: 'owner' }),

  showInWarning: Ember.computed.bool('evaluation.showInWarning'),

  hasWarningSubordinates: Ember.computed('subordinates.@each.showInWarning', 'subordinates.@each.hasWarningSubordinates', function() {
    let hasWarningSubs = false;    
    let subs = this.get('subordinates');
    subs.forEach(sub => {
      if (sub.get('hasWarningSubordinates') || sub.get('showInWarning')) {
        hasWarningSubs = true;
      }
    });
    return hasWarningSubs;
  }),

  warningSubordinates: Ember.computed('subordinates.@each.showInWarning', 'subordinates.@each.warningSubordinates', function() {
    let warningSubs = [];
    let subs = this.get('subordinates');
    subs.forEach(sub => {
      warningSubs.addObjects(sub.get('warningSubordinates'));      
      if (sub.get('showInWarning')) {
        warningSubs.addObject(sub);
      }
    });
    return warningSubs;
  }),
  
  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('lastName')}, ${this.get('firstName')}`;
  }),
});
