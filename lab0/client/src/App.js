import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Number from './Number'
import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
function App() {
  return (
    
    <Router>
    <Routes>
      
      <Route path='/' element = {<Number/>}>
        
      </Route>
    </Routes>
    </Router>
  )
}

export default App;
