import React, { Component } from "react";
import Building from "./components/Building";
import Bar from "./components/Bar";

import "./App.css";
import "./AppMobile.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutFlag: false,
      projectFlag: false,
    };
  }

  showAbout() {
    if (this.state.aboutFlag === true) {
      this.setState({ aboutFlag: false });
    } else this.setState({ aboutFlag: true });
  }
  showProjects() {
    if (this.state.projectFlag === true) {
      this.setState({ projectFlag: false });
    } else this.setState({ projectFlag: true });
  }

  render() {
    const projectContainer = (
      <div>
        <Bar sizeValue="20" width="44" height="5" />
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
                <a id="bproject" href="https://tender-benz-d42ce4.netlify.app/">
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
    );
    const aboutContainer = (
      <div>
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
      </div>
    );
    return (
      <div>
        <Bar sizeValue="20" width="44" height="5" />
        <p id="topinfoS">
          <button id="topinfo">
            <a href="https://calendly.com/perkinsben">
              Schedule a meeting with me
            </a>
          </button>
        </p>
        <p>
          <button id="topinfo">
            <a href="https://github.com/Ben8842">My GitHub Profile</a>
          </button>
          <p>
            <button id="topinfo">
              <a href="https://www.linkedin.com/in/ben-perkins-91262b16">
                My Linkedin Profile
              </a>
            </button>
          </p>
        </p>

        <div>{"    "}</div>
        <button id="topinfo" onClick={() => this.showAbout()}>
          About Me
        </button>
        <button id="topinfo" onClick={() => this.showProjects()}>
          My Projects
        </button>
        {this.state.aboutFlag ? aboutContainer : null}
        {this.state.projectFlag ? projectContainer : null}
      </div>
    );
  }
}

//<MyStopwatch />; not ready for this yet?
//  <div className="HeaderSpot">{inputBox}</div>; also don't need this at this time

export default App;
