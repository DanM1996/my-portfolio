import React, { useState } from 'react';
import Nav from './components/Nav';
import Pages from './components/Pages';
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
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])
  console.log(currentPage.name);
  return (
    <div>
      <Nav 
      // assinging props the value of the variables on this page, keeping names the same for continuity
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        <Pages currentPage={currentPage}></Pages>
      </main>
    </div>
  );
}

export default App;
