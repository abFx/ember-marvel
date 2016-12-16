import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel() {
    if(!this.get('marvelApi').get('currentHero')){
      this.get('marvelApi').set('currentHero', this.paramsFor('hero').hero_id);
    }
  },
});
