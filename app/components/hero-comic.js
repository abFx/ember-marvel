import Ember from 'ember';
import layout from '../templates/components/hero-comic';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['hero-comic'],
  comicData: null,
});
