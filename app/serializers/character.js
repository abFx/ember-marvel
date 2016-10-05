import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const formatedResults = payload.data.results.map((item) => {
      return {
        "type": "character",
        "id": item.id,
        "attributes": {
          "name": item.name,
          "description": item.description,
          "thumbnail":  item.thumbnail.path + "." + item.thumbnail.extension
        }
      };
    });
    const _payload = {
      "data": formatedResults,
      "meta": {}
    };
    return _payload;
  }
});
