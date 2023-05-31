import React from 'react';
import { Header, Footer } from '../components'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Views = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default Views;
