import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects(props){
    const{ projects = [] } = props;
    return (
        <Container>
            <Row xs={12} lg={8}>
                    <Col className="hvr-grow">
                        <div className="storage">
                            {projects.map(activeProject => (
                                <>
                                <img src={activeProject.image} alt={activeProject.name} class="image" />
                                <div className="overlay">
                                    <div className="text">
                                        <a href={activeProject.link} target="_blank">{activeProject.name}</a> <br />
                                        <a href={activeProject.repo} target="_blank">Repo</a>
                                    </div>
                                </div>
                                </>
                            ))}
                            
                        </div>
                    </Col>
                </Row>
        </Container>
    )
}
export default Projects;