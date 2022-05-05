import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Project from './components/Projects';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter basepath="/Portfolio2.0" > 
          <Nav/>
            <Routes>
              <Route path="/About" element={<About/>}/>
              <Route path="/Project" element={<Project/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="*" element={<Home/>}/>
            </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
