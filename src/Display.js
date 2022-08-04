import React from 'react';

class Display extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id={this.props.displayId}>
        <div>{this.props.formula}</div>
        <div id="display">{this.props.input}</div>
      </div>
    );
  }
}

export default Display;
