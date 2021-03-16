import React, { Component } from "react";
import Building from "./components/Building";
import Bar from "./components/Bar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Bar sizeValue="20" width="48" height="8" />
        <Bar sizeValue="20" width="48" height="8" />
        <Bar sizeValue="20" width="48" height="8" />
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
