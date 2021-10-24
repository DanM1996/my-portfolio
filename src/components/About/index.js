import React from 'react';
import headshot from '../../assets/images/Headshot.png';

function About(){
    return (
        <>
        <div id="about" className="about">
        <h2 class="text-format h2-style">About</h2>
        <img src={headshot} className="picture" alt="of Dan Martinez" />
            <p className="about-me">
            Hello, my name is Daniel Martinez and I'm Full Stack Web Developer with an undergraduate degree in Interactive Multimedia from The College of New Jersey and a certificate in 
            Full Stack Web Development from Case Western University. From problem-solving to learning and understanding new frameworks such as 
            Handlebars and APIs to languages like JavaScript and MySQL, I get a thrill from creating functioning projects while learning and 
            adapting successfully. With prior work experience on a tight-knit team for a medical communications company, I excelled as a team player 
            who was always willing to help out team members in a pinch. 
            My passion for technology and learning combined with a strong team spirit will allow me to provide a valuable and diverse skill set. 
            </p>
        </div>
            
        </>
    )
}
export default About;