import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routes from './Routes.js'
import { AuthContextProvider } from './context/AuthContext.js'

function App() {

  return (
    <React.Fragment>
      <Router>
        <AuthContextProvider>
          <div style={{ minHeight: '100vh', backgroundColor: '#F9F9F9' }}>
            <Routes />
          </div>
        </AuthContextProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
