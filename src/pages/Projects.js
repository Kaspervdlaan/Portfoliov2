import React from 'react';
import Card from "../components/Card";
import galactic from "../assets/galactic.png";
import bvb from "../assets/bvb.png";

function Projects({page}) {
    return (
        <main id={page} className="md:min-h-[100vh] h-auto flex flex-col items-center text-white justify-center max-w-screen-3xl">


            <section className="flex justify-center flex-wrap h-fit gap-5 mx-20">
                <Card
                    image={galactic}
                    title="Galactic Universe Webapp"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    descTwo="Build using React, React hooks, React router, State, Authentication, Axios, Css modules."
                    github="https://github.com/Kaspervdlaan/SpaceApp"
                    liveDemo="https://chimerical-bublanina-2208d7.netlify.app/"
                    react="ReactJs"
                    css="CSS"
                />
                <Card
                    image={bvb}
                    title="Bureau van Breukelen"
                    descOne="Website made for client. Bureau van Breukelen porfolio website."
                    github="https://github.com/Kaspervdlaan/Bureau-van-Breukelen"
                    liveDemo="https://melodious-mousse-49311c.netlify.app/"
                    react="ReactJs"
                    css="Tailwind"
                />


                <Card
                    image={galactic}
                    title="Galactic Poopy"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    github=""
                    liveDemo=""
                    react="ReactJs"
                    css="Tailwind"
                />


            </section>
        </main>
    );
}

export default Projects;