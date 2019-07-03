import React from 'react';
import logo from './logo.svg';
import Translate from './Translate';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Translate from="en" to="nl"/>
      </div>
      <div>
        <Translate from="nl" to="en"/>
      </div>
    </div>
  );
}

export default App;
