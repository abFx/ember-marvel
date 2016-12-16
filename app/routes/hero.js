import Ember from 'ember';

export default Ember.Route.extend({
  marvelApi : Ember.inject.service('marvel-api'),
  model(params) {
    return this.get('store').queryRecord('character', { "id" : params.hero_id });
  },
  setupController(controller, model) {
    this._super(controller, model);
    //save this for easy access in custom adapter with nested routes
    this.get('marvelApi').set('currentHero', model.id);
  }
});
