import React, { useEffect } from 'react';


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
        <header className="flex-row">
            <h1 class="name-tag">
                Dan Martinez
            </h1>
            <nav>
            <ul className="flex-row nav-items">
                {pages.map(navItem => (
                    <li className={`li-spacing text-format ${currentPage.name === navItem.name && 'navActive'}`} key={navItem.id}>
                       <span className="" onClick={() => { setCurrentPage(navItem) }}>{navItem.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Nav;