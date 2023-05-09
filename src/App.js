import './App.css';
import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: 'Tevin Sales'
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange = (e) => {
    this.setState({
      fullName: e.target.value
    });
  }

  render() {
    const { fullName } = this.state;
    return (
      <div className='main-app'>
        <Navbar fullName={fullName} />
        <Sidebar fullName={fullName} onChange={this.handleNameChange} />
      </div>
    );
  }
}

export default App;
