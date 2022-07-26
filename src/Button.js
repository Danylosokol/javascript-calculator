import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click");
  }

  render() {
    return (
      <div
        id={this.props.btnId}
        className={this.props.btnClass}
        onClick={this.handleClick}
      >
        {this.props.value}
      </div>
    );
  }
}

export default Button;