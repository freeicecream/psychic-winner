import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  photo: DS.attr(),
  position: DS.attr(),
  employeeId: DS.attr(),
  email: DS.attr(),
  level: DS.attr(),

  subordinates: DS.hasMany('user', { inverse: 'superior' }),
  superior: DS.belongsTo('user', { inverse: 'subordinates' }),
  evaluation: DS.belongsTo('evaluation', { inverse: 'owner' }),
  activities: DS.hasMany('activity', { inverse: 'owner' }),
  notifications: DS.hasMany('notification', { inverse: 'owner' }),
  topics: DS.hasMany('notification', { inverse: 'subject' }),

  talents: DS.hasMany('user', { inverse: 'talentManager' }),
  talentManager: DS.belongsTo('user', { inverse: 'talents' }),


  showInWarning: false,

  isTalentManager: Ember.computed.bool('talents.length'),

  hasNotifications: Ember.computed('notifications', function() {
    let notifs = this.get('notifications');
    if(notifs.content.length > 0) {
      return true;
    } else {
      return false;
    }
  }),

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

  notifyEmails: Ember.computed('email', 'superior.email', 'superior.superior.email', function() {
    return `${this.get('email')}; ${this.get('superior.email')}; ${this.get('superior.superior.email')}`;
  }),

  notifyNames: Ember.computed('fullName', 'superior.fullName', 'superior.superior.fullName', function() {
    return `${this.get('fullName')}; ${this.get('superior.fullName')}; ${this.get('superior.superior.fullName')}`;
  }),

  lastUpdated: Ember.computed('allSubordinates.@each.evaluation', function() {
    let lastUpdated = '';

    let subs = this.get('allSubordinates');
    subs.forEach(sub => {
      if(sub.get('evaluation')) {
        if(lastUpdated == '' || lastUpdated < sub.get('evaluation.lastUpdated')) {
          lastUpdated = sub.get('evaluation.lastUpdated');
        }
      }
    });
    return lastUpdated;
  }),

  hasSubordinates: Ember.computed.bool('subordinates.length'),

  allSubordinates: Ember.computed('subordinates.@each', 'allSubordinates.@each.subordinates', function() {
    let allSubordinates = [];
    let subs = this.get('subordinates');
    subs.forEach(sub => {
      allSubordinates.push(sub);
      if(sub.hasSubordinates) {
        let others = sub.get('allSubordinates');
        for(var alien of others) {
          allSubordinates.push(alien);
        }
      }
    });
    return allSubordinates;
  }),

  ratingsCount: Ember.computed('allSubordinates.@each.evaluation', function() {
    let count = [0, 0, 0, 0, 0, 0];

    let subs = this.get('allSubordinates');
    subs.forEach(sub => {
      let rating = sub.get('evaluation.rating');
      if (rating == 1) {
        count[0] = count[0] + 1;
      } else if (rating == 2) {
        count[1] = count[1] + 1;
      } else if (rating == 3) {
        count[2] = count[2] + 1;
      } else if (rating == 4) {
        count[3] = count[3] + 1;
      } else if (rating == 5) {
        count[4] = count[4] + 1;
      } else {
        count[5] = count[5] + 1;
      }
    });

    return count;
  }),

  chartData: Ember.computed('allSubordinates.@each.evaluation', function() {
    let ratingsCount = this.get('ratingsCount');

    let data = {
      labels: [
        'Rated 1', 'Rated 2', 'Rated 3', 'Rated 4', 'Rated 5', 'Not Rated'
      ],
      datasets: [{
        data: [
          ratingsCount[0], ratingsCount[1], ratingsCount[2], ratingsCount[3], ratingsCount[4], ratingsCount[5]
        ],
        backgroundColor: [
          "#50B430", "#ECE31A", "#F39999", "#F75455", "#D20001", "#ccc"
        ]
      }]
    }
    return data;
  }),

  chartOptions: Ember.computed('subordinates', function() {
    return {/*
      layout: {
        padding: {
          left: 50,
          right: 200
        }
      },*/
      responsive: false,
      cutoutPercentage: 0,
      rotation: -1.5 * Math.PI,
      selected: null,
      onClick: function(evt) {
        var activePoints = this.getElementsAtEvent(evt);
        var firstPoint = activePoints[0];
        var label = this.data.labels[firstPoint._index];

        document.getElementById('details').classList.remove('hidden');
        document.getElementById('selected-rate').innerHTML = label;

        label = label.replace(/\s+/g, '');
        if(label == 'NotRated') label = 'Rated';
        var rows = document.getElementsByClassName('emp');
        for (var row of rows) {
          row.classList.add('hidden');
        }

        rows = document.getElementsByClassName(label);
        for (row of rows) {
          row.classList.remove('hidden');
        }
      },
      legend: {
        fullWidth: true,
        position: 'bottom',
        display: true,
        labels: {
          boxWidth: 15,
          padding: 20,
          fontColor: '#333',
          fontFamily: 'OpenSans-Regular',
          fontSize: 12
        }
      },
      tooltips: {
        displayColors: false,
        caretSize: 4,
        xPadding: 15,
        yPadding: 20,
        titleFontFamily: 'OpenSans-Regular',
        titleFontSize: 10,
        titleFontStyle: 'bold',
        titleFontColor: '#0099CB',
        bodyFontFamily: 'OpenSans-Regular',
        bodyFontSize: 12,
        bodyFontColor: '#333',
        footerFontFamily: 'OpenSans-Regular',
        footerFontStyle: 'bold',
        footerFontSize: 13,
        footerFontColor: '#333',
        backgroundColor: '#f8f8f8',
        borderColor: '#333',
        callbacks: {
          title: function() {
            return 'Click to view details';
          },
          label: function(tooltipItem, data) {
            var indice = tooltipItem.index;
            var label = data.labels[indice];
            var chartdata = data.datasets[0].data;
            var count = chartdata[indice];

            var total = 0;
            for(var ctr=0; ctr < chartdata.length; ctr++) {
              total += chartdata[ctr];
            }

            var percent = ((count/total)*100).toFixed(2);

            return 'You have ' + percent + '% or ' + count + ' staff that are ' + label + '.';
          },
          footer: function(tooltipItem, data) {
            var indice = tooltipItem[0].index;
            var label = data.labels[indice];

            var attrite = 0;
            if(label == 'Rated3')
              attrite = 90;
            else if(label == 'Rated4')
              attrite = 60;
            else if(label == 'Rated5')
              attrite = 30;

            if(attrite > 0) {
              return 'Will attrite in ' + attrite + ' Days!';
            }
          },
        }
      },
    };
  })
});
