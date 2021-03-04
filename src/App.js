import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true
    };
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <br />
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>increment</button>
        <button onClick={this.handleToggle}>
          {this.state.show ? "Hide button" : " Show button"}
        </button>
        {this.state.show ? <h2>{this.state.counter}</h2> : ""}
      </div>
    );
  }
}

export default Counter;
