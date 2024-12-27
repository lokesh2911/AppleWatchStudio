import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';
import Watch from './components/Watch/Preview';
import HermesSeries from './components/HermesSeries/HermeSeries';
import { useState } from 'react';
import SEWatch from './components/SE Watch/AppleSE';
import ProductCase from './components/Cases/ProductCase';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Router>
      <Navbar showDropdown={showDropdown} />
      <Routes>
        <Route path="/" element={<Home onGetStarted={() => setShowDropdown(true)} />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/Hermes" element={<HermesSeries />} />
        <Route path="/SEWatch" element={<SEWatch/>}/>
        <Route path='/ProductCase' element={<ProductCase/>}/>
      </Routes>
    </Router>
  );
}

export default App;
