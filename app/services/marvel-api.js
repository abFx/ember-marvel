import Ember from 'ember';

export default Ember.Service.extend({
  apiHost: 'https://gateway.marvel.com/v1/public/',
  apiKey: '99d7fa0a888391fb9ea7fcaf0c7e05d2',
  getHeroes: function(){
    const endpoint = 'characters';
    let params = null;

    //add api key to request
    arguments[0]['apikey'] = this.get('apiKey');
    //transform params
    params = Ember.$.param(arguments[0]);
    console.log(params)

    return new Ember.RSVP.Promise((res, rej) => {
      Ember.$.get(this.get('apiHost')+endpoint, params).then(function(response){
        res(response.data);
      }, function(err){
        rej(err);
      });
    });
  }
});
