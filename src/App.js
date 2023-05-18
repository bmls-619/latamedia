import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home'
import DominicanTV from "./pages/dominicanchannels";
import DominicanRadios from "./pages/dominicanradios"

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/dominicanchannels" Component={DominicanTV} />
          <Route path="/dominicanradiostations" Component={DominicanRadios} />
        </Routes>
       <Footer />
    </Router>
  );
}

export default App;
