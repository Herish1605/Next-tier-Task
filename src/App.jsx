import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import page components
import HomePage from './pages/Home';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/landing' element={<landingpage/>}/>  
      
    </Routes>
  </Router>
       
  );
}

export default App;