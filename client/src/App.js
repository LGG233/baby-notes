import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="jumbotron">
        <h1>Baby Notes</h1>
      </div>

    </div >
  );
}

export default App;
