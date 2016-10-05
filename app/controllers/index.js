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
      this.set('limit', this.get('limit') + this.get('pageSize'));
    }
}
});
