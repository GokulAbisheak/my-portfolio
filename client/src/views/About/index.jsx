import React from 'react';
import Introduction from './Introduction';
import Education from './Education';
import Honors from './Honors';
import Volunteering from './Volunteering';

const About = () => {
    return (
        <>
            <div id='about'>
                <Introduction />
                <Education />
                <Honors />
                <Volunteering />
            </div>
        </>
    );
}

export default About;
