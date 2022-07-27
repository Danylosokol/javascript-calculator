import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.btnId}
        className={this.props.btnClass}
        onClick={this.props.handler}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Button;