import React from 'react'
import Guide from './guide'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

function App(props) {
  return (
    <Router>
      <Guide />
    </Router>
  );
}

export default App;
