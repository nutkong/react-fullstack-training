import React from 'react';
import { render } from 'react-dom';

class HelloComponent extends React.Component {  
  render() {
    return <div>Hello 2-5 {this.props.name}</div>;
  }
}

render(
  <HelloComponent name="nutkong" />,
  document.getElementById('root')
);
