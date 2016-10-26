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
    var router = this.props.router;
    console.log('You clicked Submit!');
    router.username = this.state.username;

    this.setState({username: ''});
  },
  render: function(){
    return (
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleUsername} name="username" placeholder="Username" />
            <button type="submit" className="btn btn-success">Login!</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = {
  LoginComponent: LoginComponent
}
