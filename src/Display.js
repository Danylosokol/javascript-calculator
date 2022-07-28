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

// 3 + 5 * 6 - 2 / 4
// 32.5 or 11.5