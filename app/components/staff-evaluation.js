import Ember from 'ember';

export default Ember.Component.extend({
  displaySubtitle: true,
  criteria: [{
    name: 'Attendance / Absenteeism / Schedule Adherence',
    id: 1,
    groupValue: null
  }, {
    name: 'Health Issues',
    id: 2,
    groupValue: null
  }, {
    name: 'Family Problems',
    id: 3,
    groupValue: null
  }, {
    name: 'Team Level Engagements',
    id: 4,
    groupValue: null
  }, {
    name: 'Company Level Engagements',
    id: 5,
    groupValue: null
  }, {
    name: 'Unresolved Payroll / Salary Issues',
    id: 6,
    groupValue: null
  }, {
    name: 'Stack Ranking Position',
    id: 7,
    groupValue: null
  }, {
    name: 'Participation to achieve performance goals',
    id: 8,
    groupValue: null
  }, {
    name: 'Career Progression / Growth',
    id: 9,
    groupValue: null
  }, {
    name: 'Proximity to Work',
    id: 10,
    groupValue: null
  }, {
    name: 'Info Regarding Possible Attrition',
    id: 11,
    groupValue: null
  }]
});
