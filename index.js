import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>Lets build out some handler functions.</h2>
        <button>Click Handler Demo</button>
        <button>Double Click Handler</button>
        <div>Mouse Leave</div>
        <input placeholder="Change my input" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
