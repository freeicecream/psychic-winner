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
  notifications: DS.hasMany('notification', { inverse: 'owner' }),
  topics: DS.hasMany('notification', { inverse: 'subject' }),

  talents: DS.hasMany('user', { inverse: 'talentManager' }),
  talentManager: DS.belongsTo('user', { inverse: 'talents' }),

  showInWarning: false,

  isTalentManager: Ember.computed.bool('talents.length'),

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

  lastUpdated: Ember.computed('subordinates.@each.evaluation', function() {
    let lastUpdated = null;

    let subs = this.get('subordinates');
    subs.forEach(sub => {
      if(lastUpdated == null || lastUpdated < sub.get('evaluation.lastUpdated')) {
        lastUpdated = sub.get('evaluation.lastUpdated');
      }
    });
    return lastUpdated;
  }),

  chartData: Ember.computed('subordinates.@each.evaluation', function() {
    let rated1 = 0;
    let rated2 = 0;
    let rated3 = 0;
    let rated4 = 0;
    let rated5 = 0;
    let notrated = 0;

    let subs = this.get('subordinates');
    subs.forEach(sub => {
      let rating = sub.get('evaluation.rating');
      if (rating == 1) {
        rated1 ++;
      } else if (rating == 2) {
        rated2 ++;
      } else if (rating == 3) {
        rated3 ++;
      } else if (rating == 4) {
        rated4 ++;
      } else if (rating == 5) {
        rated5 ++;
      } else {
        notrated ++;
      }
    });

    let data = {
      labels: [
        'Rated1', 'Rated2', 'Rated3', 'Rated4', 'Rated5', 'Not Rated'
      ],
      datasets: [{
        data: [
          rated1, rated2, rated3, rated4, rated5, notrated
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
        alert('Selected Rate: '+ label);
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
          title: function(tooltipItem, data) {
            return 'Click to view details';
          },
          label: function(tooltipItem, data) {
            var indice = tooltipItem.index;
            var label = data.labels[indice];
            var chartdata = data.datasets[0].data;
            var data = chartdata[indice];

            var total = 0;
            for(var ctr=0; ctr < chartdata.length; ctr++) {
              total += chartdata[ctr];
            };

            var percent = (data/total)*100;

            return 'You have ' + percent + '% or ' + data + ' staff that are ' + label + '.';
          },
          afterLabel: function(tooltipItem, data) {
            var indice = tooltipItem.index;
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
          }
        }
      },
    };
  })
});
