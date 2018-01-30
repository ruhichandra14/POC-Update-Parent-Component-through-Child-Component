import React, { Component } from 'react';
import ParentComponent from './parent-comp';

export default class App extends Component {
  render() {
    return (
        <div>
            <header><span>Update Parent from Child Element</span></header>
            <ParentComponent/>

        </div>
    );
  }
}
