import Ember from 'ember';

export function collectionDelimiter(params/*, hash*/) {
  let str = ',';
  if (params[0] - 2 === params[1]) {
    str = ' and';
  } else if (params[0] - 1 === params[1]) {
    str = ''
  }
  return str;
}

export default Ember.Helper.helper(collectionDelimiter);
