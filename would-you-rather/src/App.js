import React, { Component } from 'react';
import Login from './components/Login'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialData()))
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default connect()(App)
