import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {

    const [hover, setHover] = useState([false, false])

    const hoverText = (link, text) => {
        return <p>
            <a href={link} target="_blank" rel="noreferrer" className="project-item">
                <span>{text}</span>
            </a>
        </p>
    }
    return (
        <>
            <h2 className="text-format">Projects</h2>
            <Container>
                <Row xs={12} lg={8}>
                    <Col className="project-1" style={{
                        // opacity: hover[0] ? '50%' : '100%'
                    }}
                        onMouseEnter={() => { setHover([true, false]) }}
                        onMouseLeave={() => { setHover([false, false]) }}
                    >
                        {hover[0] ? hoverText('https://danm1996.github.io/spontaneous-selection/', 'Spontaneous Selection') : ''}

                    </Col>
                    <Col className={hover[1] ? " hover-style-2 hvr-grow " : "project-2"} 
                        onMouseEnter={() => { setHover([false, true]) }}
                        onMouseLeave={() => { setHover([false, false]) }}
                    >
                        {hover[1] ?  hoverText( 'https://secret-everglades-56686.herokuapp.com/', 'Blue 42') : ''}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Projects;