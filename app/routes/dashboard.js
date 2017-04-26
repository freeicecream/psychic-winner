import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var data = {
      datasets: [{
          data: [
              11,
              16,
              7,
              3,
              14
          ],
          backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB"
          ],
          label: 'My dataset' // for legend
      }]
    }
    return data;
  }
});
