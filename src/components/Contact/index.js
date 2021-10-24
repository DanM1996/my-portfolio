import React from 'react';
import { FaFile, FaMobile, FaEnvelope } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resume from '../../assets/images/MyResume.pdf';


function Contact() {
    return (
        <>
            <div id="contact" className="contact-style">
                <h2 className="h2-style contact-h2">Contact Me</h2>
                <Container>
                    <Row>
                        <Col className="contact-div" lg={4} md={6} s={8} xs={12}>
                        <a href="mailto:bmdmartinez@gmail.com" className="formatting-href">
                                <FaEnvelope className="icon-style" />
                                bmdmartinez@gmail.com
                            </a>
                        </Col>
                        <Col className="contact-div" lg={4} md={6} s={8} xs={12}>
                        <a href={resume} download="resume" className="formatting-href">
                                <FaFile className="icon-style" />
                                Resume
                            </a>
                        </Col>
                        <Col className="contact-div" lg={4} md={4} s={8} xs={12}>
                            <a href="tel:9739349428" className="formatting-href">
                                <FaMobile className="icon-style" />
                                973-934-9428
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;