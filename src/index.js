import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = { count: 0 };
  }

  handleIncrement(e) {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement(e) {
    this.setState({ count: this.state.count - 1 });
  }

  handleReset(e) {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.handleIncrement}>
          +
        </button>
        <button type="button" onClick={this.handleDecrement}>
          -
        </button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
