import Ember from 'ember';
import layout from '../templates/components/hero-thumbnail';

export default Ember.Component.extend({
  //layout: layout,
  tagName: 'img',
  classNames: ['hero-image'],
  attributeBindings: ['loader:src', 'icon-data-icon'],
  loader: 'http://placehold.it/150x150.png',
  iconImage: null,
  didInsertElement() {
    this.$().on('load', () => {
      if(this.get('iconImage') != null){
        this.set('loader', this.get('iconImage'))
      }
    });
  }
});