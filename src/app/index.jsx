import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <figure className="logo">
          <img src={logo} className="logo__img" alt="logo" />
        </figure>
      </div>
    )
  }
}

export default App;
