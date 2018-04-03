// React libs
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

// SCSS
import "./css/menu.css"

/**
 * This is the main app
 *
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <body className="App-body">
          <Router>
            <div>
              <ul>
                <li>
                  <Link class="menu-item" to="/">Home</Link>
                </li>
                <li>
                  <Link class="menu-item" to="/about">About</Link>
                </li>
                <li>
                  <Link class="menu-item" to="/topics">Topics</Link>
                </li>
              </ul>
              <hr/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
            </div>
          </Router>
        </body>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
    <H1>Test</H1>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/>
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);