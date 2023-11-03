import React from 'react';
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Pages({state, setProjects, setAbout, setContact, setNone}) {
    return (
        <div className="md:snap-y md:snap-proximity h-screen w-screen overflow-x-hidden scroll-smooth">
            <Home page="home"
                  state={state}
                  setNone={setNone}
                  setProjects={setProjects}
                  setAbout={setAbout}
                  setContact={setContact}
            />

            <Projects page="projects"
                      state={state}
                      setNone={setNone}
                      setProjects={setProjects}
            />

            <About page="about"
                   state={state}
                   setNone={setNone}
                   setAbout={setAbout}
            />

            {/*<Contact page="contact"*/}
            {/*         state={state}*/}
            {/*         setNone={setNone}*/}
            {/*         setContact={setContact}*/}
            {/*/>*/}

        </div>
    );
}

export default Pages;