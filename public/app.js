class HelloComponent extends React.Component {  
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloComponent name="nutkong" />,
  document.getElementById('root')
);
