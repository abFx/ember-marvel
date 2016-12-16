import Ember from 'ember';
import ValidateHeroMixin from 'ember-marvel/mixins/validate-hero';
import { module, test } from 'qunit';

module('Unit | Mixin | validate hero');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidateHeroObject = Ember.Object.extend(ValidateHeroMixin);
  let subject = ValidateHeroObject.create();
  assert.ok(subject);
});
