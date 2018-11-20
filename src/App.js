import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Test from './Test';
import action from './action/counter'

import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {counter: state.counter, counter2: state.counter2}
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(action.increment()) },
    handleDecClick: () => { dispatch(action.decrement()) },
    handleClick2: () => { dispatch(action.increment2()) },
    handleDecClick2: () => { dispatch(action.decrement2()) },
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>reactの勉強場(´・ω・`)b</h1>
          <h2>ここらへんreact+reduxで状態管理勉強場</h2>
          <div>{this.props.counter.fuga}</div>
          <div>
            <button onClick={ () => this.props.handleClick()}>PlusClick!</button>
            <button onClick={ () => this.props.handleDecClick()}>DecClick!</button>
          </div>
          <div>{this.props.counter2.fuga}</div>
          <div>
            <button onClick={ () => this.props.handleClick2()}>PlusClick!</button>
            <button onClick={ () => this.props.handleDecClick2()}>DecClick!</button>
          </div>
          <h2>ココらへん react+router and css scope(css modules)の勉強</h2>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/test">testリンク</Link></div>
          <Route exact path='/test' component={Test} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
