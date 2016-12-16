import Ember from 'ember';
import layout from '../templates/components/hero-serie';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['hero-series'],
  seriesData: null,
});
