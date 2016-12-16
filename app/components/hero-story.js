import Ember from 'ember';
import layout from '../templates/components/hero-story';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNames: ['hero-story'],
  storyData: null,
});
