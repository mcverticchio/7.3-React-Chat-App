var React = require('react');

var LoginComponent = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var router = this.props.router;             //this is how we access the router b/c passed down on props
    // console.log('You clicked Submit!');
    router.username = this.state.username;      //this is setting the username property in the router to the new state of the username
    router.navigate('chat/', {trigger: true});

    this.setState({username: ''});
  },
  render: function(){
    return (
      <div className="container">
      <header>
        <h1>Enter a username to begin chatting!</h1>
      </header>
      <div className="row">
        <div className="col-md-6 col-md-offset-4 loginScreen">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleUsername} className="usernameInput" name="username" placeholder="Username" />
            <button type="submit" className="btn btn-success loginBtn">Login!</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = {
  LoginComponent: LoginComponent
}
