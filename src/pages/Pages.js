import React from 'react';
import Home from "./Home";
import Projects from "./Projects";
import Spacer from "../components/Spacer";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function Pages() {
    return (
        <div>
            <Spacer
                page="home"
            />
            <Home/>
            <Spacer
                page="projects"
            />
            <Projects/>
            <Spacer
                page="about"
            />
            <About/>
            <Spacer
                page="contact"
            />
            <Contact/>
            {/*<Services/>*/}
            {/*<Spacer/>*/}

        </div>
    );
}

export default Pages;