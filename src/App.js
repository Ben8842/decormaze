import React, { Component } from "react";
import Building from "./components/Building";
import Bar from "./components/Bar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Bar sizeValue="20" width="44" height="5" />
        <p id="topinfoS">
          <button id="topinfo">
            <a href="https://calendly.com/perkinsben">
              Click here to schedule a meeting with me
            </a>
          </button>
        </p>
        <p>
          {" "}
          <button id="topinfo">
            <a href="https://github.com/Ben8842">
              Click here to find my GitHub profile
            </a>
          </button>
          <p>
            <button id="topinfo">
              <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                Click here to Connect on Linkedin.com
              </a>
            </button>
          </p>
        </p>
        <Bar sizeValue="20" width="44" height="5" />
        <p id="nameT">
          <p id="nameT">Name: Benjamin Perkins</p>
          <p>Contact: perkinsben@yahoo.com </p>
          <p>Status: Open for employment.</p>
          <p>
            Education:{" "}
            <a id="edu" href="https://deepdiveeducation.com/">
              Deep Dive Learning Academy
            </a>
          </p>
          <p> Skills: </p>
          <p>• React, Redux, JavaScript, Python, Java, HTML, CSS, XML</p>
          <p>
            • MongoDB, SQL, Mongoose, Express,
            <p>• GitHub, Heroku, Netlify, Visual Studio </p>
          </p>
          <p>• FIX Protocol, PowerShell, FTP, TFS, JIRA</p>
        </p>
        <Bar sizeValue="20" width="44" height="8" />
        <div id="fixy">
          <button class="fancy" variant="secondary" size="lg" block>
            <a
              id="bproject"
              href="https://optimistic-babbage-2ed085.netlify.app/"
            >
              Maze Algorithm
            </a>
          </button>
          <button class="fancy" variant="secondary" size="lg" block>
            <a href="https://trivia-redux.herokuapp.com/">Trivia App</a>
          </button>
        </div>
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
