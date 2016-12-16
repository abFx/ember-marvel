import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr('string'),
  startYear: DS.attr('number'),
  endYear: DS.attr('number'),
  rating: DS.attr('string'),
});
