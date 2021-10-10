import React, { useState } from 'react';
import background1 from '../../assets/images/Spontaneous-Selection.PNG'
import background2 from '../../assets/images/Blue42.PNG';

function Projects() {

    const [hover, setHover] = useState([false, false])
    
    const hoverText = (link, text) => {
        return <p>
            <a href={link} target="_blank" className="project-item">
                <span>{text}</span>
            </a>
            </p>
    }
    return (
        <>
            <p>My Projects</p>
            <section style={{
                backgroundImage: `url(${background1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                width: '500px',
                height: '250px',
                opacity: hover[0] ? '50%' : '100%'
            }}
                onMouseEnter={() => {setHover([true, false])}}
                onMouseLeave={() => {setHover([false, false])}}
            >
                {hover[0] ? hoverText('https://danm1996.github.io/spontaneous-selection/', 'Spontaneous Selection') : ''}
                
            </section>
            <section style={{
                backgroundImage: `url(${background2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                width: '500px',
                height: '250px',
                opacity: hover[1] ? '50%' : '100%'
            }}
            onMouseEnter={() => {setHover([false, true])}}
            onMouseLeave={() => {setHover([false, false])}}
            >
               {hover[1] ? hoverText('https://secret-everglades-56686.herokuapp.com/', 'Blue 42') : ''} 
            </section>
        </>
    )
}

export default Projects;