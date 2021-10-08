import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import './App.css';

function App() {
  const navCategories = [
    {
      id: 1,
      name: 'About'
    },
    {
      id: 2,
      name: 'Projects'
    },
    {
      id: 3,
      name: 'Contact'
    },
    {
      id: 4,
      name: 'Resume'
    }
  ];
  return (
    <div>
      <Nav navCategories={navCategories}></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
