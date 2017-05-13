import DS from 'ember-data';
import ENV from 'ews/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  namespace: ENV.apiNamespace
});
