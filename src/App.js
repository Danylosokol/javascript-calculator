import React from 'react';
import Button from './Button.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "0",
    }
  }
   
  render(){
    return(
      <div id="calculator">
        <Button btnId="display" value={this.state.input} />
        <Button btnId="clear" value="AC" /> 
        <Button btnId="divide" btnClass="operator" value="/" />  
        <Button btnId="multiply" btnClass="operator" value="x" /> 

        <Button btnId="seven" btnClass="number" value="7" />
        <Button btnId="eight" btnClass="number" value="8" />
        <Button btnId="nine" btnClass="number" value="9" />
        <Button btnId="subtract" btnClass="operator" value="-" />

        <Button btnId="four" btnClass="number" value="4" />
        <Button btnId="five" btnClass="number" value="5" />
        <Button btnId="six" btnClass="number" value="6" />
        <Button btnId="add" btnClass="operator" value="+" /> 

        <Button btnId="one" btnClass="number" value="1" />
        <Button btnId="two" btnClass="number" value="2" /> 
        <Button btnId="three" btnClass="number" value="3" />
        <Button btnId="equals" btnClass="operator" value="=" /> 

        <Button btnId="zero" btnClass="number" value="0" />
        <Button btnId="decimal" btnClass="operator" value="." />
      </div>
    );
  }
}

export default App;
