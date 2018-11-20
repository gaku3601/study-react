import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Test from './Test';

const App = () => (
  <BrowserRouter>
    <div>
      <h1 className="color">header</h1>
      <h1 className="color2">header2</h1>
      <Test />
      <Route exact path='/' component={Com} />
      <Route exact path='/test' component={Test} />
      <Route path='/com' component={Com2} />
    </div>
  </BrowserRouter>
)

class Com extends Component {
  componentWillMount() {
    console.log('初期化!')
  }
  onClickUl(e) {
    console.log('<h1> was clicked.')
  }
  render() {
    return (
        <div>
          <h1>root page!!!!(´・ω・`)</h1>
        </div>
    );
  }
}
class Com2 extends Component {
  componentWillMount() {
    console.log('初期化!')
  }
  onClickUl(e) {
    console.log('<h1> was clicked.')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 onClick={this.onClickUl}>ようこそ！Com2の世界へ</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Route path="/com/com" component={Com3} />
      </div>
    );
  }
}

class Com3 extends Component {
  componentWillMount() {
    console.log('初期化!')
  }
  onClickUl(e) {
    console.log('<h1> was clicked.')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 onClick={this.onClickUl}>ようこそ！Com3の世界へ</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
