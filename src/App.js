import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './state/store'
import { simpleAction } from './state/actions/simpleAction';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'

const store = configureStore({})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div>
              <Header />
              <Route exact path="/" component={Home} />
              <Route to={{
                  pathname: "/about",
                  search: "?sort=name",
                  hash: "#the-hash",
                  state: { fromDashboard: true }
                }}
                component={About}
              />
              <Route path="/topics" component={Topics} />
            </div>
            <pre>
            props: { JSON.stringify(this.props)}
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

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
