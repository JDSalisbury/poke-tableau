import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableauEmbed from './components/TableauEmbed'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Embedded Anylticis with Tableau</h1>
        <TableauEmbed />
      </header>
    </div>
  );
}

export default App;
