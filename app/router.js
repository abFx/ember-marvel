import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hero', { path: 'hero/:hero_id' }, function() {
    this.route("series");
    this.route('comics');
    this.route('stories');
  });
});

export default Router;
