import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'Vinchenso',
      userData: [],
      userRepo: [],
      perPage: 5
  }}

  render(){
    return(
      <div>
        {this.state.username}
      </div>
    )
  }
}
    App.propTypes = {
      clientId:     React.PropTypes.string,
      clientSecret: React.PropTypes.string
    };

    App.defaultProps = {
      clientId:     '888c1687a0a9efab2d5d',
      clientSecret: '41f58f8427f91c307640e92c10145eca2de6cd9d'
    };

export default App
