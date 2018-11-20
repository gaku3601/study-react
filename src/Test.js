import React, {Component} from 'react';
import test from './Test.module.css';

export default class Test extends Component {
  render () {
    return (
      <div>
        <div className="color">global scope</div>
        <div className={test.color2}>local scope1<h2 className={test.color3}>local soppe2</h2></div>
        <h1>Happy CSS Module!</h1>
      </div>
    );
  }
}
