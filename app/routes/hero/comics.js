import Ember from 'ember';
import ValidateHero from '../../mixins/validate-hero';

export default Ember.Route.extend(ValidateHero, {
  marvelApi : Ember.inject.service('marvel-api'),
  model(params) {
    return this.store.query('comic', parseInt(this.get('marvelApi').get('currentHero')));
  }
});
