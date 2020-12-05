import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  NavBar
} from './components/index.js'
import Routes from './Routes.js'

function App() {

  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Routes/>
      </Router>
    </React.Fragment>
  );
}

export default App;
