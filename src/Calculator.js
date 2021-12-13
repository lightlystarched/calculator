import React, {Component} from 'react';
import Display from './Display';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSum: '0',
      currentOutput: '0',
      decimalPresent: false,
      operationEnabled: null
    }
  }

  /*
   * Custom math functions
   */

  resetCalculator = () => {
    this.setState({
      currentSum: '',
      currentOutput: '0',
      decimalPresent: false,
      operationEnabled: null
    });
  }

  changePolarity = () => {
    console.log('Changing polarity');
  }

  percent = () => {
    console.log('Change to percent');
  }

  divide = () => {
    console.log('Dividing input values');
  }

  multiply = () => {
    console.log('Multiplying input values');
  }

  subtract = () => {
    console.log('Subtracting input values');
  }

  add = () => {
    const val1 = parseInt(this.state.currentSum);
    const val2 = parseInt(this.state.currentOutput);
    const total = val1 + val2;

    this.setState({
      currentSum: total,
      currentOutput: total
    });
  }

  addDecimal = () => {
    if (!this.state.decimalPresent) {
      this.setState({
        currentOutput: this.state.currentOutput + '.0',
        decimalPresent: true
      });
    }
  }

  displayTotal = () => {
    console.log('Displaying the current total');
  }

  createInput = (val) => {
    let value = val;
    let currentOutput = this.state.currentOutput;

    if (currentOutput.substr(-2) === '.0') {
      // do transformations
      currentOutput = currentOutput.slice(0, -1);
      this.setState({
        currentOutput: currentOutput + value
      });
    } else if (this.state.currentOutput === '0') {
      this.setState({
        currentOutput: value
      });
    } else {
      this.setState({
        currentOutput: this.state.currentOutput + value
      });
    }
  }

  render() {
    return(
      <div id="wrapper">
        <Display
          currentOutput={ this.state.currentOutput }
        />
        <div className="row one">
          <button onClick={() => this.resetCalculator()}>AC</button>
          <button onClick={() => this.changePolarity()}>+/-</button>
          <button onClick={() => this.percent()}>%</button>
          <button onClick={() => this.divide()}>/</button>
        </div>
        <div className="row two">
          <button onClick={() => this.createInput('1')}>1</button>
          <button onClick={() => this.createInput('2')}>2</button>
          <button onClick={() => this.createInput('3')}>3</button>
          <button onClick={() => this.multiply()}>X</button>
        </div>
        <div className="row three">
          <button onClick={() => this.createInput('4')}>4</button>
          <button onClick={() => this.createInput('5')}>5</button>
          <button onClick={() => this.createInput('6')}>6</button>
          <button onClick={() => this.subtract()}>&mdash;</button>
        </div>
        <div className="row four">
          <button onClick={() => this.createInput('7')}>7</button>
          <button onClick={() => this.createInput('8')}>8</button>
          <button onClick={() => this.createInput('9')}>9</button>
          <button onClick={() => this.add()}>+</button>
        </div>
        <div className="row five">
          <button onClick={() => this.createInput('0')}>0</button>
          <button onClick={() => this.addDecimal()}>.</button>
          <button onClick={() => this.displayTotal()}>=</button>
        </div>
      </div>
    )
  }
}

export default Calculator;
