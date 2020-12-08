import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  NavBar
} from './components/index.js'
import Routes from './Routes.js'
import { AuthContextProvider } from './context/AuthContext.js'

function App() {

  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <NavBar/>
          <Routes/>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
