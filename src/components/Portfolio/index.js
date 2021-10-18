import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolioItems from './portfolio.json';
import PortfolioCard from '../Projects';

function Portfolio() {
    let project;
    if (portfolioItems.length > 0) {
        project = portfolioItems.map(items =>
            
                <PortfolioCard
                    id={items.id}
                    name={items.name}
                    image={items.image}
                    link={items.link}
                    repo={items.repo}
                />
        )
    }
    return (
        <>
            <h2 class="text-format portfolio-title">Portfolio</h2>
            <Container>
                <Row>
                    <div>
                        {project}
                    </div>
                </Row>
            </Container>
        </>

    )
}

// class Portfolio extends Component {
//     state = { 
//         portfolioItems 
//     };
//     addProject = (id) => {
//         // this is referring back to the json object, state is saying we're manipulating state through projects
//         // projects.id !== id is removing any duplicate projects
//         const projects = this.state.portfolioItems.filter(project => project.id !== id);
//         this.setState({ portfolioItems });
//     }
//     render() {
//     return (
//         <>
//             <h2 class="text-format portfolio-title">Portfolio</h2>
//             <Container>
//                 <Row xs={12} md={6}>
//                     <Col className="hvr-grow">
//                         {this.state.portfolioItems.map(project => (
//                             <PortfolioCard 
//                             addProject={this.addProject}
//                             id={project.id}
//                             key={project.id}
//                             name={project.name}
//                             image={project.image}
//                             link={project.link}
//                             repo={project.repo}
//                             />
//                         ))}
//                     </Col>
//                 </Row>
//             </Container>
//             {/* <Container>
//                 <Row xs={12} lg={8}>
//                     <Col className="hvr-grow">
//                         <div className="storage">
//                             <img src={image1} alt="Blue 42" class="image" />
//                             <div className="overlay">
//                                 <div className="text">
//                                     <a href="https://secret-everglades-56686.herokuapp.com/" target="_blank">Blue 42</a> <br />
//                                     <a href="https://github.com/DanM1996/blue-42" target="_blank">Repo</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col className="storage hvr-grow">
//                         <img src={image2} alt="Spontaneous Selection" class="image" />
//                         <div className="overlay">
//                             <div className="text">
//                                 <a href="https://danm1996.github.io/spontaneous-selection/" target="_blank">Spontaneous Selection</a> <br />
//                                 <a href="https://github.com/DanM1996/spontaneous-selection" target="_blank">Repo</a>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row xs={12} lg={8}>
//                     <Col className="hvr-grow">
//                         <div className="storage">
//                             <img src={image3} alt="Budget Tracker" class="image" />
//                             <div className="overlay">
//                                 <div className="text">
//                                     <a href="https://tranquil-eyrie-77020.herokuapp.com/" target="_blank">Budget Tracker</a> <br />
//                                     <a href="https://github.com/DanM1996/budget-tracker" target="_blank">Repo</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col className="storage hvr-grow">
//                         <img src={image4} alt="Password Generator" class="image" />
//                         <div className="overlay">
//                             <div className="text">
//                                 <a href="https://danm1996.github.io/password-generator/Develop/" target="_blank">Password Generator</a> <br />
//                                 <a href="https://github.com/DanM1996/password-generator" target="_blank">Repo</a>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//                 <Row xs={12} lg={8}>
//                     <Col className="hvr-grow">
//                         <div className="storage">
//                             <img src={image5} alt="Work Day Scheduler" class="image" />
//                             <div className="overlay">
//                                 <div className="text">
//                                     <a href="https://danm1996.github.io/work-day-scheduler/" target="_blank">Work Day Scheduler</a> <br />
//                                     <a href="https://github.com/DanM1996/work-day-scheduler" target="_blank">Repo</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                     <Col className="storage hvr-grow">
//                         <img src={image6} alt="Note Taker" class="image" />
//                         <div className="overlay">
//                             <div className="text">
//                                 <a href="https://peaceful-lowlands-37017.herokuapp.com/" target="_blank">Note Taker</a> <br />
//                                 <a href="https://github.com/DanM1996/note-taker" target="_blank">Repo</a>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container> */}
//         </>
//     )
// }
// }
export default Portfolio;