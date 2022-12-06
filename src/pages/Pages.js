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
            {/*<Spacer*/}
            {/*    page="home"*/}
            {/*/>*/}
            <Home page="home"/>
            {/*<Spacer*/}
            {/*    page="projects"*/}
            {/*/>*/}
            <Projects page="projects"/>
            {/*<Spacer*/}
            {/*    page="about"*/}
            {/*/>*/}
            <About page="about"/>
            {/*<Spacer*/}
            {/*    page="contact"*/}
            {/*/>*/}
            <Contact page="contact"/>
            {/*<Services/>*/}
            {/*<Spacer/>*/}

        </div>
    );
}

export default Pages;