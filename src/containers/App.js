import React, { Component } from "react";
import "../css/App.min.css";
class App extends Component {
  state = {
    counter: 0
  };

  handleIncrementCount = () => {
    let count = this.state.counter;
    this.setState({ counter: count + 1 });
  };

  handleResetCount = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <i class="fas fa-stopwatch" />
          <h1>Tally Counter By React</h1>
        </header>
        <div className="counter">
          <h1>{this.state.counter}</h1>
          <button className="reset" onClick={this.handleResetCount}>
            <i class="fas fa-power-off" />
          </button>
          <button className="increment" onClick={this.handleIncrementCount}>
            <i class="fas fa-plus" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
