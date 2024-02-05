import React from 'react';
import logo from './logo.svg';
import './App.css';

//React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Views
import Home from './views/Home';
import About from './views/About';
import Pages from './views/Pages';
import Portfolio from './views/Portfolio';

//Components
import HomeButton from './components/homeButton';
import NavButton from './components/navButton';
import NavDropDown from './components/navDropDown';

function App() {
  const pages = [{name: "page1"}, {name: "page1"}, {name: "page1"}];

  return (
    
    <div className='App'>
      <Router>
        <div className='App-header'>
          <HomeButton />
          <NavButton title={"About"} destination={"/About"} />
          <NavDropDown title={"Pages"} />
          <NavButton title={"Portfolio"} destination={"/Portfolio"} />
        </div>

        
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Pages" element={<Pages />}>
              {pages.forEach(page => {})}
              <Route path="/dummy1" />
            </Route>
            <Route path="/Portfolio" element={<Portfolio />}/>
          </Routes>
        </Router>

      <div className='App-footer'></div>
    </div>
  );
}

export default App;
