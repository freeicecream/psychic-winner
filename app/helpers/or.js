import Ember from 'ember';

export function or(params/*, hash*/) {
  return params.reduce(function(x, y) {
    return x || y; 
  }, false);
}

export default Ember.Helper.helper(or);
