import moment from 'moment'

export default [{
  id: 1,
  ownerId: 2,
  lastUpdated: moment().set({
    year: 2017,
    month: 'May',
    date: 5
  }),
  parameter: 'Unresolved Payroll / Salary',
  ratingValues: [{
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 5,
    comment: "Has been complaining about salary"
  }, {
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 1
  }, {
    rating: 1
  }]
}];
