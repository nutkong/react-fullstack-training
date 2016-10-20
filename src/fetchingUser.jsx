import React from 'react';

export default class UserInfoComponenet extends React.Component {
  constructor() {
    super();
    this._handleFetchingButton = this._handleFetchingButton.bind(this);
    this.state = {
      fetchData: ""
    };
  }

  _handleFetchingButton() {
    var self = this;
    fetch('http://localhost:3000/user').then(function(response) {
      response.json().then(function(data) {  
        console.log(data);  
        self.setState({fetchData:data.user_name});
      });  
    }).catch(function(err) {
      // Error :(
    });
  }

  render() {
    return(<div>
       <br />
       Hi! this should fetch user Component
       <button
         onClick={this._handleFetchingButton}
       >
        Get User data
        </button>
        {this.state.fetchData}
    </div>);
  }
}
