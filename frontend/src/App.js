import React from 'react';
import logo from './logo.svg';
import Translate from './Translate';
import './App.css';

function App() {
  return (
    <div class="row">
      
        <div class="col">
          <Translate from="en" to="nl"/>
        </div>
        <div class="col">
          <Translate from="nl" to="en"/>
        </div>
    </div>
  );
}

export default App;
