var Backbone = require('backbone');

var Chat = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

var ChatCollection = Backbone.Collection.extend({
  model: Chat,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages',
});

module.exports = {
  Chat: Chat,
  ChatCollection: ChatCollection
};
