import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Nav(props) {
    const { pages = [], setCurrentPage, currentPage } = props;

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
                {/* {pages.map(navItem => (
                    <li className={`li-spacing text-format ${currentPage.name === navItem.name && 'navActive'}`} key={navItem.id}>
                       <span className="" onClick={() => { setCurrentPage(navItem) }}>{navItem.name}</span>
                    </li>
                ))} */}
                <li><Link activeClass="active" className="about li-spacing text-format" to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link activeClass="active" className="projects li-spacing text-format" to="projects" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
                <li><Link activeClass="active" className="skills li-spacing text-format" to="skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
                <li><Link activeClass="active" className="contact li-spacing text-format" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Nav;