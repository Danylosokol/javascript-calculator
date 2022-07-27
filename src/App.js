import React from 'react';
import Button from './Button.js';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      formula: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(event) {
    let input = event.target.innerHTML;
    let formulaInput = "";
    switch(event.target.innerHTML){
      case "AC":
        this.handleClear();
        break;
      case "x":
        formulaInput = "⋅";
        break;
      default:
        formulaInput = event.target.innerHTML;
        break;  
    }

    if(formulaInput){
      this.setState((state) => (
       {
        input: (parseInt(input) && state.input !== "0") || input === "." ? state.input + input : input,
        formula: state.formula + formulaInput,
      }));
    }
  }

  handleClear(){
    this.setState({
      input: "0",
      formula: ""
    })
  }

  render() {
    return (
      <div id="calculator">
        <Display displayId="displays" input={this.state.input} formula={this.state.formula}/>
        <Button btnId="clear" value="AC" handler={this.handleClick}/>
        <Button btnId="divide" btnClass="operator" value="/" handler={this.handleClick}/>
        <Button btnId="multiply" btnClass="operator" value="x" handler={this.handleClick}/>

        <Button btnId="seven" btnClass="number" value="7" handler={this.handleClick}/>
        <Button btnId="eight" btnClass="number" value="8" handler={this.handleClick}/>
        <Button btnId="nine" btnClass="number" value="9" handler={this.handleClick}/>
        <Button btnId="subtract" btnClass="operator" value="-" handler={this.handleClick}/>

        <Button btnId="four" btnClass="number" value="4" handler={this.handleClick}/>
        <Button btnId="five" btnClass="number" value="5" handler={this.handleClick}/>
        <Button btnId="six" btnClass="number" value="6" handler={this.handleClick}/>
        <Button btnId="add" btnClass="operator" value="+" handler={this.handleClick}/>

        <Button btnId="one" btnClass="number" value="1" handler={this.handleClick}/>
        <Button btnId="two" btnClass="number" value="2" handler={this.handleClick}/>
        <Button btnId="three" btnClass="number" value="3" handler={this.handleClick}/>
        <Button btnId="equals" btnClass="operator" value="=" handler={this.handleClick}/>

        <Button btnId="zero" btnClass="number" value="0" handler={this.handleClick}/>
        <Button btnId="decimal" btnClass="operator" value="." handler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
