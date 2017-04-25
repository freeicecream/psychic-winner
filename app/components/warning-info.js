import Ember from 'ember';

export default Ember.Component.extend({
  report: null,
  didReceiveAttrs() {
    this.get('report.notifications').then((notifs) => {
      notifs.forEach((notif) => {
        notif.get('subject').then((subject) => {
          subject.set('showInWarning', true);
        }, (error) => {
        });
      });
    }, (error) => {
    });
  }
});
