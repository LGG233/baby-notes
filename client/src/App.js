import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="jumbotron"></div>
      <div className="navbar">
        <Navbar />
      </div>

    </div>
  );
}

export default App;
