import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from './state/store'
import { simpleAction } from './state/actions/simpleAction';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
import Metronome from './components/Metronome'
import Tuner from './components/Tuner'

const store = configureStore({})
const routes = [
  {
    path: '/metronome',
    component: Metronome
  },
  {
    path: '/tuner',
    component: Tuner
  }
]
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
          <div className="app">
            <Header />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />

            { routes.map((route, i) => (<Route key={i} {...route} />))}
            <button onClick={e => {
              this.props.simpleAction();
            }}>Test redux action</button>
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
