import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    const item = payload.data.results[0];
    const formatedResults = {
      "type": "character",
      "id": item.id,
      "attributes": {
        "name": item.name,
        "description": item.description,
        "thumbnail":  item.thumbnail.path + "." + item.thumbnail.extension,
        "items": {
          "series": item.series.available,
          "stories": item.stories.available,
          "comics": item.comics.available
        }
      }
    };
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
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const formatedResults = payload.data.results.map((item) => {
      return {
        "type": "character",
        "id": item.id,
        "attributes": {
          "name": item.name,
          "description": item.description,
          "thumbnail":  item.thumbnail.path + "." + item.thumbnail.extension,
          "items": {
            "series": item.series.available,
            "stories": item.stories.available,
            "comics": item.comics.available
          }
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
