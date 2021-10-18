import React from 'react';
import Col from 'react-bootstrap/Col';
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
            <Col md={6} className="hvr-grow">
                    <img src={images[id]} alt={name} className="image" />
                    <div className="overlay">
                        <div className="text">
                            <a href={link} target="_blank">{name}</a>
                            <a href={repo} target="_blank">Repo</a>
                        </div>
                    </div>
            </Col>
    )
}
export default PortfolioCard;