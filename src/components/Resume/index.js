import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGit, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';

function Resume() {
    return (
        <>
            <div id="skills" className="skills">
                <h2 className="h2-style">Skills</h2>
                <Container>
                    <Row>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                <FaGit className="icon-style" />
                                Git
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                <FaHtml5 className="icon-style" />
                                HTML 5
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                <FaCss3 className="icon-style" />
                                CSS
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                <FaJs className="icon-style" />
                                JavaScript
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                <FaNodeJs className="icon-style" />
                                Node
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                <FaReact className="icon-style" />
                                React
                            </p>
                        </Col>
                   
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                Express
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                SQL
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                Sequelize
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                ORM
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                OOP
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                MVC
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                NoSQL/MongoDB
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                Mongoose
                            </p>
                        </Col>
                        <Col className="contact-div" lg={3} md={6} s={8} xs={12}>
                            <p>
                                IndexedDB
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Resume;