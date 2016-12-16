import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  marvelApi : Ember.inject.service('marvel-api'),
  buildURL: function (modelName, id, snapshot, requestType, query){
    //hackish way of getting the current id, better option to use the service?
    //const parentId = this.store.adapterFor('hero').store.typeMaps.ember500.records[0].id;
    this.set('namespace', 'v1/public/characters' + '/' + this.get('marvelApi').get('currentHero'));
    return this._super(modelName, id, snapshot, requestType, query);
  }
});
