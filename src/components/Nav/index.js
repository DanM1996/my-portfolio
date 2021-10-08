import React from 'react';
import Projects from '../Projects';


function Nav(props) {
    return (
        // <header className="flex-row space-1">
        //     <h2>
        //         My Portfolio
        //     </h2>
        //     <nav>
        //         <ul className="flex-row nav-spacing">
        //             <li className="li-spacing">
        //                 <a href="/">
        //                     About Me
        //                 </a>
        //             </li>
        //             <li className="li-spacing">
        //                 <a href="#projects">
        //                     My Projects
        //                 </a>
        //             </li>
        //             <li className="li-spacing">
        //                 <a href="#contact">
        //                     Contact
        //                 </a>
        //             </li>
        //             <li className="li-spacing">
        //                 <a href="#resume">
        //                     Resume
        //                 </a>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
        <header className="flex-row space-1">
            <h2>
                Dan Martinez
            </h2>
            <nav>
            <ul className="flex-row nav=spacing">
                {props.navCategories.map(nav => (
                    <li className="li-spacing" key={nav.id}>
                       <span>{nav.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
    )
}

export default Nav;