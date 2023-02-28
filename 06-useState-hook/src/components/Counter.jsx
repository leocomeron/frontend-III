import React from "react";

// ----- State handle using Class Component -------------
class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className="App">
        <h1>State with Class Component</h1>
        <div className="card">
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
              })
            }
          >
            count is {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}

export default CounterClassComponent;
