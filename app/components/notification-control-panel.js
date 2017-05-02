import Ember from 'ember';

export default Ember.Component.extend({
  
  panelActions: Ember.inject.service(),
  notifications: null,

  actions: {
    open(param) {
      let component = this;
      let open = function(subject) {
        component.get('panelActions').open('panelNotification' + subject.get('id'));
        if (subject.get('superior.id')) {
          open(subject.get('superior'));
        }
      };
      open(param.get('subject'));
      param.set('isOpen', true);
    },

    close(param) {
      let component = this;
      let close = function(subject) {
        component.get('panelActions').close('panelNotification' + subject.get('id'));
        if (subject.get('superior.id')) {
          close(subject.get('superior'));
        }
      };
      close(param.get('subject'));
      param.set('isOpen', false);
    }
  }
});
