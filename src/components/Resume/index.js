import React from 'react';
import resume from '../../assets/images/Daniel Martinez Resume.pdf';

function Resume() {
    return (
        <>
            <a href={resume} download="resume" className="resume">Download my resume</a>
            <h2 className="skills">Skills</h2>
            <h3>Front-end Proficiencies</h3>
            <ul className="style">
                <li className="li-text">HTML</li>
                <li className="li-text">CSS</li>
                <li className="li-text">JavaScript</li>
                <li className="li-text">Bootstrap</li>
                <li className="li-text">Materialize</li>
                <li className="li-text">React</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul className="style">
                <li className="li-text">Node</li>
                <li className="li-text">Express</li>
                <li className="li-text">MySQL/Sequelize</li>
                <li className="li-text">MongoDB/Mongoose</li>
                <li className="li-text">APIs</li>
            </ul>
        </>
    )
}

export default Resume;