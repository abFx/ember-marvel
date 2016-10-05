import Ember from 'ember';
import layout from '../templates/components/hero-list';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['hero-list'],
  list: null,
});