import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import image1 from "../../assets/images/Blue42.PNG";
import image2 from "../../assets/images/Spontaneous-Selection.PNG";
import image3 from "../../assets/images/Budget.PNG";
import image4 from "../../assets/images/Password.PNG";
import image5 from "../../assets/images/Schedule.PNG";
import image6 from "../../assets/images/Notes.PNG";


function PortfolioCard({ id, name, image, link, repo }) {
    console.log(image);
    console.log(image1);
    console.log(image2);
    const images = [image1, image2, image3, image4, image5, image6]
    return (
            <Col lg={4} md={6} s={12}>
                <Card className="styling">
                    <Card.Img varient="top" src={images[id]} alt={name} className="image" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Sample Text</Card.Text>
                        <Card.Link href={link} target="_blank">{name}</Card.Link>
                        <Card.Link href={repo} target="_blank">Git Repo</Card.Link>
                        {/* <a href={link} target="_blank">{name}</a>
                            <a href={repo} target="_blank">Repo</a> */}
                    </Card.Body>
                </Card>
            </Col>
    )
}
export default PortfolioCard;