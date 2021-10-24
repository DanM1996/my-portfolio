import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './App.css';

function App() {
  // array brackets make it so pages only takes in the values in the useState function
  const [pages] = useState([
    {
      id: 1,
      name: 'About'
    },
    {
      id: 2,
      name: 'Portfolio'
    },
    {
      id: 3,
      name: 'Contact'
    },
    {
      id: 4,
      name: 'Resume'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <div>
      <Nav 
      // assigning props the value of the variables on this page, keeping names the same for continuity
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        {/* <Pages currentPage={currentPage}></Pages> */}
        <About />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
