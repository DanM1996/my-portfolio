import React from 'react';
import Container from 'react-bootstrap/Container';
import image1 from '../../assets/images/Blue42.PNG';
import image2 from '../../assets/images/Spontaneous-Selection.PNG'
import image3 from '../../assets/images/Budget.PNG'
import image4 from '../../assets/images/Password.PNG';
import image5 from '../../assets/images/Schedule.PNG';
import image6 from '../../assets/images/Notes.PNG';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projects from '../Projects';

function Portfolio() {
    const projects = ([
        {
            name: 'Blue 42',
            link: "https://secret-everglades-56686.herokuapp.com/",
            repo: "https://github.com/DanM1996/blue-42",
            image: { image1 }
        },
        {
            name: 'Spontaneous Selection',
            link: "https://danm1996.github.io/spontaneous-selection/",
            repo: "https://github.com/DanM1996/spontaneous-selection",
            image: { image2 }
        },
        {
            name: 'Blue 42',
            link: "https://tranquil-eyrie-77020.herokuapp.com/",
            repo: "https://github.com/DanM1996/budget-tracker",
            image: { image3 }
        },
        {
            name: 'Blue 42',
            link: "https://danm1996.github.io/password-generator/Develop/",
            repo: "https://github.com/DanM1996/password-generator",
            image: { image4 }
        },
        {
            name: 'Blue 42',
            link: "https://danm1996.github.io/work-day-scheduler/",
            repo: "https://github.com/DanM1996/work-day-scheduler",
            image: { image5 }
        },
        {
            name: 'Blue 42',
            link: "https://peaceful-lowlands-37017.herokuapp.com/" ,
            repo: "https://github.com/DanM1996/note-taker",
            image: { image6 }
        }

    ])
    return (
        <>
            <h2 class="text-format portfolio-title">Portfolio</h2>
            {/* <Container>
                {projects.map((projects, idx) => (
                    <Projects
                    projects={projects}
                    key={'projects' + idx}
                    />
                ))}
            </Container> */}
            <Container>
                <Row xs={12} lg={8}>
                    <Col className="hvr-grow">
                        <div className="storage">
                            <img src={image1} alt="Blue 42" class="image" />
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://secret-everglades-56686.herokuapp.com/" target="_blank">Blue 42</a> <br />
                                    <a href="https://github.com/DanM1996/blue-42" target="_blank">Repo</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="storage hvr-grow">
                        <img src={image2} alt="Spontaneous Selection" class="image" />
                        <div className="overlay">
                            <div className="text">
                                <a href="https://danm1996.github.io/spontaneous-selection/" target="_blank">Spontaneous Selection</a> <br />
                                <a href="https://github.com/DanM1996/spontaneous-selection" target="_blank">Repo</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row xs={12} lg={8}>
                    <Col className="hvr-grow">
                        <div className="storage">
                            <img src={image3} alt="Budget Tracker" class="image" />
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://tranquil-eyrie-77020.herokuapp.com/" target="_blank">Budget Tracker</a> <br />
                                    <a href="https://github.com/DanM1996/budget-tracker" target="_blank">Repo</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="storage hvr-grow">
                        <img src={image4} alt="Password Generator" class="image" />
                        <div className="overlay">
                            <div className="text">
                                <a href="https://danm1996.github.io/password-generator/Develop/" target="_blank">Password Generator</a> <br />
                                <a href="https://github.com/DanM1996/password-generator" target="_blank">Repo</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row xs={12} lg={8}>
                    <Col className="hvr-grow">
                        <div className="storage">
                            <img src={image5} alt="Work Day Scheduler" class="image" />
                            <div className="overlay">
                                <div className="text">
                                    <a href="https://danm1996.github.io/work-day-scheduler/" target="_blank">Work Day Scheduler</a> <br />
                                    <a href="https://github.com/DanM1996/work-day-scheduler" target="_blank">Repo</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="storage hvr-grow">
                        <img src={image6} alt="Note Taker" class="image" />
                        <div className="overlay">
                            <div className="text">
                                <a href="https://peaceful-lowlands-37017.herokuapp.com/" target="_blank">Note Taker</a> <br />
                                <a href="https://github.com/DanM1996/note-taker" target="_blank">Repo</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Portfolio;