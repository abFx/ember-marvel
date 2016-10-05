import Ember from 'ember';

export default Ember.Controller.extend({
  isLoading: false,
  limit: 10,
  offset: 0,
  pageSize: 10,
  actions : {
    loadMore: function(){
      var newLimit = this.get('model').limit+10;
      //new api request
      //this first approach was to load a new api request just changing the limit
      //this.set('limit', this.get('limit') + this.get('pageSize'));
      
      //this approach just loads the different results and adds them to the model route
      this.set('offset', this.get('offset') + this.get('pageSize'));
      this.get('store').query('character', { limit: 10, offset: this.get('offset') }).then((response) => {
        const results = response.get('content');
        this.get('model').pushObjects(results)
      })
    }
}
});
