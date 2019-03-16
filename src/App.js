import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Link } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './store'
import { simpleAction } from './actions/simpleAction';
import logo from './logo.svg';
import './App.css';

const store = configureStore({})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }

          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            <div>
              <Header />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
            </div>
            <pre>
            { JSON.stringify(this.props)}
            </pre>
            <button onClick={e => {
              this.props.simpleAction();
            }
            }>Test redux action</button>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
