import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  thumbnail: DS.attr('string'),
  issueNumber: DS.attr('number'),
});
