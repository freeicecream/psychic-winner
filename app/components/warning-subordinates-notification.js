import Ember from 'ember';

export default Ember.Component.extend({
  warningSubordinates: null,

  notificationData: Ember.computed('warningSubordinates', function() {
    let notifData = null;
    notifData = this.get('warningSubordinates').reduce((prev, curr) => {
      if (prev.length) {
        let notif = prev.find(item => {
          return item.superior.get('id') === curr.get('superior.id');
        });
        if (notif) {
          notif.subordinates.addObject(curr);          
        } else {
          prev.addObject({
            superior: curr.get('superior'),
            subordinates: [curr]
          });
        }
      } else {
        prev.addObject({
          superior: curr.get('superior'),
          subordinates: [curr]
        });
      }
      return prev;
    }, []);
    return notifData;
  })
});
