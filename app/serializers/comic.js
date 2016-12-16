import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  marvelApi : Ember.inject.service('marvel-api'),
  normalizeArrayResponse(store, primaryModelClass, payload) {
    const formatedResults = payload.data.results.map((item) => {
      return {
        "type": "comic",
        "id": item.id,
        "attributes": {
          "title": item.title,
          "description": item.description,
          "thumbnail":  item.thumbnail.path + "." + item.thumbnail.extension,
          "issueNumber": item.issueNumber
        }
      };
    });
    const _payload = {
      "data": formatedResults,
      "meta": {
        "offset": payload.data.offset,
        "limit": payload.data.limit,
        "total": payload.data.total,
        "count": payload.data.count,
      }
    };
    return _payload;
  }
});
