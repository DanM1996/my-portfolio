import React, { useEffect } from 'react';
import Projects from '../Projects';


function Nav(props) {
    const { pages = [], setCurrentPage, currentPage } = props;
    // function loadComponent() {
    //     console.log(currentPage.name);
    // }

    // useEffect function triggers everytime currentPage changes (category value) and changes the document title to mirror the page we're on
    useEffect(() => {
        document.title = currentPage.name
    }, [currentPage])
    
    return (
        <header className="flex-row space-1">
            <h2>
                Dan Martinez
            </h2>
            <nav>
            <ul className="flex-row nav-spacing">
                {pages.map(navItem => (
                    <li className={`li-spacing ${currentPage.name === navItem.name && 'navActive'}`} key={navItem.id}>
                       <span onClick={() => { setCurrentPage(navItem) }}>{navItem.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Nav;