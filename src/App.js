import React, { Component } from "react";
import Building from "./components/Building";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Building sizeValue="20" />
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
