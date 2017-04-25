import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  employeeNo: DS.attr(),
  rateNo: DS.attr(),
  rateText: DS.attr(),

  firstName: DS.attr(),
  lastName: DS.attr(),
  photo: DS.attr(),
  position: DS.attr(),

  subordinates: DS.hasMany('user', { inverse: 'superior' }),
  superior: DS.belongsTo('user', { inverse: 'subordinates' }),

  talents: DS.hasMany('user', { inverse: 'talentmanager' }),
  talentmanager: DS.belongsTo('user', { inverse: 'talents' }),

  showInWarning: DS.attr(),
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

  intervene: Ember.computed('rate', function() {
    if(`${this.get('rate')}`)
      return true;
    else return false;
  })
});
