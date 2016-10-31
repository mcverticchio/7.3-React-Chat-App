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
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit} className="chatForm">
            <textarea onChange={this.handleChatInput} type="text" value={this.state.chatInput} rows="5" name="chatInput" placeholder="Write a reply..." id="chatInput" />
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
        <div key={chat.get('_id') || chat.cid} className="well row">
          <div className="col-md-12">
            <span className="username">{chat.get('username')}</span>
            <span className="time">{chat.get('time')}</span>
          </div>
          <div className="col-md-12">
            <span className="content">{chat.get('content')}</span>
          </div>
        </div>
    )});

    return (
        <div>
          {listOfChats}
        </div>
    );
  }
});

var ChatComponent= React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <div className="container">
      <h1 className="msgHeading">Current Messages:</h1>
      <ChatListing />
      <ChatForm username={this.props.username}/>
      </div>
    )
  }
});

module.exports = {
  ChatComponent: ChatComponent
}
