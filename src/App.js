import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import Projects from './component/projects';
import Contact from './component/Contact';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
    


    <Navbar />
    
    <div class="container">
      <Home   />
      <Skills />
      <Projects />
      <Contact />
    </div>
    
    
    
    
    
    </>
  );
}

export default App;
