import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SOSDemo from "./components/Sosdemo"
import Capstonedemo from "./components/Capstonedemo";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// #0F0F0F
// #183D3D
// #5C8374
// #93B1A6


function App() {
  return (
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/skills' Component={Skills}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/sos' Component={SOSDemo}/>
          <Route path='/capstone' Component={Capstonedemo}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
