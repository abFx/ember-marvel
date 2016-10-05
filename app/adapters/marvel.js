import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  marvelApi : Ember.inject.service('marvel-api'),
  host: 'https://gateway.marvel.com',
  namespace: 'v1/public',
  buildURL: (modelName, id, snapshot, requestType, query) => {
    let currentUrl = this._super(modelName, id, snapshot, requestType, query);
    return currentUrl + "?apikey=" + this.get('marvelApi').get('apiKey');
  }
});
