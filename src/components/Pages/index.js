import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Pages({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name) {
            case 'Portfolio': 
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    }
    return (
        <div>
        {renderPage()}
        </div>
    )
};

export default Pages;