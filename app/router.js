import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('notifications');
  this.route('evaluation', function() {
    this.route('staff-evaluation', { path: ':staffid' });
  });
  this.route('history', function() {
    this.route('staff-history', { path: ':staffid' });
  });
  this.route('dashboard');
});

export default Router;
