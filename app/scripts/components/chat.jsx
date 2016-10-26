var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var ChatCollection = require('../models.chat').ChatCollection;

var ChatForm = React.createClass({
  getInitialState: function(){
    return{
      chatInput: ''
    };
  },
  handleChatInput: function(e){
    var input = e.target.value;
    this.setState({title: title});
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.getCollection().create({chatInput: this.states.chatInput});
    this.setState({chatInput: ''});
  },
  render: function(){
    return (
      <div class="row">
        <div class="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <label for="chatInput">Write a comment below!</label>
            <input onChange={this.handleChatInput} name="chatInput" placeholder="" id="chatField" />
          </form>
        </div>
      </div>
    )
  }
});

var ChatListing= React.createClass({
  render: function(){
    var collection = this.getCollection();
    var listofChats = collection.map(function(chat){
      return <li key={chat.get('_id') || chat.cid}>{chat.get('chatInput')}</li>;
    });

    return (
      <ul>
        {listOfChats}
      </ul>
    );
  }
});
