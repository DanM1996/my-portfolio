import React from 'react';
import resume from '../../assets/images/Daniel Martinez Resume.pdf';
import resumeImg from '../../assets/images/resume.PNG'

function Resume() {
    return ( 
    <>
        <a href={resume} download="resume">Download my resume</a>
        {/* <img src={resumeImg} alt="Image of resume" /> */}
        </>
    )
}

export default Resume;