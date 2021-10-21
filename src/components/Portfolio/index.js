import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
                    text={items.text}
                    tools={items.tools}
                />
        )
    }
    return (
        <>
        <div id="projects">
            <h2 class="text-format portfolio-title">Portfolio</h2>
            <Container>
                <Row>
                        {project}   
                </Row>
            </Container>
            </div>
        </>

    )
}
export default Portfolio;