import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWords:'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
