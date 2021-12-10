import React, {Component} from 'react';

class Display extends Component {
  render() {
    return(
      <output>{this.props.currentOutput}</output>
    )
  }
}

export default Display;
