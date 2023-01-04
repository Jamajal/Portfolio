import React, { useState, useEffect } from 'react';

import Welcome from '../../components/Welcome';
import About from '../../components/About';
import Projects from '../../components/Projects'
import Contact from '../../components/Contact';
import Nav from '../../components/Navbar';

import { styles as StyledHome } from './styles';

const Home = () => {
    const navigateWithScroll = () => {
        const navs = document.querySelectorAll(".nav-section");
        const sections = document.querySelectorAll(".nav-space");
        
        sections.forEach((section, index) => {
            if(section.getBoundingClientRect().top < (window.innerHeight - 500)){
                const actualSection = index;

                navs.forEach((nav, index) => {
                    if(index === actualSection)
                        nav.classList.add("active");
                    else
                        nav.classList.remove("active");
                })
            }
        })
    };

    useEffect(() => {
        navigateWithScroll();
    }, []);

    window.addEventListener('scroll', navigateWithScroll);

    return (
        <StyledHome>
            <Nav />
            <Welcome />
            <About />
            <Projects />
            <Contact />
        </StyledHome>
    );
}

export default Home;