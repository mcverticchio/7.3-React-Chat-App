var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var ChatCollection = require('../models/chat').ChatCollection;

var ChatForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      chatInput: ''
    };
  },
  handleChatInput: function(e){
    var chatInput = e.target.value;
    this.setState({chatInput: chatInput});
  },
  handleSubmit: function(e){
    e.preventDefault();
    // console.log(this.props);
    this.getCollection().create({
      content: this.state.chatInput,
      username: this.props.username,
      time: new Date().getTime()
      });
    this.setState({chatInput: ''});
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="chatInput">Write a comment below!</label>
            <input onChange={this.handleChatInput} value={this.state.chatInput} name="chatInput" placeholder="" id="chatInput" />
            <button type="submit" className="btn btn-success sendMsgButton">Send Message</button>
        </form>
        </div>
      </div>
    )
  }
});

var ChatListing= React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var collection = this.getCollection();
    var listOfChats = collection.map(function(chat){
      return (
        <li key={chat.get('_id') || chat.cid}>
          {chat.get('username')}
          {chat.get('content')}
          {chat.get('time')}
        </li>
    )});

    return (
      <ul>
        {listOfChats}
      </ul>
    );
  }
});

var ChatComponent= React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <div>
      <h2> Hey {this.props.username}</h2>
      <ChatForm username={this.props.username}/>
      <ChatListing />
      </div>
    )
  }
});

module.exports = {
  ChatComponent: ChatComponent
}
