import Ember from 'ember';
import layout from '../templates/components/hero-card';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['hero-card'],
  heroData: null,
});
