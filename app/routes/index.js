import Ember from 'ember';

export default Ember.Route.extend({
  //changing this parameters to true will force the model reload
  //on change
  queryParams: {
    limit: {
      refreshModel: true
    },
    offset: {
      refreshModel: false
    }
  },
  model(params) {
    return this.get('store').query('character', { limit: params.limit, offset: params.offset });
  },
  actions: {
    loading(transition, originRoute) {
      let controller = this.controllerFor('index');
      controller.set('isLoading', true);
      transition.promise.finally(function() {
          controller.set('isLoading', false);
      });
    }
  }
});
