import React, { Component } from "react";
import Building from "./components/Building";
import Bar from "./components/Bar";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutFlag: false,
      projectFlag: false,
      contactFlag: false,
    };
  }

  showAbout() {
    if (this.state.aboutFlag === true) {
      this.setState({ aboutFlag: false });
    } else
      this.setState({
        aboutFlag: true,
        projectFlag: false,
        contactFlag: false,
      });
  }
  showProjects() {
    if (this.state.projectFlag === true) {
      this.setState({ projectFlag: false });
    } else
      this.setState({
        projectFlag: true,
        aboutFlag: false,
        contactFlag: false,
      });
  }
  showContact() {
    if (this.state.contactFlag === true) {
      this.setState({ contactFlag: false });
    } else
      this.setState({
        contactFlag: true,
        aboutFlag: false,
        projectFlag: false,
      });
  }

  render() {
    const contact = (
      <div>
        <Bar sizeValue="20" width="34" height="5" />
        <div>&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;</div>
        <div>&nbsp;&nbsp;</div>
        <p id="nameT">
          <p>Contact: perkinsben@yahoo.com </p>
        </p>
        <p id="topinfoS">
          <button id="topinfo">
            <a href="https://calendly.com/perkinsben">Schedule a meeting</a>
          </button>
        </p>
        <p>
          <button id="topinfo">
            <a href="https://github.com/Ben8842">GitHub Profile</a>
          </button>
          <span>
            <button id="topinfo">
              <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                Linkedin Profile
              </a>
            </button>
          </span>
        </p>
      </div>
    );
    const basic = (
      <div>
        <p id="topinfoS">
          <button id="topinfo">
            <a href="https://calendly.com/perkinsben">Schedule a meeting</a>
          </button>
        </p>
        <p>
          <button id="topinfo">
            <a href="https://github.com/Ben8842">GitHub Profile</a>
          </button>
          <span>
            <button id="topinfo">
              <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                Linkedin Profile
              </a>
            </button>
          </span>
        </p>
      </div>
    );
    const projectContainer = (
      <div>
        <div class="row">
          <div class="column left">
            <Bar sizeValue="20" width="5" height="40" />
            <Bar sizeValue="20" width="5" height="40" />
          </div>
          <div class="column right">
            <p id="topinfoS">
              <button id="topinfo">
                <a href="https://optimistic-babbage-2ed085.netlify.app/">
                  Maze Algorithm
                </a>
              </button>
            </p>
            <p>
              <button id="topinfo">
                <a href="https://trivia-redux.herokuapp.com/">Trivia App</a>
              </button>
            </p>
            <p>
              <button id="topinfo">
                <a href="https://www.moviegame.fun/">Movie Game</a>
              </button>
            </p>
            <p>
              <button id="topinfo">
                <a href="https://trivia-redux.herokuapp.com/">Trivia App</a>
              </button>
              <p>
                <button id="topinfo">
                  <a href="https://vibrant-spence-207a4e.netlify.app/">
                    Emoji Game
                  </a>
                </button>
              </p>
              <p>
                <button id="topinfo">
                  <a href="https://ben8842.github.io/BitProject/">
                    Cryptocurrency Project
                  </a>
                </button>
                <p>
                  <button id="topinfo">
                    <a
                      id="bproject"
                      href="https://jolly-meninsky-2047bc.netlify.app/"
                    >
                      Triangle
                    </a>
                  </button>
                </p>
                <p>
                  <button id="topinfo">
                    <a href="https://admiring-spence-0175e7.netlify.app/">
                      Snake Game
                    </a>
                  </button>
                </p>
                <p>
                  <button id="topinfo">
                    <a
                      id="bproject"
                      href="https://tender-benz-d42ce4.netlify.app/"
                    >
                      Queen Puzzle
                    </a>
                  </button>
                </p>
                <p>
                  <button id="topinfo">
                    <a href="https://wordsearch-generator.herokuapp.com/">
                      Word Search Generator
                    </a>
                  </button>
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    );
    const aboutContainer = (
      <div>
        <div class="row">
          <div class="column left">
            <Bar sizeValue="20" width="5" height="56" />
          </div>
          <div class="column right">
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
          </div>
        </div>
      </div>
    );
    return (
      <div id="more">
        <Bar sizeValue="20" width="36" height="5" />
        <button id="topinfo" onClick={() => this.showAbout()}>
          About Me
        </button>
        <button id="topinfo" onClick={() => this.showProjects()}>
          My Projects
        </button>
        <button id="topinfo" onClick={() => this.showContact()}>
          Contact Me
        </button>

        {!this.state.aboutFlag &&
        !this.state.projectFlag &&
        !this.state.contactFlag
          ? basic
          : null}

        <div>{"    "}</div>
        {this.state.contactFlag ? contact : null}
        {this.state.aboutFlag ? aboutContainer : null}
        {this.state.projectFlag ? projectContainer : null}
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
