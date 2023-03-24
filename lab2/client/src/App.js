import logo from './logo.svg';
import './App.css';
import CreateInventory from './CreateInventory.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    
    <Router>
    <Routes>
      
      <Route path='/' element = {<CreateInventory/>}>
        
      </Route>
    </Routes>
    </Router>
  )
}

export default App;
