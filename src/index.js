import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  handleSingleClick = () => alert('Single Click Triggered')

  handleDoubleClick = () => alert('DoubleClick Triggered')
  
  handleMouseEnter = () => alert('Mouse Enter Triggered')

  handleMouseLeave = () => alert('Mouse Leave Triggered')

  render() {
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>Lets build out some handler functions.</h2>
        <button onClick={this.handleSingleClickEvent}>Click Handler Demo</button>
        <button onDoubleClick={this.handleDoubleClickEvent}>Double Click Handler</button>
        <div onMouseEnter={this.handleMouseEnter}>Mouse Enter</div>
        <div onMouseLeave={this.handleMouseLeave}>Mouse Leave</div>
        <input placeholder="Change my input" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
