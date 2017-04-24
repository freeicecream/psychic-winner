import moment from 'moment'

export default [{
  id: 1,
  createdOn: moment.now(),
  rating: '5',
  parameter: 'Unresolved Payroll / Salary',
  comment: 'Need to review industry rate',
  actorId: 1,
  ownerId: 2
}, {
  id: 2,
  createdOn: moment.now(),
  rating: 'N/A',
  parameter: 'Intervene',
  comment: 'Contact HR, TM',
  actorId: 1,
  ownerId: 2
}];