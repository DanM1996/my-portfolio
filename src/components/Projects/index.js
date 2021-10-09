import React, { useState } from 'react';
import background1 from '../../assets/images/Spontaneous-Selection.PNG'

function Projects() {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(true);
    }
    const offHover = () => {
        setHover(false);
    }
    const hoverText =  <p className="hoverText" style={{ 
        backgroundImage: `url(${background1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '500px',
        height: '600px',
        opacity: '50%'
        }} > <a href="https://danm1996.github.io/spontaneous-selection/" target="_blank" class="project-item-4">
        <span>Spontaneous Selection</span>
    </a> </p>;

    console.log(hoverText)

    return (
        <>
            <p>Projects go here!</p>
            <div className='project-containers'>
            <section style={{ 
                backgroundImage: `url(${background1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                width: '500px',
                height: '250px',
                }}
                onMouseEnter={onHover}
                onMouseLeave={offHover}
                >
                    {hover ? hoverText : ''}
            </section>
            
            </div>
        </>
    )
}

export default Projects;