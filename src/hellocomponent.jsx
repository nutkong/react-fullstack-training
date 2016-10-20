import React from 'react';

export default class HelloComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      clickTime:0,
    };

    this._handleThatClick = this._handleThatClick.bind(this);
  }

  _handleThatClick(event) {
    console.log('click!', event);
     this.setState({
         clickTime: this.state.clickTime + 1 
     });
  }

  render() {
    return (<div>Hello 
        {this.state.clickTime} 
        {this.props.name}
        <div> 
          <button onClick={this._handleThatClick}> 
            Click me!
          </button>
        </div>
    </div>);
  }
}
