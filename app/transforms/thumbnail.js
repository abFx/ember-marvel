import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return serialized.path + serialized.extension;
  },

  serialize(deserialized) {
    return {
      path: deserialized.substring(0, deserialized.lastIndexOf('.')),
      extension: deserialized.substring(deserialized.lastIndexOf('.'))
    };
  }
});
