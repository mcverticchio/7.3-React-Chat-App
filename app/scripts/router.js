var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginComponent = require('./components/login.jsx').LoginComponent;
var ChatComponent = require('./components/chat.jsx').ChatComponent;
var ChatCollection = require('./models/chat').ChatCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat/' : 'chat',
  },
  initialize: function(){
    this.username = '';           //this = router, setting username property on router and setting it to an empty string so that it will store some data.
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),        //Passing router (set equal to this) down to my login component
      document.getElementById('app')
    );
  },
  chat: function(){
    var collection = new ChatCollection();
    collection.fetch();
    setInterval(function(){collection.fetch();
      console.log('polling...');
    },
    2000);

    ReactDOM.render(
      React.createElement(ChatComponent, {collection: collection, username: this.username}),  //Passes the username down to the ChatComponent
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
