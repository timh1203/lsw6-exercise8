import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  handleSingleClickEvent = () => alert('Single Click Event Triggered')

  handleDoubleClickEvent = () => alert('DoubleClick Event Triggered')
  render() {
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>Lets build out some handler functions.</h2>
        <button onClick={this.handleSingleClickEvent}>Click Handler Demo</button>
        <button onDoubleClick={this.handleDoubleClickEvent}>Double Click Handler</button>
        <div>Mouse Leave</div>
        <input placeholder="Change my input" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
