import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Activity from './pages/Activity';
import Landing from './pages/Landing';
import Journal from './pages/Journal';
import Child from './pages/Child';
import NotFound from './pages/NotFound';
// import Home from './pages/Home';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <Router>

      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="jumbotron">
          <h1>Baby Notes</h1>
        </div>
        <Switch>
          <Route path="/" component={Landing} />
          <Route exact path="/home" component={RegisterForm} />
          <Route exact path="/" compenent={SignIn} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/child" component={Child} />
          <Route exact path="/journal" component={Journal} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
