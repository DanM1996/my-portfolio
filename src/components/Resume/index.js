import React from 'react';
import resume from '../../assets/images/Daniel Martinez Resume.pdf';

function Resume() {
    return ( 
    <>
        <a href={resume} download="resume">Download my resume</a>
        </>
    )
}

export default Resume;