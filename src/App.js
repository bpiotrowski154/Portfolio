import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {Routes, Route} from 'react-router-dom';

// #0F0F0F
// #183D3D
// #5C8374
// #93B1A6


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
