import React, { useState } from 'react';
import background1 from '../../assets/images/Spontaneous-Selection.PNG'
import background2 from '../../assets/images/Blue42.PNG';

function Projects() {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(true);
    }
    const offHover = () => {
        setHover(false);
    }
    const hoverText1 = <p className="hoverText" style={{
        backgroundImage: `url(${background1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '500px',
        height: '600px',
        opacity: '50%'
    }} > <a href="https://danm1996.github.io/spontaneous-selection/" target="_blank" class="project-item-1">
            <span>Spontaneous Selection</span>
        </a>
    </p>;

const hoverText2 = <p className="hoverText" style={{
    backgroundImage: `url(${background2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    width: '500px',
    height: '600px',
    opacity: '50%'
}} > <a href="https://secret-everglades-56686.herokuapp.com/" target="_blank" class="project-item-2">
        <span>Blue 42</span>
    </a>
</p>;

    return (
        <>
            <p>My Projects</p>
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
                {hover ? hoverText1 : ''}
            </section>
            <section style={{
                backgroundImage: `url(${background2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                width: '500px',
                height: '250px',
            }}
                onMouseEnter={onHover}
                onMouseLeave={offHover}
            >
                {hover ? hoverText2 : ''}
            </section>
        </>
    )
}

export default Projects;