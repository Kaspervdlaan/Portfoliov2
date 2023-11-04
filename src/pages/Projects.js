import React, { useRef } from 'react';
import Card from "../components/Card";
import galactic from "../assets/galactic.png";
import bvb from "../assets/bvb.png";
import portfolio from "../assets/port.png"
import gps from "../assets/gps1.png"
import { useInViewport } from 'react-in-viewport';


function Projects({page, setProjects, setNone}) {
    const projectRef = useRef();
    const { inViewport } = useInViewport(projectRef);


    if (inViewport) {
        setProjects()
    }

    return (
        <main id={page} className="snap-start md:min-h-[100vh] h-auto flex flex-col items-center text-white justify-center max-w-screen-3xl ">

            <section ref={projectRef} className="flex justify-center flex-wrap h-fit gap-5 m-20">

                <Card
                    image={gps}
                    title="Gps tracking app"
                    descOne="Big freelance project with one other developer. "
                    descTwo="Live tracking, drawingpage, connection with ERP systems. My role was mostly frontend development. Build using React, Vite, Firebase, Material UI, Googlemaps API, .Net backend."
                    github="https://github.com/akoel/vdbroek-tracking"
                    react="React"
                    css="JavaScript"
                    mui="Material UI"
                />

                <Card
                    image={galactic}
                    title="Galactic Universe Webapp"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    descTwo="Build using React, React hooks, React router, State, Authentication, Axios, Css modules."
                    github="https://github.com/Kaspervdlaan/SpaceApp"
                    liveDemo="https://chimerical-bublanina-2208d7.netlify.app/"
                    react="React"
                    css="CSS"
                />

                <Card
                    image={bvb}
                    title="Bureau van Breukelen"
                    descOne="Website made for client. Bureau van Breukelen porfolio website."
                    descTwo="Using React, NPM packages, tailwind and some custom css"
                    github="https://github.com/Kaspervdlaan/Bureau-van-Breukelen"
                    liveDemo="https://melodious-mousse-49311c.netlify.app/"
                    react="React"
                    css="Tailwind"
                />


                <Card
                    image={portfolio}
                    title="Portfolio website"
                    descOne="Yes the one that you are on!"
                    descTwo="Made with the help of multiple NPM packages."
                    github="https://github.com/Kaspervdlaan/Portfoliov2"
                    react="React"
                    css="Tailwind"
                />

            </section>
        </main>
    );
}

export default Projects;